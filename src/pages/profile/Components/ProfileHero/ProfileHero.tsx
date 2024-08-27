import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import axiosInstance from "@/pages/api/axiosInstance";
import { Oval } from "react-loader-spinner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormFields } from "../../../../../types/Types";
import { FileUploader } from "react-drag-drop-files";
import { Camera } from "lucide-react";

const fileTypes = ["JPG", "PNG", "GIF"];

const ProfileHero = () => {
  const [profilePic, setProfilePic] = useState("/assets/profile-pic.png");
  const [coverImage, setCoverImage] = useState("/assets/profile-seller.png");
  const [selectedProfilePic, setSelectedProfilePic] = useState<File | null>(
    null
  );
  const [selectedCoverImage, setSelectedCoverImage] = useState<File | null>(
    null
  );
  const [previewProfilePic, setPreviewProfilePic] = useState<string | null>(
    null
  );
  const [previewCoverImage, setPreviewCoverImage] = useState<string | null>(
    null
  );
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  useEffect(() => {
    axiosInstance
      .get("/api/user/profile")
      .then((response) => {
        const profileImage = response.data.data.profileImage;
        const coverImg = response.data.data.coverImage;
        if (profileImage) setProfilePic(profileImage);
        if (coverImg) setCoverImage(coverImg);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const handleProfilePicChange = (file: File) => {
    if (file) {
      setSelectedProfilePic(file);
      setPreviewProfilePic(URL.createObjectURL(file));
    }
  };

  const handleCoverImageChange = (file: File) => {
    if (file) {
      setSelectedCoverImage(file);
      setPreviewCoverImage(URL.createObjectURL(file));
    }
  };

  const onSubmit: SubmitHandler<FormFields> = async () => {
    if (selectedProfilePic || selectedCoverImage) {
      const formData = new FormData();
      if (selectedProfilePic) formData.append("profilePic", selectedProfilePic);
      if (selectedCoverImage) formData.append("coverImage", selectedCoverImage);

      try {
        const response = await axiosInstance.post(
          "/api/user/profile/image/update",
          formData
        );
        if (response.data.success) {
          if (selectedProfilePic)
            setProfilePic(response.data.data.profileImage);
          if (selectedCoverImage) setCoverImage(response.data.data.coverImage);
          setPreviewProfilePic(null);
          setPreviewCoverImage(null);
          setSelectedProfilePic(null);
          setSelectedCoverImage(null);
        } else {
          console.error("Image update failed");
        }
      } catch (error) {
        console.error("Error updating image:", error);
      }
    }
  };

  const handleCancelUpdate = () => {
    setPreviewProfilePic(null);
    setPreviewCoverImage(null);
    setSelectedProfilePic(null);
    setSelectedCoverImage(null);
  };

  return (
    <div>
      {pathname.includes("seller-profile") ? (
        <>
          <div
            className="bg-profile-seller relative"
            style={{
              backgroundImage: `url(${previewCoverImage || coverImage})`,
            }}
          >
            <div className="absolute right-10 bottom-10">
            <Camera
            className="text-white"
              onClick={() =>
                document.getElementById("coverImageInput")?.click()
              }
            />
            </div>
           
          </div>
          <Dialog>
            <DialogTrigger>
              <div className="-mt-[50px] ml-20">
                <Image
                  src={previewProfilePic || profilePic}
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="rounded-full h-[100px] w-[100px] border border-slate-400 object-cover object-center"
                />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Change Profile and Cover Images</DialogTitle>
                <DialogDescription className="py-10 flex flex-col space-y-5">
                  <div>
                    <label className="text-sm sora py-2">
                      Upload profile image
                    </label>
                    <FileUploader
                      handleChange={handleProfilePicChange}
                      name="profilePic"
                      types={fileTypes}
                    />
                  </div>
                  {(previewProfilePic || previewCoverImage) && (
                    <div className="mt-4">
                      {previewProfilePic && (
                        <Image
                          src={previewProfilePic}
                          alt="Preview Profile Picture"
                          width={100}
                          height={100}
                        />
                      )}
                      {previewCoverImage && (
                        <Image
                          src={previewCoverImage}
                          alt="Preview Cover Image"
                          width={100}
                          height={100}
                        />
                      )}
                      <div className="mt-4 flex space-x-4">
                        <button
                          onClick={handleSubmit(onSubmit)}
                          className="bg-[#ED459A] text-white px-4 py-2 rounded"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <Oval
                              visible={true}
                              height="40"
                              width="40"
                              color="#FFF"
                              ariaLabel="oval-loading"
                              wrapperStyle={{}}
                              wrapperClass=""
                            />
                          ) : (
                            "Update"
                          )}
                        </button>
                        <button
                          onClick={handleCancelUpdate}
                          className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <>
          <div
            className="bg-[#FF0084] w-full h-[40vh]"
            onClick={() => document.getElementById("coverImageInput")?.click()}
          ></div>
          <div className="-mt-[50px] ml-20 relative">
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={100}
              height={100}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileHero;

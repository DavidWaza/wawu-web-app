import { useState, ChangeEvent } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import { usePathname } from "next/navigation";

const UploadImage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  const handleUpload = () => {
    if (selectedImage) {
      console.log("uploading image", selectedImage);
      setSelectedImage(null);
    }
  };

  const pathname = usePathname();
  return (
    <>
      {pathname.includes("seller-profile") ? (
        <div className="border border-gray-400 rounded-md lg:w-[30%]">
          <div className="flex justify-end p-3">
            <MdDeleteOutline className="text-black" />
          </div>
          <div className="text-center">
            <div className="py-10">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="fileInput" // Connect this input to the label
              />
              <label htmlFor="fileInput">
                <Image
                  src={selectedImage ? URL.createObjectURL(selectedImage) : "/assets/photo.png"}
                  alt="Selected Image"
                  className="w-7 h-full m-auto"
                  width={500}
                  height={500}
                />
                <Text variant="small">Upload image</Text>
                <Text variant="small">500kb</Text>
              </label>
            </div>
          </div>

          {selectedImage && (
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt="selected h-full w-full"
            />
          )}
        </div>
      ) : null}
    </>
  );
};
export default UploadImage;

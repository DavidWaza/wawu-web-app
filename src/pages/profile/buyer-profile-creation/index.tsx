import { useState, useEffect } from "react";
import LayoutProfile from "../layout";
import Button from "@/components/ui/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import ProfileHero from "../Components/ProfileHero/ProfileHero";
import InputField from "@/components/TextField/InputField";
import { FormFields } from "../../../../types/Types";
import TextAreaField from "@/components/TextField/TextArea";
import SelectField from "@/components/TextField/SelectField";
import UploadImage from "../Components/UploadImage/UploadImage";
import axiosInstance from "@/pages/api/axiosInstance";
import {
  Select as UiSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  fetch_services,
  fetch_user_profile,
  post_user_portfolio,
} from "@/pages/api/endpoints";
import { toast } from "sonner";
import Select, { MultiValue } from "react-select";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface SkillOption {
  value: string; // UUID of the skill
  label: string; // Name of the skill
}

const BuyerProfileCreation = () => {
  const [firstName, setFirstName] = useState<FormFields["firstName"]>("");
  const [lastName, setLastName] = useState<FormFields["lastName"]>("");
  const [email, setEmail] = useState<FormFields["email"]>("");
  const [phoneNumber, setPhoneNumber] = useState<FormFields["phoneNumber"]>("");
  const [about, setAbout] = useState<FormFields["about"]>("");
  const [role, setRole] = useState<number>(2);
  const [twitter, setTwitter] = useState<FormFields["twitter"]>("");
  const [facebook, setFacebook] = useState<FormFields["facebook"]>("");
  const [linkedIn, setLinkedIn] = useState<FormFields["linkedIn"]>("");
  const [instagram, setInstagram] = useState<FormFields["instagram"]>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [userProfileName, setUserProfileName] = useState<string>("");
  const [userProfileLastName, setUserProfileLastName] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [phone, setPhone] = useState("");
  const [meansOfIdentification, setMeansOfIdentification] =
    useState<FormFields["meansOfIdentification"]>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const router = useRouter();

  const onSubmit: SubmitHandler<FormFields> = async () => {
    const formData = new FormData();

    // Append form fields
    if (firstName) formData.append("firstName", firstName);
    if (lastName) formData.append("lastName", lastName);
    if (email) formData.append("email", email);
    if (phoneNumber) formData.append("phoneNumber", phoneNumber);
    formData.append("role", role.toString());
    if (about) formData.append("about", about);
    if (twitter) formData.append("twitter", twitter);
    if (facebook) formData.append("facebook", facebook);
    if (linkedIn) formData.append("linkedIn", linkedIn);
    if (instagram) formData.append("instagram", instagram);

    // Append the selected image, if any
    if (selectedImage) {
      formData.append("image", selectedImage);
    }
    setLoading(false);
    try {
      const response = await axiosInstance.post(post_user_portfolio, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      toast.success(response.data.message);
      setTimeout(() => {
        router.push("/sellers");
      }, 3000);
      setLoading(true);
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  const handleUpload = (file: File | null) => {
    setSelectedImage(file);
  };

  // fetch profile
  const fetchUserProfile = async () => {
    try {
      const response = await axiosInstance.get(fetch_user_profile);
      setUserProfileName(response.data.data.firstName);
      setUserProfileLastName(response.data.data.lastName);
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <LayoutProfile>
      {loading && <LoadingScreen />}
      <>
        {/* <ProfileHero /> */}
        <div className="grid lg:grid-cols-2">
          <div className="py-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid lg:grid-cols-2 items-center gap-5">
                {currentStep === 1 && (
                  <>
                    <InputField
                      label="First Name"
                      name="firstName"
                      placeholder={userProfileName}
                      value={userProfileName}
                      register={register}
                      errors={errors}
                      setValue={(value) => setFirstName(value)}
                      className="!text-[#9CA3B7]"
                      disabled
                    />
                    <InputField
                      label="Last Name"
                      name="lastName"
                      placeholder={userProfileLastName}
                      value={userProfileLastName}
                      register={register}
                      errors={errors}
                      setValue={(value) => setLastName(value)}
                      className="!text-[#9CA3B7]"
                      disabled
                    />
                    {/* EMAIL AND PASSWORD */}
                    <InputField
                      label="Email"
                      name="email"
                      placeholder="Support@wawuafrica.com"
                      type="email"
                      value={email}
                      register={register}
                      errors={errors}
                      setValue={(value) => setEmail(value)}
                    />
                    <div>
                      <label className="text-black block text-sm sora py-2">
                        Phone Number
                      </label>
                      <PhoneInput
                        {...register("phoneNumber")}
                        country={"ng"}
                        value={phone}
                        onChange={(phone) => setPhoneNumber(phone)}
                        inputStyle={{
                          width: "100%",
                          height: "41px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                        }}
                      />
                    </div>

                    <TextAreaField
                      label="About"
                      name="about"
                      placeholder="Type here"
                      value={about}
                      register={register}
                      errors={errors}
                      setValue={(value) => setAbout(value)}
                    />
                  </>
                )}
              </div>
              <div className="">
                <p className="text-lg sora text-black my-10 font-medium">
                  Valid Means of Identification
                </p>
                <UiSelect
                  {...register("meansOfIdentification")}
                  name="courseOfStudy"
                  value={meansOfIdentification}
                  onValueChange={(value: string) =>
                    setMeansOfIdentification(value)
                  }
                >
                  <SelectTrigger className="bg-white hover:bg-white text-[#414457CC] whitespace-nowrap">
                    <SelectValue placeholder="Means of Identification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nin">
                      National Identity Number (NIN)
                    </SelectItem>
                    <SelectItem value="ip">International Passport</SelectItem>
                    <SelectItem value="dl">Driver&apos;s License</SelectItem>
                    <SelectItem value="vc">Voter&apos;s Card</SelectItem>
                  </SelectContent>
                </UiSelect>
                <div className="items-center w-full">
                  <div className="my-5">
                    <UploadImage
                      handleUpload={handleUpload}
                      uploadEndpoint="/api/upload"
                      maxFileSize={500 * 1024} // 500KB
                      acceptedFileTypes="image/*"
                    />
                  </div>
                </div>
              </div>

              <>
                <p className="text-lg sora text-black my-10 font-medium">
                  Social Media handles
                </p>
                <div className="space-y-5">
                  <InputField
                    label="Twitter"
                    name="twitter"
                    placeholder="https://x.com/wawu_africa"
                    value={twitter}
                    register={register}
                    errors={errors}
                    setValue={(value) => setTwitter(value)}
                  />
                  <InputField
                    label="Facebook"
                    name="facebook"
                    placeholder="https://facebook.com/wawu-africa"
                    value={facebook}
                    register={register}
                    errors={errors}
                    setValue={(value) => setFacebook(value)}
                  />
                  <InputField
                    label="LinkedIn"
                    name="linkedIn"
                    placeholder="www.linkedin.com/in/wawu-africa"
                    value={linkedIn}
                    register={register}
                    errors={errors}
                    setValue={(value) => setLinkedIn(value)}
                  />
                  <InputField
                    label="Instagram"
                    name="instagram"
                    placeholder="https://www.instagram.com/wawu-africa"
                    value={instagram}
                    register={register}
                    errors={errors}
                    setValue={(value) => setInstagram(value)}
                  />
                </div>
              </>
              <div className="py-5">
                <button
                  type="submit"
                  className="p-2 text-nowrap bg-[#E54D9A] py-2 px-10 rounded-xl text-white font-semibold sora"
                  disabled={isSubmitting}
                >
                  {!isSubmitting ? "Submit form" : "Submitting..."}
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </LayoutProfile>
  );
};

export default BuyerProfileCreation;

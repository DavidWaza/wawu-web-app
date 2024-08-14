import { useState, ChangeEvent } from "react";
import LayoutProfile from "../layout";
import Button from "@/components/ui/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Text } from "@/components/ui/Typography/Typography";
import ProfileHero from "../Components/ProfileHero/ProfileHero";
import InputField from "@/components/TextField/InputField";
import { FormFields } from "../../../../types/Types";
import TextAreaField from "@/components/TextField/TextArea";
import SelectField from "@/components/TextField/SelectField";
import UploadImage from "../Components/UploadImage/UploadImage";
import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_user_portfolio } from "@/pages/api/endpoints";
import { toast } from "sonner";

const SellerProfileCreation = () => {
  const [firstName, setFirstName] = useState<FormFields["firstName"]>("");
  const [lastName, setLastName] = useState<FormFields["lastName"]>("");
  const [email, setEmail] = useState<FormFields["email"]>("");
  const [password, setPassword] = useState<FormFields["password"]>("");
  const [phoneNumber, setPhoneNumber] = useState<FormFields["phoneNumber"]>("");

  const [about, setAbout] = useState<FormFields["about"]>("");
  const [skills, setSkills] = useState<FormFields["skills"]>("");
  const [preferredLanguage, setPreferredLanguage] =
    useState<FormFields["preferredLanguage"]>("");
  const [certification, setCertification] =
    useState<FormFields["certification"]>("");
  const [institution, setInstitution] = useState<FormFields["institution"]>("");
  const [courseOfStudy, setCourseOfStudy] =
    useState<FormFields["courseOfStudy"]>("");
  const [graduationDate, setGraduationDate] =
    useState<FormFields["graduationDate"]>("");
  const [name, setName] = useState<FormFields["name"]>("");
  const [endDate, setEndDate] = useState<FormFields["endDate"]>(null);
  const [country, setCountry] = useState<FormFields["country"]>("");
  const [state, setState] = useState<FormFields["state"]>("");
  const [twitter, setTwitter] = useState<FormFields["twitter"]>("");
  const [facebook, setFacebook] = useState<FormFields["facebook"]>("");
  const [linkedIn, setLinkedIn] = useState<FormFields["linkedIn"]>("");
  const [instagram, setInstagram] = useState<FormFields["instagram"]>("");

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const formData = new FormData();

    // Append form fields
    if (firstName) formData.append("firstName", firstName);
    if (lastName) formData.append("lastName", lastName);
    if (email) formData.append("email", email);
    if (password) formData.append("password", password);
    if (phoneNumber) formData.append("phoneNumber", phoneNumber);

    if (about) formData.append("about", about);
    if (skills) formData.append("skills", skills);
    if (preferredLanguage)
      formData.append("preferredLanguage", preferredLanguage);
    if (certification) formData.append("certification", certification);
    if (institution) formData.append("institution", institution);
    if (courseOfStudy) formData.append("courseOfStudy", courseOfStudy);
    if (graduationDate) formData.append("graduationDate", graduationDate);
    if (name) formData.append("name", name);
    if (endDate) formData.append("endDate", endDate?.toString() || "");
    if (country) formData.append("country", country);
    if (state) formData.append("state", state);
    if (twitter) formData.append("twitter", twitter);
    if (facebook) formData.append("facebook", facebook);
    if (linkedIn) formData.append("linkedIn", linkedIn);
    if (instagram) formData.append("instagram", instagram);

    // Append the selected image, if any
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      const response = await axiosInstance.post(
        fetch_user_portfolio,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      toast.success(response.data.message);
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  const handleUpload = (file: File | null) => {
    setSelectedImage(file);
  };

  return (
    <LayoutProfile>
      <>
        <ProfileHero />
        <div className="grid lg:grid-cols-2">
          <div className="py-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid lg:grid-cols-2 items-center gap-5 lg:gap-10">
                <InputField
                  label="First Name"
                  name="firstName"
                  placeholder="David"
                  value={firstName}
                  register={register}
                  errors={errors}
                  setValue={(value) => setFirstName(value)}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  placeholder="Waza"
                  value={lastName}
                  register={register}
                  errors={errors}
                  setValue={(value) => setLastName(value)}
                />
                {/* EMAIL AND PASSWORD */}
                <InputField
                  label="Email"
                  name="email"
                  placeholder="davidwaza@gmail.com"
                  type="email"
                  value={email}
                  register={register}
                  errors={errors}
                  setValue={(value) => setEmail(value)}
                />
                <InputField
                  label="Password"
                  name="password"
                  placeholder="************"
                  type="password"
                  value={password}
                  register={register}
                  errors={errors}
                  setValue={(value) => setPassword(value)}
                />
              </div>

              <InputField
                label="Phone number"
                name="phoneNumber"
                placeholder="090112233345"
                type="number"
                value={phoneNumber}
                register={register}
                errors={errors}
                setValue={(value) => setPhoneNumber(value)}
              />
              <TextAreaField
                label="About"
                name="about"
                placeholder="Type here"
                value={about}
                register={register}
                errors={errors}
                setValue={(value) => setAbout(value)}
              />
              <TextAreaField
                label="Skills"
                name="skills"
                placeholder="Type here"
                value={skills}
                register={register}
                errors={errors}
                setValue={(value) => setSkills(value)}
              />
              <SelectField
                label="Preferred Language"
                name="preferredLanguage"
                register={register}
                errors={errors}
                value={preferredLanguage}
                setValue={(value) => setPreferredLanguage(value)}
                options={[
                  { value: "English", label: "English" },
                  { value: "French", label: "French" },
                  { value: "Spanish", label: "Spanish" },
                  { value: "Latin", label: "Latin" },
                ]}
              />
              <div className="flex gap-1 items-center my-3">
                <Text variant="small">Education</Text>
                <div className="bg-[#A2A2A2] h-[1px] w-full"></div>
              </div>
              <SelectField
                label="Certification"
                name="certification"
                register={register}
                errors={errors}
                value={certification}
                setValue={(value) => setCertification(value)}
                options={[
                  { value: "BSc", label: "BSc" },
                  { value: "HND", label: "HND" },
                  { value: "OND", label: "OND" },
                  { value: "Masters", label: "Masters" },
                  { value: "PHD", label: "PHD" },
                ]}
              />
              <SelectField
                label="Institution"
                name="institution"
                register={register}
                errors={errors}
                value={institution}
                setValue={(value) => setInstitution(value)}
                options={[
                  { value: "Salem University", label: "Salem University" },
                  {
                    value: "Nasarawa State University",
                    label: "Nasarawa State University",
                  },
                  {
                    value: "Covenant University",
                    label: "Covenant University",
                  },
                ]}
              />
              <SelectField
                label="Course of Study"
                name="courseOfStudy"
                register={register}
                errors={errors}
                value={courseOfStudy}
                setValue={(value) => setCourseOfStudy(value)}
                options={[
                  { value: "Computer Science", label: "Computer Science" },
                  {
                    value: "Information Technology",
                    label: "Information Technology",
                  },
                  {
                    value: "Artificial Intelligence",
                    label: "Artificial Intelligence",
                  },
                ]}
              />
              <InputField
                label="Graduation Date"
                name="graduationDate"
                value={graduationDate}
                type="date"
                placeholder="Date"
                register={register}
                errors={errors}
                setValue={(value) => setGraduationDate(value)}
              />
              <div className="space-y-5 my-5">
                <div className="flex gap-1 items-center">
                  <Text variant="small">Experience</Text>
                  <div className="bg-[#A2A2A2] h-[1px] w-full"></div>
                </div>
                <InputField
                  label="Name"
                  name="name"
                  placeholder="Company name"
                  value={name}
                  register={register}
                  errors={errors}
                  setValue={(value) => setName(value)}
                />
                <InputField
                  label="End Date"
                  name="endDate"
                  value={endDate || ""} // Convert endDate to string for the input field
                  type="date"
                  placeholder="Date"
                  register={register}
                  errors={errors}
                  setValue={(value) => setEndDate(value)}
                />
                <InputField
                  label="Country"
                  name="country"
                  placeholder="Country"
                  value={country}
                  register={register}
                  errors={errors}
                  setValue={(value) => setCountry(value)}
                />
                <InputField
                  label="State"
                  name="state"
                  placeholder="State"
                  value={state}
                  register={register}
                  errors={errors}
                  setValue={(value) => setState(value)}
                />
              </div>
              <div className="space-y-5">
                <div className="flex gap-1 items-center">
                  <Text variant="small">Social Media Handles</Text>
                  <div className="bg-[#A2A2A2] h-[1px] w-full"></div>
                </div>
                <InputField
                  label="Twitter"
                  name="twitter"
                  placeholder="Twitter"
                  value={twitter}
                  register={register}
                  errors={errors}
                  setValue={(value) => setTwitter(value)}
                />
                <InputField
                  label="Facebook"
                  name="facebook"
                  placeholder="Facebook"
                  value={facebook}
                  register={register}
                  errors={errors}
                  setValue={(value) => setFacebook(value)}
                />
                <InputField
                  label="LinkedIn"
                  name="linkedIn"
                  placeholder="LinkedIn"
                  value={linkedIn}
                  register={register}
                  errors={errors}
                  setValue={(value) => setLinkedIn(value)}
                />
                <InputField
                  label="Instagram"
                  name="instagram"
                  placeholder="Instagram"
                  value={instagram}
                  register={register}
                  errors={errors}
                  setValue={(value) => setInstagram(value)}
                />
              </div>
              <div className="my-5">
                <UploadImage
                  handleUpload={handleUpload}
                  uploadEndpoint="/api/upload"
                  maxFileSize={500 * 1024} // 500KB
                  acceptedFileTypes="image/*"
                />
              </div>

              <div className="my-10">
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
          <div>
            <div className="flex justify-center md:justify-end my-10">
              <Button
                variant="primary"
                size="small"
                className="p-2 text-nowrap"
              >
                Become a buyer
              </Button>
            </div>
          </div>
        </div>
      </>
    </LayoutProfile>
  );
};

export default SellerProfileCreation;

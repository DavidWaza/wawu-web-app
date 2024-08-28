import {
  useState,
  useEffect,
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
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
import axios from "axios";

interface SkillOption {
  value: string; // UUID of the skill
  label: string; // Name of the skill
}

const SellerProfileCreation = () => {
  const [firstName, setFirstName] = useState<FormFields["firstName"]>("");
  const [lastName, setLastName] = useState<FormFields["lastName"]>("");
  const [email, setEmail] = useState<FormFields["email"]>("");
  const [password, setPassword] = useState<FormFields["password"]>("");
  const [phoneNumber, setPhoneNumber] = useState<FormFields["phoneNumber"]>("");
  const [about, setAbout] = useState<FormFields["about"]>("");
  const [role, setRole] = useState<number>(2);
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
  const [selectedSkills, setSelectedSkills] = useState<SkillOption[]>([]);
  const [skillOptions, setSkillOptions] = useState<SkillOption[]>([]);
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
    fetchCategories();
    fetchUserProfile();
    fetchCountries();
  }, []);

  const router = useRouter();

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get(fetch_services);
      const skills = response.data.data.map((skill: any) => ({
        value: skill.uuid, // UUID of the skill
        label: skill.name, // Name of the skill
      }));
      setSkillOptions(skills);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        `https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code`
      );
      console.log("count", response.data.countries);
      setCountry(response.data.countries);
    } catch (err) {
      console.log(err);
    }
  };
  const onSubmit: SubmitHandler<FormFields> = async () => {
    const formData = new FormData();

    // Append form fields
    if (firstName) formData.append("firstName", firstName);
    if (lastName) formData.append("lastName", lastName);
    if (email) formData.append("email", email);
    if (password) formData.append("password", password);
    if (phoneNumber) formData.append("phoneNumber", phoneNumber);
    formData.append("role", role.toString());
    if (about) formData.append("about", about);
    if (selectedSkills.length > 0) {
      const skillsArray = selectedSkills.map((skill) => skill.value);
      skillsArray.forEach((skill) => formData.append("skills[]", skill));
    }
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

  const handleSkillsChange = (selectedOptions: MultiValue<SkillOption>) => {
    setSelectedSkills(selectedOptions as SkillOption[]);
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
        <ProfileHero />
        <div className="grid lg:grid-cols-2">
          <div className="py-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              {currentStep === 1 ? (
                <p className="text-lg font-medium">Personal Data</p>
              ) : currentStep === 2 ? (
                <p className="text-lg font-medium">Educational Data</p>
              ) : currentStep === 3 ? (
                <p className="text-lg font-medium">Experience</p>
              ) : currentStep === 4 ? (
                <p className="text-lg font-medium">
                  Valid Means of Identification
                </p>
              ) : currentStep === 5 ? (
                <p className="text-lg font-medium">Social Media</p>
              ) : null}
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

                    <div className="pt-5">
                      <label className="text-sm text-[#5E5989] py-3 sora">
                        Role
                      </label>
                      <UiSelect
                        {...register("role")}
                        value={role.toString()}
                        name="role"
                        onValueChange={(value: string) =>
                          setRole(Number(value))
                        }
                      >
                        <SelectTrigger className="bg-white hover:bg-white text-[#414457CC] whitespace-nowrap">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1" disabled>
                            Buyer
                          </SelectItem>
                          <SelectItem value="2">Seller</SelectItem>
                        </SelectContent>
                      </UiSelect>
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
                    <div>
                      <div>
                        <label className="py-2 text-sm sora">Skills</label>
                      </div>
                      <Select
                        isMulti
                        name="skills"
                        options={skillOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        value={selectedSkills}
                        onChange={handleSkillsChange}
                        placeholder="Select skills"
                      />
                    </div>
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
                  </>
                )}
              </div>
              {currentStep === 2 && (
                <>
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
                </>
              )}
              {currentStep === 3 && (
                <>
                  <div className="space-y-5 my-5">
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
                      value={endDate || ""}
                      type="date"
                      placeholder="Date"
                      register={register}
                      errors={errors}
                      setValue={(value) => setEndDate(value)}
                    />
                    <div>
                      <label className="text-black block text-sm sora py-2">
                        Country
                      </label>
                      <UiSelect
                        {...register("country")}
                        name="country"
                        value={country}
                        onValueChange={(value: string) => setCountry(value)}
                      >
                        <SelectTrigger className="bg-white hover:bg-white text-[#414457CC] whitespace-nowrap">
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.isArray(country) &&
                            country.map(
                              (
                                nation: { code: string; name: string },
                                index: Key
                              ) => (
                                <SelectItem value={nation.code} key={index}>
                                  {nation.name}
                                </SelectItem>
                              )
                            )}
                        </SelectContent>
                      </UiSelect>
                    </div>
                  </div>
                </>
              )}
              {currentStep === 4 && (
                <>
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
                      <SelectItem value="ip">International Passport</SelectItem>
                      <SelectItem value="dl">Driver&apos;s License</SelectItem>
                      <SelectItem value="vc">Voter&apos;s Card</SelectItem>
                    </SelectContent>
                  </UiSelect>
                  <div className="my-5">
                    <UploadImage
                      handleUpload={handleUpload}
                      uploadEndpoint="/api/upload"
                      maxFileSize={500 * 1024} // 500KB
                      acceptedFileTypes="image/*"
                    />
                  </div>
                  <InputField
                    label="State"
                    name="twitter"
                    placeholder="State"
                    value={twitter}
                    register={register}
                    errors={errors}
                    setValue={(value) => setTwitter(value)}
                  />
                </>
              )}
              {currentStep === 5 && (
                <>
                  <div className="space-y-5">
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
                </>
              )}
              <div className="py-10 flex items-center gap-10">
                <div>
                  {currentStep > 1 && (
                    <button
                      className="bg-[#ecf0f1] rounded-lg text-black text-[16px] py-2 px-5"
                      onClick={handlePreviousStep}
                      type="button"
                    >
                      Prev {currentStep - 1}/5
                    </button>
                  )}
                </div>
                <div>
                  {currentStep < 5 ? (
                    <button
                      className="bg-[#08A969] rounded-lg text-white text-[16px] py-2 px-5"
                      onClick={handleNextStep}
                      type="button"
                    >
                      Next {currentStep + 1}/5
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="p-2 text-nowrap bg-[#E54D9A] py-2 px-10 rounded-xl text-white font-semibold sora"
                      disabled={isSubmitting}
                    >
                      {!isSubmitting ? "Submit form" : "Submitting..."}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    </LayoutProfile>
  );
};

export default SellerProfileCreation;

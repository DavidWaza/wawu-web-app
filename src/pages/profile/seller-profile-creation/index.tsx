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

const SellerProfileCreation = () => {
  const [firstName, setFirstName] = useState<FormFields["firstName"]>("");
  const [lastName, setLastName] = useState<FormFields["lastName"]>("");
  const [email, setEmail] = useState<FormFields["email"]>("");
  const [password, setPassword] = useState<FormFields["password"]>("");
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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <LayoutProfile>
      <div className="-mt-10">
        <ProfileHero />
        <div className="flex  justify-center md:justify-end my-10">
          <Button variant="primary" size="large" className="p-2">
            Become a seller
          </Button>
        </div>
        <div className="py-12 grid lg:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 items-center gap-10">
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
            <TextAreaField
              label="About"
              name="about"
              placeholder="Type here"
              value={about}
              register={register}
              errors={errors}
              setValue={(value) => setAbout(value)}
            />
            <div className="my-6">
              <TextAreaField
                label="Skills"
                name="skills"
                placeholder="Type here"
                value={skills}
                register={register}
                errors={errors}
                setValue={(value) => setSkills(value)}
              />
              <div>
                <SelectField
                  label="Preferred Language"
                  name="preferredLanguage"
                  register={register}
                  errors={errors}
                  value={preferredLanguage}
                  setValue={(value) => setPreferredLanguage(value)}
                  options={[
                    { value: "true", label: "English" },
                    { value: "false", label: "French" },
                    { value: "false", label: "Spanish" },
                    { value: "false", label: "Latin" },
                  ]}
                />
              </div>
            </div>
            <div>
              <div className="flex gap-1 items-center">
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
                  { value: "true", label: "BSc" },
                  { value: "false", label: "HND" },
                  { value: "false", label: "OND" },
                  { value: "false", label: "Masters" },
                  { value: "false", label: "PHD" },
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
                  { value: "true", label: "Salem University" },
                  { value: "false", label: "Nasarawa State University" },
                  { value: "false", label: "Covenant University" },
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
                  { value: "true", label: "Computer Science" },
                  { value: "false", label: "Information Technology" },
                  { value: "false", label: "Artificial Intelligence" },
                ]}
              />
              <InputField
                label="Graduation Date"
                name="graduationDate"
                value={graduationDate}
                register={register}
                errors={errors}
                setValue={(value) => setGraduationDate(value)}
              />
              <Button variant="tertiary" className="!my-5">
                Add
              </Button>
              <div className="mt-10">
                <div className="flex gap-1 items-center">
                  <Text variant="small" className="text-nowrap">
                    Professional Certificate
                  </Text>
                  <div className="bg-[#A2A2A2] h-[1px] w-full"></div>
                </div>
                <SelectField
                  label="Name"
                  name="name"
                  register={register}
                  errors={errors}
                  value={name}
                  setValue={(value) => setName(value)}
                  options={[
                    { value: "true", label: "English" },
                    { value: "false", label: "French" },
                    { value: "false", label: "Spanish" },
                    { value: "false", label: "Latin" },
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
                    { value: "true", label: "Salem University" },
                    { value: "false", label: "Nasarawa State University" },
                    { value: "false", label: "Covenant University" },
                  ]}
                />
                <InputField
                  label="End Date"
                  name="endDate"
                  value={endDate}
                  register={register}
                  errors={errors}
                  setValue={(value) => setEndDate(value)}
                />
                <UploadImage />
                <Button variant="tertiary" className="!my-5">
                  Add
                </Button>
              </div>
              <div className="my-10">
                <div className="flex gap-1 items-center">
                  <Text variant="small" className="text-nowrap">
                    Means of identification
                  </Text>
                  <div className="bg-[#A2A2A2] h-[1px] w-full"></div>
                </div>
                <UploadImage />
                <SelectField
                  label="Country"
                  name="country"
                  register={register}
                  errors={errors}
                  value={country}
                  setValue={(value) => setCountry(value)}
                  options={[
                    { value: "true", label: "Nigeria" },
                    { value: "false", label: "Ghana" },
                    { value: "false", label: "London" },
                    { value: "false", label: "Namibia" },
                  ]}
                />
                <SelectField
                  label="State(This information will be used for analytical purposes only)"
                  name="state"
                  register={register}
                  errors={errors}
                  value={state}
                  setValue={(value) => setState(value)}
                  options={[
                    { value: "true", label: "Akwa Ibom" },
                    { value: "false", label: "Benin" },
                    { value: "false", label: "Abuja" },
                    { value: "false", label: "Benue" },
                  ]}
                />
                <Button variant="tertiary" className="!my-5">
                  Verify
                </Button>
              </div>
            </div>
            <div className="my-10 space-y-7">
              <div className="flex gap-1 items-center my-10">
                <Text variant="small" className="text-nowrap">
                  Social Handles
                </Text>
                <div className="bg-[#A2A2A2] h-[1px] w-full"></div>
              </div>
              <InputField
                label="Twitter"
                name="twitter"
                placeholder="Twitter Handle"
                value={twitter}
                register={register}
                errors={errors}
                setValue={(value) => setTwitter(value)}
              />
              <InputField
                label="LinkedIn"
                name="linkedIn"
                placeholder="LinkedIn Username"
                value={linkedIn}
                register={register}
                errors={errors}
                setValue={(value) => setLinkedIn(value)}
              />
              <InputField
                label="Facebook"
                name="facebook"
                placeholder="Facebook Handle"
                value={facebook}
                register={register}
                errors={errors}
                setValue={(value) => setFacebook(value)}
              />
              <InputField
                label="Instagram"
                name="instagram"
                placeholder="Instagram Handle"
                value={instagram}
                register={register}
                errors={errors}
                setValue={(value) => setInstagram(value)}
              />
            </div>
            <button
              type="submit"
              className="py-2 bg-[#ED459A] px-10 w-1/2 m-auto rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </LayoutProfile>
  );
};
export default SellerProfileCreation;

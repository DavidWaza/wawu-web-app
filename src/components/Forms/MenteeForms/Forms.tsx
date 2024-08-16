import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Heading, Text } from "../../ui/Typography/Typography";
import Link from "next/link";
import axiosInstance from "@/pages/api/axiosInstance";
import { mentee_url } from "@/pages/api/endpoints";
import { FormFields } from "../../../../types/Types";
import InputField from "@/components/TextField/InputField";
import TextAreaField from "@/components/TextField/TextArea";
import SelectField from "@/components/TextField/SelectField";
import {
  convertFileToBase64,
  isValidFileSize,
  isValidImageType,
} from "../../../../utilities/imageUtils";
import { toast } from "sonner";

const MenteeForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const [salutation, setSalutation] = useState<FormFields["salutation"]>("");
  const [firstName, setFirstName] = useState<FormFields["firstName"]>("");
  const [lastName, setLastName] = useState<FormFields["lastName"]>("");
  const [email, setEmail] = useState<FormFields["email"]>("");
  const [address, setAddress] = useState<FormFields["address"]>("");
  const [phoneNumber, setPhoneNumber] = useState<FormFields["phoneNumber"]>("");
  const [major, setMajor] = useState<FormFields["major"]>("");
  const [specialization, setSpecialization] =
    useState<FormFields["specialization"]>("");
  const [bestContactType, setBestContactType] =
    useState<FormFields["bestContactType"]>("");
  const [reasonForApplication, setReasonForApplication] =
    useState<FormFields["reasonForApplication"]>("");
  const [challenges, setChallenges] = useState<FormFields["challenges"]>("");
  const [helpToRender, setHelpToRender] =
    useState<FormFields["helpToRender"]>("");
  const [idealMentor, setIdealMentor] = useState<FormFields["idealMentor"]>("");
  const [mentorExperienceGain, setMentorExperienceGain] =
    useState<FormFields["mentorExperienceGain"]>("");
  const [interests, setInterests] = useState<FormFields["interests"]>("");
  const [additionalInfo, setAdditionalInfo] =
    useState<FormFields["additionalInfo"]>("");
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    if (data.file && data.file.length > 0) {
      const signature = data.file[0];
      if (!isValidImageType(signature) || !isValidFileSize(signature)) {
        setError("Invalid image type or size.");
        return;
      }

      try {
        const base64Signature = await convertFileToBase64(signature);
        const response = await axiosInstance.post(mentee_url, {
          ...data,
          signature: {
            fileName: signature.name,
            file: base64Signature,
          },
        });
        toast.success(response.data.message);
        if (response.data.success) {
          await axiosInstance.post("/api/send-email", {
            email: data.email,
            subject: "Form Submission Successful",
            message: `Dear ${data.firstName},\n\nThank you for your submission. We have received your details and will get back to you shortly.`,
            formData: data,
          });
        } else {
          null;
        }
      } catch (err: any) {
        // toast.error(err);
        console.error(err);
      }
    } else {
      setError("Please upload a signature image.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block">
      <div className="py-10">
        <div className="py-5">
          <label className="text-black block text-sm">Salutation</label>
          <select
            {...register("salutation")}
            // onChange={handleChange}
            onChange={(e) => setSalutation(e.target.value)}
            className="py-2 px-2 text-black border border-1 rounded-md w-full"
          >
            <option>Mr</option>
            <option>Mrs</option>
            <option>Mister</option>
          </select>
          {errors.salutation && (
            <Text variant="small" className="text-red-600">
              {errors.salutation.message}
            </Text>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:gap-10 gap-5">
          {/* FIRST NAME */}
          <InputField
            label="First Name"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            register={register}
            errors={errors}
            setValue={(value) => setFirstName(value)}
          />

          {/* LAST NAME */}
          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            register={register}
            errors={errors}
            setValue={(value) => setLastName(value)}
          />

          {/* EMAIL */}
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            value={email}
            register={register}
            errors={errors}
            setValue={(value) => setEmail(value)}
          />

          {/* PHONE NUMBER*/}
          <InputField
            label="Contact Number"
            name="phoneNumber"
            placeholder="0901112233345"
            value={phoneNumber}
            register={register}
            errors={errors}
            setValue={(value) => setPhoneNumber(value)}
          />

          {/* CONTACT ADDRESS */}
          <InputField
            label="Contact Address"
            name="address"
            placeholder="Type here"
            value={address}
            register={register}
            errors={errors}
            setValue={(value) => setAddress(value)}
          />

          {/* MAJOR */}
          <InputField
            label="Major"
            name="major"
            placeholder="What do you do?"
            value={major}
            register={register}
            errors={errors}
            setValue={(value) => setMajor(value)}
          />
        </div>

        {/* SPECIALIZATION*/}
        <InputField
          label="Specialization"
          name="specialization"
          placeholder="What do you do?"
          value={specialization}
          register={register}
          errors={errors}
          setValue={(value) => setSpecialization(value)}
        />

        {/* CONTACT TYPE */}
        <InputField
          label="Contact Type"
          name="bestContactType"
          type="email"
          placeholder="What do you do?"
          value={bestContactType}
          register={register}
          errors={errors}
          setValue={(value) => setBestContactType(value)}
        />

        {/* REASON FOR APPLICATION */}
        <TextAreaField
          label="Reason for application"
          name="reasonForApplication"
          placeholder="Type here"
          value={reasonForApplication}
          register={register}
          errors={errors}
          setValue={(value) => setReasonForApplication(value)}
        />

        {/* COMMITMENT */}
        <TextAreaField
          label="Help to render"
          name="helpToRender"
          placeholder="Type here"
          value={helpToRender}
          register={register}
          errors={errors}
          setValue={(value) => setHelpToRender(value)}
        />

        {/* REASON FOR APPLICATION */}
        <TextAreaField
          label="What is your ideal Mentor"
          name="idealMentor"
          placeholder="Type here"
          value={idealMentor}
          register={register}
          errors={errors}
          setValue={(value) => setIdealMentor(value)}
        />

        {/* CHALLENGES */}
        <TextAreaField
          label="*How will you demonstrate your commitment to support your assigned mentee in achieving their short- and/or long-term goals?"
          name="challenges"
          placeholder="Type here"
          value={challenges}
          register={register}
          errors={errors}
          setValue={(value) => setChallenges(value)}
        />

        {/* MENTOR EXPERIENCE GAIN */}
        <SelectField
          label="What is your mentor experience gain?"
          name="mentorExperienceGain"
          register={register}
          errors={errors}
          value={mentorExperienceGain}
          setValue={(value) => setMentorExperienceGain(value)}
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />

        {/* INTERESTS */}
        <TextAreaField
          label="What are your interests"
          name="interests"
          placeholder="Type here"
          value={interests}
          register={register}
          errors={errors}
          setValue={(value) => setInterests(value)}
        />

        {/* ADDITIONAL INFO */}
        <TextAreaField
          label="Any other interest"
          name="additionalInfo"
          placeholder="Type here"
          value={additionalInfo}
          register={register}
          errors={errors}
          setValue={(value) => setAdditionalInfo(value)}
        />
        <div className="my-5">
          <Heading
            variant="small"
            fontColor="secondary"
            className="text-underline "
          >
            Applicant Declaration
          </Heading>
          <div className="text-black">
            The information on this form will be used by the mentoring matching
            group. By signing this agreement, I
            <label className="text-black block">Signature Upload</label>
            <input
              {...register("file")}
              type="file"
              accept="image/*"
              className="py-2 px-4 text-black border border-1 rounded-md w-full"
            />
            {error && (
              <Text variant="small" className="text-red-600">
                {error}
              </Text>
            )}
            will abide by the guidelines of the mentorship programme, adhere to
            the mentoring scheme, actively participate in the mentoring process
            and contribute to the evaluation of the programme.
          </div>
          <div className="mt-8 flex gap-4">
            <input type="checkbox" />
            <p className="text-sm text-black">
              By continuing you agree to our{" "}
              <span className="text-[#ED459A]">
                <Link href={"#"}>terms of use and privacy policy</Link>
              </span>
            </p>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="py-2 bg-[#ED459A] px-10 w-1/2 m-auto rounded-md text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};
export default MenteeForms;

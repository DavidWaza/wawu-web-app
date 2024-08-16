import { useForm, SubmitHandler } from "react-hook-form";
import { Heading, Text } from "../../ui/Typography/Typography";
import Link from "next/link";
import axiosInstance from "@/pages/api/axiosInstance";
import { useState, useEffect } from "react";
import { mentor_url } from "@/pages/api/endpoints";
import { toast } from "sonner";
import { FormFields } from "../../../../types/Types";
import {
  convertFileToBase64,
  isValidFileSize,
  isValidImageType,
} from "../../../../utilities/imageUtils";
import InputField from "@/components/TextField/InputField";
import TextAreaField from "@/components/TextField/TextArea";
import SelectField from "@/components/TextField/SelectField";

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const [firstName, setFirstName] = useState<FormFields["firstName"]>("");
  const [lastName, setLastName] = useState<FormFields["lastName"]>("");
  const [email, setEmail] = useState<FormFields["email"]>("");
  const [gender, setGender] = useState<FormFields["gender"]>("");
  const [professionalRole, setProfessionalRole] =
    useState<FormFields["professionalRole"]>("");
  const [contactNumber, setContactNumber] =
    useState<FormFields["contactNumber"]>("");
  const [yearsOfExperience, setYearsOfExperience] = useState<number | string>(
    ""
  );
  const [currentJobDetails, setCurrentJobDetails] =
    useState<FormFields["currentJobDetails"]>("");
  const [capacity, setCapacity] = useState<FormFields["capacity"]>("");
  const [reason, setReason] = useState<FormFields["reason"]>("");
  const [values, setValues] = useState<FormFields["values"]>("");
  const [commitment, setCommitment] = useState<FormFields["commitment"]>("");
  const [challenges, setChallenges] = useState<FormFields["challenges"]>("");
  const [beenAMentor, setBeenAMentor] = useState<FormFields["beenAMentor"]>("");
  const [areaOfMentorship, setAreaOfMentorship] =
    useState<FormFields["areaOfMentorship"]>("");

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
        const response = await axiosInstance.post(mentor_url, {
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
        toast.error(err.response.data.message);
      }
    } else {
      setError("Please upload a signature image.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block">
      <div className="py-10">
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

          {/* GENDER */}
          <InputField
            label="Gender"
            name="gender"
            placeholder="Type here"
            value={gender}
            register={register}
            errors={errors}
            setValue={(value) => setGender(value)}
          />

          {/* PHONE NUMBER*/}
          <InputField
            label="Contact Number"
            name="contactNumber"
            placeholder="0901112233345"
            value={contactNumber}
            register={register}
            errors={errors}
            setValue={(value) => setContactNumber(value)}
          />

          {/* PROFESSIONAL ROLE */}
          <InputField
            label="Professional Role"
            name="professionalRole"
            placeholder="What do you do?"
            value={professionalRole}
            register={register}
            errors={errors}
            setValue={(value) => setProfessionalRole(value)}
          />

          {/* YEARS OF EXPERIENCE */}
          <InputField
            label="Years of Experience (full time role)"
            name="yearsOfExperience"
            placeholder="Years of Expereince"
            value={yearsOfExperience}
            register={register}
            errors={errors}
            setValue={(value) => setYearsOfExperience(value)}
          />
        </div>

        {/* CURRENT JOB DETAILS */}
        <TextAreaField
          label="*Please give a brief overview of your current job, main responsibilities and career to date."
          name="currentJobDetails"
          placeholder="Type here"
          value={currentJobDetails}
          register={register}
          errors={errors}
          setValue={(value) => setCurrentJobDetails(value)}
        />

        {/* Capacity */}
        <TextAreaField
          label="**Are you able to (have capacity and) commit ten hours in sixteen weeks to your assigned mentee?."
          name="capacity"
          placeholder="Type here"
          value={capacity}
          register={register}
          errors={errors}
          setValue={(value) => setCapacity(value)}
        />

        {/* REASON */}
        <SelectField
          label="*Please select the reason(s) for wanting to be a mentor:"
          name="reason"
          register={register}
          errors={errors}
          value={reason}
          setValue={(value) => setReason(value)}
          options={[
            { value: "true", label: "Reason number 1" },
            { value: "false", label: "Reason number 2" },
          ]}
        />

        {/* VALUES */}
        <TextAreaField
          label="**Please share your top five values (core characteristics, what do you value the most?)"
          name="values"
          placeholder="Type here"
          value={values}
          register={register}
          errors={errors}
          setValue={(value) => setValues(value)}
        />

        {/* COMMITMENT */}
        <TextAreaField
          label="*How will you demonstrate your commitment to support your assigned
          mentee in achieving their short- and/or long-term goals?"
          name="commitment"
          placeholder="Type here"
          value={commitment}
          register={register}
          errors={errors}
          setValue={(value) => setCommitment(value)}
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

        {/* BEEN A MENTOR */}
        <SelectField
          label="**Have you mentored a mentee before formally or informally?"
          name="beenAMentor"
          register={register}
          errors={errors}
          value={beenAMentor}
          setValue={(value) => setBeenAMentor(value)}
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />

        {/* AREA OF MENTORSHIP */}
        <TextAreaField
          label="If yes, may you please indicate in what area was the mentorship focused on?"
          name="areaOfMentorship"
          placeholder="Type here"
          value={areaOfMentorship}
          register={register}
          errors={errors}
          setValue={(value) => setAreaOfMentorship(value)}
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
      </div>
      <button
        type="submit"
        className="py-2 bg-[#ED459A] px-10 w-1/2 m-auto rounded-md text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default Forms;

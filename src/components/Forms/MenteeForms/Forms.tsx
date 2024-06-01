import Button from "../../ui/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Heading, Text } from "../../ui/Typography/Typography";
import { MdCheckBox } from "react-icons/md";
import Link from "next/link";

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  role: string;
  number: number;
  experienceLevel: number;
  overview: string;
  capacity: string;
  reason: string;
  values: string;
  challenge: string;
  mentorReasons: string;
  pastMentor: string;
  focus: string;
};

const MenteeForms = () => {
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
    <form onSubmit={handleSubmit(onSubmit)} className="block">
      <div className="py-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* FIRST NAME */}
          <div className="flex flex-col">
            <label className="text-black">First Name</label>
            <input
              {...register("firstName", {
                required: "First Name is required",
              })}
              type="text"
              placeholder="First Name"
              className="py-2 px-4 mr-3 text-black border border-1 rounded-md w-full"
            />
            {errors.firstName && (
              <Text variant="small" className="text-red-600">
                {errors.firstName.message}
              </Text>
            )}
          </div>

          {/* LAST NAME */}
          <div className="flex flex-col">
            <label className="text-black block !text-left">Last Name</label>
            <input
              {...register("lastName", {
                required: "Last Name is required",
              })}
              type="text"
              placeholder="Last Name"
              className="py-2 px-4 mr-3 text-black border border-1 rounded-md w-full"
            />
            {errors.lastName && (
              <Text variant="small" className="text-red-600">
                {errors.lastName.message}
              </Text>
            )}
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-black block">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                //   pattern: /^[A-Za-z]+$/i,
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "Email must include @";
                  }
                },
              })}
              type="text"
              placeholder="Email"
              className="py-2 px-4 text-black border border-1 rounded-md w-full "
            />
            {errors.email && (
              <Text variant="small" className="text-red-600">
                {errors.email.message}
              </Text>
            )}
          </div>

          {/* GENDER */}
          <div>
            <label className="text-black block">Gender</label>
            <input
              {...register("gender", {
                required: " gender is required",
              })}
              type="text"
              placeholder="Gender"
              className="py-2 px-4 mr-3 text-black border border-1 rounded-md w-full"
            />
            {errors.gender && (
              <Text variant="small" className="text-red-600">
                {errors.gender.message}
              </Text>
            )}
          </div>

          {/* PROFESSIONAL ROLE */}
          <div className="mb-4">
            <label className="text-black block">Professional Role</label>
            <input
              {...register("role", {
                required: "role is required",
              })}
              type="text"
              placeholder="Profesional Role"
              className="py-2 px-4 text-black border border-1 rounded-md w-full"
            />
            {errors.role && (
              <Text variant="small" className="text-red-600">
                {errors.role.message}
              </Text>
            )}
          </div>

          {/* PHONE NUMBER*/}
          <div>
            <label className="text-black block">Contact Number</label>
            <input
              {...register("number", {
                required: " contact is required",
              })}
              type="number"
              placeholder="Phone Number"
              className="py-2 px-4 mr-3 text-black border border-1 rounded-md w-full"
            />
            {errors.number && (
              <Text variant="small" className="text-red-600">
                {errors.number.message}
              </Text>
            )}
          </div>

          {/* YEARS OF EXPERIENCE */}
          <div>
            <label className="text-black block">
              Years of Experience
              <span className="text-[12px]">(Full time role)</span>
            </label>
            <input
              {...register("experienceLevel", {
                // required: "role is required",
              })}
              type="number"
              placeholder="Years of Experience"
              className="py-2 px-4 text-black border border-1 rounded-md w-full"
            />
            {errors.experienceLevel && (
              <Text variant="small" className="text-red-600">
                {errors.experienceLevel.message}
              </Text>
            )}
          </div>
        </div>

        {/* TEXT-AREAS */}
        <div className="py-10">
          <div>
            <label className="text-black block text-sm">
              Please give a brief overview of your current job, main
              responsibilities and career to date.
              <span className="text-[12px]">(Full time role)</span>
            </label>
            <textarea
              {...register("overview", {})}
              placeholder="Type here"
              className="py-2 px-5 text-black border border-1 rounded-md w-full"
            />
            {errors.overview && (
              <Text variant="small" className="text-red-600">
                {errors.overview.message}
              </Text>
            )}
          </div>
        </div>

        <div className="pb-10">
          <label className="text-black block text-sm">
            *Please select the reason(s) for wanting to be a mentor:
          </label>
          <select
            {...register("mentorReasons")}
            className="py-2 px-5 text-black border border-1 rounded-md w-full"
          >
            <option>Reason number 1</option>
            <option>Reason number 2</option>
          </select>
          {errors.mentorReasons && (
            <Text variant="small" className="text-red-600">
              {errors.mentorReasons.message}
            </Text>
          )}
        </div>

        <div className="pb-10">
          <label className="text-black block text-sm">
            *Are you able to (have capacity and) commit ten hours in sixteen
            weeks to your assigned mentee?
          </label>
          <select
            {...register("capacity")}
            className="py-2 px-5 text-black border border-1 rounded-md w-full"
          >
            <option>Reason number 1</option>
            <option>Reason number 2</option>
          </select>
          {errors.capacity && (
            <Text variant="small" className="text-red-600">
              {errors.capacity.message}
            </Text>
          )}
        </div>

        <div className="pb-10">
          <label className="text-black block text-sm">
            *Please share your top five values (core characteristics, what do
            you value the most?)
          </label>
          <textarea
            {...register("values")}
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
          />

          {errors.values && (
            <Text variant="small" className="text-red-600">
              {errors.values.message}
            </Text>
          )}
        </div>

        <div className="pb-10">
          <label className="text-black block text-sm">
            *How will you demonstrate your commitment to support your assigned
            mentee in achieving their short- and/or long-term goals?
          </label>
          <textarea
            {...register("values")}
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
          />

          {errors.values && (
            <Text variant="small" className="text-red-600">
              {errors.values.message}
            </Text>
          )}
        </div>

        <div className="pb-10">
          <label className="text-black block text-sm">
            *What are some challenges you may face as a mentor?
          </label>
          <textarea
            {...register("challenge")}
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
          />

          {errors.challenge && (
            <Text variant="small" className="text-red-600">
              {errors.challenge.message}
            </Text>
          )}
        </div>

        <div className="pb-10">
          <label className="text-black block text-sm">
            *Have you mentored a mentee before – formally or informally?
          </label>
          <select
            {...register("pastMentor")}
            className="py-2 px-5 text-black border border-1 rounded-md w-full"
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          {errors.pastMentor && (
            <Text variant="small" className="text-red-600">
              {errors.pastMentor.message}
            </Text>
          )}
        </div>

        <div className="pb-10">
          <label className="text-black block text-sm">
            If yes, may you please indicate in what area was the mentorship
            focused on?
          </label>
          <textarea
            {...register("focus")}
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
          />

          {errors.focus && (
            <Text variant="small" className="text-red-600">
              {errors.focus.message}
            </Text>
          )}
        </div>

        <div>
          <Heading
            variant="small"
            fontColor="secondary"
            className="text-underline "
          >
            Applicant Declaration
          </Heading>
          <p className="text-black">
            The information on this form will be used by the mentoring matching
            group. By signing this agreement, I () will abide by the guidelines
            of the mentorship programme, adhere to the mentoring scheme,
            actively participate in the mentoring process and contribute to the
            evaluation of the programme.
          </p>
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
            className="py-2 bg-[#ED459A] px-10 w-1/2 m-auto rounded-md mt-20"
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

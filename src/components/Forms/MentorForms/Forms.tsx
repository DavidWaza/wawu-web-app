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

const Forms = () => {
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
      <div className="2xl:flex 2xl:justify-between 2xl:text-left text-center my-10">
        {/* FIRST NAME */}
        <div className="mb-6">
          <label className="text-black block">First Name</label>
          <input
            {...register("firstName", {
              required: "First Name is required",
            })}
            type="text"
            placeholder="First Name"
            className="py-2 px-10 mr-3 text-black border border-1 rounded-md"
          />
          {errors.firstName && (
            <Text variant="small" className="text-red-600">
              {errors.firstName.message}
            </Text>
          )}
        </div>

        {/* LAST NAME */}
        <div className="flex-wrap">
          <label className="text-black block">Last Name</label>
          <input
            {...register("lastName", {
              required: "Last Name is required",
            })}
            type="text"
            placeholder="Last Name"
            className="py-2 px-10 mr-3 text-black border border-1 rounded-md"
          />
          {errors.lastName && (
            <Text variant="small" className="text-red-600">
              {errors.lastName.message}
            </Text>
          )}
        </div>
      </div>

      <div className="2xl:flex 2xl:justify-between 2xl:text-left text-center">
        {/* EMAIL */}
        <div className="mb-6">
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
            className="py-2 px-10 text-black border border-1 rounded-md"
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
            className="py-2 px-10 mr-3 text-black border border-1 rounded-md"
          />
          {errors.gender && (
            <Text variant="small" className="text-red-600">
              {errors.gender.message}
            </Text>
          )}
        </div>
      </div>

      <div className="2xl:flex justify-between 2xl:text-left text-center my-10">
        {/* PROFESSIONAL ROLE */}
        <div className="mb-6">
          <label className="text-black block">Professional Role</label>
          <input
            {...register("role", {
              required: "role is required",
            })}
            type="text"
            placeholder="Profesional Role"
            className="py-2 px-10 text-black border border-1 rounded-md"
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
            className="py-2 px-10 mr-3 text-black border border-1 rounded-md"
          />
          {errors.number && (
            <Text variant="small" className="text-red-600">
              {errors.number.message}
            </Text>
          )}
        </div>
      </div>

      <div className="2xl:flex 2xl:justify-between 2xl:text-left text-center my-3">
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
            className="py-2 px-10 text-black border border-1 rounded-md"
          />
          {errors.experienceLevel && (
            <Text variant="small" className="text-red-600">
              {errors.experienceLevel.message}
            </Text>
          )}
        </div>
      </div>

      {/* TEXT-AREAS */}
      <div className="block mt-10 px-10 2xl:px-0">
        <div>
          <label className="text-black block text-sm">
            Please give a brief overview of your current job, main
            responsibilities and career to date.
            <span className="text-[12px]">(Full time role)</span>
          </label>
          <textarea
            {...register("overview", {
              // required: "role is required",
            })}
            // type="text"
            placeholder="Type here"
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
          />
          {errors.overview && (
            <Text variant="small" className="text-red-600">
              {errors.overview.message}
            </Text>
          )}
        </div>
      </div>

      <div className="block mt-10 px-10 2xl:px-0">
        <div>
          <label className="text-black block text-sm">
            *Are you able to (have capacity and) commit ten hours in sixteen
            weeks to your assigned mentee?
          </label>
          <select
            {...register("capacity", {
              // required: "role is required",
            })}
            // type="text"
            // placeholder="Type here"
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
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
      </div>

      <div className="block mt-10 px-10 2xl:px-0">
        <div>
          <label className="text-black block text-sm">
            *Please select the reason(s) for wanting to be a mentor:
          </label>
          <select
            {...register("mentorReasons", {
              // required: "role is required",
            })}
            // type="text"
            // placeholder="Type here"
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
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
      </div>

      <div className="block mt-10 px-10 2xl:px-0">
        <div>
          <label className="text-black block text-sm">
            *Are you able to (have capacity and) commit ten hours in sixteen
            weeks to your assigned mentee?
          </label>
          <select
            {...register("capacity", {
              // required: "role is required",
            })}
            // type="text"
            // placeholder="Type here"
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
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
      </div>

      <div className="block mt-10 px-10 2xl:px-0">
        <div>
          <label className="text-black block text-sm">
            *Please share your top five values (core characteristics, what do
            you value the most?)
          </label>
          <textarea
            {...register("values", {
              // required: "role is required",
            })}
            // type="text"
            // placeholder="Type here"
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
          />

          {errors.values && (
            <Text variant="small" className="text-red-600">
              {errors.values.message}
            </Text>
          )}
        </div>
      </div>

      <div className="block mt-10 px-10 2xl:px-0">
        <div>
          <label className="text-black block text-sm">
            *How will you demonstrate your commitment to support your assigned
            mentee in achieving their short- and/or long-term goals?
          </label>
          <textarea
            {...register("values", {
              // required: "role is required",
            })}
            // type="text"
            // placeholder="Type here"
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
          />

          {errors.values && (
            <Text variant="small" className="text-red-600">
              {errors.values.message}
            </Text>
          )}
        </div>
      </div>

      <div className="block mt-10 px-10 2xl:px-0">
        <div>
          <label className="text-black block text-sm">
            *What are some challenges you may face as a mentor?
          </label>
          <textarea
            {...register("challenge", {
              // required: "role is required",
            })}
            // type="text"
            // placeholder="Type here"
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
          />

          {errors.challenge && (
            <Text variant="small" className="text-red-600">
              {errors.challenge.message}
            </Text>
          )}
        </div>
      </div>

      <div className="block mt-10 px-10 2xl:px-0">
        <div>
          <label className="text-black block text-sm">
            *Have you mentored a mentee before – formally or informally?
          </label>
          <select
            {...register("pastMentor", {
              // required: "role is required",
            })}
            // type="text"
            // placeholder="Type here"
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
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
      </div>

      <div className="block mt-10 px-10 2xl:px-0">
        <div>
          <label className="text-black block text-sm">
            If yes, may you please indicate in what area was the mentorship
            focused on?
          </label>
          <textarea
            {...register("focus", {
              // required: "role is required",
            })}
            // type="text"
            // placeholder="Type here"
            className="py-2 px-10 text-black border border-1 rounded-md w-full"
          />

          {errors.focus && (
            <Text variant="small" className="text-red-600">
              {errors.focus.message}
            </Text>
          )}
        </div>
      </div>

      <div className="mt-10 2xl:text-left text-center mx-5">
        <Heading
          variant="small"
          fontColor="secondary"
          className="text-underline "
        >
          Applicant Declaration
        </Heading>
        <Text variant="small" className="text-black">
          The information on this form will be used by the mentoring matching
          group. By signing this agreement, I
          __________________________________________ will abide by the
          guidelines of the mentorship programme, adhere to the mentoring
          scheme, actively participate in the mentoring process and contribute
          to the evaluation of the programme.
        </Text>
        <div className="mt-8 flex gap-4">
          <input type="checkbox" />
          <Text variant="small" className="text-black">
            By continuing you agree to our{" "}
            <span className="text-[#ED459A]">
              <Link href={"#"}>terms of use and privacy policy</Link>
            </span>
          </Text>
        </div>
      </div>
      <div className="flex justify-center 2xl:justify-start">
        <button
          type="submit"
          className="py-1 bg-[#ED459A] px-10 w-1/2 m-auto rounded-md mt-20"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};
export default Forms;

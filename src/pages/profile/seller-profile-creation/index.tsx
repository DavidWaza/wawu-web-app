import LayoutProfile from "../layout";
import Button from "@/components/ui/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import {  Text } from "@/components/ui/Typography/Typography";
import { BsEyeSlash } from "react-icons/bs";
import Education from "../Components/Education/Education";
import ProfessionalCertificate from "../Components/ProfessionalCertificate/Certificate";
import MeansOfIdentification from "../Components/MeansOfIdentification/MeansOfIdentification";
import SocialHandles from "../Components/SocialHandles/SocialHandles";
import ProfileHero from "../Components/ProfileHero/ProfileHero";

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  overview: string;
  skills: string;
  language: string;
};

const SellerProfileCreation = () => {
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
        <div className="flex justify-end my-10">
          <Button variant="primary" size="large" className="p-2">
            Become a seller
          </Button>
        </div>
        <div className="py-12 grid lg:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:flex justify-between">
              <div className="mb-6">
                <label className="text-black block">First Name</label>
                <input
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  type="text"
                  placeholder="First Name"
                  className="p-2 mr-3 text-black border border-1 rounded-md"
                />
                {errors.firstName && (
                  <Text variant="small" className="text-red-600">
                    {errors.firstName.message}
                  </Text>
                )}
              </div>
              <div className="mb-6">
                <label className="text-black block">Last Name</label>
                <input
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  type="text"
                  placeholder="Last Name"
                  className="p-2  text-black border border-1 rounded-md"
                />
                {errors.lastName && (
                  <Text variant="small" className="text-red-600">
                    {errors.lastName.message}
                  </Text>
                )}
              </div>
            </div>
            {/* EMAIL AND PASSWORD */}
            <div className="lg:flex justify-between">
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
                  className="p-2 text-black border border-1 rounded-md"
                />
                {errors.email && (
                  <Text variant="small" className="text-red-600">
                    {errors.email.message}
                  </Text>
                )}
              </div>
              <div className="mb-2">
                <label className="text-black block">Password</label>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    placeholder="**********"
                    className="py-2 px-2 text-black border border-1 rounded-md w-full "
                  />
                  <div>
                    <BsEyeSlash className="absolute top-3 right-0 mx-6 text-black" />
                  </div>
                </div>

                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>
            </div>
            <div>
              <div>
                <label className="text-black block text-sm">About</label>
                <textarea
                  {...register("overview", {
                    // required: "role is required",
                  })}
                  // type="text"
                  placeholder="Type here"
                  className="p-2 text-black border border-1 rounded-md w-full"
                />
                {errors.overview && (
                  <Text variant="small" className="text-red-600">
                    {errors.overview.message}
                  </Text>
                )}
              </div>
              <div className="my-6">
                <label className="text-black block">Skills</label>
                <input
                  {...register("skills", {
                    required: "Skills",
                  })}
                  type="text"
                  placeholder="Select a skill"
                  className="p-2 mr-3 text-black border border-1 rounded-md w-full"
                />
                {errors.skills && (
                  <Text variant="small" className="text-red-600">
                    {errors.skills.message}
                  </Text>
                )}
              </div>
              <div>
                <label className="text-black block text-sm">
                  Preferred language
                </label>
                <select
                  {...register("language", {
                    // required: "role is required",
                  })}
                  // type="text"
                  // placeholder="Type here"
                  className="p-2 text-black border border-1 rounded-md w-full"
                >
                  <option>{""}</option>
                  <option>English</option>
                  <option>French</option>
                  <option>Arabic</option>
                </select>
                {errors.language && (
                  <Text variant="small" className="text-red-600">
                    {errors.language.message}
                  </Text>
                )}
              </div>
            </div>
            
          </form>
          <div></div>
        </div>
        <div className="mt-10">
          <Education />
        </div>
        <ProfessionalCertificate />
        <MeansOfIdentification />
        <SocialHandles />
      </div>
    </LayoutProfile>
  );
};
export default SellerProfileCreation;

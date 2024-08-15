import LayoutProfile from "../layout";
import Button from "@/components/ui/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Text } from "@/components/ui/Typography/Typography";
import { BsEyeSlash } from "react-icons/bs";
import Education from "../Components/Education/Education";
import ProfileHero from "../Components/ProfileHero/ProfileHero";
import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_portfolio } from "@/pages/api/endpoints";
import { toast } from "sonner";
import UploadImage from "../Components/UploadImage/UploadImage";
import { useState } from "react";

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  overview: string;
  skills: string;
  language: string;
  certificate: string;
  institution: string;
  course: string;
  date: string;
  certificateName: string;
};

const BuyerProfileCreation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleUpload = (file: File | null) => {
    setSelectedImage(file);
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await axiosInstance.post(fetch_portfolio, data);
      console.log(response.data);
      toast.success(response.data.message);
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <LayoutProfile>
      <div className="-mt-10">
        <ProfileHero />
        <div className="flex justify-end">
          <Button variant="primary" size="medium" className="p-2">
            Provide service
          </Button>
        </div>
        <div className="py-12 grid lg:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5 lg:gap-10">
              <div className="mb-6">
                <label className="text-black block">First Name</label>
                <input
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  type="text"
                  placeholder="First Name"
                  className="p-2 mr-3 text-black border border-1 rounded-md w-full"
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
                  className="p-2  text-black border border-1 rounded-md w-full"
                />
                {errors.lastName && (
                  <Text variant="small" className="text-red-600">
                    {errors.lastName.message}
                  </Text>
                )}
              </div>
            </div>
            {/* EMAIL AND PASSWORD */}
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
              className="p-2 text-black border border-1 rounded-md w-full"
            />
            {errors.email && (
              <Text variant="small" className="text-red-600">
                {errors.email.message}
              </Text>
            )}
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
            <div>
              <div className="py-5">
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
            <div className="flex gap-1 items-center py-5">
              <Text variant="small">Education</Text>
              <div className="bg-[#A2A2A2] h-[1px] w-full"></div>
            </div>
            <div className="lg:w-2/3 w-full lg:px-0 px-10">
              <div className="my-10">
                <label className="text-black block text-sm">
                  Certification
                </label>
                <select
                  {...register("certificate", {
                    // required: "role is required",
                  })}
                  // type="text"
                  // placeholder="Type here"
                  className="p-2 text-black border border-1 rounded-md w-full"
                >
                  <option>{""}</option>
                  <option>BS.c</option>
                  <option>HND</option>
                  <option>OND</option>
                </select>
                {errors.certificate && (
                  <Text variant="small" className="text-red-600">
                    {errors.certificate.message}
                  </Text>
                )}
              </div>
              <div className="mb-10">
                <label className="text-black block text-sm">Institution</label>
                <select
                  {...register("institution", {
                    // required: "role is required",
                  })}
                  // type="text"
                  // placeholder="Type here"
                  className="p-2 text-black border border-1 rounded-md w-full"
                >
                  <option>{""}</option>
                  <option>Salem University</option>
                  <option>Covenant University</option>
                  <option>American University of Nigeria</option>
                </select>
                {errors.institution && (
                  <Text variant="small" className="text-red-600">
                    {errors.institution.message}
                  </Text>
                )}
              </div>
              <div className="mb-10">
                <label className="text-black block text-sm">
                  Course of study
                </label>
                <select
                  {...register("course", {
                    // required: "role is required",
                  })}
                  // type="text"
                  // placeholder="Type here"
                  className="p-2 text-black border border-1 rounded-md w-full"
                >
                  <option>{""}</option>
                  <option>Computer Science</option>
                  <option>Information Technology</option>
                  <option>Robotics</option>
                </select>
                {errors.course && (
                  <Text variant="small" className="text-red-600">
                    {errors.course.message}
                  </Text>
                )}
              </div>
              <div className="">
                <label className="text-black block text-sm">
                  Graduation Date
                </label>
                <select
                  {...register("date", {
                    // required: "role is required",
                  })}
                  // type="text"
                  // placeholder="Type here"
                  className="p-2 text-black border border-1 rounded-md w-full"
                >
                  <option>{""}</option>
                </select>
                {errors.date && (
                  <Text variant="small" className="text-red-600">
                    {errors.date.message}
                  </Text>
                )}
              </div>
              <Button variant="tertiary">Add</Button>
            </div>
            <div className="my-10">
              <div className="lg:w-2/3 w-full lg:px-0 px-10">
                <div className="my-10">
                  <label className="text-black block text-sm">Name</label>
                  <select
                    {...register("certificateName", {
                      // required: "role is required",
                    })}
                    // type="text"
                    // placeholder="Type here"
                    className="p-2 text-black border border-1 rounded-md w-full"
                  >
                    <option>{""}</option>
                    <option>BS.c</option>
                    <option>HND</option>
                    <option>OND</option>
                  </select>
                  {errors.certificateName && (
                    <Text variant="small" className="text-red-600">
                      {errors.certificateName.message}
                    </Text>
                  )}
                </div>
                <div className="mb-10">
                  <label className="text-black block text-sm">
                    Institution
                  </label>
                  <select
                    {...register("institution", {
                      // required: "role is required",
                    })}
                    // type="text"
                    // placeholder="Type here"
                    className="p-2 text-black border border-1 rounded-md w-full"
                  >
                    <option>{""}</option>
                    <option>Salem University</option>
                    <option>Covenant University</option>
                    <option>American University of Nigeria</option>
                  </select>
                  {errors.institution && (
                    <Text variant="small" className="text-red-600">
                      {errors.institution.message}
                    </Text>
                  )}
                </div>

                <div className="">
                  <label className="text-black block text-sm">End Date</label>
                  <select
                    {...register("date", {
                      // required: "role is required",
                    })}
                    // type="text"
                    // placeholder="Type here"
                    className="p-2 text-black border border-1 rounded-md w-full"
                  >
                    <option>{""}</option>
                  </select>
                  {errors.date && (
                    <Text variant="small" className="text-red-600">
                      {errors.date.message}
                    </Text>
                  )}
                </div>
                <div className="mt-10">
                  <UploadImage
                    handleUpload={handleUpload}
                    uploadEndpoint="/api/upload"
                    maxFileSize={500 * 1024} // 500KB
                    acceptedFileTypes="image/*"
                  />
                </div>
                <Button variant="tertiary">Add</Button>
              </div>
            </div>
          </form>
          <div></div>
        </div>
       
      </div>
    </LayoutProfile>
  );
};
export default BuyerProfileCreation;

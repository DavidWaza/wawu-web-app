import CustomInput from "@/components/ui/Inputs/TextInput";
import CustomSelect from "@/components/ui/Inputs/SelectInputs";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Button from "@/components/ui/Button/Button";
import Navbar from "@/components/Header/Navbar/Navbar";
import MobileNavbar from "@/components/Header/Navbar/MobileNavbar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const salutationOptions = ["Reason number 1", "Reason number 2"];

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar id={0} link="" href="" isCaret />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <div className="text-center pt-10 lg:pt-[12rem] px-10 lg:px-[20rem]">
        <Heading fontColor="secondary" variant="medium">
          Get In Touch With Us
        </Heading>
        <div className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:grid grid-cols-2 gap-5">
              <CustomInput
                label="Full Name"
                name="first name"
                placeholder="Leora"
                register={register}
                errors={errors}
                type="text"
                className="rounded-lg p-3 w-full"
              />
              <CustomInput
                label="Email"
                name="email"
                placeholder="Support@wawuafrica.com"
                register={register}
                errors={errors}
                type="email"
                className="rounded-lg p-3 w-full"
              />
              <div>
                <label className=" text-black block font-medium sora text-left">Phone Number</label>
                <PhoneInput
                  country={"ng"}
                  inputStyle={{
                    width: "100%",
                    height: "41px",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
            </div>
            <div>
              <div className="py-5">
              <label className=" text-black block font-medium sora text-left">Message</label>
                <textarea
                  {...register("overview", {
                    // required: "role is required",
                  })}
                  // type="text"
                  placeholder="Type here"
                  className="p-2 text-black border border-1 rounded-md w-full"
                />
              </div>
              <div className="text-left">
                <input type="checkbox" />
                <label className="text-black ml-3">
                  I agree with Wawu privacy policy
                </label>
              </div>
              <div>
                <Button className="p-2 my-3">Submit</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;

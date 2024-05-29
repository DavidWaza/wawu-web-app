import CustomInput from "@/components/ui/Inputs/TextInput";
import CustomSelect from "@/components/ui/Inputs/SelectInputs";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Button from "@/components/ui/Button/Button";
import Navbar from "@/components/Header/Navbar/Navbar";
import MobileNavbar from "@/components/Header/Navbar/MobileNavbar";

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
      <div className="text-center pt-[12rem] px-10 lg:px-[20rem]">
        <Heading fontColor="secondary" variant="medium">
          Get In Touch With Us
        </Heading>
        <Text variant="small" className="text-[#5F6D7E]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          eligendi magni voluptatum porro quo? Quod modi dolore, voluptatum ad
          corrupti officia ut reiciendis eos quidem distinctio iure placeat
          harum ab?
        </Text>
        <div className="mt-20">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:grid grid-cols-2 gap-10">
              <CustomInput
                label="Full Name"
                name="first name"
                placeholder="First Name"
                register={register}
                errors={errors}
                type="text"
                className="rounded-lg p-3 w-full"
              />
              <CustomInput
                label="Email"
                name="email"
                placeholder="Email"
                register={register}
                errors={errors}
                type="email"
                className="rounded-lg p-3 w-full"
              />
              <CustomInput
                label="Phone number"
                name="number"
                placeholder="+000"
                register={register}
                errors={errors}
                type="number"
                className="rounded-lg p-3 w-full"
              />
              <CustomSelect
                label="How can we help?"
                name="name"
                register={register}
                errors={errors}
                options={salutationOptions}
                // type="email"
                className="rounded-lg p-3 w-full"
              />
            </div>
            <div>
              <div>
                <label className="text-black block text-left text-medium text-sm">
                  Message
                </label>
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

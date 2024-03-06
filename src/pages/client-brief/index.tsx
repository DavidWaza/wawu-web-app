import { Heading, Text } from "@/components/ui/Typography/Typography";
import Header from "../buyers/Components/Header/Header";
import Button from "@/components/ui/Button/Button";
import { MdArrowRightAlt } from "react-icons/md";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import CustomInput from "@/components/ui/Inputs/TextInput";
import CustomSelect from "@/components/ui/Inputs/SelectInputs";
import UploadImage from "../profile/Components/UploadImage/UploadImage";

const ClientBrief = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };
  const salutationOptions = ["Reason number 1", "Reason number 2"];

  return (
    <>
      <Header />
      <div className="lg:px-[8rem] px-10 my-10">
        <div className="bg-[#A812E3] w-full h-[20rem] !p-0">
          <div className="py-20 px-10">
            <Heading fontColor="primary" variant="medium">
              Let&apos;s the matching begin...
            </Heading>
            <Text variant="small" className="text-white my-5">
              This is where you fill us in one of the big picture?
            </Text>
            <Button
              className="border-none lg:w-[26rem] w-full p-3 flex gap-10 items-center"
              size="large"
              suffix={<MdArrowRightAlt />}
            >
              How does the matching thing work
            </Button>
          </div>
        </div>
        <div className="my-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 gap-5">
              <div>
                <CustomInput
                  label="Project brief title"
                  sublabel="Keep it as brief as possible, this will help us match you to the right category"
                  name="project"
                  className="bg-transparent pt-5 pb-12"
                  placeholder="Example: Social media marketing for my business"
                  register={register}
                  errors={errors}
                  type="text"
                />
                <CustomInput
                  label="What are you looking to get done?"
                  sublabel="This will help get your brief to the right talent. Sepcifics help here."
                  name="project"
                  className="bg-transparent pt-5 pb-12"
                  placeholder="Example: Social media marketing for my business"
                  register={register}
                  errors={errors}
                  type="text"
                />{" "}
                <div>
                  <UploadImage />
                </div>
              </div>
              <div>
                <CustomSelect
                  label="Best category for your project"
                  name="capacity"
                  className="bg-transparent py-4"
                  options={salutationOptions}
                  register={register}
                  errors={errors}
                />
                <CustomSelect
                  label="Which industry are you in?"
                  name="capacity"
                  className="bg-transparent py-4"
                  options={salutationOptions}
                  register={register}
                  errors={errors}
                />
                <CustomInput
                  label="Budget"
                  name="project"
                  className="bg-transparent py-4"
                  placeholder="Up to"
                  register={register}
                  errors={errors}
                  type="text"
                />{" "}
                <div className="flex gap-2 items-center">
                  <input type="checkbox" value={""} />
                  <label className="text-black">My budget is flexible</label>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-10">
              <Button
                size="small"
                className="p-2 flex gap-5 justify-center items-center"
                href="/"
                suffix={<MdArrowRightAlt />}
              >
                Review
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ClientBrief;

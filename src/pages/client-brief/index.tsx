import { useState } from "react";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import { MdArrowRightAlt } from "react-icons/md";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import UploadImage from "../profile/Components/UploadImage/UploadImage";
import Header from "../sellers/Components/Header/Header";
import {
  convertFileToBase64,
  isValidFileSize,
  isValidImageType,
} from "../../../utilities/imageUtils";
import { toast } from "sonner";
import axiosInstance from "../api/axiosInstance";
import { fetch_client_brief } from "../api/endpoints";
import InputField from "@/components/TextField/InputField";
import { FormFields } from "../../../types/Types";
import SelectField from "@/components/TextField/SelectField";

const ClientBrief = () => {
  const [error, setError] = useState("");
  const [project_brief_title, setProject_brief_title] = useState("");
  const [get_done, setGet_done] = useState("");
  const [best_project, setBest_project] = useState("");
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    console.log("Form data:", data); // Log form data
    if (data.file && data.file.length > 0) {
      const signature = data.file[0];
      if (!isValidImageType(signature) || !isValidFileSize(signature)) {
        setError("Invalid image type or size.");
        return;
      }
      try {
        const payload = {
          title: project_brief_title,
          description: best_project,
          budget,
          category: industry,
         
        };
        console.log("Payload:", payload);
        const response = await axiosInstance.post(fetch_client_brief, payload);
        console.log("Response:", response);
        toast.success(response.data.message);
      } catch (err: any) {
        console.error("Error:", err);
        toast.error(err.response?.data?.message || "An error occurred");
      }
    } else {
      setError("Please upload a signature image.");
    }
  };
  const handleUpload = (file: File | null) => {
    setSelectedImage(file);
  };
  return (
    <>
      <Header />
      <div className="lg:px-[8rem] px-10 my-10">
        <div className="bg-[#A812E3] w-full rounded-md !p-0">
          <div className="py-10 px-10">
            <Heading fontColor="primary" variant="medium">
              Let&apos;s the matching begin...
            </Heading>
            <Text variant="small" className="text-white my-5">
              This is where you fill us in one of the big picture?
            </Text>
            <Button
              className="border-none lg:w-[26rem] w-full p-1 lg:p-3 flex items-center text-sm"
              size="large"
              suffix={<MdArrowRightAlt />}
            >
              How does the matching thing work
            </Button>
          </div>
        </div>
        <div className="my-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 items-center lg:gap-10">
              <InputField
                label="Project brief title"
                name="projectTitle"
                placeholder="Example: Social media marketing for my business"
                value={project_brief_title}
                register={register}
                setValue={(value) => setProject_brief_title(value)}
                errors={errors}
                type="text"
              />
              <SelectField
                label="Best category for your project"
                name="bestProject"
                value={best_project}
                setValue={(value) => setBest_project(value)}
                options={[
                  { value: "true", label: "Facebook" },
                  { value: "false", label: "Twitter" },
                ]}
                register={register}
                errors={errors}
              />
              <InputField
                label="What are you looking to get done?"
                name="getDone"
                placeholder="Example: Social media marketing for my business"
                value={get_done}
                register={register}
                errors={errors}
                setValue={(value) => setGet_done(value)}
                type="text"
              />
              <SelectField
                label="Which industry are you in?"
                name="industry"
                value={industry}
                options={[
                  { value: "true", label: "Facebook" },
                  { value: "false", label: "Twitter" },
                ]}
                register={register}
                setValue={(value) => setIndustry(value)}
                errors={errors}
              />
              <InputField
                label="Budget"
                name="budget"
                placeholder="Up to"
                value={budget}
                register={register}
                errors={errors}
                setValue={(value) => setBudget(value)}
                type="text"
              />
            </div>
            <UploadImage
                  handleUpload={handleUpload}
                  uploadEndpoint="/api/upload"
                  maxFileSize={500 * 1024} // 500KB
                  acceptedFileTypes="image/*"
                />
            <div className="my-6">
              <div className="flex gap-2 items-center py-5 ">
                <input type="checkbox" value={""} />
                <label className="text-black">My budget is flexible</label>
              </div>
              <div className="flex gap-5 justify-center">
                <button
                  type="submit"
                  className="p-2 flex gap-2 justify-center items-center bg-[#F060A8] text-white rounded-lg px-10"
                  onClick={() => console.log('luggy')}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <Button
                  variant="secondary"
                  size="small"
                  className="p-2 flex gap-2 justify-center items-center !text-black"
                  href="/client-brief/client-brief-review"
                  suffix={<MdArrowRightAlt />}
                >
                  Review
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ClientBrief;

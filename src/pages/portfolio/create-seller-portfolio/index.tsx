import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormFields } from "../../../../types/Types";
import { Text } from "@/components/ui/Typography/Typography";
import {
  convertFileToBase64,
  isValidFileSize,
  isValidImageType,
} from "../../../../utilities/imageUtils";
import axiosInstance from "@/pages/api/axiosInstance";
import { create_portfolio } from "@/pages/api/endpoints";
import { toast } from "sonner";
import InputField from "@/components/TextField/InputField";
import TextAreaField from "@/components/TextField/TextArea";
import Header from "@/pages/sellers/Components/Header/Header";

const CreateSellerPortfolio = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const [projectTitle, setProjectTitle] =
    useState<FormFields["projectTitle"]>("");
  const [projectDescription, setProjectDescription] =
    useState<FormFields["projectDescription"]>("");
  const [fileName, setFileName] = useState<FormFields["fileName"]>(""); // Update: Manage fileName in state
  const [base64File, setBase64File] = useState<string | null>(null); // Store the base64 file
  const [error, setError] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name); // Update: Set the file name here
      if (!isValidImageType(file) || !isValidFileSize(file)) {
        setError("Invalid image type or size.");
        return;
      }

      const base64Signature = await convertFileToBase64(file);
      setBase64File(base64Signature); // Store the base64 file for submission
    }
  };

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    try {
      const response = await axiosInstance.post(create_portfolio, {
        ...data,
        projectTitle,
        projectDescription,
        fileName, // Update: Ensure fileName is passed here
        file: base64File, // Use the base64 file string for submission
      });
      toast.success(response.data.message);
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="lg:py-20 lg:px-[8.4rem] p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:w-1/2">
            <InputField
              label="Project Title"
              name="projectTitle"
              placeholder="Project Title"
              value={projectTitle}
              register={register}
              errors={errors}
              setValue={(value) => setProjectTitle(value)}
            />
            <TextAreaField
              label="Project description"
              name="projectDescription"
              placeholder="Type here"
              value={projectDescription}
              register={register}
              errors={errors}
              setValue={(value) => setProjectDescription(value)}
            />
            <div className="space-y-5">
              <div>
                <label className="text-black block">Upload file</label>
                <input
                  type="file"
                  accept="image/*"
                  className="py-2 px-4 text-black border border-1 rounded-md w-full"
                  onChange={handleFileChange}
                />
                {error && (
                  <Text variant="small" className="text-red-600">
                    {error}
                  </Text>
                )}
              </div>
            </div>
            <div className="my-10">
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
      </div>
    </React.Fragment>
  );
};

export default CreateSellerPortfolio;

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


type FormField = {
  projectTitle: string;
  projectDescription: string;
  file: string; 
};

const CreateSellerPortfolio = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const [projectTitle, setProjectTitle] =
    useState<FormField["projectTitle"]>("");
  const [projectDescription, setProjectDescription] =
    useState<FormField["projectDescription"]>("");
  const [fileName, setFileName] = useState<FormField["file"]>("");
  const [error, setError] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      if (!isValidImageType(file) || !isValidFileSize(file)) {
        setError("Invalid image type or size.");
        return;
      }

      const base64Signature = await convertFileToBase64(file);
      setValue("file", base64Signature);
    }
  };

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    try {
      const response = await axiosInstance.post(create_portfolio, {
        ...data,
        projectTitle,
        projectDescription,
        fileName,
        signature: {
          fileName: fileName,
          file: data.file, // file is already a base64 string
        },
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
              <div>
                <button
                  type="button"
                  className="py-2 bg-[#A812E3] px-10 lg:w-1/2 m-auto rounded-md text-nowrap"
                  // onClick={() => document.querySelector('input[type="file"]').click()}
                  disabled={isSubmitting}
                >
                  + Add image/Doc file
                </button>
              </div>
            </div>

            <div className="my-10">
              <button
                type="submit"
                className="py-2 bg-[#ED459A] px-10 w-1/2 m-auto rounded-md"
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

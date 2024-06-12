import React, { useState } from "react";
import Header from "../../buyers/Components/Header/Header";
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

const CreateSellerPortfolio = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const [projectTitle, setProjectTitle] =
    useState<FormFields["projectTitle"]>("");
  const [projectDescription, setProjectDescription] =
    useState<FormFields["projectDescription"]>("");
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    if (data.file && data.file.length > 0) {
      const signature = data.file[0];
      if (!isValidImageType(signature) || !isValidFileSize(signature)) {
        setError("Invalid image type or size.");
        return;
      }

      try {
        const base64Signature = await convertFileToBase64(signature);
        const response = await axiosInstance.post(create_portfolio, {
          ...data,
          signature: {
            fileName: signature.name,
            file: base64Signature,
          },
        });
        toast.success(response.data.message);
      } catch (err: any) {
        toast.error(err.response.data.message);
      }
    } else {
      setError("Please upload a signature image.");
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="lg:py-20 px-[8.4rem] p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:w-1/2">
            <InputField
              label="Project Title"
              name="firstName"
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
                  {...register("file")}
                  type="file"
                  accept="image/*"
                  className="py-2 px-4 text-black border border-1 rounded-md w-full"
                />
                {error && (
                  <Text variant="small" className="text-red-600">
                    {error}
                  </Text>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="py-2 bg-[#A812E3] px-10 w-1/2 m-auto rounded-md"
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

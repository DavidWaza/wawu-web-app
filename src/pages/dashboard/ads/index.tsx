import React, { useState } from "react";
import DashboardLayout from "../layout";
import { Input } from "@/components/ui/input";
import { FormFields } from "../../../../types/Types";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  convertFileToBase64,
  isValidFileSize,
  isValidImageType,
} from "../../../../utilities/imageUtils";
import axiosInstance from "@/pages/api/axiosInstance";
import { mentor_url } from "@/pages/api/endpoints";
import { toast } from "sonner";
import InputField from "@/components/TextField/InputField";
import SelectField from "@/components/TextField/SelectField";
import { Search } from "lucide-react";
import DragDrop from "../components/DragImageUpload/DragImageUpload";
import { usePathname } from "next/navigation";

const Adverts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const [advert_link, setAdvert_link] = useState<FormFields["advert_link"]>("");
  const [post_advert, setPost_advert] = useState<FormFields["post_advert"]>("");
  const [call_to_action_button, setCall_to_action_button] =
    useState<FormFields["call_to_action_button"]>("");
  const [advert_time_frame, setAdvert_time_frame] =
    useState<FormFields["advert_time_frame"]>("");

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
        const response = await axiosInstance.post(mentor_url, {
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

  const pathname = usePathname()
const pathParts = pathname.split('/').filter(Boolean);
const currentPath = pathParts.length > 0 ? pathParts[pathParts.length - 1] : '';
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
        <p className="text-[28px] font-semibold sora capitalize">{currentPath}</p>
          <p className="text-[16px] text-[#5f6d7e] sora">
            Let&apos;s get creative, create new content
          </p>
        </div>
        <div className="relative w-[20%]">
          <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          <Input className="bg-transparent pl-10 w-full" placeholder="Search..." />
        </div>
      </div>
      <div className="py-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <InputField
              label="Advert link"
              name="advert_link"
              placeholder="Type here"
              value={advert_link}
              register={register}
              errors={errors}
              setValue={(value) => setAdvert_link(value)}
            />

            {/*  */}
            <SelectField
              label="Select page to post advert"
              name="post_advert"
              register={register}
              errors={errors}
              value={post_advert}
              setValue={(value) => setPost_advert(value)}
              options={[
                { value: "true", label: "Facebook" },
                { value: "false", label: "Twitter" },
              ]}
            />

            {/*  */}
            <InputField
              label="Call to action button"
              name="call_to_action_button"
              placeholder="Paste link here"
              value={call_to_action_button}
              register={register}
              errors={errors}
              setValue={(value) => setCall_to_action_button(value)}
            />

            {/*  */}
            <InputField
              label="Advert time frame"
              name="advert_time_frame"
              placeholder="Set date"
              value={advert_time_frame}
              register={register}
              errors={errors}
              setValue={(value) => setAdvert_time_frame(value)}
            />
          </div>
          {/* <div className="py-10">
            <input
              {...register("file")}
              type="file"
              accept="image/*"
              className="py-20 px-4 text-black border border-1 rounded-md w-full"
            />
          </div> */}
          <div className="py-10">
            <DragDrop />
          </div>
          <div className="py-5 flex justify-center">
            <button
              type="submit"
              className="bg-[#F497C6] rounded-lg py-2 text-white px-32"
              // disabled={isSubmitting}
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Adverts;

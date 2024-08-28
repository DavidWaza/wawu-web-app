import { useEffect, useState } from "react";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";

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
import {
  fetch_service_categories,
  fetch_sub_categories,
  post_client_brief,
} from "../api/endpoints";
import InputField from "@/components/TextField/InputField";
import { FormFields } from "../../../types/Types";
import SelectField from "@/components/TextField/SelectField";

interface ICategoryProps {
  uuid: string;
  name: string;
}

const ClientBrief = () => {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [delivery_date, setDelivery_date] = useState("");
  const [category, setCategory] = useState<ICategoryProps[]>([]);
  const [sub_category, setSub_category] = useState<ICategoryProps[]>([]);
  const [budget, setBudget] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get(fetch_service_categories);
        setCategory(response.data.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchSubCategories = async () => {
      if (!sub_category) return;

      try {
        const response = await axiosInstance.get(fetch_sub_categories);
        console.log("sub", response.data.data);
        setSub_category(response.data.data);
      } catch (error) {
        console.error("Failed to fetch subcategories", error);
      }
    };

    fetchSubCategories();
  }, []);

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    console.log("Form data:", data); // Log form data

    if (selectedImage) {
      if (!isValidImageType(selectedImage) || !isValidFileSize(selectedImage)) {
        setError("Invalid image type or size.");
        return;
      }
      try {
        const imageBase64 = await convertFileToBase64(selectedImage);
        const postData = {
          title,
          description,
          delivery_date: "2024-08-15",
          category: category.length ? category[0].uuid : "",
          sub_category: sub_category.length ? sub_category[0].uuid : "",
          budget: Number(budget),
          image: imageBase64,
        };
        console.log("Post Data:", postData);

        const response = await axiosInstance.post(post_client_brief, postData);
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
                name="title"
                placeholder="Example: Social media marketing for my business"
                value={title}
                register={register}
                setValue={(value) => setTitle(value)}
                errors={errors}
                type="text"
              />
              <SelectField
                label="Best category for your project"
                name="category"
                value={category[0]?.uuid || category}
                setValue={(value) => setCategory([{ uuid: value, name: "" }])}
                options={category.map((item) => ({
                  value: item.uuid,
                  label: item.name,
                }))}
                register={register}
                errors={errors}
              />

              <InputField
                label="What are you looking to get done?"
                name="description"
                placeholder="Example: Social media marketing for my business"
                value={description}
                register={register}
                errors={errors}
                setValue={(value) => setDescription(value)}
                type="text"
              />
              <SelectField
                label="Subcategory"
                name="sub_category"
                value={sub_category[0]?.uuid || sub_category}
                setValue={(value) => setSub_category([{ uuid: value, name: "" }])}
                options={
                  sub_category.length > 0
                    ? sub_category.map((item) => ({
                        value: item.uuid,
                        label: item.name,
                      }))
                    : [{ value: "", label: "No subcategories available" }]
                }
                register={register}
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
                  onClick={(e: any) => onSubmit(e)}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <Button
                  variant="secondary"
                  size="small"
                  className="p-2 flex gap-2 justify-center items-center !text-black"
                  href="/client-brief/client-brief-review"
                 
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

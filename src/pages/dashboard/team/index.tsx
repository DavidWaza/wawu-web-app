import React, { useState } from "react";
import DataTable from "../components/DataTable/DataTable";
import Search from "@/pages/sellers/Components/Search/Search";
import DashboardLayout from "../layout";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "react-responsive-modal";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import InputField from "@/components/TextField/InputField";
import { FormFields } from "../../../../types/Types";
import {
  convertFileToBase64,
  isValidFileSize,
  isValidImageType,
} from "../../../../utilities/imageUtils";
import axiosInstance from "@/pages/api/axiosInstance";
import { mentor_url } from "@/pages/api/endpoints";
import { toast } from "sonner";

const Team = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<FormFields["email"]>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

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

  return (
    <DashboardLayout>
      <div className="flex justify-between">
        <div>
          <p className="text-lg font-semibold">Teams</p>
          <p className="text-sm font-normal">
            Let&apos;s get creative , Create new content
          </p>
        </div>
        <div>
          <Search placeholder="Search" />
        </div>
      </div>

      <AlertDialog>
        <div className="flex justify-end py-10">
          <AlertDialogTrigger className="py-2 px-20 bg-[#730C99] text-white rounded-xl">
            Add item
          </AlertDialogTrigger>
        </div>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-[2rem]">
              Add new team
            </AlertDialogTitle>
            <AlertDialogTitle className="text-center text-[#AFAFB9] text-sm">
              Fill in the following information to add an admin
            </AlertDialogTitle>
            <AlertDialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputField
                  label="Email"
                  placeholder="wawu@gmail.com"
                  name="email"
                  type=""
                  value={email}
                  register={register}
                  errors={errors}
                  setValue={(value) => setEmail(value)}
                />
              </form>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DataTable />
    </DashboardLayout>
  );
};

export default Team;
function setError(arg0: string) {
  throw new Error("Function not implemented.");
}

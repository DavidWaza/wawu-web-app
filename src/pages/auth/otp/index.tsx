import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import axiosInstance from "@/pages/api/axiosInstance";
import { toast } from "sonner";
import { verify_otp_url } from "@/pages/api/endpoints";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const handleOtpSubmit = async () => {
    try {
      const response = await axiosInstance.post(verify_otp_url, { otp });

      if (response.data.success) {
        toast.success("OTP verified successfully!");

        // Navigate to the onboarding screen
        router.push("/onboarding/user-screen-about");
      } else {
        toast.error("Invalid OTP, please try again.");
      }
    } catch (err: any) {
      toast.error(err.response.data.message || "Error verifying OTP");
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center py-[5rem] lg:pt-[20rem]">
      <div className="border rounded-xl px-20 py-10 ">
        <InputOTP maxLength={6} value={otp} onChange={handleOtpChange}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <button
          onClick={handleOtpSubmit}
          className="py-3 bg-[#290D43] px-10 w-full m-auto rounded-md mt-10 text-white"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default Otp;

import Logo from "@/components/Header/Navbar/Logo/Logo";
import { useFlutterwave } from "flutterwave-react-v3";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormFields } from "../../../types/Types";
import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { sign_up_url } from "../api/endpoints";
import { toast } from "sonner";
import InputField from "@/components/TextField/InputField";

const FlutterwavePayment = () => {
  const [firstName, setFirstName] = useState<FormFields["firstName"]>("");
  const [lastName, setLastName] = useState<FormFields["lastName"]>("");
  const [email, setEmail] = useState<FormFields["email"]>("");
  const [phoneNumber, setPhoneNumber] = useState<FormFields["phoneNumber"]>("");
  const [state, setState] = useState<FormFields["state"]>();
  const [country, setCountry] = useState<FormFields["country"]>();
  const [zipcode, setZipcode] = useState<FormFields["zipcode"]>();
  const [discountCode, setDiscountCode] =
    useState<FormFields["discountCode"]>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async () => {
    try {
      const response = await axiosInstance.post(sign_up_url, {
        firstName,
        lastName,
        state,
        country,
        role: 2,
      });

      toast.success(response.data.message);
    } catch (err: any) {
      toast.error(err.response.data.message || "Error signing up");
      console.log(err);
    }
  };

  const router = useRouter();
  const config = {
    public_key: "FLWPUBK_TEST-68faef794802d91e183102058142a4af-X",
    tx_ref: Date.now().toString(),
    amount: 150000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phoneNumber,
      name: firstName,
    },
    customizations: {
      title: "Stewards Payment",
      description: "Payment for Wawu",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const handlePaymentSuccess = (response: any) => {
    console.log(response);
    closePaymentModal(); // Close the payment modal
    router.push("/"); // Redirect to the homepage
  };

  const fwConfig = {
    ...config,
    text: "Pay N15,000.00",
    callback: handlePaymentSuccess,
    onClose: () => {},
  };

  const yrConfig = {
    ...config,
    text: "Pay N15,000.00",
    callback: (response: any) => {
      console.log(response);
      closePaymentModal();
    },
    onClose: () => {},
  };

  return (
    <div className="p-5 lg:p-20">
      <div className="grid gap-20 md:grid-cols-2 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-xl font-semibold py-5">Payment Subscription</p>
          <div className="grid lg:grid-cols-2 lg:gap-10">
            <div className="">
              {/* FIRST NAME */}
              <InputField
                label="First Name"
                name="firstName"
                placeholder="Leora"
                value={firstName}
                register={register}
                errors={errors}
                setValue={(value) => setFirstName(value)}
              />
            </div>

            {/* LAST NAME */}
            <InputField
              label="Last Name"
              name="lastName"
              placeholder="Leora"
              value={lastName}
              register={register}
              errors={errors}
              setValue={(value) => setLastName(value)}
            />
          </div>
          <InputField
            label="Email"
            name="email"
            placeholder="Support@wawuafrica.com"
            type="email"
            value={email}
            register={register}
            errors={errors}
            setValue={(value) => setEmail(value)}
          />
          <div className="grid lg:grid-cols-2 lg:gap-10">
            {/* State */}
            <InputField
              label="State/Province"
              name="state"
              placeholder="Federal Capital Territory"
              value={state}
              register={register}
              errors={errors}
              setValue={(value) => setState(value)}
            />

            {/* Country */}
            <InputField
              label="Country"
              name="country"
              placeholder="Type your Country"
              value={country}
              register={register}
              errors={errors}
              setValue={(value) => setCountry(value)}
            />

            {/* Zip code */}
            <InputField
              label="Zip Code"
              name="zipcode"
              placeholder=""
              value={zipcode}
              register={register}
              errors={errors}
              setValue={(value) => setZipcode(value)}
            />

            {/* Phone Number */}
            <InputField
              label="Phone Number"
              name="phoneNumber"
              placeholder=""
              value={phoneNumber}
              register={register}
              errors={errors}
              setValue={(value) => setPhoneNumber(value)}
            />
            <InputField
              label="Discount Code"
              name="discountCode"
              placeholder=""
              value={discountCode}
              register={register}
              errors={errors}
              setValue={(value) => setPhoneNumber(value)}
            />
          </div>
        </form>
        <div className="py-5 lg:py-[1rem] border-y-0 lg:border-l-2 border-r-0 lg:px-20">
        <p className="text-xl font-semibold py-5">Billing Summary</p>

          <div className="grid grid-cols-2  pb-5 border-b ">
            <p className="text-lg text-[#352C76] font-medium">Sub Total</p>
            <p className="text-lg text-[#352C76] !text-right">N15,000</p>
            <p className="text-lg text-[#352C76]">Discount</p>
            <p className="text-lg text-[#352C76] !text-right">- N15,000</p>
            <p className="text-lg text-[#352C76]">Tax</p>
            <p className="text-lg text-[#352C76] !text-right">N0.00</p>
          </div>
          <div className="py-20 flex gap-5 flex-col justify-center">
            <FlutterWaveButton
              {...fwConfig}
              className="bg-[#A812E3] rounded-md py-3 px-10 text-white"
              customer={{
                ...fwConfig.customer,
                phone_number: fwConfig.customer.phone_number || "",
              }}
            />
            <button className="bg-transparent rounded-md py-3 px-10 text-black border-2">
                Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlutterwavePayment;

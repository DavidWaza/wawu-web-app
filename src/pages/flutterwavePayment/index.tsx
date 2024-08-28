import Logo from "@/components/Header/Navbar/Logo/Logo";
import { useFlutterwave } from "flutterwave-react-v3";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from 'next/navigation';

const FlutterwavePayment = () => {
  const router = useRouter();
  const config = {
    public_key: "FLWPUBK_TEST-68faef794802d91e183102058142a4af-X",
    tx_ref: Date.now().toString(),
    amount: 15000000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "Stewards Payment",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const handlePaymentSuccess = (response: any) => {
    console.log(response);
    closePaymentModal(); // Close the payment modal
    router.push('/'); // Redirect to the homepage
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
    <div className="py-20 flex justify-center items-center min-h-screen">
      <div className="border border-slate-300 w-[700px] h-[400px] rounded-lg p-10 flex flex-col items-center space-y-10">
        <p className="text-lg">Bill Summary</p>
        <Tabs defaultValue="month" className="w-[300px]">
          <TabsList className="flex justify-center">
            <TabsTrigger value="year">Yearly</TabsTrigger>
            <TabsTrigger value="month">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="year"
            className="flex flex-col justify-center py-5"
          >
            <div className="grid grid-cols-2  pb-5 border-b ">
              <p className="text-lg text-[#352C76] font-medium">Sub Total</p>
              <p className="text-lg text-[#352C76] !text-right">N15,000</p>
              <p className="text-lg text-[#352C76]">Discount</p>
              <p className="text-lg text-[#352C76] !text-right">- N15,000</p>
              <p className="text-lg text-[#352C76]">Tax</p>
              <p className="text-lg text-[#352C76] !text-right">N0.00</p>
            </div>

            <FlutterWaveButton
              {...fwConfig}
              className="bg-[#810FAF] rounded-lg py-2 px-10 text-white"
            />
          </TabsContent>
          <TabsContent value="month" className="flex justify-center py-5">
            <FlutterWaveButton
              {...fwConfig}
              className="bg-[#810FAF] rounded-lg py-2 px-10 text-white"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FlutterwavePayment;

"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Header/Navbar/Navbar";
import MobileNavbar from "@/components/Header/Navbar/MobileNavbar";
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  {
    ssr: false,
  }
);

const Payment = () => {
  const publicKey = "pk_your_public_key_here";
  const amount = 1000000;
  const currency = 'NGN'
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Window is defined, running client-side logic.");
    }
  }, []);

  const componentProps = {
    email,
    amount,
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name,
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: phone,
        },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div>
      <div className="hidden xl:block">
        <Navbar id={0} link="" href="" isCaret />
      </div>
      <div className="block xl:hidden">
        <MobileNavbar />
      </div>
      <div className="container py-[10rem] lg:w-1/2">
        <div className="py-10"></div>
        <div>
          <form className="space-y-10 border p-5 lg:p-20 rounded-xl shadow-sm">
            <div>
              <label>Name</label>
              <Input
                type="text"
                id="name"
                placeholder="Full name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Email</label>
              <Input
                type="email"
                id="name"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Phone</label>
              <Input
                type="number"
                id="number"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </form>
          <PaystackButton {...componentProps} className="paystack-button" />
          <p className="text-lg text-center py-10">Pay {amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;

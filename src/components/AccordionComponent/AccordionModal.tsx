import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormFields } from "../../../types/Types";
import axiosInstance from "@/pages/api/axiosInstance";
import { create_faq } from "@/pages/api/endpoints";
import { toast } from "sonner";
import InputField from "../TextField/InputField";

const AccordionModal = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    try {
      const response = await axiosInstance.post(create_faq, data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Question"
          name="question"
          register={register}
          errors={errors}
          placeholder="Ask you questions"
          value={question}
          setValue={(value) => setQuestion(value)}
        />
        <div className="my-2">
          <InputField
            label="Answer"
            name="answer"
            register={register}
            errors={errors}
            placeholder="Provide your answer"
            value={answer}
            setValue={(value) => setAnswer(value)}
          />
        </div>
        <button
          type="submit"
          className="py-2 bg-[#ED459A] px-10 w-full m-auto rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AccordionModal;

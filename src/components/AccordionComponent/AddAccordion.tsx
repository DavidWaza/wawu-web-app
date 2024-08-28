import React, { useEffect, useRef, useState } from "react";

import Button from "../ui/Button/Button";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import AccordionModal from "./AccordionModal";
import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_faq } from "@/pages/api/endpoints";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

interface FaqItem {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const contentHeight = useRef<HTMLDivElement | null>(null);

  return (
    <div className={`wrapper`}>
      <button
        className={`question-container text-black ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content text-sm lg:text-lg text-black">
          {question}
        </p>
        <ChevronDown className={`arrow text-black ${isOpen ? "active" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current?.scrollHeight || "auto" }
            : { height: "0px" }
        }
      >
        <p className="answer-content text-black">{answer}</p>
      </div>
    </div>
  );
};

const AddAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [faqData, setFaqData] = useState<FaqItem[]>([]);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const fetchFaq = async () => {
    try {
      const response = await axiosInstance.get(fetch_faq);
      console.log(response.data);
      setFaqData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFaq();
  }, []);

  return (
    <div>
      <div>
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
      <div className="py-10">
        <Button className="p-3" size="large" onClick={onOpenModal}>
          Add New
        </Button>
      </div>
      {open && (
        <Modal open={open} onClose={onCloseModal} center>
          <div className="py-20">
            <AccordionModal />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AddAccordion;

import React, { useRef, useState } from "react";

import data from "./AccordionData";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionProps) => {
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

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <div className="">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;

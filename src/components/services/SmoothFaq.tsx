"use client";

import { useId, useState } from "react";

function FaqRow({
  question,
  answer,
  open,
  answerClassName,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  answerClassName: string;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className="border-b border-[rgba(14,14,14,0.1)] py-6">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full cursor-pointer bg-transparent text-left text-[18px] font-semibold tracking-[-0.02em] text-[#0e0e0e] sm:text-[20px]"
      >
        {question}
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className={answerClassName}>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqList({
  faqs,
  answerClassName,
}: {
  faqs: { question: string; answer: string }[];
  answerClassName: string;
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {faqs.map((faq, index) => (
        <FaqRow
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          open={openIndex === index}
          answerClassName={answerClassName}
          onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
        />
      ))}
    </>
  );
}

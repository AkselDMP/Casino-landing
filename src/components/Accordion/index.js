import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Wrap, Dropdown, StyledAccordion2 } from "./StyledAccordion2";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const faqs = [
    {
      question: "Why to choose us?",
      answer: 
        "Our interface is simple and easy to use so you can create your digital card quickly. There is no need for coding or design skills, just upload your photo, logo and information, and you will have a professional looking digital card, fully adjusted to all devices"
    },
    {
      question: "How much does it cost",
      answer: 
        "Its completely free. You can create your card and use it immediately. When you are ready, you can upgrade to enjoy the additional features"
    },
    {
      question:"How many profiles can I register under my account",
      answer:
        "As many as you like! You can even create different cards, in case you have a separate business, and manage them all under one account"
    },
    {
      question: 
        "I am not a designer. Will I have to hire a professional to make my card",
      answer: 
        "Our solution is designed to suit anyone. You dont need to have any design skills, the unique interface is straightforward and user friendly.You can have your card ready in just five minutes"
      ,
    },
    {
      question: "Can I keep updating my card myself",
      answer: 
        "Yes, you can keep editing and work on your card anytime from anywhere"
    },
  ];

  return (
    // <StyledAccordion2>
    //   <div className="container">
    //     <h1 className="title">Frequently asked questions</h1>
    //     <div className="accordion">
    //       {faqs.map((item, index) => {
    //         return (
    //           <>
    //             <Wrap onClick={() => toggle(index)} key={index}>
    //               <h1>{item.question}</h1>
    //               <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
    //             </Wrap>
    //             {clicked === index ? (
    //               <Dropdown>
    //                 <p>{item.answer}</p>
    //               </Dropdown>
    //             ) : null}
    //           </>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </StyledAccordion2>

    <>
    
    </>
  );
};

export default Accordion;

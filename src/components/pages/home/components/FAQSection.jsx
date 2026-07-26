import {useState} from "react";
import Faqs from "../assets/Faqs.svg";
import GradientHeading from "../../../typography/GradientHeading";
import faqData from "../../../data/faqData";
import charm_minus from "../assets/charm_minus.png";
import majesticons_plus from "../assets/majesticons_plus.png";
export default function FAQSection() {
  const [open, setOpen] = useState(-1);
  return (
    <section className=" relative  overflow-hidden flex flex-col items-center justify-center h-[730px]  w-full  ">
      <img
        src={Faqs}
        alt="Faqs"
        className="absolute inset-0 w-full h-[900px] "
      />
      <div className="w-[90%] max-w-[990px] mx-auto">
        {/* Title */}
        <div className="mb-14">
          <GradientHeading text="Frequently Asked Questions" />
        </div>
        {/* Accordion */}
        <div className="space-y-5">
          {faqData.map((item, index) => {
            const active = open === index;
            return (
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-[25px] bg-primary rounded-[17px]" />
                <div
                  key={index}
                  className=" relative  ml-[3px]  bg-white rounded-[14px]  shadow-[0_12px_30px_rgba(0,0,0,0.08)] overflow-hidden "
                >
                  <div className=" w-full flex  items-start text-left">
                    {/* Content */}
                    <div className="flex-1 px-2 md:px-6 py-4 md:py-5">
                      <div className="flex justify-between items-start gap-10">
                        <h3 className=" font-medium text-[16px] md:text-[24px] leading-none text-black ">
                          {item.question}{" "}
                        </h3>
                        <button
                          onClick={() => setOpen(active ? -1 : index)}
                          className=" text-primary text-[30px] shrink-0 leading-none"
                        >
                          {active ? (
                            <img
                              src={charm_minus}
                              alt="Minus"
                              className="w-10 h-10"
                            />
                          ) : (
                            <img
                              src={majesticons_plus}
                              alt="Plus"
                              className="w-10 h-10"
                            />
                          )}
                        </button>
                      </div>
                      {active && (
                        <p className=" mt-1 text-[#5C5C5C] text-[16px]  md:text-[20px] leading-[170%] ">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

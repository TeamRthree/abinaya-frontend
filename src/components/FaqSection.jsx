import { useState } from "react";
import { PiPlus } from "react-icons/pi";

const faqs = [
  {
    question: "What is the success percentage rate of IVF fertility treatment?",
    answer:
      "IVF success rates vary depending on age and medical history, but typically range between 40–60% for women under 35.",
  },
  {
    question: "How does IVF fertility treatment work ?",
    answer:
      "IVF involves retrieving eggs and fertilizing them with sperm in a lab, then transferring the embryo into the uterus.",
  },
  {
    question: "How long should I wait before consulting a fertility doctor ?",
    answer:
      "If you're under 35 and have tried for a year without success, or over 35 and tried for 6 months, consult a specialist.",
  },
  {
    question: "What happens if I become pregnant ?",
    answer:
      "Once pregnant, you'll undergo regular checkups with your gynecologist to ensure a safe and healthy pregnancy.",
  },
];

const FaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-white py-20 px-4 relative">
      <h2 className="text-center text-[24px] md:text-[30px] font-semibold text-[#E64771] mb-[100px]">
        Things You Often Ask
      </h2>
      <div className="relative lg:hidden w-full flex justify-center">
         <div className="absolute   rounded-full w-6 h-6 p-20 bg-[#FFE2F0]"></div>
          <img
            src="/images/faq-illustration.png"
            alt="Pregnancy Illustration"
            className="max-w-[120px] z-1"
            
          />
         
        </div>
      <div className="hidden lg:block absolute top-60 xl:top-46 2xl:left-60 rounded-full w-10 h-10 p-30 xl:p-40 bg-[#FFE2F0]">

      </div>
<div className="hidden lg:flex absolute bottom-76 2xl:left-34 w-full md:w-1/3 justify-center">
          <img
            src="/images/faq-illustration.png"
            alt="Pregnancy Illustration"
            className="max-w-[280px] md:max-w-[320px]"
          />
        </div>
      <div className="w-full 2xl:w-7xl mx-auto flex flex-col items-end justify-end md:gap-10">
       
    

        {/* Right Side - FAQs */}
        <div className="md:w-lg xl:w-2xl 2xl:w-3xl mx-auto lg:mx-0 flex flex-col gap-4 md:h-[460px] xl:h-[400px]">
          {faqs.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className={` rounded-lg py-2 border border-[#FFD6E5] transition-all shadow-sm *:${
                      isOpen ? "opacity-100 bg-white" : "opacity-80 bg-[#FFF2F6]"
                    }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span
                    className={`text-[#FF68AF] font-medium text-[18px] md:text-[20px] transition ${
                      isOpen ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    {`${index + 1}. ${item.question}`}
                  </span>
                  <span
                    className={`text-[#E64771] text-lg  transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <PiPlus className="text-xl" />
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden px-6 ${
                    isOpen ? "max-h-[200px] pt-2 pb-4" : "max-h-0"
                  }`}
                >
                  <div className="w-full flex justify-center mb-3 transition-all duration-300">
                    <div
                      className={`w-[80%] h-[1px] bg-[#ffc9d9] transform transition-all duration-300 ${
                        isOpen ? "opacity-100 scale-x-100 " : "opacity-0 scale-x-0"
                      }`}
                    />
                  </div>
                  <p className="text-[16px] text-[#FF68AF]">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

         {/* CTA Bottom Banner */}
      <div className="mt-16 md:w-full rounded-[4px] md:rounded-2xl overflow-hidden shadow-lg">
        <div className="relative">
          <img
            src="/images/faq-banner.png"
            alt="Consultation CTA"
            className="w-full h-[220px] object-fit"
          />
          <div className="absolute inset-0 bg-[#FF56A6]/20 flex flex-col items-center justify-center text-white text-center px-4">
            <h3 className="text-xl lg:text-[36px] lg:leading-11 font-semibold mb-2">
              Schedule a Consultation <br className="hidden md:block" />
              with Our Specialist?
            </h3>
            <p className="text-[16px] md:text-[20px] lg:text-[24px] mb-4">
              A successful pregnancy starts with the right advice — book now.
            </p>
            <button className="bg-white text-[#E64771] px-5 py-2 rounded-[4px] font-medium text-[14px] md:text-[18px] transition-all duration-300 ease-in-out hover:bg-[#E64771] hover:text-white ">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      </div>

     
    </section>

    
  );
};

export default FaqSection;

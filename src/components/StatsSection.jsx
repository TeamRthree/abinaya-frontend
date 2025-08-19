import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 1200, label: ["Infertility Cases", "treated"], spacing: "px-8 md:pe-8" },
  { value: 300, label: ["High Risk", "Pregnancies"], spacing: "px-8 md:px-8" },
  { value: 8300, label: ["Happy", "Families"], spacing: "px-8 md:px-8" },
  { value: 1500, label: ["Babies", "Delivered"], spacing: "px-8 md:px-8" },
];

const StatsSection = () => {
  const sectionRef = useRef(null);
  const numRefs = useRef([]);

  useEffect(() => {
    numRefs.current.forEach((el, index) => {
      const finalValue = stats[index].value;
      const obj = { val: 0 };

      gsap.to(obj, {
        val: finalValue,
        duration: 2,
        ease: "power3.out",
        onUpdate: () => {
          if (!el) return;
          el.innerText = `${Math.floor(obj.val)}+`;
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="md:w-2xl mx-auto mt-20 text-center"
    >
      <div className="mx-auto grid grid-cols-2 md:flex gap-y-8  justify-start md:text-center relative">

        {stats.map((stat, i) => (
          <div
            key={i}
            className={`relative flex-1 justify-center ${stat.spacing} items-center flex flex-col `}
          >
            {/* --- Vertical line for desktop (between all items except last) --- */}
            {i < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[60%] border-r-2 border-[#FFC4E0]"></div>
            )}

            {/* --- Vertical line for mobile: between top 2 and bottom 2 --- */}
            {i % 2 === 0 && i < stats.length && (
              <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 h-full border-r-2 border-[#FFC4E0]"></div>
            )}

            <p
              ref={(el) => (numRefs.current[i] = el)}
              className="text-[24px] md:text-2xl lg:text-4xl xl:text-3xl font-extrabold text-[#FF56A6]"
            >
              00+
            </p>

            <p className="mt-2 text-[12px] md:text-xs lg:text-[18px] text-black/50">
              {stat.label.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i !== stat.label.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 1200, label: "Infertility Cases treated", spacing: "pe-2 md:pe-8" },
  { value: 300, label: "High Risk Pregnancies", spacing: "px-2 md:px-8" },
  { value: 8300, label: "Happy Families", spacing: "px-2 md:px-8" },
  { value: 1500, label: "Babies Delivered", spacing: "px-2 md:px-8" },
];


const StatsSection = () => {
  const sectionRef = useRef(null);
  const numRefs = useRef([]);

  useEffect(() => {
  numRefs.current.forEach((el, index) => {
    const finalValue = stats[index].value;

    const obj = { val: 0 }; // animate this, not the DOM node

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
      className="md:w-2xl mx-auto mt-20 text-center "
    >
        <div className="mx-auto md:w-full  flex justify-between text-center">
{stats.map((stat, i) => (
        <div
  key={i}
  className={`relative flex-1 justify-center ${stat.spacing} items-center flex flex-col ${
    i !== 0 ? "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[60%] before:border-l-2 before:border-[#FFC4E0]" : ""
  }`}
>

          <p
            ref={(el) => (numRefs.current[i] = el)}
             className="text-[16px] md:text-2xl lg:text-4xl xl:text-3xl font-extrabold text-[#FF56A6] "
          >
            00+
          </p>
          <p className="mt-2 text-[10px] md:text-xs lg:text-[18px] text-black/50">{stat.label}</p>
        </div>
      ))}
        </div>
      
    </section>
  );
};

export default StatsSection;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { textTestimonials } from "../data/testimonialData";

const testimonials = [...textTestimonials]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 6); 



const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[index];

  return (
    <section className="w-full pb-0 md:pb-20 pt-12 md:pt-[93px] px-4 md:px-8 bg-white text-[#3A405B]">
      <h2 className="text-center text-[24px] md:text-[36px] font-medium text-[#E64771] mb-10">
        Our Happy Clients
      </h2>

      <div className="max-w-2xl mx-auto relative flex flex-col items-center md:gap-10">
        <div className="relative w-full min-h-[300px] md:min-h-[240px]">
          <motion.div
            key={index}
            initial={{ x: direction > 0 ? 80 : -80, opacity: 0, scale: 0.98 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: direction > 0 ? -80 : 80, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (isMobile) {
                if (info.offset.x < -100) paginate(1);
                else if (info.offset.x > 100) paginate(-1);
              }
            }}
            className="absolute top-0 left-0 w-full"
          >
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 w-full h-full flex flex-col">
              <div className="flex items-center justify-between gap-4">
                
                <div className="flex items-center md:gap-4">
                    <img
                  src="/images/author-2.jpg"
                  alt={activeTestimonial.name}
                  className="w-[55px] md:w-[70px] h-[55px] md:h-[70px] rounded-full object-cover"
                />
                  <p className="font text-[14px] md:text-[20px]">{activeTestimonial.name}</p>
                  
                </div>
                <div className="flex flex-col gap-2">
<div className="flex items-center gap-1 md:text-[24px] text-[#FFAC33] mt-1">
                    {[...Array(5)].map((_, i) =>
                      i < activeTestimonial.rating ? (
                        <FaStar key={i} />
                      ) : (
                        <FaRegStar key={i} />
                      )
                    )}
                  </div>
                <p className="ml-auto font-light text-xs md:text-sm text-gray-400">
                  {activeTestimonial.date}
                </p>
                </div>
                
              </div>
              <p className="mt-4 text-[12px] md:text-base text-[#3A405B]/70 opacity-80 leading-[130%]">
  {activeTestimonial.text.split(" ").slice(0, 50).join(" ")}...
</p>

            </div>
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-14 ">
          <button
            onClick={() => paginate(-1)}
            className="w-[36px] h-[36px] rounded-full bg-[#E64771] text-white flex items-center justify-center hover:scale-105 transition"
          >
            <IoChevronBack size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-[36px] h-[36px] rounded-full bg-[#E64771] text-white flex items-center justify-center hover:scale-105 transition"
          >
            <IoChevronForward size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

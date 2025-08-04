import React from "react";
import StatsSection from "./StatsSection";
import { Link } from "react-router-dom";




const HeroSection = () => {
  return (
    <section className="relative w-full mx-auto bg-white py-16 px-4 md:px-12 lg:px-40 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="max-w-xl space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#3A405B] leading-tight">
          Caring For Women At Every Step Of Their Motherhood Journey.
        </h1>
        <p className="text-[#686A74] text-base sm:text-[20px] pe-18">
          Expert care in fertility and pregnancy, tailored to your journey. With you from the first step to the moment you hold your baby.
        </p>
        <Link to="/contact" className="bg-[#FF56A6] font-medium text-[18px] text-[#FEFEFE] px-4 py-2 rounded-[6px] border hover:border-[#FF56A6] hover:text-[#FF56A6] hover:bg-transparent transition-all duration-300 ease-in-out">
            Book Appointment
          </Link>

        {/* Stats Row */}
        <StatsSection/>
      </div>

      {/* Right Image */}
      <div className="relative mt-12 md:mt-0">
        <img
          src='/images/doctor.jpg'
          alt="Dr. Abinaya"
          className="w-full max-w-sm md:max-w-md xl:w-xl object-contain "
        />

        {/* Decorations */}
        <span style={{ animationDelay: '0s' }} className="absolute bottom-16 left-6 w-6 h-6 bg-[#FF99C9] rounded-full opacity-60  animate-float-1"></span>
        <span style={{ animationDelay: '0.5s' }} className="absolute top-20 right-12 w-12 h-12 bg-[#FF99C9] rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2 animate-float-2"></span>
    
        <img
  src="images/star.svg"
  alt="Decorative Star"
  style={{ animationDelay: '1s' }}
  className="absolute top-4 left-16 w-10 h-10 opacity-70 animate-float-3"
/>

<img
  src="images/star.svg"
  alt="Decorative Star"
  style={{ animationDelay: '1.3s' }}
  className="absolute -bottom-8 right-6 w-8 h-8 opacity-70 animate-float-4"
/>

      </div>
    </section>
  );
};

export default HeroSection;

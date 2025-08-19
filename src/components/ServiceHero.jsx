import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom"; // adjust the path

const ServiceHero = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div className="text-center md:text-start">
          <h1 className="text-[24px] md:text-[40px] font-bold text-[#3A405B] mb-4">
            Comprehensive Women’s Health &{" "}
            <span className="text-[#EA3C60]/80">Fertility Services</span>
          </h1>
          <p className="text-[#686A74] text-[16px] md:text-[24px] mb-6">
            Empowering Your Journey With Care, Expertise, And Compassion.
          </p>
         
          <Link to="/appointment" className="bg-[#FF56A6] font-medium text-[14px] md:text-[18px] text-[#FEFEFE] px-4 py-2 rounded-[6px] border hover:border-[#FF56A6] hover:text-[#FF56A6] hover:bg-transparent transition-all duration-300 ease-in-out">
            Book Appointment
          </Link>
        
        </div>

        {/* Right Image */}
        <div className="relative">
          <img src="/images/service-banner.png" alt="Hero" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* Bottom Scrolling Text */}
      <div className="border-y border-[#FDC9DA] mt-10">
        <Marquee
          gradient={false}
          speed={80}
          className="text-[#E73C7E] text-sm md:text-[24px] font-medium py-2"
        >
          <span className="mx-4">Delivery</span>
          <p className="w-1 h-1 md:w-3 md:h-3 bg-[#E73C7E] rounded-full"></p>
          <span className="mx-4">Pregnancy</span>
          <p className="w-1 h-1 md:w-3 md:h-3 bg-[#E73C7E] rounded-full"></p>
          <span className="mx-4">Fertility Treatments</span>
          <p className="w-1 h-1 md:w-3 md:h-3 bg-[#E73C7E] rounded-full"></p>
          <span className="mx-4">Fertility Issues</span>
          <p className="w-1 h-1 md:w-3 md:h-3 bg-[#E73C7E] rounded-full"></p>
          <span className="mx-4">Recovery</span>
          <p className="w-1 h-1 md:w-3 md:h-3 bg-[#E73C7E] rounded-full"></p>
          <span className="mx-4">Delivery</span>
          <p className="w-1 h-1 md:w-3 md:h-3 bg-[#E73C7E] rounded-full"></p>
          <span className="mx-4">Pregnancy</span>
          <p className="w-1 h-1 md:w-3 md:h-3 bg-[#E73C7E] rounded-full"></p>
         
          <span className="mx-4">Fertility Treatments</span>
          <p className="w-1 h-1 md:w-3 md:h-3 bg-[#E73C7E] rounded-full"></p>
          <span className="mx-4">Fertility Issues</span>
          <p className="w-1 h-1 md:w-3 md:h-3 bg-[#E73C7E] rounded-full"></p>
          <span className="mx-4">Recovery</span>
          <p className="w-1 h-1 md:w-3 md:h-3 bg-[#E73C7E] rounded-full"></p>
        </Marquee>
      </div>
    </section>
  );
};

export default ServiceHero;

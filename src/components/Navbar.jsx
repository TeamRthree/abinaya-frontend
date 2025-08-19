import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#FAFAFA] shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="w-full mx-auto px-[16px] md:px-24 py-4 flex items-center justify-between">
        {/* Left Section → Logo */}
        <Link to="/"  className="cursor-pointer">
          <h1 className="text-[14px] md:text-xl font-bold text-[#3A405B]">
            Dr. M. H. Abinaya
          </h1>
          <p className="text-[8px] md:text-sm text-[#FF56A6]">
            Fertility | Obstetrics | Gynaecology
          </p>
        </Link>

        {/* Right Section */}
        <div>
          <Link to="/contact" className="bg-[#FF56A6] font-medium text-[12px] md:text-[18px] text-[#FEFEFE] px-4 py-2 rounded-[6px] border hover:border-[#FF56A6] hover:text-[#FF56A6] hover:bg-transparent transition-all duration-300 ease-in-out">
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

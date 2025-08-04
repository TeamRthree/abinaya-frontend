import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

// Icons (replace with actual paths later)
import HomeIcon from "../assets/home.svg";
import ServiceIcon from "../assets/services.svg";
import GalleryIcon from "../assets/gallery.svg";
import TestimonailIcon from "../assets/testimonials.svg";
import BlogIcon from "../assets/blogs.svg";
import ContactIcon from "../assets/contact.svg";

const SideIcons = () => {
  const location = useLocation();

  const leftIcons = [
    { icon: HomeIcon, alt: "Home", link: "/" },
    { icon: ServiceIcon, alt: "Services", link: "/services" },
    { icon: GalleryIcon, alt: "Gallery", link: "/media" },
    { icon: TestimonailIcon, alt: "Testimonials", link: "/testimonials" },
    { icon: BlogIcon, alt: "Blogs", link: "/blogs" },
    { icon: ContactIcon, alt: "Contact", link: "/contact" },
  ];

  const rightIcons = [
    { icon: <FaYoutube size={30} />, alt: "YouTube", link: "https://youtube.com" },
    { icon: <RiInstagramFill size={30} />, alt: "Instagram", link: "https://instagram.com" },
    { icon: <FaXTwitter size={30} />, alt: "X", link: "https://x.com" },
    { icon: <FaFacebookF size={30} />, alt: "Facebook", link: "https://facebook.com" },
  ];

  return (
    <>
      {/* Left Icons */}
      <div className={`fixed mt-20 h-screen justify-center left-2 md:left-0 top-8 md:top-1/2 -translate-y-1/2 z-[1000] flex flex-col items-center w-[40px] md:w-[90px] shadow-r  shadow-lg py-4`}>
        <div className={`hidden md:flex flex-col items-center gap-12 mb-20`}>
          {leftIcons.map((item, idx) => {
            const isActive = location.pathname === item.link;

            return (
              <div key={idx} className="group relative flex items-center">
                <Link
                  to={item.link}
                  className={`p-2 rounded-md transition-all duration-200 ease-in ${
                    isActive ? "bg-[#FFE2F0]" : "hover:bg-pink-100/40"
                  }`}
                >
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className={`w-6 h-6 cursor-pointer`}
                  />
                </Link>
                {/* Tooltip */}
                <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-sm bg-white text-gray-500 font-semibold px-3 py-1 rounded shadow whitespace-nowrap
                  before:content-[''] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-r-white">
                  {item.alt}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Icons */}
      <div className={`fixed mt-20 h-screen right-2 md:right-0 top-8 md:top-1/2 -translate-y-1/2 z-[1000] flex flex-col justify-center items-center w-[40px] md:w-[90px] shadow-l  shadow-lg py-4`}>
        <div className={`hidden md:flex flex-col items-center gap-12 mb-20`}>
          {rightIcons.map((item, idx) => (
            <div key={idx} className="group relative flex items-center">
              <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 text-sm bg-white text-gray-500 font-semibold px-3 py-1 rounded shadow whitespace-nowrap
                before:content-[''] before:absolute before:left-full before:top-1/2 before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-l-white">
                {item.alt}
              </span>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF56A6]"
              >
                {item.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideIcons;

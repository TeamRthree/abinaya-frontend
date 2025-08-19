import React, { useState , useEffect  } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Icons (replace with actual paths later)
import HomeIcon from "../assets/home.svg";
import ServiceIcon from "../assets/services.svg";
import GalleryIcon from "../assets/gallery.svg";
import TestimonailIcon from "../assets/testimonials.svg";
import BlogIcon from "../assets/blogs.svg";
import ContactIcon from "../assets/contact.svg";

const navItems = [
    { id: "home", icon: HomeIcon, alt: "Home", link: "/" },
    { id: "services", icon: ServiceIcon, alt: "Services", link: "/services" },
    { id: "gallery", icon: GalleryIcon, alt: "Gallery", link: "/media" },
    { id: "testimonials", icon: TestimonailIcon, alt: "Testimonials", link: "/testimonials" },
    { id: "blogs", icon: BlogIcon, alt: "Blogs", link: "/blogs" },
    { id: "contact", icon: ContactIcon, alt: "Contact", link: "/contact" },
  ];

const SideIcons = () => {
  const location = useLocation();


  
  const [activeMenu, setActiveMenu] = useState(() => {
  const current = navItems.find((item) => item.link === location.pathname);
  return current ? current.id : "home";  // fallback to "home"
});


 // ✅ sync activeMenu when pathname changes
  useEffect(() => {
    const current = navItems.find((item) => item.link === location.pathname);
    setActiveMenu(current ? current.id : "home");
  }, [location.pathname]);



  const leftIcons = [
    { icon: HomeIcon, alt: "Home", link: "/" },
    { icon: ServiceIcon, alt: "Services", link: "/services" },
    { icon: GalleryIcon, alt: "Gallery", link: "/media" },
    { icon: TestimonailIcon, alt: "Testimonials", link: "/testimonials" },
    { icon: BlogIcon, alt: "Blogs", link: "/blogs" },
    { icon: ContactIcon, alt: "Contact", link: "/contact" },
  ];

  const rightIcons = [
    {
      icon: <FaYoutube size={30} />,
      alt: "YouTube",
      link: "https://youtube.com/@drmhabinaya?si=M52q8bDA5778yEp2",
    },
    {
      icon: <RiInstagramFill size={30} />,
      alt: "Instagram",
      link: "https://www.instagram.com/dr.m.h.abinaya?igsh=MWN3bXU1MHBzbTlkaA==",
    },
    {
      icon: <FaLinkedin size={30} />,
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/abinaya-baskaran-685195353",
    },
    {
      icon: <FaFacebookF size={30} />,
      alt: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100063985333184",
    },
  ];

  return (
    <>
      {/* Left Icons */}
      <div className="hidden  fixed mt-20 h-screen justify-center left-2 md:left-0 top-8 md:top-1/2 -translate-y-1/2 z-[1000] md:flex flex-col items-center w-[40px] md:w-[90px] shadow-r shadow-lg py-4">
        <div className="hidden md:flex flex-col items-center gap-12 mb-20">
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
                    className="w-6 h-6 cursor-pointer"
                  />
                </Link>

                {/* Tooltip */}
                <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-sm bg-white text-gray-500 font-semibold px-3 py-1 rounded shadow whitespace-nowrap before:content-[''] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-r-white">
                  {item.alt}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Icons */}
      <div className="hidden fixed mt-20 h-screen right-2 md:right-0 top-8 md:top-1/2 -translate-y-1/2 z-[1000] md:flex flex-col justify-center items-center w-[40px] md:w-[90px] shadow-l shadow-lg py-4">
        <div className="hidden md:flex flex-col items-center gap-12 mb-20">
          {rightIcons.map((item, idx) => (
            <div key={idx} className="group relative flex items-center">
              {/* Tooltip */}
              <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 text-sm bg-white text-gray-500 font-semibold px-3 py-1 rounded shadow whitespace-nowrap before:content-[''] before:absolute before:left-full before:top-1/2 before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-l-white">
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

      
      {/* === Mobile Bottom Nav === */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-[1000] flex md:hidden justify-around items-center py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.link;

          return (
            <div key={item.id} className="relative flex flex-col items-center">
              <Link
                to={item.link}
                onClick={() => setActiveMenu(item.id)}
                className={`flex flex-col items-center text-xs ${
                  isActive ? "text-pink-500" : "text-gray-400"
                }`}
              >
                {/* Icon */}
                <motion.div
                  animate={
                    activeMenu === item.id
                      ? { y: -30, backgroundColor: "#fce7f3" }
                      : { y: 0, backgroundColor: "transparent" }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-2 rounded-xl"
                >
                  <img src={item.icon} alt={item.alt} className="w-6 h-6" />
                </motion.div>
              </Link>

              {/* Floating Label */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={
                  activeMenu === item.id
                    ? { opacity: 1, y: 60 }
                    : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.3 }}
                className="absolute -top-10 text-xs font-light  text-pink-600"
              >
                {item.alt}
              </motion.span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideIcons;

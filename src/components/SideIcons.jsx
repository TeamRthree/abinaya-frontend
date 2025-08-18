import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// Icons
import HomeIcon from "../assets/home.svg";
import ServiceIcon from "../assets/services.svg";
import GalleryIcon from "../assets/gallery.svg";
import TestimonailIcon from "../assets/testimonials.svg";
import BlogIcon from "../assets/blogs.svg";
import ContactIcon from "../assets/contact.svg";

const SideIcons = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);

  const navItems = [
    { id: "home", icon: HomeIcon, alt: "Home", link: "/" },
    { id: "services", icon: ServiceIcon, alt: "Services", link: "/services" },
    { id: "gallery", icon: GalleryIcon, alt: "Gallery", link: "/media" },
    { id: "testimonials", icon: TestimonailIcon, alt: "Testimonials", link: "/testimonials" },
    { id: "blogs", icon: BlogIcon, alt: "Blogs", link: "/blogs" },
    { id: "contact", icon: ContactIcon, alt: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* Desktop Sidebars */}
      <div className="hidden md:block">{/* keep your left + right sidebars */}</div>

      {/* Mobile Bottom Nav */}
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
                {/* Normal Icon */}
                <motion.div
                  animate={
                    activeMenu === item.id
                      ? { y: -30, backgroundColor: "#fce7f3" } // float + bg when active
                      : { y: 0, backgroundColor: "transparent" }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`p-2 rounded-xl`}
                >
                  <img src={item.icon} alt={item.alt} className="w-6 h-6" />
                </motion.div>
              </Link>

              {/* Label fades in only when active */}
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={
                  activeMenu === item.id
                    ? { opacity: 1, y: 60 }
                    : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.3 }}
                className="absolute -top-10 text-xs font-mediu text-pink-600"
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

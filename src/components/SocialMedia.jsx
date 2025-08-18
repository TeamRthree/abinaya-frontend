import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const socialItems = [
  {
    id: "yt",
    icon: <FaYoutube size={26} />,
    alt: "YouTube",
    link: "https://youtube.com/@drmhabinaya?si=M52q8bDA5778yEp2",
  },
  {
    id: "ig",
    icon: <RiInstagramFill size={26} />,
    alt: "Instagram",
    link: "https://www.instagram.com/dr.m.h.abinaya?igsh=MWN3bXU1MHBzbTlkaA==",
  },
  {
    id: "li",
    icon: <FaLinkedin size={26} />,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/abinaya-baskaran-685195353",
  },
  {
    id: "fb",
    icon: <FaFacebookF size={26} />,
    alt: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100063985333184",
  },
];

export default function SocialMedia() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Framer Motion variants
  const container = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const item = {
    open: { opacity: 1, y: 0, scale: 1 },
    closed: { opacity: 0, y: 20, scale: 0.8 },
  };

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-24 right-4 z-50 flex flex-col items-center md:hidden"
    >
      {/* Social Icons */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={container}
            className="mb-3 flex flex-col items-center space-y-3"
          >
            {socialItems.map((item) => (
              <motion.a
                key={item.id}
                variants={item}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ECECEC] rounded-full p-3 shadow-md text-pink-500 hover:scale-110 transition-transform"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-12 h-12 shadow-xl rounded-full flex items-center justify-center transition-colors duration-300 ${
          open ? "bg-[#26346C] text-white" : "bg-white text-pink-500"
        }`}
      >
        {open ? <IoClose size={22} /> : <BsThreeDots size={26} />}
      </button>
    </div>
  );
}

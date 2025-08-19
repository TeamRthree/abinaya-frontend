import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import BackToTop from "./BackToTop";
import { useRef } from "react";


const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Media", path: "/media" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Blog", path: "/blogs" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {


const messageRef = useRef();

const handleWhatsAppSend = () => {
  const message = messageRef.current.value.trim();
  if (!message) return;

  const phoneNumber = "917305056693"; // Use your WhatsApp number in international format (no +)
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");

  // Optional: clear input after send
  messageRef.current.value = "";
};


  return (
    <footer className="bg-[#FF77B7] md:mx-23 text-white px-4 md:px-24  pt-12 pb-24 md:pb-6">
      <div className="flex justify-between items-center md:items-start flex-col md:flex-row">
        {/* Left Column */}
        <div className="flex">
          <div className="flex justify-between flex-col">
            <div>
<h2 className="text-[26px] font-bold ">Dr. M. H. Abinaya</h2>
          <p className="mb-4 font-light text-[14px]">
            Fertility | Obstetrics | Gynaecology
          </p>
            </div>
            

          <div className="flex gap-8 mt-5 text-xl">
  <a
    href="https://www.linkedin.com/in/abinaya-baskaran-685195353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:text-white/80 transition text-[24px]"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://www.facebook.com/profile.php?id=100063985333184&mibextid=ZbWKwL"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="hover:text-white/80 transition text-[24px]"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.instagram.com/dr.m.h.abinaya?igsh=MWN3bXU1MHBzbTlkaA=="
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="hover:text-white/80 transition text-[24px]"
  >
    <RiInstagramFill />
  </a>
  <a
    href="https://youtube.com/@drmhabinaya?si=M52q8bDA5778yEp2"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="hover:text-white/80 transition text-[24px]"
  >
    <FaYoutube />
  </a>
</div>

          </div>
        </div>

{/* address */}
        <div className="h-full mt-6 md:mt-0 text-center md:text-start">
            <p className="font-semibold text-[18px] mb-2">Office</p>
            <div className="flex flex-col gap-4 justify-between">
<div className="md:mb-4 font-light  text-white/90">
            
            <p>15/6, Vidyodaya 1st Cross St,</p>
            <p>T. Nagar, Chennai-600017</p>
          </div>

          <div className="text-white/90 font-light">
            <p className="">+91 98406 52740</p>
            <a href="mailto:info@sairamclinic.in" className="underline block">
              info@sairamclinic.in
            </a>
          </div>
            </div>
            
          </div>

        {/* Quick Links */}
       <div className="text-center mt-6">
  <h3 className="font-semibold text-[18px] mb-2">Quick Links</h3>
  <ul 
    className="
      grid grid-cols-2 gap-8 
      md:grid-cols-1 md:gap-3
    "
  >
    {footerLinks.map((link, idx) => (
      <li key={idx}>
        <Link
          to={link.path}
          className="relative font-light text-white/90 group block text-center md:text-left"
        >
          <span className="hover-underline">{link.name}</span>
        </Link>
      </li>
    ))}
  </ul>
</div>


        <div className="flex flex-col justify-between">
            {/* Appointment Box */}
        <div className="py-12 md:py-0 text-center md:text-start">
          <h3 className="font-semibold text-[18px] mb-4 md:mb-2">Book an Appointment</h3>
          <div className="flex rounded-[6px] overflow-hidden w-full max-w-xs">
  <input
    type="text"
    ref={messageRef}
    placeholder="Send a Message"
    className="px-4 py-3 w-full bg-white text-black placeholder:text-gray-400"
  />
  <button
    onClick={handleWhatsAppSend}
    className="group bg-[#FF3F9A] text-white px-4 cursor-pointer transition-all duration-200 ease-in-out"
  >
    <FaArrowRight className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />
  </button>
</div>

        </div>

        {/* Practice Info */}
        <div className="text-center md:text-start">
          <h3 className="font-bold text-[16px] mb-4">Places of Practice</h3>
          <p className="mb-2 font-light">
            Sai Ram Fertility & Maternity Clinic
          </p>
          <div className="flex gap-6 space-y-2 text-white/90 text-sm">
            <p className="font-light">
              <span className="font-semibold">Mon – Sat</span><br />
              07:00 AM to 09:00 PM
            </p>
            <p className="font-light">
              <span className="font-semibold">Sun</span><br />
              08:00 AM – 01:00 PM
            </p>
          </div>
        </div>
        </div>

        <div className="hidden md:block">
            <BackToTop/>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-white/20 md:mt-10 pt-4 text-center text-[12px] md:text-[16px] text-neutral-100">
        Copyright © 2025 Dr. Abinaya M.H. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

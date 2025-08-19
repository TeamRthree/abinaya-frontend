import React from 'react'
import BookAppointmentForm from '../components/BookAppointmentForm'

const Contact = () => {
  return (
    <div className='md:w-7xl mx-auto px-4'>

      <div className="md:mt-16 w-full rounded-[5px] md:rounded-2xl overflow-hidden shadow-lg">
        <div className="relative">
          <img
            src="/images/faq-banner.png"
            alt="Consultation CTA"
            className="w-full h-[200px] md:h-[320px] object-fill md:object-cover"
          />
          <div className="absolute inset-0 bg-[#FF56A6]/20 flex flex-col items-center justify-center text-white text-center px-4">
            <h3 className="text-xl md:text-[36px] md:leading-11 font-semibold mb-2">
              Schedule a Consultation <br className="hidden md:block" />
              with Our Specialist?
            </h3>
            <p className="text-sm md:text-[24px] mb-4">
              A successful pregnancy starts with the right advice — book now.
            </p>
            <button className="bg-white text-[#E64771] px-5 py-2 rounded-[4px] font-medium text-[14px] md:text-[18px] transition-all duration-300 ease-in-out hover:bg-[#E64771] hover:text-white ">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-center text-3xl md:text-[36px] font-medium text-[#E64771] pt-16 mb-10">
        Contact Us
      </h2>

      <div className='flex flex-col md:flex-row gap-6 mb-16'>
        <div>
<BookAppointmentForm/>
        </div>
        
        <div className="md:w-[40%] flex flex-col justify-between gap-4 md:gap-0 ">
      {/* Location */}
      <div 
      style={{
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', // x=0, y=0 → all-around glow
  }}
      className="bg-white rounded-[4px] md:rounded-xl text-center px-4 py-9">
        <h3 className="text-[#E64771] text-[24px] md:text-[32px] font-bold mb-1">Location</h3>
        <p className="text-[16px] md:text-[20px] text-[#3A405B]/70 leading-snug">
          15/6, Vidyodaya First Cross St, <br />
          T.Nagar, Chennai-600 017
        </p>
      </div>

      {/* Opening Hours */}
      <div 
      style={{
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', // x=0, y=0 → all-around glow
  }}
      className="bg-white rounded-[4px] md:rounded-xl text-center px-4 py-9">
        <h3 className="text-[#E64771] text-[24px] md:text-[32px] font-bold mb-1">Opening Hours</h3>
        <div className='flex items-center justify-center gap-10'>
          <div>
<p className="text-[16px] md:text-[20px] text-[#3A405B]/70 leading-snug font-bold">Mon to Sat</p>
<p className="text-[16px] md:text-[20px] text-[#3A405B]/70 leading-snug">7 AM - 9 PM</p>
        </div>
        <div>
<p className="text-[16px] md:text-[20px] text-[#3A405B]/70 leading-snug font-bold">Sun</p>
<p className="text-[16px] md:text-[20px] text-[#3A405B]/70 leading-snug">8 AM - 1 PM</p>
        </div>
        </div>
        
      </div>

      {/* Contact */}
      <div 
      style={{
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', // x=0, y=0 → all-around glow
  }}
      className="bg-white rounded-[4px] md:rounded-xl text-center px-4 py-9">
        <h3 className="text-[#E64771] text-[24px] md:text-[32px] font-bold mb-1">Contact</h3>
        <p className="text-[16px] md:text-[20px] text-[#3A405B]/70 leading-snug mb-1">
          +91 93423 89585
        </p>
        <p className="text-[16px] md:text-[20px] text-[#3A405B]/70">doctor@sairamclinic.com</p>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Contact
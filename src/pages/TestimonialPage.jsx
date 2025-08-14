import { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import api from "../api/api"; // ✅ use axios instance for live backend
import BookAppointmentForm from "../components/BookAppointmentForm";
import VideoTestimonials from "../components/VideoTestimonials";

const TestimonialPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await api.get("/testimonials");
        setTestimonials(res.data || []);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  const sortedTestimonials = [...testimonials].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="w-7xl mx-auto py-20 px-4 md:px-10">
      <div className="w-full rounded-2xl overflow-hidden shadow-lg">
        <div className="relative">
          <img
            src="/images/faq-banner.png"
            alt="Consultation CTA"
            className="w-full h-[320px] object-cover"
          />
          <div className="absolute inset-0 bg-[#FF56A6]/20 flex flex-col items-center justify-center text-white text-center px-4">
            <h3 className="text-xl md:text-[36px] leading-11 font-semibold mb-2">
              Schedule a Consultation <br className="hidden md:block" />
              with Our Specialist?
            </h3>
            <p className="text-sm md:text-[24px] mb-4">
              A successful pregnancy starts with the right advice — book now.
            </p>
            <button className="bg-white text-[#E64771] px-5 py-2 rounded-[4px] font-medium text-[18px] transition-all duration-300 ease-in-out hover:bg-[#E64771] hover:text-white ">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#E64771] mb-[10px] mt-[60px]">
        What Our Patients Say
      </h2>
      <p className="mb-[50px] text-[20px] text-[#3A405B]/70 text-center">
        Real stories from real patients who’ve trusted us with their care.
      </p>

      <div className="hidden">
        <VideoTestimonials />
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
        {sortedTestimonials.slice(0, visibleCount).map((t, i) => (
          <div
            style={{
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
            key={i}
            className="bg-white p-6 rounded-xl break-inside-avoid border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/images/author-2.jpg"
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[14px] text-black">{t.name}</p>
                <p className="text-[14px] text-[#354450]">{t.date}</p>
              </div>
            </div>
            <div className="flex items-center text-[#FFAC33] mb-3">
              {[...Array(5)].map((_, idx) =>
                idx < t.rating ? <FaStar key={idx} /> : <FaRegStar key={idx} />
              )}
            </div>
            <p className="text-[16px] text-[#3A405B]/80 leading-relaxed">
              {t.content}
            </p>
          </div>
        ))}
      </div>

      {visibleCount < sortedTestimonials.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="bg-[#FF56A6] font-medium text-[18px] text-[#FEFEFE] px-4 py-2 rounded-[6px] border hover:border-[#FF56A6] hover:text-[#FF56A6] hover:bg-transparent transition-all duration-300 ease-in-out"
          >
            View More
          </button>
        </div>
      )}

      <div>
        <h2 className="text-center text-3xl md:text-[36px] font-medium text-[#E64771] pt-[60px] mb-10">
          Ready to Start Your Health Journey?
        </h2>
        <BookAppointmentForm />
      </div>
    </section>
  );
};

export default TestimonialPage;

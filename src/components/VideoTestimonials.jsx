
import { videoTestimonials } from "../data/testimonialData";
import { IoPlayCircle } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

const VideoTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalVideo, setModalVideo] = useState(null);


   // ✅ Disable body scroll when modal is open
  useEffect(() => {
    if (modalVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalVideo]);

  const handleDotClick = (i) => {
    setActiveIndex(i);
  };

  const getPositionClass = (i) => {
    const total = videoTestimonials.length;
    if (i === activeIndex) return "z-20 scale-115";
    if (i === (activeIndex + 1) % total) return "translate-x-[90%] z-10 scale-85 opacity-80";
    if (i === (activeIndex - 1 + total) % total) return "-translate-x-[90%] z-10 scale-85 opacity-80";
    return "opacity-0 pointer-events-none scale-90";
  };

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="relative w-full max-w-5xl mx-auto h-[320px] md:h-[340px] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {videoTestimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`absolute w-[280px] md:w-[320px] h-[300px] transition-all duration-500 ease-in-out transform ${getPositionClass(i)}`}
            >
              <div
                style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
                className="bg-white p-2 overflow-hidden border"
              >
                <div className="relative w-full overflow-hidden rounded-[5px] h-[180px] bg-black">
                  <div
                    className="w-full h-full cursor-pointer relative"
                    onClick={() => setModalVideo(testimonial.video)}
                  >
                    <img
                      src={testimonial.thumbnail}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <IoPlayCircle size={60} color="white" />
                    </div>
                  </div>
                </div>
                <div className="py-3 px-4 text-center">
                  <p className="font-semibold text-[#26346C]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.age} Age</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {videoTestimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === activeIndex ? "bg-[#E64771]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Modal */}
      {modalVideo && (
        <div className="fixed inset-0 bg-black/70 z-[1001] flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-md shadow-xl w-[90%] md:w-[720px] max-w-[90vw]">
            <button
              onClick={() => setModalVideo(null)}
              className="absolute top-2 right-2 text-black text-2xl z-50"
            >
              <IoClose />
            </button>
            <video
              src={modalVideo}
              controls
              autoPlay
              className="w-full h-[300px] md:h-[400px] rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;

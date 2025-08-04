
import { HiArrowUp } from "react-icons/hi";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative flex flex-col items-center gap-4 z-50 group">
      {/* Tooltip */}
      

      {/* Button */}
      <button
        onClick={scrollToTop}
        className="group w-14 h-14 flex items-center justify-center rounded-full border-2 text-[#FF77B7] border-[#fff] bg-white  hover:bg-[#FF77B7] ease-in-out hover:text-white transition-all duration-100"
      >
        <HiArrowUp size={22} />
      </button>

      <span className=" mb-2  opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm text-white font-semibold">
        Move Top
      </span>
    </div>
  );
};

export default BackToTop;

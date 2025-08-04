import { useState, useEffect } from "react";
import { FaSearch, FaYoutube, FaInstagram } from "react-icons/fa";
import GalleryHero from "./GalleryHero";


// Sample YouTube and Instagram data
const videoData = [
  { type: "youtube", title: "Stress-Free Sleep எப்படிச் சாத்தியம்?", url: "https://www.youtube.com/embed/abc1" },
  { type: "youtube", title: "ஆண் குழந்தை கூட நிச்சயமா?", url: "https://www.youtube.com/embed/abc2" },
  { type: "youtube", title: "Gynecology & Gut Health பற்றி...", url: "https://www.youtube.com/embed/abc3" },
  { type: "youtube", title: "Another YouTube Video", url: "https://www.youtube.com/embed/abc4" },
  { type: "youtube", title: "Another One", url: "https://www.youtube.com/embed/abc5" },
  { type: "instagram", title: "Postnatal Tips", url: "https://www.instagram.com/reel/xyz1/" },
  { type: "instagram", title: "Period Care", url: "https://www.instagram.com/reel/xyz2/" },
  { type: "instagram", title: "Self Checkups", url: "https://www.instagram.com/reel/xyz3/" },
  { type: "instagram", title: "Healthy Uterus", url: "https://www.instagram.com/reel/xyz4/" },
  { type: "youtube", title: "Stress-Free Sleep எப்படிச் சாத்தியம்?", url: "https://www.youtube.com/embed/abc1" },
  { type: "youtube", title: "ஆண் குழந்தை கூட நிச்சயமா?", url: "https://www.youtube.com/embed/abc2" },
  { type: "youtube", title: "Gynecology & Gut Health பற்றி...", url: "https://www.youtube.com/embed/abc3" },
  { type: "youtube", title: "Another YouTube Video", url: "https://www.youtube.com/embed/abc4" },
  { type: "youtube", title: "Another One", url: "https://www.youtube.com/embed/abc5" },
  { type: "instagram", title: "Postnatal Tips", url: "https://www.instagram.com/reel/xyz1/" },
  { type: "instagram", title: "Period Care", url: "https://www.instagram.com/reel/xyz2/" },
  { type: "instagram", title: "Self Checkups", url: "https://www.instagram.com/reel/xyz3/" },
  { type: "instagram", title: "Healthy Uterus", url: "https://www.instagram.com/reel/xyz4/" },
   { type: "instagram", title: "Postnatal Tips", url: "https://www.instagram.com/reel/xyz1/" },
  { type: "instagram", title: "Period Care", url: "https://www.instagram.com/reel/xyz2/" },
  { type: "instagram", title: "Self Checkups", url: "https://www.instagram.com/reel/xyz3/" },
  { type: "instagram", title: "Healthy Uterus", url: "https://www.instagram.com/reel/xyz4/" },
];

const MediaGallerySection = () => {
  const [activeTab, setActiveTab] = useState("media");
  const [platform, setPlatform] = useState("youtube"); // youtube | instagram
  const [searchQuery, setSearchQuery] = useState("");

  const handlePlatformChange = (platformType) => {
    setPlatform(platformType);
    setSearchQuery("");
  };

  const filteredVideos = videoData
    .filter((item) => item.type === platform)
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const latestUpdates = filteredVideos.slice(0, 3);
  const mediaVideos = filteredVideos.slice(3);



const [visibleCount, setVisibleCount] = useState(0);

// reset visible count when platform changes
useEffect(() => {
  setVisibleCount(platform === "youtube" ? 6 : 8);
}, [platform, searchQuery]);

const handleViewMore = () => {
  setVisibleCount((prev) =>
    platform === "youtube" ? prev + 6 : prev + 8
  );
};

const visibleMediaVideos = mediaVideos.slice(0, visibleCount);


  return (
    <section className="w-full px-4 pt-10 pb-[125px] max-w-7xl mx-auto">
      {/* Tabs and Search */}
      <div className="flex items-center rounded-[6px] border-[0.2px] border-black/20 overflow-hidden w-full mb-10">
      <div className="flex justify-start w-[70%]">
<button
          className={`px-24 rounded-[6px] py-3 font-medium ${
            activeTab === "media"
              ? "bg-[#FF56A6] text-white"
              : "bg-white text-gray-500"
          }`}
          onClick={() => setActiveTab("media")}
        >
          Media
        </button>
        <button
          className={`px-24 rounded-[6px] py-3 font-medium ${
            activeTab === "gallery"
              ? "bg-[#FF56A6] text-white"
              : "bg-white text-gray-500"
          }`}
          onClick={() => setActiveTab("gallery")}
        >
          Gallery
        </button>
      </div>
        
        <div className="flex items-center w-[30%]  rounded-[4px] me-1 px-4  bg-white">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 text-gray-700 outline-none"
          />
          <FaSearch className="text-gray-400" />
        </div>
      </div>

      {/* Media Tab Content */}
      {activeTab === "media" && (
        <>
          {/* Latest Updates */}
          <h2 className="text-center text-[#E64771] text-[36px] font-bold mb-6">
            Latest Updates
          </h2>
          <div
  className={`grid gap-6 mb-10 ${
    platform === "instagram" ? "md:grid-cols-4" : "md:grid-cols-3"
  }`}
>
  {latestUpdates.map((video, idx) => (
    <div
      key={idx}
      className="rounded-[10px] overflow-hidden p-2 border border-[#3A405B]/30"
    >
      {video.type === "youtube" ? (
        <>
  <iframe
    src={video.url}
    title={video.title}
    className="w-full h-56 rounded-[5px]"
    frameBorder="0"
    allowFullScreen
  ></iframe>
  <p className="p-3 text-sm font-medium text-gray-800">{video.title}</p>
</>

      ) : (
        <a href={video.url} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/instagram-placeholder.jpg"
            alt={video.title}
            className="w-full h-[440px] object-cover rounded-[5px]"
          />
        </a>
      )}
    </div>
  ))}
</div>

          {/* Media's Section */}
          <h2 className="text-center text-[#E64771] text-[30px] font-bold mb-6">
            Medias
          </h2>

          {/* Platform Switcher */}
          <div className="flex justify-center items-center mb-6">
  <div className="flex rounded-xl overflow-hidden shadow-md border border-[#E5E5E5]">
    {/* YouTube Button */}
    <button
      className={`w-32 h-20 flex items-center justify-center transition-all duration-300 ${
        platform === "youtube" ? "bg-white" : "bg-[#F9F9F9]"
      }`}
      onClick={() => handlePlatformChange("youtube")}
    >
      <img
        src="/images/youtube.svg"
        alt="YouTube"
        className={`transition-all duration-300 ${
          platform === "youtube" ? "scale-120 opacity-100" : "scale-80 opacity-50"
        } w-10 h-10`}
      />
    </button>

    {/* Instagram Button */}
    <button
      className={`w-32 h-20 flex items-center justify-center transition-all duration-300 ${
        platform === "instagram" ? "bg-white" : "bg-[#F9F9F9]"
      }`}
      onClick={() => handlePlatformChange("instagram")}
    >
      <img
        src="/images/instagram.svg"
        alt="Instagram"
        className={`transition-all duration-300 ${
          platform === "instagram" ? "scale-120 opacity-100" : "scale-80 opacity-50"
        } w-8 h-8`}
      />
    </button>
  </div>
</div>



          {/* Grid of Videos */}
          {/* Grid of Videos */}
<div
  className={`grid gap-6 ${
    platform === "instagram" ? "md:grid-cols-4" : "md:grid-cols-3"
  }`}
>
  {visibleMediaVideos.map((video, idx) => (
    <div
      key={idx}
      className="rounded-[10px] overflow-hidden border p-2 border-[#3A405B]/30 animate-fade-up"
    >
      {video.type === "youtube" ? (
        <>
  <iframe
    src={video.url}
    title={video.title}
    className="w-full rounded-[5px] h-56"
    frameBorder="0"
    allowFullScreen
  ></iframe>
  <p className="p-3 text-sm font-medium text-gray-800">{video.title}</p>
</>

      ) : (
        <a href={video.url} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/instagram-placeholder.jpg"
            alt={video.title}
            className="w-full h-[440px] object-cover"
          />
        </a>
      )}
    </div>
  ))}
</div>

{/* View More Button */}
{visibleCount < mediaVideos.length && (
  <div className="flex justify-center mt-10">
    <button
            onClick={handleViewMore}
            className="bg-[#FF56A6] font-medium text-[18px] text-[#FEFEFE] px-4 py-2 rounded-[6px] border hover:border-[#FF56A6] hover:text-[#FF56A6] hover:bg-transparent transition-all duration-300 ease-in-out"
          >
            View More
          </button>
  </div>
)}

        </>
      )}

      {/* Gallery Tab (placeholder for now) */}
      {activeTab === "gallery" && (
        <div className="text-center py-10 text-gray-600">
         <GalleryHero/>
        </div>
      )}
    </section>
  );
};

export default MediaGallerySection;

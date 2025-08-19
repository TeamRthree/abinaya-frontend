import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import GalleryHero from "./GalleryHero";
import GallerySection from "./GallerySection";
import api from "../api/api";


const instagramData = [
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
  const [platform, setPlatform] = useState("youtube");
  const [searchQuery, setSearchQuery] = useState("");
  const [youtubeData, setYoutubeData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);

 useEffect(() => {
  if (platform === "youtube") {
    api
      .get("/youtube-videos")
      .then((res) => {
        setYoutubeData(res.data);
      })
      .catch((err) => console.error("Error fetching YouTube videos:", err));
  }
}, [platform]);

  useEffect(() => {
    setVisibleCount(platform === "youtube" ? 6 : 8);
  }, [platform, searchQuery]);

  const handlePlatformChange = (type) => {
    setPlatform(type);
    setSearchQuery("");
  };

const allMedia = platform === "youtube" ? youtubeData : instagramData;

const filtered = allMedia.filter((item) =>
  item.title.toLowerCase().includes(searchQuery.toLowerCase())
);



 const latestUpdates = filtered.slice(0, 3);
const mediaVideos = filtered; // use all videos in grid, regardless of how many are in latest

  const visibleMediaVideos = mediaVideos.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + (platform === "youtube" ? 6 : 8));
  };


  console.log("Filtered:", filtered);
console.log("Media Videos (slice 3+):", mediaVideos);
console.log("Visible Media Videos:", visibleMediaVideos);

// Utility function
const truncateTitle = (title, wordLimit = 5) => {
  const words = title.split(" ");
  if (words.length <= wordLimit) return title;
  return words.slice(0, wordLimit).join(" ") + "...";
};


  return (
    <section className="w-full px-4 md:pt-10 pb-[125px] max-w-7xl mx-auto">
      {/* Tabs and Search */}
      <div className="flex items-center rounded-[2px] md:rounded-[6px] border-[0.2px] border-black/20 overflow-hidden w-full mb-4 md:mb-10">
        <div className="flex justify-start md:w-[70%]">
          <button
            className={`px-[14px] md:px-24 rounded-[2px] md:rounded-[6px] py-[8px] md:py-3 font-medium ${activeTab === "media" ? "bg-[#FF56A6] text-white" : "bg-white text-gray-500"}`}
            onClick={() => setActiveTab("media")}
          >
            Media
          </button>
          <button
            className={`px-[14px] md:px-24 rounded-[2px] md:rounded-[6px] py-[8px] md:py-3 font-medium ${activeTab === "gallery" ? "bg-[#FF56A6] text-white" : "bg-white text-gray-500"}`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>
        </div>

        <div className="flex items-center md:w-[30%] rounded-[4px] me-1 md:px-4 bg-white">
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
          <h2 className="text-center text-[#E64771] text-[24px] md:text-[36px] font-bold mb-6">
            Latest Updates
          </h2>
          <div className={`grid gap-6 mb-10 ${platform === "instagram" ? "grid-cols-2 md:grid-cols-4" : "md:grid-cols-3"}`}>
            {latestUpdates.map((video, idx) => (
              <div key={idx} className="rounded-[10px] overflow-hidden p-2 border border-[#3A405B]/20">
                {platform === "youtube" ? (
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={`https://img.youtube.com/vi/${video.video_id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full md:h-56 object-cover rounded-[5px]"
                    />
                    <p className="p-3 text-sm font-normal text-[#3A405B]/70">{truncateTitle(video.title)}</p>
                  </a>
                ) : (
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/images/instagram-placeholder.jpg"
                      alt={video.title}
                      className="w-full h-[220px] md:h-[440px] object-cover rounded-[5px]"
                    />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Media Section */}
          <h2 className="text-center text-[#E64771] text-[30px] font-bold mb-6">Medias</h2>

          {/* Platform Switcher */}
          <div className="flex justify-center items-center mb-6">
            <div className="flex rounded-xl overflow-hidden shadow-md border border-[#E5E5E5]">
              <button
                className={`w-24 h-12 md:w-32 md:h-20 flex items-center justify-center transition-all duration-300 ${
                  platform === "youtube" ? "bg-white" : "bg-[#F9F9F9]"
                }`}
                onClick={() => handlePlatformChange("youtube")}
              >
                <img
                  src="/images/youtube.svg"
                  alt="YouTube"
                  className={`transition-all duration-300 ${
                    platform === "youtube" ? "scale-120 opacity-100" : "scale-80 opacity-50"
                  } w-8 h-8 md:w-10 md:h-10`}
                />
              </button>
              <button
                className={`w-24 h-12 md:w-32 md:h-20 flex items-center justify-center transition-all duration-300 ${
                  platform === "instagram" ? "bg-white" : "bg-[#F9F9F9]"
                }`}
                onClick={() => handlePlatformChange("instagram")}
              >
                <img
                  src="/images/instagram.svg"
                  alt="Instagram"
                  className={`transition-all duration-300 ${
                    platform === "instagram" ? "scale-120 opacity-100" : "scale-80 opacity-50"
                  } w-6 h-6 md:w-8 md:h-8`}
                />
              </button>
            </div>
          </div>

          {/* Grid of Videos */}
          <div className={`grid gap-6 ${platform === "instagram" ? "md:grid-cols-4 grid-cols-2" : "md:grid-cols-3"}`}>
            {visibleMediaVideos.map((video, idx) => (
              <div key={idx} className="rounded-[10px] overflow-hidden border p-2 border-[#3A405B]/20 animate-fade-up">
                {platform === "youtube" ? (
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={`https://img.youtube.com/vi/${video.video_id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full md:h-56 object-cover rounded-[5px]"
                    />
                    <p className="p-3 text-sm font-normal text-[#3A405B]/70">{truncateTitle(video.title)}</p>
                  </a>
                ) : (
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/images/instagram-placeholder.jpg"
                      alt={video.title}
                      className="w-full h-[220px] md:h-[440px] object-cover rounded-[5px]"
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

      {/* Gallery Tab */}
      {activeTab === "gallery" && (
        <div className="text-center py-10 text-gray-600">
          <GalleryHero />
          <GallerySection/>
        </div>
      )}
    </section>
  );
};

export default MediaGallerySection;

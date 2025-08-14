import React, { useEffect, useState } from "react";
import api from "../api/api"; // make sure path is correct

const GallerySection = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(16);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await api.get("/gallery"); // using your api instance
        const imagesOnly = response.data.filter(item => item.type === "image");
        setGalleryItems(imagesOnly);
      } catch (error) {
        console.error("Gallery fetch failed:", error);
      }
    };

    fetchGallery();
  }, []);

  const visibleImages = galleryItems.slice(0, visibleCount);

  return (
    <section className="py-10 px-4 lg:px-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Gallery</h2>

      {visibleImages.length === 0 ? (
        <p className="text-center text-gray-500">No images available.</p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {visibleImages.map((image, index) => (
              <div key={index} className="w-[270px] h-[270px] overflow-hidden rounded-xl shadow">
                <img
                  src={image.file_path}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

          {visibleCount < galleryItems.length && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setVisibleCount(prev => prev + 16)}
                className="px-6 py-2 bg-[#3A405B] text-white rounded hover:bg-[#2c324d] transition"
              >
                View More
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default GallerySection;

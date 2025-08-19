import React from "react";

const galleryImages = [
  "/images/gallery1.jpg", // Large image
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
];

const GalleryHero = () => {
  return (
    <div className="md:py-10 px-4 mx-auto sm:px-10">
      <h2 className="text-pink-600 font-semibold text-[24px] text-start md:text-[34px] mb-4">
        Latest Photos
      </h2>

      {/* Responsive layout */}
      <div className="grid gap-4 md:grid-cols-4">
        {/* Mobile: Large top image full width */}
        {/* Desktop: Big image on left (col-span-2) */}
        <div className="md:col-span-2">
          <img
            src={galleryImages[0]}
            alt="Gallery Main"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Mobile: grid 2x2 under big image */}
        {/* Desktop: 2x2 grid on the right */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          {galleryImages.slice(1).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx + 2}`}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryHero;

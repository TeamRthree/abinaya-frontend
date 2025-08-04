import React from 'react';

const InstagramFeed = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-pink-600 mb-12">
        Feeds On Instagram
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 px-4 md:px-10">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="w-full aspect-[9/15] bg-gray-200 rounded-lg shadow-md animate-pulse"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;

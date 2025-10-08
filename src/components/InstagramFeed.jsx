import React from 'react';
import { Play } from 'lucide-react'; // using lucide-react icon set

const instagramData = [
  {
    thumbnail: 'https://res.cloudinary.com/dlwy94hlr/image/upload/v1759919113/instagram-feeds-1_rhwgb9.jpg',
    embed: 'https://www.instagram.com/reel/DO55CrnivJI/?utm_source=ig_web_copy_link',
  },
  {
    thumbnail: 'https://res.cloudinary.com/dlwy94hlr/image/upload/v1759919112/instagram-feeds-2_kpbsy9.jpg',
    embed: 'https://www.instagram.com/reel/C4vGu_TyT68/?utm_source=ig_web_copy_link',
  },
  {
    thumbnail: 'https://res.cloudinary.com/dlwy94hlr/image/upload/v1759919112/instagram-feeds-3_idr9zd.jpg',
    embed: 'https://www.instagram.com/reel/C5qUd-kyCHu/?utm_source=ig_web_copy_link',
  },
  {
    thumbnail: 'https://res.cloudinary.com/dlwy94hlr/image/upload/v1759919112/instagram-feeds-4_gst98w.jpg',
    embed: 'https://www.instagram.com/reel/DPRD_2HjzBt/?utm_source=ig_web_copy_link',
  },
];

const InstagramFeed = () => {
  return (
    <section className="py-[51px] md:py-16 max-w-6xl mx-auto bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-pink-600 mb-[51px] md:mb-12">
        Feeds On Instagram
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-14 px-4 md:px-10">
        {instagramData.map((post, index) => (
          <a
            key={index}
            href={post.embed}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full aspect-[9/15] rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={post.thumbnail}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
              <Play
                size={48}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
  
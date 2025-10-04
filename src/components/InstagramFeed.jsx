import React from 'react';
import { Play } from 'lucide-react'; // using lucide-react icon set

const instagramData = [
  {
    thumbnail: 'https://dl.fastvideosave.net/?url=https%3A%2F%2Fscontent-lax3-2.cdninstagram.com%2Fv%2Ft51.2885-15%2F552094555_18053496896536146_8909845335365843361_n.jpg%3Fstp%3Ddst-jpg_e15_fr_p1080x1080_tt6%26_nc_ht%3Dscontent-lax3-2.cdninstagram.com%26_nc_cat%3D106%26_nc_oc%3DQ6cZ2QF8DWu5jTJuylf8f2rD_VBRlb16-XgaDZIBWJ1XSg5cCvqKlkDkQ6hcvBcsc1v1-Y8%26_nc_ohc%3DQSjd285r11sQ7kNvwFfX1Es%26_nc_gid%3DptzHbO-rwa5vJZ_ESUfqkQ%26edm%3DAPs17CUBAAAA%26ccb%3D7-5%26oh%3D00_AfeQuWiF2bebxQ_6CoDKMYqOyolLqXONSjgbcZfTK5uOiw%26oe%3D68E55DBA%26_nc_sid%3D10d13b',
    embed: 'https://www.instagram.com/reel/DO55CrnivJI/?utm_source=ig_web_copy_link',
  },
  {
    thumbnail: 'https://dl.fastvideosave.net/?url=https%3A%2F%2Fscontent-bos5-1.cdninstagram.com%2Fv%2Ft51.2885-15%2F498245809_2183836055363555_1158714289189554621_n.jpg%3Fstp%3Ddst-jpg_e15_tt6%26_nc_ht%3Dscontent-bos5-1.cdninstagram.com%26_nc_cat%3D111%26_nc_oc%3DQ6cZ2QFEoZ-63mC-GRKfncrXhZpZdePfxjfaAiVL4VqE0PeXRCke0BYt6gY26zuXzqQEiPI%26_nc_ohc%3Dx2crZYtNj6UQ7kNvwH3NkO_%26_nc_gid%3DqtevyYWc-Z4vUeCxlEjP1g%26edm%3DAPs17CUBAAAA%26ccb%3D7-5%26oh%3D00_AfcgOtLbPxXkreYs4TF0ShsuMFc5LucJ_Z_BCw6wsQqwAg%26oe%3D68E574F3%26_nc_sid%3D10d13b',
    embed: 'https://www.instagram.com/reel/C4vGu_TyT68/?utm_source=ig_web_copy_link',
  },
  {
    thumbnail: 'https://dl.fastvideosave.net/?url=https%3A%2F%2Fscontent-lax3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2F503002231_3587265918234634_6738969677025819235_n.jpg%3Fstp%3Ddst-jpg_e15_tt6%26_nc_ht%3Dscontent-lax3-1.cdninstagram.com%26_nc_cat%3D110%26_nc_oc%3DQ6cZ2QEekjcqwQeTzwEbTkdCDO3Hja7Fllc1Kiy8llNganHtqTMDvTAynjNlg1UX_Xcl2Gg%26_nc_ohc%3DrI4plumrp8gQ7kNvwGnrvxL%26_nc_gid%3DjeGCeD1xJL21_ioK1PHzDg%26edm%3DAPs17CUBAAAA%26ccb%3D7-5%26oh%3D00_Afc2gpOGd43du043kY29REPdW2hpVU9aMMq403PNit9HRw%26oe%3D68E566DD%26_nc_sid%3D10d13b',
    embed: 'https://www.instagram.com/reel/C5qUd-kyCHu/?utm_source=ig_web_copy_link',
  },
  {
    thumbnail: 'https://dl.fastvideosave.net/?url=https%3A%2F%2Fscontent-dfw5-2.cdninstagram.com%2Fv%2Ft51.2885-15%2F558687704_18055014956536146_3633588954277464695_n.jpg%3Fstp%3Ddst-jpg_e15_fr_p1080x1080_tt6%26_nc_ht%3Dscontent-dfw5-2.cdninstagram.com%26_nc_cat%3D106%26_nc_oc%3DQ6cZ2QE2fcpPCzpTNYtjwRbo-3xxmvYUsECMT7LFgeM4KKfro2sYGhonkY38a5dER1hsfEE%26_nc_ohc%3D2UPFk0Hz4awQ7kNvwHeKypF%26_nc_gid%3D4AWMGPoodP4-VRZnT8Q0pA%26edm%3DAPs17CUBAAAA%26ccb%3D7-5%26oh%3D00_Afc3i9QSYOMgJVYxLgCyNt6q1yVWiIX2Xdy44byeqmc1Qg%26oe%3D68E5599E%26_nc_sid%3D10d13b',
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
  
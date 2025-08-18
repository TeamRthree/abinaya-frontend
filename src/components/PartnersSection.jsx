const partners = [
  { name: "Sai Ram", src: "/images/sairam.svg" },
  { name: "Apollo", src: "/images/apollo.svg" },
  { name: "Dr. Mehta's", src: "/images/mehta.svg" },
  { name: "Cloudnine", src: "/images/cloudnine.svg" },
  { name: "Motherhood", src: "/images/motherhod.svg" },
];

const PartnersSection = () => {
  return (
    <section className="w-full py-12 bg-white text-center">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-white via-pink-500 to-white text-white text-lg md:text-[24px] font-semibold py-3">
        Associated Hospitals
      </div>

      {/* Logo Grid */}
      <div className="grid gap-y-10 md:flex md:justify-center md:gap-16 py-10 px-4">
        {/* First row - 3 logos */}
        <div className="col-span-full flex justify-center gap-10 md:gap-16">
          {partners.slice(0, 3).map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={partner.src}
                alt={partner.name}
                className="h-12 sm:h-16 md:h-20 object-contain transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Second row - 2 logos */}
        <div className="col-span-full flex justify-center gap-10 md:gap-16">
          {partners.slice(3).map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={partner.src}
                alt={partner.name}
                className="h-12 sm:h-16 md:h-20 object-contain transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

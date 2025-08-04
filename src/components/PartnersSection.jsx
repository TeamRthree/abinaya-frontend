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
      <div className="flex  items-center justify-center bg-white gap-40 py-[51px] ">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={partner.src}
              alt={partner.name}
              className="h-20 object-contain  transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;

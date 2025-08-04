const AboutSection = () => {
  return (
    <section className="w-full xl:w-6xl mx-auto py-12 md:py-20 bg-white relative">
      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col mb-20 md:flex-row items-center gap-10 relative">
        {/* Left: Doctor Image */}
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 md:w-[281px] md:h-[385px] rounded-full border border-[#FF56A6] shadow-lg mx-auto md:mx-0">
            <img
              src="/images/doctor-2.jpg"
              alt="Dr. M. H. Abinaya"
              className="w-full h-full object-cover rounded-full p-4"
            />
            <img
              src="/images/star.svg"
              style={{ animationDelay: '0s' }}
              className="absolute -top-4 -left-4 w-5 h-5 animate-float-1"
              alt="decor star"
            />
            <img
              src="/images/star.svg"
              style={{ animationDelay: '0.5s' }}
              className="absolute bottom-0 right-0 w-5 h-5 animate-float-2"
              alt="decor star"
            />
            <span
            style={{ animationDelay: '1s' }} className="absolute bottom-10 -left-4 w-4 h-4 bg-[#FF99C9] rounded-full opacity-60 animate-float-3"></span>
        <span
        style={{ animationDelay: '1.3s' }} className="absolute top-6 right-2 w-6 h-6 bg-[#FF99C9] rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2 animate-float-4"></span>
          </div>
        </div>

<img
              src="/images/mother-vector.png"
              className="absolute top-37 right-0"
              alt="decor star"
            />

        {/* Right: Info */}
        <div className="flex-1">
          <h2 className="text-xl md:text-[36px] font-bold text-[#3A405B]">
            Dr. M. H. Abinaya
          </h2>
          <p className="mt-2 text-[20px] text-[#3A405B] font-medium">
            M.B.B.S, DNB (OG), Advanced Fertility Training (Singapore), <br />
            Certificate In Ultrasound Imaging
          </p>
          <div className="inline-block bg-[#FF56A6] text-white text-[20px] font-bold px-[15px] py-[10px] mt-4 ">
            Fertility | Obstetrics | Gynaecology
          </div>
          <p className="mt-4 text-[20px] text-[#3A405B]/80 font-medium mb-2">22+ Years Of Experience</p>
        </div>

        {/* Optional: Pregnant lady vector */}
        <img
          src="/about/lady-decor.svg"
          className="absolute right-0 bottom-0 hidden md:block w-[180px] opacity-40"
          alt="pregnant illustration"
        />
      </div>

      {/* Description Card */}
      <div style={{
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', // x=0, y=0 → all-around glow
  }} className="max-w-6xl z-40 mx-auto mt-12 bg-white rounded-xl border border-[#EA3C60]/80 px-6 md:px-10 py-16 text-gray-700 leading-relaxed">
        <h3 className="text-lg md:text-[32px] font-bold text-[#3A405B] mb-4">About Dr. M. H. Abinaya</h3>
        <p className="mb-4 text-[20px] font-light text-[#3A405B]/70 leading-[34px]">
          Dr.M.H.Abinaya is a skilled specialist in fertility, obstetrics and gynaecology with more than 20 years of experience.
          She provides guidance and solace to couples struggling with infertility through various procedures from ovulation induction, IUI and IVF.
        </p>
        <p className="mb-4 text-[20px] font-light text-[#3A405B]/70 leading-[34px]">
          Dr.Abinaya is a believer in patients having normal deliveries and is known for providing sensible and comprehensive guidance to her patients.
          She has a proven track record of dealing with critical issues during pregnancy such as heart disease, anaemia, antepartum bleeding and postpartum bleeding.
        </p>
        <p className=" text-[20px] font-light text-[#3A405B]/70 leading-[34px]">
          Dr.Abinaya completed an advanced fertility course in Singapore and a certificate in ultrasound imaging. She completed her DNB(OG) from Apollo Hospitals and MBBS from Trichy Medical College.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

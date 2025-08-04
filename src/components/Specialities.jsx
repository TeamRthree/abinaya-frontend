// src/components/Specialities.jsx

import { useNavigate, useLocation } from 'react-router-dom';

const specialities = [
  {
    title: 'Cosmetic Gynecology',
    desc: 'Vaginal Rejuvenation, Labiaplasty, Hymenoplasty, Vaginal Tightening (Surgical or Non-Surgical), Perineoplasty, Labial fat filling, Vulva Skin Lightening, Laser Vaginal Tightening, Stretch Mark Removal.',
    icon: '/images/cosmetic.svg',
    hoverIcon: '/images/cosmetic-white.svg',
    id: 'cosmetic-gynecology'
  },
  {
    title: 'Fertility',
    desc: 'Ovulation Induction, Follicular Tracking, IUI, IVF, ICSI, Donor Sperm, Donor Eggs, Egg Freezing, Embryo Freezing, Surrogacy',
    icon: '/images/fertility.svg',
    hoverIcon: '/images/fertility-white.svg',
    id: 'fertility'
  },
  {
    title: 'Obstetrics',
    desc: 'Normal Delivery, Cesarean Section, Family Planning, Contraception, High Risk Obstetrics, Twin Deliveries',
    icon: '/images/obstetrics.svg',
    hoverIcon: '/images/obstetrics-white.svg',
    id: 'obstetrics'
  },
  {
    title: 'Robotic Surgery',
    desc: 'Tubal Ligation, Hysterectomy, Myomectomy, Ovarian Cystectomy',
    icon: '/images/robotic.svg',
    hoverIcon: '/images/robotic-white.svg',
    id: 'robotic-surgery'
  },
  {
    title: 'Gynecology',
    desc: 'Irregular Periods, PCOD, Fibroids, Endometriosis, Adenomyosis, White Discharge/Leukorrhea, Uterus Cancer, Ovaries Cancer, Cervix Cancer, Mirena Insertion',
    icon: '/images/gynecology.svg',
    hoverIcon: '/images/gynecology-white.svg',
    id: 'gynecology'
  },
  {
    title: 'Laparoscopic Surgery',
    desc: 'Tubal Ligation, Tubal Recanalization, Diagnostic Hysterolaparoscopy, Laparoscopic Myomectomy, Laparoscopic Hysterectomy, Laparoscopic Ovarian Cystectomy, Hysteroscopic Septal Resection, Hysteroscopic Polypectomy',
    icon: '/images/laparoscopic.svg',
    hoverIcon: '/images/laparoscopic-white.svg',
    id: 'laparoscopic-Surgery'
  }
];

const Specialities = () => {
  const navigate = useNavigate();

  const location = useLocation();

const handleClick = (id) => {
  if (location.pathname !== "/services") {
    navigate("/services", { state: { scrollTo: id } });
  } else {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};



  return (
    <section className="w-full py-20 px-4 md:px-10 bg-[#D41E59]/10">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1D1E4C] mb-[100px]">Specialities</h2>
      <div className="xl:w-6xl mx-auto grid md:grid-cols-2 xl:grid-cols-2 gap-6 max-w-6xl">
        {specialities.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.id)}
            className="group cursor-pointer border flex border-[#FF56A6] p-6 h-50 rounded-md transition-all duration-400 ease-in-out hover:bg-[#FF56A6] hover:text-white"
          >
            <div className="flex items-center gap-4">
              {/* Default Icon */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-20 h-20 shrink-0 block group-hover:hidden"
              />
              {/* Hover Icon */}
              <img
                src={item.hoverIcon}
                alt={`${item.title} hover`}
                className="w-20 h-20 shrink-0 hidden group-hover:block"
              />

              <div>
                <h3 className="text-lg md:text-xl font-bold group-hover:text-white text-[#3A405B]">
                  {item.title.toUpperCase()}
                </h3>
                <p className="mt-2 text-[16px] font-light md:text-base leading-relaxed group-hover:text-white text-[#3A405B]/70">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialities;

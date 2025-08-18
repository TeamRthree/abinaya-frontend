
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const careData = [
  {
    id: "fertility",
    title: "Fertility",
    reviews: 2040,
    image: "/images/services/fertility.png",
    points: [
      "Ovulation Induction",
      "Follicular Tracking",
      "Embryo Freezing",
      "Surrogacy",
      "Donor Eggs,",
      "IUI, IVF, ICSI, Donor Sperm,"

    ]
  },
  {
    id: "gynecology",
    title: "Gynecology",
    reviews: 1043,
    image: "/images/services/gynecology.png",
    points: [
      "Irregular Periods",
      "White Discharge/Leukorrhea",
      "Uterus Cancer",
      "Mirena Insertion",
      "Adenomyosis",
      "Fibroids"
    ]
  },
  {
    id: "obstetrics",
    title: "Obstetrics",
    reviews: 2099,
    image: "/images/services/obstetrics.png",
    points: [
      "Normal Delivery",
      "Cesarean Section",
      "Contraception",
      "High Risk Obstetrics",
      "Contraception",
      "Family Planning"
    ]
  },
  {
    id: "cosmetic-gynecology",
    title: "Cosmetic Gynecology",
    reviews: 2099,
    image: "/images/services/cosmetic.png",
    points: [
      "Vaginal Rejuvenation",
      "Perineoplasty",
      "Hymenoplasty",
      "Labiaplasty",
      "Vaginal Tightening (Surgical or Non-Surgical)",
      "Labial fat filling"
    ]
  },
  {
    id: "robotic-surgery",
    title: "Robotic Surgery",
    reviews: 2099,
    image: "/images/services/robotic.png",
    points: [
      "Tubal Ligation",
      "Hysterectomy",
      "Myomectomy",
      "Ovarian Cystectomy"
    ]
  },
  {
    id: "laparoscopic-Surgery",
    title: "Laparoscopic Surgery",
    reviews: 1043,
    image: "/images/services/gynecology.png",
    points: [
      "Diagnostic Hysterolaparoscopy",
      "Hysteroscopic Polypectomy",
      "Hysteroscopic Septal Resection",
      "Laparoscopic Ovarian Cystectomy",
      "Tubal Ligation",
      "Tubal Recanalization"
    ]
  },
];

const CareSpecialities = () => {

    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // wait to make sure element has rendered
      }
    }
  }, [location]);

  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-center text-2xl md:text-[48px] font-bold text-[#26346C] mb-12">
        How We Care For You
      </h2>

      <div className="flex flex-col gap-16">
        {careData.map((item, index) => (
          <div
            key={index}
            id={item.id}
            className="flex flex-col md:flex-row  md:items-center gap-12 "
          >
            <div style={{
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)', // x=0, y=0 → all-around glow
  }} className="w-full md:w-[45%] rounded-[10px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full  object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[#EA3C60] text-[26px] md:text-[34px] font-bold mb-1">
                {item.title}
              </h3>
              
              <ul className="list-disc list-inside text-[#3A405B]/70 text-[16px] md:text-[24px] space-y-1 mb-4">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <Link to="/contact" className="bg-[#FF56A6] font-medium text-[14px] md:text-[18px] text-[#FEFEFE] px-4 py-2 rounded-[6px] border hover:border-[#FF56A6] hover:text-[#FF56A6] hover:bg-transparent transition-all duration-300 ease-in-out">
            Book Appointment
          </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareSpecialities;

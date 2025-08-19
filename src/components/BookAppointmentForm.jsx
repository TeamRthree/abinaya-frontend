import { useState } from "react";
import { bookAppointment } from "../api/appointments"; // ✅ adjust path if needed

const BookAppointmentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format";
        break;
      case "phone":
        if (!value.trim()) error = "Phone is required";
        else if (!/^\d{10,15}$/.test(value)) error = "Enter a valid number";
        break;
      case "service":
  if (!value.trim()) error = "Service is required";
  break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.length < 10) error = "At least 10 characters";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = `${key[0].toUpperCase() + key.slice(1)} is required`;
      } else {
        validateField(key, value);
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await bookAppointment(form);
      setIsSubmitted(true);
      setForm({ name: "", email: "", phone: "", city: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Booking failed:", error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full flex flex-col  items-center relative">
      <form
        onSubmit={handleSubmit}
        style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)" }}
        className="w-full md:w-3xl bg-white rounded-[10px] py-14 px-2 md:px-20 flex flex-col gap-4 relative"
      >
        {isSubmitted && (
          <div className="absolute inset-0 rounded-[10px] bg-[#FFF2F6] flex flex-col justify-center items-center transition-all duration-500 ease-in-out z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-[#ff4fa0] mb-4">
              Thank You!
            </h3>
            <p className="text-[#444] max-w-md text-center px-4">
              We’ve received your appointment request. We’ll get back to you
              shortly.
            </p>
          </div>
        )}

        <h3 className="text-xl md:text-[32px] font-semibold text-[#E64771] text-center mb-6">
          Book an Appointment
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-[#D9D9D9] text-[14px] md:text-[16px] text-[#3A405B] px-4 py-3 rounded-md outline-none"
            />
            <p className="text-[#F564A9]/70 text-xs md:text-sm mt-1">{errors.name}</p>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-[#D9D9D9] text-[14px] md:text-[16px] text-[#3A405B] px-4 py-3 rounded-md outline-none"
            />
            <p className="text-[#F564A9]/70 text-xs md:text-sm mt-1">{errors.email}</p>
          </div>
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-[#D9D9D9] text-[14px] md:text-[16px] text-[#3A405B] px-4 py-3 rounded-md outline-none"
          />
          <p className="text-[#F564A9]/70 text-xs md:text-sm mt-1">{errors.phone}</p>
        </div>

        <div>
  <select
    name="service"
    value={form.service}
    onChange={handleChange}
    className="w-full border border-[#D9D9D9] text-[#3A405B] text-[14px] md:text-[14px] px-4 py-3 rounded-md outline-none bg-white"
  >
    <option value="">Select a Service</option>
    <option value="Fertility">Fertility</option>
    <option value="Gynaecology">Gynaecology</option>
    <option value="Obstetrics">Obstetrics</option>
    <option value="Pregnancy Care">Pregnancy Care</option>
    <option value="Menstrual Health">Menstrual Health</option>
    <option value="Other">Other</option>
  </select>
  <p className="text-[#F564A9]/70 text-xs md:text-sm mt-1">{errors.service}</p>
</div>


        <div>
          <textarea
            name="message"
            placeholder="Your Message..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full border border-[#D9D9D9] text-[14px] md:text-[16px] text-[#3A405B] px-4 py-3 rounded-md outline-none resize-none"
          />
          <p className="text-[#F564A9]/70 text-xs md:text-sm mt-1">{errors.message}</p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#FF56A6] font-medium text-[14px] md:text-[18px] text-[#FEFEFE] px-4 py-2 rounded-[6px] border w-fit mx-auto hover:border-[#FF56A6] hover:text-[#FF56A6] hover:bg-transparent transition-all duration-300 ease-in-out disabled:opacity-50"
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </section>
  );
};

export default BookAppointmentForm;

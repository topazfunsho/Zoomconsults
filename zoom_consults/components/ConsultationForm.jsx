import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const subjectOptions = [
  "Zoom Interior Academy",
  "Zoom Glass",
  "Zoom Partners Hub",
  "Consultation",
];

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Consultation Request:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="overflow-hidden bg-slate-950 py-24 text-white">
      <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="font-semibold uppercase tracking-[4px] text-red-500">
            Book a Consultation
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Let's Discuss Your Next Project
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Have an idea, project, or business opportunity you'd like to
            discuss? Our team is ready to listen, provide expert guidance, and
            help turn your vision into reality.
          </p>

          {/* Contact Information */}
          <div className="mt-10 space-y-6">

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-700">
                <FaPhone />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Call Us
                </p>

                <a
                  href="tel:+2349080300064"
                  className="transition hover:text-red-500"
                >
                  +234 9080 3000 64, +234 9080 3000 64
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-700">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email Us
                </p>

                <a
                  href="mailto:info@zoomconsults.com"
                  className="transition hover:text-red-500"
                >
                  zoomincorporatedng@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-700">
                <FaLocationDot />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p>85 Allen Avenue, Ikeja, Lagos, Nigeria</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* =========================
            FORM
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl bg-white p-6 shadow-2xl md:p-10"
        >
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Request a Consultation
          </h3>

          <p className="mt-2 text-gray-500">
            Fill out the form below and our team will get back to you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >

            {/* =========================
                FULL NAME
            ========================== */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-slate-800"
              >
                Full Name
                <span className="ml-1 text-red-600">*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-2 focus:ring-red-100"
              />
            </div>

            {/* =========================
                EMAIL
            ========================== */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-slate-800"
              >
                Email Address
                <span className="ml-1 text-red-600">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-2 focus:ring-red-100"
              />
            </div>

            {/* =========================
                MOBILE NUMBER
            ========================== */}
            <div>
              <label
                htmlFor="mobile"
                className="mb-2 block font-medium text-slate-800"
              >
                Mobile Number
                <span className="ml-1 text-red-600">*</span>
              </label>

              <input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
                pattern="[0-9+\-\s()]{7,20}"
                title="Please enter a valid mobile number"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-2 focus:ring-red-100"
              />
            </div>

            {/* =========================
                SUBJECT
            ========================== */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block font-medium text-slate-800"
              >
                Subject
                <span className="ml-1 text-red-600">*</span>
              </label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`uppercase w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100 ${
                  formData.subject
                    ? "text-slate-900"
                    : "text-gray-400"
                }`}
              >
                <option value="" disabled>
                  Select a subject
                </option>

                {subjectOptions.map((subject) => (
                  <option
                    key={subject}
                    value={subject}
                    className="text-slate-900"
                  >
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            {/* =========================
                MESSAGE
            ========================== */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-slate-800"
              >
                Message
                <span className="ml-1 text-red-600">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-gray-300 px-5 py-4 text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-2 focus:ring-red-100"
              />
            </div>

            {/* =========================
                SUCCESS MESSAGE
            ========================== */}
            {submitted && (
              <div className="rounded-xl bg-green-50 p-4 text-sm font-medium text-green-700">
                Your consultation request has been submitted successfully.
              </div>
            )}

            {/* =========================
                SUBMIT BUTTON
            ========================== */}
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-red-700 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-800 hover:shadow-lg"
            >
              Book Consultation

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}


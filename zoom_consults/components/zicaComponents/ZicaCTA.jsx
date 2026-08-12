
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ZicaCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,0,0,0.85), rgba(0,0,0,0.85)), url('https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498970/Discussion_Photos_-_Download_Free_High-Quality_Pictures___Freepik_uxuuh8.jpg')",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto w-[90%] max-w-4xl text-center text-white"
      >
        <span className="font-semibold uppercase tracking-[4px] text-red-300">
          Start Your Journey
        </span>

        <h2 className="mt-5 text-4xl font-bold md:text-5xl lg:text-6xl">
          Ready to Transform Your Space or Career?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
          Whether you need professional interior design services or want to
          develop your skills, Zoom Interior Consult & Academy is ready to
          help you take the next step.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-red-700 transition hover:-translate-y-1 hover:bg-gray-100"
          >
            
            Enroll Now
            <FaArrowRight />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            Book a Consultation
            <FaArrowRight />
          </Link>
        </div>
      </motion.div>

    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,0,0,0.85), rgba(0,0,0,0.85)), url('https://res.cloudinary.com/dd6dnskfg/image/upload/v1785497020/glass_front_fvn62r.jpg')",
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
          Let's Work Together
        </span>

        <h2 className="mt-5 text-4xl font-bold md:text-5xl lg:text-6xl">
          Ready to Turn Your Vision Into Reality?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
          Whether you need professional consulting, interior design,
          architectural glass solutions, training, or strategic partnerships,
          Zoom Consults is ready to help.
        </p>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-red-700 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
        >
          Book a Consultation
          <FaArrowRight />
        </Link>
      </motion.div>

    </section>
  );
}
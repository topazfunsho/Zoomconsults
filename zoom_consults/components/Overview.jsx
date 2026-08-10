import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-16 lg:grid-cols-2">
        
        {/* Image */}
        <motion.div
          className="relative"
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="https://res.cloudinary.com/dd6dnskfg/image/upload/v1785497020/glass_front_fvn62r.jpg"
            alt="Zoom Consults"
            className="h-[350px] w-full rounded-2xl object-cover shadow-2xl md:h-[450px] lg:h-[550px]"
          />

          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-red-700 p-6 text-white shadow-xl md:-bottom-8 md:-right-8 md:p-8">
            <h2 className="text-3xl font-bold md:text-4xl">10+</h2>
            <p className="mt-2 text-sm md:text-base">
              Years of Excellence
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
            About Zoom Consults
            <div className="h-1 bg-red-700 w-10 rounded-full mt-2"></div>
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            Trusted Business Brand. Proven Results.
          </h2>

          <p className="mt-8 text-base leading-8 text-gray-600 md:text-lg">
            Zoom Consults is a dynamic and diversified umbrella brand compromising a group of companies dedicated to excellence, innovation, and sustainable growth across multiple sectors.
          </p>

          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
            We combine creativity, technical expertise, and industry
            experience to help individuals, businesses, and organizations
            achieve sustainable growth while maintaining the highest standards
            of quality and integrity.
          </p>

          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-red-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-800"
          >
            Learn More
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
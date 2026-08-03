import { motion } from "framer-motion";
import {
  FaAward,
  FaLightbulb,
  FaUsers,
  FaHandshake,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward size={28} />,
    title: "Proven Excellence",
    description:
      "We consistently deliver high-quality solutions that meet international standards.",
  },
  {
    icon: <FaLightbulb size={28} />,
    title: "Innovative Solutions",
    description:
      "Our team combines creativity and technical expertise to solve complex challenges.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Experienced Team",
    description:
      "Dedicated professionals with extensive industry knowledge across multiple sectors.",
  },
  {
    icon: <FaHandshake size={28} />,
    title: "Trusted Partnerships",
    description:
      "We build lasting relationships founded on integrity, transparency, and reliability.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Quality Assurance",
    description:
      "Every project is executed with precision, professionalism, and attention to detail.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Sustainable Growth",
    description:
      "Helping individuals and businesses achieve long-term success through strategic solutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-100 py-24 overflow-hidden">
      <div className="mx-auto w-[90%] max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Why Choose Zoom Consults
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Delivering Value Through Expertise, Innovation & Excellence
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            We are committed to providing innovative, reliable, and
            client-focused solutions across every sector we operate in.
            Our multidisciplinary team combines creativity, technical
            expertise, and strategic thinking to consistently exceed
            expectations.
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-700 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
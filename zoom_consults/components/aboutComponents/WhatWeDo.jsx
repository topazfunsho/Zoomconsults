import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const businesses = [
  {
    title: "Zoom Interior Consult & Academy",
    description:
      "Focuses on interior design consulting, training, and professional certification.",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1786357983/zica1_bkivf5.jpg",
    path: "/zica",
  },
  {
    title: "Zoom Glass",
    description:
      "Specializing in glass and aluminum-related construction solutions.",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785497173/download_9_ohaqkg.jpg",
    path: "/zoom-glass",
  },
  {
    title: "Zoom Partners Hub",
    description:
      "Connects businesses with trusted partners for sustainable growth and success.",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498873/Download_premium_image_of_Business_partners_shaking_hands_in_agreement_by_Jira_about_hands_handshake_people_man_and_holding_hands_413225_cgjz6x.jpg",
    path: "/zoom-partners-hub",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto w-[90%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="font-semibold uppercase tracking-[4px] text-red-500">
            Our Businesses
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            What We Do
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Our diverse business divisions allow us to provide specialized
            services while maintaining one shared commitment to excellence.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {businesses.map((business, index) => (
            <motion.div
              key={business.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl bg-slate-900"
            >
              <div className="overflow-hidden">
                <img
                  src={business.image}
                  alt={business.title}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold">
                  {business.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {business.description}
                </p>

                <Link
                  to={business.path}
                  className="mt-6 inline-flex items-center gap-3 font-semibold text-red-500 transition hover:text-red-400"
                >
                  Learn More
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
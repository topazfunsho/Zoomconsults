import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const businesses = [
  {
    title: "Zoom Interior Consult & Academy",
    description:
      "Focuses on interior design consulting, training, and professional certification.",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785497020/glass_front_fvn62r.jpg",
    link: "/zica",
  },
  {
    title: "Zoom Glass",
    description:
      "Specializing in glass and aluminum-related construction solutions.",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498970/Discussion_Photos_-_Download_Free_High-Quality_Pictures___Freepik_uxuuh8.jpg",
    link: "/zoom-glass",
  },
  {
    title: "Zoom Partners Hub",
    description:
      "Connects businesses with trusted partners for sustainable growth and success.",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498873/Download_premium_image_of_Business_partners_shaking_hands_in_agreement_by_Jira_about_hands_handshake_people_man_and_holding_hands_413225_cgjz6x.jpg",
    link: "/zoom-partners-hub",
  },
];

export default function Businesses() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Our Businesses
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Excellence Across Every Division
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Zoom Consults operates through three specialized business units,
            each dedicated to delivering innovative, high-quality solutions
            tailored to our clients' unique needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {businesses.map((business, index) => (
            <motion.div
              key={business.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl shadow-xl"
            >
              <div className="relative h-[500px] overflow-hidden">
                {/* Background Image */}
                <img
                  src={business.image}
                  alt={business.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-bold">
                    {business.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-200">
                    {business.description}
                  </p>

                  <Link
                    to={business.link}
                    className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-red-700 px-6 py-3 font-semibold transition-all duration-300 hover:bg-red-800"
                  >
                    Learn More
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
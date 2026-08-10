
import { motion } from "framer-motion";

export default function AboutZica() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498970/Discussion_Photos_-_Download_Free_High-Quality_Pictures___Freepik_uxuuh8.jpg"
            alt="Interior design consultation"
            className="h-[520px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            About ZICA
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Where Design Meets Education
          </h2>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            Zoom Interior Consult & Academy combines professional interior
            design consulting with practical education, helping individuals
            and organizations create beautiful, functional, and purposeful
            spaces.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Through our academy, aspiring and practicing designers gain
            practical knowledge, creative skills, and industry-focused
            experience that can be applied to real-world projects.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">
            <div className="rounded-2xl bg-slate-100 p-5">
              <h3 className="text-3xl font-bold text-red-700">100%</h3>
              <p className="mt-1 text-gray-600">Practical Focus</p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-5">
              <h3 className="text-3xl font-bold text-red-700">2</h3>
              <p className="mt-1 text-gray-600">Core Services</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

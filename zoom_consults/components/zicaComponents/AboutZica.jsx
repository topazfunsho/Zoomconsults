
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
            src="https://res.cloudinary.com/dd6dnskfg/image/upload/v1786357983/zica1_bkivf5.jpg"
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
            Zoom Interior Consult and Academy is a dynamic firm dedicated to excellence in interior design projects and professional development.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We deliver innovative interior design solutions tailored to our clients unique needs while also empoering aspiring designers through specialized training programs.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our academy provides internationally recognized certification, equipping trainees with the skills, knowledge, and credentials to thrive in the global design industry.
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

import { motion } from "framer-motion";
import {
  FaMagnifyingGlass,
  FaLightbulb,
  FaGear,
  FaCircleCheck,
} from "react-icons/fa6";

const steps = [
  {
    number: "01",
    icon: <FaMagnifyingGlass />,
    title: "Understand",
    description:
      "We listen carefully to your needs, understand your objectives, and identify the challenges that need to be solved.",
  },
  {
    number: "02",
    icon: <FaLightbulb />,
    title: "Strategize",
    description:
      "We develop practical and innovative strategies tailored specifically to your requirements and goals.",
  },
  {
    number: "03",
    icon: <FaGear />,
    title: "Execute",
    description:
      "Our experienced team implements the agreed solution with professionalism, precision, and attention to detail.",
  },
  {
    number: "04",
    icon: <FaCircleCheck />,
    title: "Deliver",
    description:
      "We focus on achieving measurable results while ensuring quality and long-term client satisfaction.",
  },
];

export default function OurApproach() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto w-[90%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            How We Work
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Our Approach
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From understanding your needs to delivering measurable results,
            our approach is built around collaboration, innovation, and
            excellence.
          </p>
        </motion.div>

        <div className="relative mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative rounded-3xl bg-white p-8 shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-700 text-xl text-white">
                  {step.icon}
                </div>

                <span className="text-5xl font-bold text-gray-100">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaAward,
  FaUsers,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa6";

const statistics = [
  {
    number: 20,
    suffix: "+",
    label: "Years of Experience",
    icon: <FaAward />,
  },
  {
    number: 250,
    suffix: "+",
    label: "Projects Completed",
    icon: <FaBuilding />,
  },
  {
    number: 150,
    suffix: "+",
    label: "Satisfied Clients",
    icon: <FaUsers />,
  },
  {
    number: 3,
    suffix: "",
    label: "Business Divisions",
    icon: <FaBriefcase />,
  },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);

  const countRef = useRef(null);

  const isInView = useInView(countRef, {
    once: true,
    amount: 0.5,
  });

  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, motionValue, value]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function OurImpact() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-[90%] max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Our Impact
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Making a Meaningful Difference
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our growing experience and diverse portfolio reflect our commitment
            to delivering value to clients, partners, and communities.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="rounded-3xl bg-slate-950 p-6 text-center text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:p-10"
            >
              {/* Icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-700 text-xl">
                {stat.icon}
              </div>

              {/* Animated Number */}
              <h3 className="mt-6 text-4xl font-bold md:text-5xl">
                <Counter
                  value={stat.number}
                  suffix={stat.suffix}
                />
              </h3>

              {/* Label */}
              <p className="mt-3 text-sm text-gray-400 md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

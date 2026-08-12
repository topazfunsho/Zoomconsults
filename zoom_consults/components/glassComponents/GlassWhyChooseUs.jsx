
import {
  FaAward,
  FaCompassDrafting,
  FaShieldHalved,
  FaScrewdriverWrench,
} from "react-icons/fa6";

const reasons = [
  {
    icon: FaAward,
    title: "Quality Materials",
    text: "We prioritize quality materials and reliable glass products for long-lasting results.",
  },
  {
    icon: FaCompassDrafting,
    title: "Precision Design",
    text: "Our solutions are carefully designed to complement your space and architectural vision.",
  },
  {
    icon: FaScrewdriverWrench,
    title: "Expert Installation",
    text: "Our team focuses on professional installation and excellent finishing.",
  },
  {
    icon: FaShieldHalved,
    title: "Safety & Durability",
    text: "We pay close attention to safety, strength, durability, and functionality.",
  },
];

export default function GlassWhyChooseUs() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto w-[90%] max-w-7xl">

        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-500">
            Why Zoom Glass
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Glass Solutions Built Around Quality and Excellence
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            We don't just install glass. We create solutions that improve the
            appearance, functionality, and character of your space.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-2xl border border-slate-800 p-7 transition duration-500 hover:-translate-y-2 hover:border-red-700"
              >
                <Icon className="text-4xl text-red-500" />

                <h3 className="mt-6 text-xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {reason.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

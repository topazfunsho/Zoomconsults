
import {
  FaBuilding,
  FaDoorOpen,
  FaHouse,
  FaLayerGroup,
} from "react-icons/fa6";

const solutions = [
  {
    icon: FaBuilding,
    title: "Office Glass",
    description:
      "Modern glass solutions for offices, corporate spaces, meeting rooms, and commercial environments.",
  },
  {
    icon: FaDoorOpen,
    title: "Glass Doors",
    description:
      "Elegant and durable glass doors designed to provide accessibility while maintaining a sophisticated appearance.",
  },
  {
    icon: FaHouse,
    title: "Residential Glass",
    description:
      "Beautiful glass installations for homes, apartments, duplexes, and contemporary residential spaces.",
  },
  {
    icon: FaLayerGroup,
    title: "Architectural Glass",
    description:
      "Specialized glass solutions that complement modern architectural designs and construction projects.",
  },
];

export default function GlassSolutions() {
  return (
    <section id="solutions" className="bg-slate-50 py-24">
      <div className="mx-auto w-[90%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
            What We Offer
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Our Glass Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We deliver customized glass solutions that combine aesthetics,
            functionality, safety, and durability.
          </p>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="group rounded-2xl bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-100 text-2xl text-red-700 transition group-hover:bg-red-700 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We discuss your needs, preferences, space, and project requirements.",
  },
  {
    number: "02",
    title: "Measurement",
    text: "Our team evaluates the project space and takes accurate measurements.",
  },
  {
    number: "03",
    title: "Design & Fabrication",
    text: "We develop the required design and prepare the glass solution to specification.",
  },
  {
    number: "04",
    title: "Installation",
    text: "Our professionals install the finished product with attention to detail and safety.",
  },
];

export default function GlassProcess() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto w-[90%] max-w-7xl">

        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
            How We Work
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            From Concept to Completion
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <span className="text-5xl font-bold text-red-100">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

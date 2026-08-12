const steps = [
  {
    number: "01",
    title: "Connect",
    text: "Tell us about yourself, your organization, and the type of partnership you are interested in.",
  },
  {
    number: "02",
    title: "Discuss",
    text: "Our team reviews your proposal and discusses your goals, expectations, and opportunities.",
  },
  {
    number: "03",
    title: "Collaborate",
    text: "We develop a partnership approach that aligns with the objectives of both parties.",
  },
  {
    number: "04",
    title: "Grow",
    text: "Together, we work toward creating sustainable value and achieving shared objectives.",
  },
];

export default function HowWeOperate() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto w-[90%] max-w-7xl">

        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            How Partnership Works
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-white p-8 shadow-sm"
            >
              <span className="text-6xl font-bold text-red-100">
                {step.number}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
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
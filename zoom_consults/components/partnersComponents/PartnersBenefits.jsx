import {
  FaArrowTrendUp,
  FaNetworkWired,
  FaRocket,
  FaHandshake,
} from "react-icons/fa6";

const reasons = [
  {
    icon: FaArrowTrendUp,
    title: "Growth Opportunities",
    text: "Discover opportunities that can help your organization expand and achieve its objectives.",
  },
  {
    icon: FaNetworkWired,
    title: "Strong Network",
    text: "Connect with businesses, professionals, entrepreneurs, and organizations across different sectors.",
  },
  {
    icon: FaRocket,
    title: "New Possibilities",
    text: "Explore new ideas, markets, projects, and collaborations through strategic relationships.",
  },
  {
    icon: FaHandshake,
    title: "Mutual Value",
    text: "We focus on partnerships where every participant can create and receive meaningful value.",
  },
];

export default function PartnersBenefits() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto w-[90%] max-w-7xl">

        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-500">
            Why Partner With Us
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Your Growth Can Start With the Right Connection
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            At Zoom Partners Hub, we believe successful partnerships are built
            around trust, shared value, expertise, and a common vision.
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
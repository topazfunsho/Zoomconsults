import {
  FaBuilding,
  FaUserTie,
  FaUsers,
  FaUserGroup,
  FaIndustry,
  FaBriefcase,
} from "react-icons/fa6";

const partnerTypes = [
  {
    icon: FaBuilding,
    title: "Businesses",
    text: "Established companies looking for strategic collaborations and growth opportunities.",
  },
  {
    icon: FaUserTie,
    title: "Entrepreneurs",
    text: "Business owners and entrepreneurs seeking connections, resources, and opportunities.",
  },
  {
    icon: FaUsers,
    title: "Professionals",
    text: "Skilled professionals interested in networking and collaborative opportunities.",
  },
  {
    icon: FaUserGroup,
    title: "Organizations",
    text: "Organizations seeking strategic relationships and mutually beneficial collaborations.",
  },
  {
    icon: FaIndustry,
    title: "Suppliers & Vendors",
    text: "Reliable suppliers and service providers interested in long-term business relationships.",
  },
  {
    icon: FaBriefcase,
    title: "Investors",
    text: "Individuals and organizations interested in exploring promising business opportunities.",
  },
];

export default function PartnerTypes() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-[90%] max-w-7xl">

        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
            Our Network
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Who We Partner With
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We welcome relationships with individuals and organizations that
            believe in collaboration, innovation, and sustainable growth.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((partner) => {
            const Icon = partner.icon;

            return (
              <div
                key={partner.title}
                className="flex gap-5 rounded-2xl border border-gray-100 p-7 transition duration-300 hover:border-red-200 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xl text-white">
                  <Icon />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {partner.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {partner.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
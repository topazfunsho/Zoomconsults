import { FaSquareCheck } from "react-icons/fa6";

const features = [
  "Strategic business connections",
  "Professional networking opportunities",
  "Collaborative business development",
  "Access to new opportunities",
];

export default function PartnersAbout() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Image */}
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498873/Download_premium_image_of_Business_partners_shaking_hands_in_agreement_by_Jira_about_hands_handshake_people_man_and_holding_hands_413225_cgjz6x.jpg"
            alt="Business partnership"
            className="h-[500px] w-full rounded-2xl object-cover shadow-2xl"
          />

          <div className="absolute -bottom-7 -right-5 rounded-2xl bg-red-700 px-7 py-6 text-white shadow-xl md:-right-8">
            <p className="text-3xl font-bold">Together</p>
            <p className="mt-1 text-sm">We Achieve More</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
            About Partners Hub
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Connecting People, Businesses and Opportunities
          </h2>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            Zoom Partners Hub is a platform created to facilitate meaningful
            business relationships, strategic collaborations, and mutually
            beneficial partnerships.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We believe that the right partnerships can create new
            opportunities, strengthen businesses, and deliver sustainable
            growth.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <FaSquareCheck className="shrink-0 text-red-600" />

                <span className="text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
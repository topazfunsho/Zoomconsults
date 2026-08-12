import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default function PartnersHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.68), rgba(0,0,0,.55)), url('https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498873/Download_premium_image_of_Business_partners_shaking_hands_in_agreement_by_Jira_about_hands_handshake_people_man_and_holding_hands_413225_cgjz6x.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-[90%] max-w-7xl pt-24">
        <div className="max-w-3xl text-white">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-500">
            Zoom Partners Hub
          </span>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Building Partnerships. Creating Opportunities. Driving Growth.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            We connect businesses, professionals, entrepreneurs, and
            organizations to create meaningful partnerships and sustainable
            opportunities for growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="#partnership-form"
              className="inline-flex items-center gap-3 rounded-full bg-red-700 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-red-800"
            >
              Become a Partner
              <FaArrowRight />
            </Link>

            <a
              href="#opportunities"
              className="rounded-full border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Explore Opportunities
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

const applications = [
  {
    title: "Residential Spaces",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785497020/glass_front_fvn62r.jpg",
  },
  {
    title: "Corporate Offices",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498873/Download_premium_image_of_Business_partners_shaking_hands_in_agreement_by_Jira_about_hands_handshake_people_man_and_holding_hands_413225_cgjz6x.jpg",
  },
  {
    title: "Commercial Buildings",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498970/Discussion_Photos_-_Download_Free_High-Quality_Pictures___Freepik_uxuuh8.jpg",
  },
];

export default function GlassApplications() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-[90%] max-w-7xl">

        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
            Applications
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Designed for Different Spaces
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {applications.map((application) => (
            <div
              key={application.title}
              className="group relative h-[420px] overflow-hidden rounded-2xl"
            >
              <img
                src={application.image}
                alt={application.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <h3 className="absolute bottom-8 left-8 text-2xl font-bold text-white">
                {application.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

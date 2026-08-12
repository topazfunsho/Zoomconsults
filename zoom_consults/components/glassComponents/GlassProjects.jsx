
const projects = [
  {
    title: "Modern Glass Facade",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785497020/glass_front_fvn62r.jpg",
  },
  {
    title: "Contemporary Interior",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498873/Download_premium_image_of_Business_partners_shaking_hands_in_agreement_by_Jira_about_hands_handshake_people_man_and_holding_hands_413225_cgjz6x.jpg",
  },
  {
    title: "Commercial Glass Installation",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498970/Discussion_Photos_-_Download_Free_High-Quality_Pictures___Freepik_uxuuh8.jpg",
  },
];

export default function GlassProjects() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-[90%] max-w-7xl">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
              Our Work
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Featured Projects
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl"
            >
              <div className="h-[400px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="bg-slate-950 p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

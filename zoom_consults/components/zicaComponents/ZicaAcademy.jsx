import { motion } from "framer-motion";

export default function ZicaAcademy() {
  return (
    <section id="academy" className="overflow-hidden bg-white py-24">
      <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            The Academy
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Learn. Create. Build Your Career.
          </h2>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            Zoom Interior Consult and Academy provides specialized interior
            design training with pathways to internationally recognized
            certification. we equip aspiring designers with the knowledge,
            skills and credantials needed to succeed in the global design
            industry.
          </p>

          <h3 className="mt-7 text-2xl font-bold leading-8 text-gray-600">
            We offer a full range of interior design taining and our modules
            cover:
          </h3>

          <div className="mt-8 space-y-4">
            {[
              "Fundamentals of Interior Design",
              "Measurement",
              "Colour Theory",
              "Space Planning",
              "Mood Boards and Presentations",
              "Furniture Design and Selection",
              "Wall, Floor, and Ceiling Finishes",
              "Decoration",
              "Window Treatment",
              "Project Management",
              "Business Practices",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-700 text-xs text-white">
                  ✓
                </span>

                {item}
              </div>
            ))}
          </div>
          <h3 className="mt-7 text-2xl font-bold capitalize leading-8 text-gray-600">
            Our training methodology includes:
          </h3>
          <div className="mt-8 space-y-4">
            {[
              "Theoretical Learning",
              "Practical Sessions",
              "Case Studies",
              "Assignments",
              "Market Surveys",
              "Group Work",
              "Real-Life Projects",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-700 text-xs text-white">
                  ✓
                </span>

                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498873/Download_premium_image_of_Business_partners_shaking_hands_in_agreement_by_Jira_about_hands_handshake_people_man_and_holding_hands_413225_cgjz6x.jpg"
            alt="ZICA Academy"
            className="h-[500px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>

        
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";

// export default function ZicaHero() {
//   return (
//     <section className="relative flex min-h-[90vh] items-center overflow-hidden">
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://res.cloudinary.com/dd6dnskfg/image/upload/v1786380955/zica2_e7a35v.jpg')",
//         }}
//       />

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9 }}
//         className="relative z-10 mx-auto w-[90%] max-w-7xl pt-24"
//       >
//         <span className="font-semibold uppercase tracking-[5px] text-red-500">
//           About Zoom Consults
//         </span>

//         <h1 className="capitalize mt-5 max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
//           Zoom Interior Academy
//         </h1>

//         {/* <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
//           We are a multidisciplinary organization committed to delivering
//           innovative solutions, professional services, and strategic
//           opportunities across diverse industries.
//         </p> */}
//       </motion.div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ZicaHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498970/Discussion_Photos_-_Download_Free_High-Quality_Pictures___Freepik_uxuuh8.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-[90%] max-w-7xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl"
        >
          <span className="font-semibold uppercase tracking-[4px] text-red-500">
            Zoom Interior Consult & Academy
          </span>

          <h1 className="mt-5 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Transforming Spaces.
            <br />
            Building Creative Careers.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            Professional interior design solutions and practical training
            designed to transform spaces, develop creative talent, and build
            successful careers.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-red-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-800"
            >
              Enroll Now
              <FaArrowRight />
            </Link>

            <a
              href="#academy"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              Explore Academy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

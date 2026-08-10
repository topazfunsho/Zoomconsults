import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498970/Discussion_Photos_-_Download_Free_High-Quality_Pictures___Freepik_uxuuh8.jpg')",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto w-[90%] max-w-7xl pt-24"
      >
        <span className="font-semibold uppercase tracking-[5px] text-red-500">
          About Zoom Consults
        </span>

        <h1 className="capitalize mt-5 max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          About US
        </h1>

        {/* <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
          We are a multidisciplinary organization committed to delivering
          innovative solutions, professional services, and strategic
          opportunities across diverse industries.
        </p> */}
      </motion.div>
    </section>
  );
}
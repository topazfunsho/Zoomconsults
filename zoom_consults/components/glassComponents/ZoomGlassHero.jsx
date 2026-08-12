
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default function ZoomGlassHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.55)), url('https://res.cloudinary.com/dd6dnskfg/image/upload/v1786529332/download_10_tv1sr1.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-[90%] max-w-7xl pt-24">
        <div className="max-w-3xl text-white">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-500">
            Zoom Glass
          </span>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Elegant Glass Solutions Designed for Modern Spaces
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            We provide premium glass solutions that combine functionality,
            safety, elegance, and modern architectural design for residential
            and commercial spaces.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-red-700 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-red-800"
            >
              Request a Quote
              <FaArrowRight />
            </Link>

            <a
              href="#solutions"
              className="rounded-full border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

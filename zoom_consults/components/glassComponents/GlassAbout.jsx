
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Premium quality glass materials",
  "Professional fabrication and installation",
  "Modern and customized designs",
  "Attention to detail and finishing",
];

export default function GlassAbout() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Image */}
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dd6dnskfg/image/upload/v1785497020/glass_front_fvn62r.jpg"
            alt="Zoom Glass project"
            className="h-[500px] w-full rounded-2xl object-cover shadow-2xl"
          />

          <div className="absolute -bottom-7 -right-5 rounded-2xl bg-red-700 px-7 py-6 text-white shadow-xl md:-right-8">
            <p className="text-3xl font-bold">Quality</p>
            <p className="mt-1 text-sm">You Can See & Trust</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
            About Zoom Glass
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Transforming Spaces Through the Beauty of Glass
          </h2>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            Zoom Glass provides innovative glass solutions designed to enhance
            the beauty, functionality, and value of modern spaces.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            From architectural glass installations to customized interior
            solutions, we combine quality materials, precision workmanship, and
            contemporary design to deliver exceptional results.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-red-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785497020/glass_front_fvn62r.jpg",
    title: "Zoom Consults",
    subtitle: "Excellence Across Sectors, Innovation Without Limits.",
  },
  {
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498873/Download_premium_image_of_Business_partners_shaking_hands_in_agreement_by_Jira_about_hands_handshake_people_man_and_holding_hands_413225_cgjz6x.jpg",
    title: "Transforming Ideas Into Reality",
    subtitle:
      "Providing innovative solutions in consultancy, design, construction, and strategic partnerships.",
  },
  {
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498970/Discussion_Photos_-_Download_Free_High-Quality_Pictures___Freepik_uxuuh8.jpg",
    title: "Building Sustainable Growth",
    subtitle:
      "Helping businesses and individuals achieve excellence through professional services.",
  },
];

export default function Hero() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className="relative flex h-screen min-h-[650px] items-center">
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(${slide.image})`,
                }}
              />

              {/* Content */}
              <div className="hero-content relative z-10 mx-auto w-[90%] max-w-7xl">
                <div className="max-w-3xl text-white">
                  {/* <span className="mb-4 inline-block rounded-full border border-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-red-400 md:text-sm">
                    Welcome to Zoom Consults
                  </span> */}

                  <h1 className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 md:text-lg lg:text-xl">
                    {slide.subtitle}
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Link
                      to="/about"
                      className="rounded-full bg-red-700 px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-red-800"
                    >
                      Learn More
                    </Link>

                    <Link
                      to="/contact"
                      className="rounded-full border border-white px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-white hover:text-slate-900"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
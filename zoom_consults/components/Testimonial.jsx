import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Felixson",
    position: "Manager, The Integra App",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1786356631/ChatGPT_Image_Oct_3_2025_09_09_57_AM_igphmp.png",
    review:
      "Getting funding was only part of the value we recieved from Zoom Partners Hub. Beyond the capital, their team connected us with the right strategy. In just 3 month, we scaled our product and multiplied our customer base. Their support truly accelerated our journey from idea to impact.",
  },
  {
    name: "Adebayo Irene",
    position: "Business Owner",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1786356629/professional_black_beautiful_lady_in_suit_dyozda.jpg",
    review:
      "From consultation to to installation, the process was seamless. Zoom Glass Construction is reliable and professional.",
  },
  {
    name: "Allseven",
    position: "Real Estate Investment",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1786356629/499812004_18373945630125843_5044778175956089984_n_kuele9.jpg",
    review:
      "Zoom Glass Construction has been a long-term partner that consistently delivers elegance and excellence. We are proud to be associated with them.",
  },
  {
    name: "Kola James",
    position: "Entrepreneur",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1786356629/gm_creative_photography_Contactez-nous_au_ndwuay.jpg",
    review:
      "Their attention to detail and quality finish is unmatched. We now have a modern, stylish looking office that clients always compliment.",
  },
  {
    name: "Cindy Chibueze",
    position: "Entrepreneur",
    image:
      "https://res.cloudinary.com/dd6dnskfg/image/upload/v1786356629/6ff85aec-68e4-49c6-a966-81d7257d99a2_alu6hj.jpg",
    review:
      "The training at Zoom Interior Academy was practical and inspiring. The instructors were knowledgeable, and i gained the confidence and skills to start my own interior design projects.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our success is measured by the satisfaction of our clients.
            Here's what they have to say about working with Zoom Consults.
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-red-600 hover:shadow-2xl">

                <FaQuoteLeft className="text-4xl text-red-600" />

                <p className="mt-6 leading-8 text-gray-600">
                  "{item.review}"
                </p>

                <div className="mt-6 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {item.position}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
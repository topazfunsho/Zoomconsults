import { useState } from "react";

import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaPlus,
} from "react-icons/fa6";

const contactItems = [
  {
    icon: FaLocationDot,
    title: "Head Office",
    text: "85 Allen Avenue, Ikeja, Lagos, Nigeria",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    text: "Monday - Friday, 8:00 AM - 5:00 PM",
  },
  {
    icon: FaPhone,
    title: "Call Us",
    text: "+234 908 030 0064, +234 908 030 0065",
    link: "tel:+2349080300064",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    text: "info@zoomconsults.com",
    link: "mailto:info@zoomconsults.com",
  },
  
];

const faqs = [
  {
    question: "How can I contact Zoom Consults?",
    answer:
      "You can contact us by filling out the contact form on this page, calling our office, or sending us an email.",
  },
  {
    question: "Can I request a consultation?",
    answer:
      "Yes. Select 'Consultation' from the subject field and provide details about what you would like to discuss.",
  },
  {
    question: "Can I contact you about Zoom Glass?",
    answer:
      "Yes. Select 'Zoom Glass' from the subject dropdown and tell us about your glass project or enquiry.",
  },
  {
    question: "Can I make a partnership enquiry?",
    answer:
      "Yes. Select 'Zoom Partners Hub' as your subject or visit the Zoom Partners Hub page to submit a partnership enquiry.",
  },
  {
    question: "How quickly will you respond?",
    answer:
      "Our team will review your enquiry and respond as soon as possible during our working hours.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.68), rgba(0,0,0,.55)), url('https://res.cloudinary.com/dd6dnskfg/image/upload/v1785498970/Discussion_Photos_-_Download_Free_High-Quality_Pictures___Freepik_uxuuh8.jpg')",
          }}
        />

        <div className="relative z-10 mx-auto w-[90%] max-w-7xl pt-20 text-center text-white">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-500">
            Get In Touch
          </span>

          <h1 className="mt-5 text-5xl font-bold md:text-6xl">
            Contact Zoom Consults
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            Have a question, project, or business opportunity? We would love to
            hear from you. Reach out to our team and let's start a conversation.
          </p>
        </div>
      </section>

      {/* info section  */}
      <section className="bg-white py-20">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-2xl text-red-700 transition duration-300 group-hover:bg-red-700 group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  {item.link ? (
                    <a
                      href={item.link}
                      className="mt-3 block text-gray-600 transition hover:text-red-600"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="mt-3 text-gray-600">{item.text}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid w-[90%] max-w-7xl gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
              Send Us a Message
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Let's Start a Conversation
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Whether you have a question about our services, want to discuss a
              project, or are interested in a business partnership, our team is
              ready to assist you.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <h3 className="font-bold text-slate-900">
                  Professional Support
                </h3>

                <p className="mt-1 text-gray-600">
                  Our team is available to understand your needs and provide
                  appropriate guidance.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">Business Enquiries</h3>

                <p className="mt-1 text-gray-600">
                  Contact us to discuss partnerships, collaborations, and
                  business opportunities.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Project Discussions
                </h3>

                <p className="mt-1 text-gray-600">
                  Tell us about your project and let's explore how Zoom Consults
                  can help.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-7 shadow-xl md:p-10">
            <h3 className="text-2xl font-bold text-slate-900">Contact Us</h3>

            <p className="mt-2 text-gray-500">
              Please fill in all required fields.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-green-100 p-6 text-green-700">
                <h4 className="font-bold">Message Sent Successfully!</h4>

                <p className="mt-2">
                  Thank you for contacting Zoom Consults. We will get back to
                  you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter your mobile number"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Subject *
                  </label>

                  <select
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>

                    <option value="zoom-interior-academy">
                      Zoom Interior Academy
                    </option>

                    <option value="zoom-glass">Zoom Glass</option>

                    <option value="zoom-partners-hub">Zoom Partners Hub</option>

                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    required
                    rows="6"
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-red-700 px-6 py-4 font-semibold text-white transition duration-300 hover:bg-red-800 hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="grid overflow-hidden rounded-3xl bg-slate-950 lg:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col justify-center p-8 text-white md:p-12 lg:p-16">
              <span className="text-sm font-semibold uppercase tracking-[5px] text-red-500">
                Visit Us
              </span>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Our Location
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                We are based in Lagos, Nigeria and are available to discuss
                consulting, training, interior design, glass solutions, and
                partnership opportunities.
              </p>

              <div className="mt-8 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-700">
                  <FaLocationDot />
                </div>

                <div>
                  <h3 className="font-bold">Zoom Consults</h3>

                  <p className="mt-1 text-gray-400">85 Allen Avenue, Ikeja, Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="min-h-[400px] bg-gray-200">
              <iframe
                title="Zoom Consults Location"
                src="https://www.google.com/maps/place/85+Allen+Ave,+Allen,+Ikeja+101233,+Lagos/@6.6040266,3.3463529,16.16z/data=!4m6!3m5!1s0x103b923191a518ed:0x82b57920d9566f6d!8m2!3d6.6037372!4d3.3505842!16s%2Fg%2F11dyrcdkfy?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D"
                className="h-full min-h-[400px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto w-[90%] max-w-4xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
              FAQ
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Contact FAQs
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-slate-900">
                      {faq.question}
                    </span>

                    <FaPlus
                      className={`shrink-0 text-red-600 transition duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

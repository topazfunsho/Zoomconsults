
import { useState } from "react";

export default function GlassQuote() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid w-[90%] max-w-7xl gap-14 lg:grid-cols-2">

        {/* Text */}
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-red-500">
            Start Your Project
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Let's Create Something Exceptional With Glass
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Tell us about your project and our team will get back to you to
            discuss your requirements and provide the appropriate guidance.
          </p>

          <div className="mt-8 space-y-3 text-gray-300">
            <p>✓ Residential & Commercial Projects</p>
            <p>✓ Customized Glass Solutions</p>
            <p>✓ Professional Installation</p>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl bg-white p-7 text-slate-900 shadow-2xl md:p-10">
          <h3 className="text-2xl font-bold">
            Request a Quote
          </h3>

          {submitted ? (
            <div className="mt-8 rounded-xl bg-green-100 p-6 text-green-700">
              Thank you! Your request has been submitted successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  required
                  placeholder="Enter your mobile number"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Project Details
                </label>

                <textarea
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-700 px-6 py-4 font-semibold text-white transition hover:bg-red-800"
              >
                Send Request
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}

import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Zoom Interior Consult & Academy", path: "/zica" },
  { name: "Zoom Glass", path: "/zoom-glass" },
  { name: "Zoom Partners Hub", path: "/zoom-partners-hub" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/profile.php?id=100064301074434",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/zoomglass_/",
    name: "Zoom Glass",
  },
  {
    icon: FaLinkedinIn,
    url: "https://linkedin.com",
  },
  {
    icon: FaXTwitter,
    url: "https://x.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      {/* Top Section */}
      <div className="mx-auto grid w-[90%] max-w-7xl gap-12 py-16 md:grid-cols-2 lg:grid-cols-3">
        {/* Company */}
        <div>
          <h2 className="mb-5 text-3xl font-bold text-white">
            <img src="./LOGOZOOM (1) (1).png" alt="zoom-logo" className="w-10"/>
          </h2>

          <p className="leading-7 text-gray-400">
            Zoom Consults delivers innovative solutions across interior design,
            glass construction, professional training, partnerships, and
            consultancy services with excellence and integrity.
          </p>

          <div className="mt-8 flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:text-white"
                >
                  <Icon />
                  {/* <p className="text-xs flex block">
                    {social.name}
                  </p> */}

                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-all duration-300 hover:pl-2 hover:text-red-500 ${
                      isActive ? "text-red-500" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Contact Us
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaLocationDot className="mt-1 text-lg text-red-600" />
              <p className="leading-6">
                85 Allen Avenue, Ikeja, Lagos, Nigeria
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-red-600" />
              <a
                href="tel:+2348000000000"
                className="transition hover:text-red-500"
              >
                +234 908 030 0064,
                +234 908 030 0065
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-600" />
              <a
                href="mailto:info@zoomconsults.com"
                className="transition hover:text-red-500"
              >
                zoomincorporatedng@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center justify-between gap-4 py-6 text-center md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Zoom Consults. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <NavLink
              to="/privacy-policy"
              className="transition hover:text-red-500"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms"
              className="transition hover:text-red-500"
            >
              Terms & Conditions
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
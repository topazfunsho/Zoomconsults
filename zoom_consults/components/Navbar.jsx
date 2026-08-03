import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Our Businesses" },
  { name: "Contact", path: "/contact" },
];

const businesses = [
  {
    name: "Zoom Interior Consult & Academy",
    path: "/zica",
  },
  {
    name: "Zoom Glass",
    path: "/zoom-glass",
  },
  {
    name: "Zoom Partners Hub",
    path: "/zoom-partners-hub",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBusinesses, setShowBusinesses] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-3xl font-bold text-white">
          {/* Zoom<span className="text-red-500">.</span> */}
          <img src="./LOGOZOOM (1) (1).png" alt="zoom-logo" className="w-10"/>
        </NavLink>

        {/* ================= Desktop Menu ================= */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            if (link.name === "Our Businesses") {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setShowBusinesses(true)}
                  onMouseLeave={() => setShowBusinesses(false)}
                >
                  <button className="flex items-center gap-2 font-medium text-white transition hover:text-red-500">
                    Our Businesses

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        showBusinesses ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-0 top-12 w-72 rounded-xl bg-white shadow-2xl transition-all duration-300 ${
                      showBusinesses
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-4 opacity-0"
                    }`}
                  >
                    {businesses.map((business) => (
                      <NavLink
                        key={business.path}
                        to={business.path}
                        className="block uppercase border-b border-gray-100 px-6 py-4 text-gray-700 transition hover:bg-red-700 hover:text-white"
                      >
                        {business.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium transition-all duration-300
                  after:absolute after:left-0 after:-bottom-2
                  after:h-[2px] after:w-0
                  after:transition-all
                  hover:after:w-full
                  ${
                    isActive
                      ? "text-red-500 after:w-full"
                      : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <HiX size={34} /> : <HiOutlineMenuAlt3 size={34} />}
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}

      <div
        className={`overflow-hidden bg-slate-900 transition-all duration-500 lg:hidden ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => {
            if (link.name === "Our Businesses") {
              return (
                <div key={link.name} className="w-full px-6">
                  <button
                    onClick={() =>
                      setShowBusinesses(!showBusinesses)
                    }
                    className="flex w-full items-center justify-between text-lg font-medium text-white"
                  >
                    Our Businesses

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        showBusinesses ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      showBusinesses
                        ? "mt-4 max-h-60"
                        : "max-h-0"
                    }`}
                  >
                    {businesses.map((business) => (
                      <NavLink
                        key={business.path}
                        to={business.path}
                        onClick={() => {
                          setOpen(false);
                          setShowBusinesses(false);
                        }}
                        className="block uppercase py-3 pl-4 text-gray-300 transition hover:text-red-500"
                      >
                        {business.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-medium text-red-500"
                    : "text-lg font-medium text-white"
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
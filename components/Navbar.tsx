"use client";
import { useState, useEffect } from "react";
import { Menu, X, Package } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Tracking", href: "#tracking" },
  { label: "About", href: "#about" },
  { label: "Network", href: "#network" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1628]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#1E3A5F]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center group-hover:bg-amber-400 transition-colors">
            <Package className="w-5 h-5 text-[#0A1628]" strokeWidth={2.5} />
          </div>
          <span
            className="text-2xl text-white tracking-wider"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
          >
            SwiftCargo
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 hover:text-amber-400 transition-colors font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#tracking"
            className="text-sm text-slate-300 hover:text-white transition-colors font-medium"
          >
            Track Shipment
          </a>
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-400 text-[#0A1628] font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0F1F3D] border-t border-[#1E3A5F]/50 px-6 py-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-amber-400 transition-colors font-medium py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#1E3A5F]/50 flex flex-col gap-3">
              <a
                href="#tracking"
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-white font-medium"
              >
                Track Shipment
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-amber-500 hover:bg-amber-400 text-[#0A1628] font-semibold px-5 py-3 rounded-lg text-center transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
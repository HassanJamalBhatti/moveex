"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "VP Supply Chain, Meridian Electronics",
    quote:
      "SwiftCargo transformed our Asia-Europe supply chain. Transit times dropped 18% and we now have real-time visibility across 12 countries. Their customs team alone saved us six figures in penalties.",
    rating: 5,
    industry: "Electronics",
  },
  {
    name: "Marco Ferretti",
    title: "COO, Ferretti Wines & Spirits",
    quote:
      "Cold chain compliance for our wine exports used to keep me up at night. Not anymore. SwiftCargo's GDP-certified reefer network is flawless, and the dedicated account manager actually knows our product.",
    rating: 5,
    industry: "Food & Beverage",
  },
  {
    name: "Aisha Patel",
    title: "Head of Procurement, GreenBuild Ltd",
    quote:
      "We consolidated 5 freight forwarders into SwiftCargo and cut logistics costs by 23%. The platform integration with our ERP was seamless. Best procurement decision of the year.",
    rating: 5,
    industry: "Construction",
  },
  {
    name: "David Okonkwo",
    title: "Founder, AfriMeds Distribution",
    quote:
      "Getting pharma-grade freight into West Africa reliably was near impossible before SwiftCargo. Their local knowledge and established customs relationships are genuinely unmatched.",
    rating: 5,
    industry: "Pharmaceuticals",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-28 bg-[#0A1628]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-amber-500 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Client Stories
          </div>
          <h2
            className="text-5xl md:text-6xl text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            WHAT OUR <span className="text-gradient">CLIENTS</span> SAY
          </h2>
        </div>

        <div className="relative bg-[#0F1F3D] border border-[#1E3A5F]/50 rounded-3xl p-10 md:p-14">
          {/* Quote mark */}
          <div
            className="text-amber-500/20 text-[120px] leading-none absolute top-4 left-10"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            "
          </div>

          <div className="relative">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <blockquote className="text-white text-xl md:text-2xl leading-relaxed font-light mb-8">
              "{t.quote}"
            </blockquote>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="text-white font-semibold">{t.name}</div>
                <div className="text-slate-400 text-sm mt-0.5">{t.title}</div>
              </div>
              <span className="text-xs bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full">
                {t.industry}
              </span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#1E3A5F] hover:border-amber-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "bg-amber-500 w-8" : "bg-[#1E3A5F] w-2 hover:bg-slate-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#1E3A5F] hover:border-amber-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Logos row */}
        <div className="mt-14 pt-10 border-t border-[#1E3A5F]/50">
          <div className="text-center text-slate-600 text-xs uppercase tracking-widest mb-6">
            Trusted by leading companies worldwide
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["Meridian Corp", "GreenBuild", "AfriMeds", "Ferretti Group", "NovaTech", "BlueStar"].map(
              (name) => (
                <div key={name} className="text-slate-700 font-bold text-sm tracking-wider uppercase">
                  {name}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

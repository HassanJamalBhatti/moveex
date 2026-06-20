"use client";
import { Award, Clock, Globe, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Operations spanning 150+ countries with established carrier relationships and local expertise in every major trade lane.",
  },
  {
    icon: Clock,
    title: "Speed & Reliability",
    desc: "99.2% on-time delivery across all service modes. We treat your deadlines as our own.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    desc: "ISO 9001:2015, AEO Status, IATA certified. Compliance built into every shipment, not bolted on.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    desc: "A named account manager and 24/7 ops desk for every client. You always know who to call.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0A1628] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="text-amber-500 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Why MoveEx
            </div>
            <h2
              className="text-5xl md:text-6xl text-white leading-none mb-8"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
            >
              LOGISTICS BUILT
              <br />
              ON <span className="text-gradient">TRUST</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Since 2005, SwiftCargo has been the backbone of international trade for manufacturers,
              retailers, and e-commerce businesses. We don't just move boxes — we engineer reliable
              supply chains.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              Our proprietary tracking platform connects every touchpoint in your supply chain,
              giving you visibility from first-mile pickup to last-mile delivery — in real time.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "2005", label: "Founded" },
                { val: "4,000+", label: "Active Clients" },
                { val: "68", label: "Global Offices" },
                { val: "850+", label: "Team Members" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[#0F1F3D] border border-[#1E3A5F]/50 rounded-xl p-5"
                >
                  <div
                    className="text-3xl text-amber-400 mb-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {s.val}
                  </div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: pillars */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-[#0F1F3D] border border-[#1E3A5F]/50 hover:border-amber-500/30 rounded-2xl p-6 transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}

            {/* Cert badge */}
            <div className="sm:col-span-2 bg-gradient-to-br from-amber-500/10 to-amber-700/5 border border-amber-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold mb-1">Industry-Leading Certifications</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["ISO 9001", "AEO Status", "IATA Certified", "C-TPAT Member", "GDP Compliant"].map(
                      (c) => (
                        <span
                          key={c}
                          className="text-xs bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full"
                        >
                          {c}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

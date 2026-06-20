"use client";
import { Ship, Plane, Truck, Warehouse, BarChart3, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "FCL & LCL container shipping worldwide. Reliable port-to-port and door-to-door ocean freight with real-time visibility.",
    tags: ["FCL", "LCL", "Reefer"],
    color: "from-blue-600/20 to-blue-800/10",
    iconBg: "bg-blue-600/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Express and standard air cargo services for time-critical shipments. Coverage across 300+ airports globally.",
    tags: ["Express", "Standard", "Charter"],
    color: "from-amber-500/20 to-amber-700/10",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Truck,
    title: "Road Freight",
    desc: "Domestic and cross-border trucking. FTL and LTL options with GPS-tracked fleets for maximum transparency.",
    tags: ["FTL", "LTL", "Cross-Border"],
    color: "from-green-600/20 to-green-800/10",
    iconBg: "bg-green-600/20",
    iconColor: "text-green-400",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "200+ fulfillment centers globally. Bonded warehousing, pick & pack, cold storage, and just-in-time solutions.",
    tags: ["Bonded", "Cold Chain", "Pick & Pack"],
    color: "from-purple-600/20 to-purple-800/10",
    iconBg: "bg-purple-600/20",
    iconColor: "text-purple-400",
  },
  {
    icon: BarChart3,
    title: "Supply Chain",
    desc: "End-to-end supply chain consulting and management. Analytics dashboards, demand planning, and cost optimization.",
    tags: ["Analytics", "Planning", "Optimization"],
    color: "from-rose-600/20 to-rose-800/10",
    iconBg: "bg-rose-600/20",
    iconColor: "text-rose-400",
  },
  {
    icon: ShieldCheck,
    title: "Customs & Compliance",
    desc: "Licensed customs brokerage in 60+ countries. Duty optimization, AEO certification support, and trade compliance.",
    tags: ["Customs", "AEO", "Compliance"],
    color: "from-teal-600/20 to-teal-800/10",
    iconBg: "bg-teal-600/20",
    iconColor: "text-teal-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="text-amber-500 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            What We Do
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-5xl md:text-6xl text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
            >
              COMPLETE LOGISTICS
              <br />
              <span className="text-gradient">SOLUTIONS</span>
            </h2>
            <p className="text-slate-400 max-w-sm md:text-right">
              Every mode, every route, every mile — we handle the complexity so you can focus on
              growing your business.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className={`service-card relative bg-gradient-to-br ${svc.color} border border-[#1E3A5F]/50 hover:border-amber-500/30 rounded-2xl p-7 cursor-pointer group`}
              >
                <div
                  className={`w-12 h-12 ${svc.iconBg} rounded-xl flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-6 h-6 ${svc.iconColor}`} />
                </div>

                <h3 className="text-white text-xl font-bold mb-3">{svc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{svc.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#0A1628]/50 border border-[#1E3A5F]/70 text-slate-400 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-7 right-7 w-8 h-8 bg-[#1E3A5F]/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-amber-400 text-lg">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

const regions = [
  {
    region: "Asia Pacific",
    offices: 24,
    ports: ["Shanghai", "Singapore", "Hong Kong", "Tokyo", "Sydney"],
    color: "bg-blue-500",
  },
  {
    region: "Europe",
    offices: 18,
    ports: ["Rotterdam", "Hamburg", "Antwerp", "Felixstowe", "Piraeus"],
    color: "bg-amber-500",
  },
  {
    region: "Americas",
    offices: 14,
    ports: ["New York", "Los Angeles", "Miami", "Houston", "São Paulo"],
    color: "bg-green-500",
  },
  {
    region: "Middle East & Africa",
    offices: 8,
    ports: ["Dubai", "Jebel Ali", "Nairobi", "Lagos", "Cape Town"],
    color: "bg-rose-500",
  },
  {
    region: "South Asia",
    offices: 4,
    ports: ["Mumbai", "Chennai", "Karachi", "Colombo"],
    color: "bg-purple-500",
  },
];

export default function Network() {
  return (
    <section id="network" className="py-28 bg-[#0F1F3D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-amber-500 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Our Network
          </div>
          <h2
            className="text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            EVERYWHERE <span className="text-gradient">TRADE FLOWS</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            68 offices. 150+ countries. 300+ air routes. Every major port, every trade lane,
            covered by our global network.
          </p>
        </div>

        {/* SVG World Map simplified */}
        <div className="relative bg-[#0A1628] rounded-3xl border border-[#1E3A5F]/50 p-8 mb-12 overflow-hidden">
          <svg viewBox="0 0 900 400" className="w-full opacity-90" fill="none">
            {/* Simplified world continents */}
            {/* North America */}
            <path
              d="M 100 80 L 180 70 L 200 100 L 220 120 L 210 160 L 190 200 L 160 220 L 130 200 L 110 170 L 90 140 Z"
              fill="#1E3A5F"
              stroke="#2A4F7A"
              strokeWidth="1"
            />
            {/* South America */}
            <path
              d="M 170 230 L 210 220 L 230 260 L 220 310 L 190 340 L 160 320 L 150 280 Z"
              fill="#1E3A5F"
              stroke="#2A4F7A"
              strokeWidth="1"
            />
            {/* Europe */}
            <path
              d="M 390 60 L 440 55 L 460 75 L 450 100 L 420 110 L 395 95 Z"
              fill="#1E3A5F"
              stroke="#2A4F7A"
              strokeWidth="1"
            />
            {/* Africa */}
            <path
              d="M 400 120 L 450 115 L 470 150 L 460 220 L 430 270 L 400 260 L 380 220 L 385 160 Z"
              fill="#1E3A5F"
              stroke="#2A4F7A"
              strokeWidth="1"
            />
            {/* Asia */}
            <path
              d="M 470 50 L 620 40 L 680 70 L 700 110 L 650 140 L 580 150 L 520 130 L 480 100 Z"
              fill="#1E3A5F"
              stroke="#2A4F7A"
              strokeWidth="1"
            />
            {/* South Asia */}
            <path
              d="M 570 140 L 610 135 L 620 175 L 590 185 L 565 165 Z"
              fill="#1E3A5F"
              stroke="#2A4F7A"
              strokeWidth="1"
            />
            {/* Australia */}
            <path
              d="M 680 250 L 760 240 L 790 280 L 760 320 L 700 315 L 670 290 Z"
              fill="#1E3A5F"
              stroke="#2A4F7A"
              strokeWidth="1"
            />

            {/* Route lines */}
            {[
              { x1: 155, y1: 150, x2: 420, y2: 90, cp1x: 250, cp1y: 30 },
              { x1: 420, y1: 90, x2: 590, y2: 95, cp1x: 500, cp1y: 50 },
              { x1: 590, y1: 95, x2: 730, y2: 270, cp1x: 700, cp1y: 150 },
              { x1: 420, y1: 90, x2: 430, y2: 190, cp1x: 500, cp1y: 140 },
              { x1: 155, y1: 150, x2: 190, y2: 280, cp1x: 130, cp1y: 220 },
            ].map((r, i) => (
              <path
                key={i}
                d={`M ${r.x1} ${r.y1} Q ${r.cp1x} ${r.cp1y} ${r.x2} ${r.y2}`}
                stroke="#F59E0B"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                opacity="0.4"
              />
            ))}

            {/* Dots for major hubs */}
            {[
              { cx: 155, cy: 150, label: "New York" },
              { cx: 420, cy: 90, label: "Rotterdam" },
              { cx: 590, cy: 95, label: "Shanghai" },
              { cx: 540, cy: 155, label: "Dubai" },
              { cx: 730, cy: 270, label: "Sydney" },
              { cx: 190, cy: 280, label: "São Paulo" },
              { cx: 430, cy: 190, label: "Nairobi" },
              { cx: 570, cy: 148, label: "Mumbai" },
            ].map((d) => (
              <g key={d.label}>
                <circle cx={d.cx} cy={d.cy} r="5" fill="#F59E0B" opacity="0.9" />
                <circle cx={d.cx} cy={d.cy} r="10" fill="#F59E0B" opacity="0.2">
                  <animate attributeName="r" values="5;14;5" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <text
                  x={d.cx + 8}
                  y={d.cy - 6}
                  fill="#94A3B8"
                  fontSize="9"
                  fontFamily="Inter"
                >
                  {d.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Region cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {regions.map((r) => (
            <div
              key={r.region}
              className="bg-[#0A1628] border border-[#1E3A5F]/50 hover:border-amber-500/30 rounded-xl p-5 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2.5 h-2.5 rounded-full ${r.color}`} />
                <span className="text-white text-xs font-semibold">{r.region}</span>
              </div>
              <div
                className="text-3xl text-amber-400 mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {r.offices}
              </div>
              <div className="text-slate-500 text-xs mb-3">Offices</div>
              <div className="space-y-1">
                {r.ports.map((p) => (
                  <div key={p} className="text-slate-400 text-xs">
                    · {p}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

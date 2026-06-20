"use client";

const stats = [
  "🚢 150+ Countries Served",
  "✈️ 12,000+ Shipments Monthly",
  "🏭 200+ Warehouse Locations",
  "⏱️ 99.2% On-Time Delivery Rate",
  "🌍 $2.4B Cargo Moved Annually",
  "📦 Air · Sea · Road · Rail",
  "🔒 Full Cargo Insurance Available",
  "🤝 Trusted by 4,000+ Businesses",
];

export default function StatsTicker() {
  const doubled = [...stats, ...stats];

  return (
    <div className="bg-amber-500 py-3 overflow-hidden">
      <div className="ticker-inner flex items-center gap-12 w-max">
        {doubled.map((s, i) => (
          <span key={i} className="text-[#0A1628] font-semibold text-sm tracking-wide whitespace-nowrap">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
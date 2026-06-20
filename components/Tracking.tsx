"use client";
import { useState } from "react";
import { Search, MapPin, Package, CheckCircle, Clock, Truck } from "lucide-react";

const mockShipments: Record<string, {
  id: string;
  status: string;
  origin: string;
  dest: string;
  eta: string;
  progress: number;
  events: { time: string; location: string; event: string; done: boolean }[];
}> = {
  "SC-2024-08821": {
    id: "SC-2024-08821",
    status: "In Transit",
    origin: "Shanghai, CN",
    dest: "Rotterdam, NL",
    eta: "Jul 5, 2024",
    progress: 67,
    events: [
      { time: "Jun 10, 09:00", location: "Shanghai Port", event: "Shipment picked up", done: true },
      { time: "Jun 11, 14:30", location: "Shanghai Port", event: "Customs cleared — Export", done: true },
      { time: "Jun 12, 07:00", location: "Pacific Ocean", event: "Vessel departed — MSC Beatrice", done: true },
      { time: "Jun 20, 12:00", location: "Singapore", event: "Transshipment hub", done: false },
      { time: "Jul 3, 08:00", location: "Suez Canal", event: "Canal transit", done: false },
      { time: "Jul 5, 16:00", location: "Rotterdam, NL", event: "Estimated arrival", done: false },
    ],
  },
  "SC-2024-07110": {
    id: "SC-2024-07110",
    status: "Delivered",
    origin: "Dubai, AE",
    dest: "Mumbai, IN",
    eta: "Jun 15, 2024",
    progress: 100,
    events: [
      { time: "Jun 12, 08:00", location: "Dubai, AE", event: "Shipment picked up", done: true },
      { time: "Jun 12, 18:00", location: "Dubai Airport", event: "Departed — EK3719", done: true },
      { time: "Jun 13, 06:00", location: "Mumbai Airport", event: "Arrived — Customs processing", done: true },
      { time: "Jun 14, 10:00", location: "Mumbai, IN", event: "Out for delivery", done: true },
      { time: "Jun 14, 14:35", location: "Mumbai, IN", event: "Delivered — Signed by Raj M.", done: true },
    ],
  },
};

export default function Tracking() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<(typeof mockShipments)[string] | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTrack = () => {
    const id = query.trim().toUpperCase();
    setLoading(true);
    setNotFound(false);
    setResult(null);
    setTimeout(() => {
      setLoading(false);
      if (mockShipments[id]) {
        setResult(mockShipments[id]);
      } else {
        setNotFound(true);
      }
    }, 800);
  };

  return (
    <section id="tracking" className="py-28 bg-[#0F1F3D]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-amber-500 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Live Tracking
          </div>
          <h2
            className="text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            WHERE IS YOUR <span className="text-gradient">CARGO?</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Enter your shipment ID to get real-time status and location updates.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Try: SC-2024-08821 or SC-2024-07110
          </p>
        </div>

        {/* Search bar */}
        <div className="flex gap-3 max-w-2xl mx-auto mb-10">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              placeholder="Enter tracking number  e.g. SC-2024-08821"
              className="w-full bg-[#0A1628] border border-[#1E3A5F] focus:border-amber-500/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-slate-600 outline-none transition-colors text-sm"
            />
          </div>
          <button
            onClick={handleTrack}
            className="bg-amber-500 hover:bg-amber-400 text-[#0A1628] font-semibold px-7 py-4 rounded-xl transition-colors whitespace-nowrap"
          >
            {loading ? "Searching…" : "Track"}
          </button>
        </div>

        {/* Result */}
        {notFound && (
          <div className="text-center text-slate-400 bg-[#0A1628] border border-[#1E3A5F]/50 rounded-2xl p-8">
            <Package className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="font-medium text-white mb-1">Shipment not found</p>
            <p className="text-sm">Please check your tracking number and try again.</p>
          </div>
        )}

        {result && (
          <div className="bg-[#0A1628] border border-[#1E3A5F]/50 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="p-7 border-b border-[#1E3A5F]/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">Tracking ID</div>
                  <div
                    className="text-white text-2xl"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {result.id}
                  </div>
                </div>
                <span
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                    result.status === "Delivered"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  {result.status}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Origin", val: result.origin, Icon: MapPin },
                  { label: "Destination", val: result.dest, Icon: MapPin },
                  { label: "ETA", val: result.eta, Icon: Clock },
                  { label: "Progress", val: `${result.progress}%`, Icon: Truck },
                ].map(({ label, val, Icon }) => (
                  <div key={label} className="bg-[#0F1F3D] rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                      <Icon className="w-3 h-3" />
                      {label}
                    </div>
                    <div className="text-white font-semibold text-sm">{val}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 h-2 bg-[#1E3A5F] rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all duration-1000"
                  style={{ width: `${result.progress}%` }}
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="p-7">
              <div className="text-white font-semibold mb-5">Shipment Events</div>
              <div className="space-y-0">
                {result.events.map((ev, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          ev.done
                            ? "bg-amber-500/20 border-2 border-amber-500"
                            : "bg-[#1E3A5F] border-2 border-[#1E3A5F]"
                        }`}
                      >
                        {ev.done ? (
                          <CheckCircle className="w-4 h-4 text-amber-400" />
                        ) : (
                          <Clock className="w-4 h-4 text-slate-600" />
                        )}
                      </div>
                      {i < result.events.length - 1 && (
                        <div
                          className={`w-px flex-1 my-1 ${
                            ev.done ? "bg-amber-500/40" : "bg-[#1E3A5F]"
                          }`}
                          style={{ minHeight: "32px" }}
                        />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className={`font-medium text-sm ${ev.done ? "text-white" : "text-slate-600"}`}>
                        {ev.event}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">
                        {ev.location} · {ev.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

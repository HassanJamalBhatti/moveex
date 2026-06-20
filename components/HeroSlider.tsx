"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const svgRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = svgRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
    setTimeout(() => {
      path.style.transition = "stroke-dashoffset 3s ease-in-out";
      path.style.strokeDashoffset = "0";
    }, 400);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">

      {/* Background Image */}
      <Image
        src="/hero.jpg"          
        alt="Logistics background"
        fill
        priority
        className="object-cover"
        quality={85}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 via-[#0A1628]/80 to-[#0A1628]/70" />

      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-400 text-sm font-medium">Operating in 150+ Countries</span>
            </div>

            <h1
              className="text-6xl md:text-7xl lg:text-8xl leading-none text-white mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
            >
              MOVE <span className="text-gradient">CARGO</span>
              <br />
              MOVE <span className="text-white">WORLDS</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
              End-to-end freight forwarding and supply chain solutions. From factory floor to your
              customer's door — on time, every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0A1628] font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 text-base"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#tracking"
                className="inline-flex items-center justify-center gap-2 border border-[#1E3A5F] hover:border-amber-500/50 text-white font-medium px-8 py-4 rounded-lg transition-all hover:bg-[#1E3A5F]/30 text-base"
              >
                Track Your Shipment
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-14 flex gap-10 border-t border-[#1E3A5F]/50 pt-10">
              {[
                { num: "12K+", label: "Shipments Monthly" },
                { num: "99.2%", label: "On-time Delivery" },
                { num: "24/7", label: "Live Support" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl text-amber-400"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5 uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Animated Route SVG */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Background card */}
              <div className="absolute inset-0 bg-[#0F1F3D]/70 rounded-3xl border border-[#1E3A5F]/50 backdrop-blur-sm" />

              {/* SVG route animation */}
              <svg
                viewBox="0 0 500 400"
                className="relative w-full h-full p-8"
                fill="none"
              >
                {/* Grid lines */}
                {[80, 160, 240, 320].map((y) => (
                  <line
                    key={y}
                    x1="40"
                    y1={y}
                    x2="460"
                    y2={y}
                    stroke="#1E3A5F"
                    strokeWidth="1"
                  />
                ))}
                {[100, 200, 300, 400].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    y1="40"
                    x2={x}
                    y2="360"
                    stroke="#1E3A5F"
                    strokeWidth="1"
                  />
                ))}

                {/* Route path */}
                <path
                  ref={svgRef}
                  d="M 60 320 C 120 280, 160 240, 220 200 S 320 140, 380 120 L 440 100"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Origin dot */}
                <circle cx="60" cy="320" r="8" fill="#F59E0B" />
                <circle cx="60" cy="320" r="16" fill="#F59E0B" fillOpacity="0.2" className="animate-ping" />

                {/* Mid stop */}
                <circle cx="220" cy="200" r="6" fill="#1E3A5F" stroke="#F59E0B" strokeWidth="2" />

                {/* Destination dot */}
                <circle cx="440" cy="100" r="8" fill="#F59E0B" />
                <circle cx="440" cy="100" r="16" fill="#F59E0B" fillOpacity="0.2" className="animate-ping" style={{ animationDelay: "0.5s" }} />

                {/* Moving cargo dots */}
                <circle r="5" fill="white">
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path="M 60 320 C 120 280, 160 240, 220 200 S 320 140, 380 120 L 440 100"
                  />
                  <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Labels */}
                <text x="45" y="345" fill="#94A3B8" fontSize="11" fontFamily="Inter">Origin</text>
                <text x="205" y="220" fill="#94A3B8" fontSize="11" fontFamily="Inter">Transit</text>
                <text x="420" y="95" fill="#94A3B8" fontSize="11" fontFamily="Inter">Dest.</text>

                {/* Cargo icon placeholder boxes */}
                <rect x="170" y="155" width="32" height="24" rx="4" fill="#1E3A5F" stroke="#2A4F7A" strokeWidth="1" />
                <rect x="176" y="160" width="20" height="14" rx="2" fill="#2A4F7A" />

                <rect x="330" y="100" width="32" height="24" rx="4" fill="#1E3A5F" stroke="#2A4F7A" strokeWidth="1" />
                <rect x="336" y="105" width="20" height="14" rx="2" fill="#2A4F7A" />
              </svg>

              {/* Status pill */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0A1628]/90 border border-[#1E3A5F]/70 rounded-xl p-4 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Live Tracking</div>
                    <div className="text-white font-semibold text-sm">SC-2024-08821</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">In Transit</span>
                  </div>
                </div>
                <div className="mt-3 h-1.5 bg-[#1E3A5F] rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-amber-500 rounded-full" />
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-slate-500 text-xs">Shanghai</span>
                  <span className="text-slate-500 text-xs">67% complete</span>
                  <span className="text-slate-500 text-xs">Rotterdam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 z-10">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
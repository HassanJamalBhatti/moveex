"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    origin: "",
    destination: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#0F1F3D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="text-amber-500 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Get in Touch
            </div>
            <h2
              className="text-5xl md:text-6xl text-white leading-none mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
            >
              REQUEST A <span className="text-gradient">QUOTE</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10">
              Tell us about your shipment. Our team will come back within 4 business hours with a
              competitive quote tailored to your needs.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: "Call Us",
                  val: "+1 (800) 799-4325",
                  sub: "Mon–Fri 08:00–20:00 EST",
                },
                {
                  icon: Mail,
                  label: "Email",
                  val: "hello@moveex.com",
                  sub: "Response within 4 hours",
                },
                {
                  icon: MapPin,
                  label: "HQ",
                  val: "450 Logistics Way, Hamburg, DE",
                  sub: "Global HQ",
                },
              ].map(({ icon: Icon, label, val, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest mb-0.5">{label}</div>
                    <div className="text-white font-medium">{val}</div>
                    <div className="text-slate-500 text-sm">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#0A1628] border border-[#1E3A5F]/50 rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Quote Request Sent!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Our team will reach out within 4 business hours with a tailored quote.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-amber-400 text-sm hover:text-amber-300 transition-colors"
                >
                  Submit another request →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-widest block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#0F1F3D] border border-[#1E3A5F] focus:border-amber-500/50 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-slate-600"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-widest block mb-1.5">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#0F1F3D] border border-[#1E3A5F] focus:border-amber-500/50 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-slate-600"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-xs uppercase tracking-widest block mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-[#0F1F3D] border border-[#1E3A5F] focus:border-amber-500/50 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-slate-600"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label className="text-slate-400 text-xs uppercase tracking-widest block mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#0F1F3D] border border-[#1E3A5F] focus:border-amber-500/50 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors"
                  >
                    <option value="" disabled>Select a service…</option>
                    <option>Ocean Freight — FCL</option>
                    <option>Ocean Freight — LCL</option>
                    <option>Air Freight</option>
                    <option>Road Freight</option>
                    <option>Warehousing</option>
                    <option>Supply Chain Consulting</option>
                    <option>Customs Brokerage</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-widest block mb-1.5">
                      Origin Port / City
                    </label>
                    <input
                      type="text"
                      value={form.origin}
                      onChange={(e) => setForm({ ...form, origin: e.target.value })}
                      className="w-full bg-[#0F1F3D] border border-[#1E3A5F] focus:border-amber-500/50 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-slate-600"
                      placeholder="Shanghai, CN"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-widest block mb-1.5">
                      Destination
                    </label>
                    <input
                      type="text"
                      value={form.destination}
                      onChange={(e) => setForm({ ...form, destination: e.target.value })}
                      className="w-full bg-[#0F1F3D] border border-[#1E3A5F] focus:border-amber-500/50 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-slate-600"
                      placeholder="Rotterdam, NL"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-xs uppercase tracking-widest block mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#0F1F3D] border border-[#1E3A5F] focus:border-amber-500/50 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-slate-600 resize-none"
                    placeholder="Cargo type, weight, dimensions, special requirements…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-[#0A1628] font-semibold py-4 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Quote Request
                </button>

                <p className="text-slate-600 text-xs text-center">
                  We respond within 4 business hours · No spam, ever
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
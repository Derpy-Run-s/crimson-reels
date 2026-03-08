import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({ subject: "", location: "", iso: "NORMAL", codec: "", notes: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "TRANSMISSION SENT",
      description: "We'll be in touch within 24 hours.",
    });
    setForm({ subject: "", location: "", iso: "NORMAL", codec: "", notes: "" });
    setTimeout(() => setFormOpen(false), 2000);
  };

  const inputClass = "w-full mt-2 bg-transparent border-b border-border/50 py-3 font-mono text-[12px] md:text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors";

  return (
    <main className="min-h-[100svh] flex items-center justify-center bg-background relative overflow-hidden pt-20 pb-10 px-5">
      {/* Spotlight */}
      <div className="absolute inset-0 spotlight-center pointer-events-none" />

      {/* REC Button State */}
      <div
        className={`transition-all duration-700 ${
          formOpen ? "opacity-0 pointer-events-none scale-75 absolute" : "opacity-100"
        }`}
      >
        <ScrollReveal>
          <div className="text-center">
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-8 md:mb-10">
              READY WHEN YOU ARE
            </p>
            <MagneticButton
              className="w-28 h-28 md:w-40 md:h-40 border-2 border-primary flex items-center justify-center rec-pulse bg-transparent hover:bg-primary/10 transition-colors duration-500 mx-auto"
              onClick={() => setFormOpen(true)}
              strength={0.2}
            >
              <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-primary">● REC</span>
            </MagneticButton>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-8 md:mt-10">
              TAP TO BEGIN
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Form State */}
      <div
        className={`w-full max-w-2xl transition-all duration-700 ${
          formOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none absolute"
        }`}
      >
        <div className="mb-8 md:mb-10">
          <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-primary uppercase mb-2">
            // RECORDING
          </p>
          <h1 className="font-display text-3xl md:text-6xl uppercase tracking-cinematic text-foreground">
            CONTACT
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <label className="block">
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase">SUBJECT:</span>
            <input
              type="text"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="YOUR NAME"
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase">LOCATION:</span>
            <input
              type="email"
              required
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="YOUR@EMAIL.COM"
              className={inputClass}
            />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <label className="block">
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase">ISO: [URGENCY]</span>
              <select
                value={form.iso}
                onChange={(e) => setForm({ ...form, iso: e.target.value })}
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="LOW" className="bg-background">100 — LOW</option>
                <option value="NORMAL" className="bg-background">400 — NORMAL</option>
                <option value="HIGH" className="bg-background">1600 — HIGH</option>
                <option value="CRITICAL" className="bg-background">6400 — CRITICAL</option>
              </select>
            </label>

            <label className="block">
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase">CODEC: [SERVICE]</span>
              <select
                value={form.codec}
                onChange={(e) => setForm({ ...form, codec: e.target.value })}
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="" className="bg-background" disabled>SELECT SERVICE</option>
                <option value="CINEMA" className="bg-background">CINEMATOGRAPHY</option>
                <option value="PHOTO" className="bg-background">PHOTOGRAPHY</option>
                <option value="POST" className="bg-background">POST-PRODUCTION</option>
                <option value="FULL" className="bg-background">FULL PACKAGE</option>
              </select>
            </label>
          </div>

          <label className="block">
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase">NOTES:</span>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="TELL US ABOUT YOUR PROJECT..."
              rows={3}
              className={`${inputClass} resize-none`}
            />
          </label>

          <div className="flex items-center justify-between pt-2 md:pt-4">
            <button
              type="button"
              onClick={() => setFormOpen(false)}
              className="font-mono text-[9px] md:text-[10px] tracking-widest text-muted-foreground uppercase hover:text-foreground active:text-primary transition-colors py-2"
            >
              ← BACK
            </button>
            <MagneticButton
              className="border border-primary px-6 md:px-8 py-2.5 md:py-3 font-mono text-[10px] md:text-xs tracking-widest text-primary uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
                TRANSMIT
              </span>
            </MagneticButton>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;

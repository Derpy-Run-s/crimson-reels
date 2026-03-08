import { useState } from "react";
import { z } from "zod";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().max(30, "Phone too long").optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().trim().min(1, "Tell us about your project").max(2000, "Message too long"),
});

type FormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const { toast } = useToast();

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "TRANSMISSION SENT", description: "We'll be in touch within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    setTimeout(() => setFormOpen(false), 2000);
  };

  const inputClass =
    "w-full mt-2 bg-transparent border-b border-border/40 py-3 font-mono text-[11px] md:text-sm text-foreground placeholder:text-muted-foreground/25 focus:outline-none focus:border-primary transition-colors duration-300";
  const labelClass = "font-mono text-[8px] md:text-[9px] tracking-[0.3em] text-muted-foreground/60 uppercase";
  const errorClass = "font-mono text-[8px] tracking-[0.2em] text-destructive mt-1.5";

  return (
    <main className="min-h-[100svh] flex items-center justify-center bg-background relative overflow-hidden pt-20 pb-10 px-5">
      {/* Spotlight */}
      <div className="absolute inset-0 spotlight-center pointer-events-none" />

      {/* Viewfinder corners */}
      <div className="absolute top-24 left-6 w-6 h-6 border-t border-l border-primary/15 hidden md:block" />
      <div className="absolute top-24 right-6 w-6 h-6 border-t border-r border-primary/15 hidden md:block" />
      <div className="absolute bottom-6 left-6 w-6 h-6 border-b border-l border-primary/15 hidden md:block" />
      <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-primary/15 hidden md:block" />

      {/* ── REC Button ── */}
      <div
        className={`transition-all duration-700 ${
          formOpen ? "opacity-0 pointer-events-none scale-75 absolute" : "opacity-100"
        }`}
      >
        <ScrollReveal>
          <div className="text-center">
            <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-muted-foreground/50 uppercase mb-8 md:mb-10">
              READY WHEN YOU ARE
            </p>
            <MagneticButton
              className="w-28 h-28 md:w-40 md:h-40 border-2 border-primary flex items-center justify-center rec-pulse bg-transparent hover:bg-primary/10 transition-colors duration-500 mx-auto"
              onClick={() => setFormOpen(true)}
              strength={0.2}
            >
              <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-primary">● REC</span>
            </MagneticButton>
            <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-muted-foreground/40 uppercase mt-8 md:mt-10">
              TAP TO BEGIN
            </p>

            {/* Quick contact info */}
            <div className="mt-12 md:mt-16 space-y-3">
              <div className="flex items-center justify-center gap-4">
                <div className="w-6 h-px bg-border/20" />
                <p className="font-mono text-[8px] tracking-[0.2em] text-muted-foreground/30 uppercase">OR REACH US DIRECTLY</p>
                <div className="w-6 h-px bg-border/20" />
              </div>
              <p className="font-mono text-[10px] text-muted-foreground/40 tracking-wider">info@thersproductions.com</p>
              <p className="font-mono text-[10px] text-muted-foreground/40 tracking-wider">+971 50 123 4567</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Form ── */}
      <div
        className={`w-full max-w-3xl transition-all duration-700 ${
          formOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none absolute"
        }`}
      >
        {/* Header */}
        <div className="mb-8 md:mb-10 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-primary animate-pulse" />
              <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
                RECORDING
              </p>
            </div>
            <h1 className="font-display text-3xl md:text-5xl uppercase tracking-cinematic text-foreground">
              START A{" "}
              <span className="text-primary">PROJECT</span>
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setFormOpen(false)}
            className="font-mono text-[9px] md:text-[10px] tracking-widest text-muted-foreground/40 uppercase hover:text-foreground transition-colors py-2"
          >
            ✕ CLOSE
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8" noValidate>
          {/* Name + Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <label className="block">
              <span className={labelClass}>SUBJECT: [NAME]</span>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="YOUR NAME"
                maxLength={100}
                className={`${inputClass} ${errors.name ? "border-destructive" : ""}`}
              />
              {errors.name && <p className={errorClass}>{errors.name}</p>}
            </label>

            <label className="block">
              <span className={labelClass}>LOCATION: [EMAIL]</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="YOUR@EMAIL.COM"
                maxLength={255}
                className={`${inputClass} ${errors.email ? "border-destructive" : ""}`}
              />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </label>
          </div>

          {/* Phone + Service row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <label className="block">
              <span className={labelClass}>FREQUENCY: [PHONE]</span>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+971 ..."
                maxLength={30}
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className={labelClass}>CODEC: [SERVICE]</span>
              <select
                value={form.service}
                onChange={(e) => handleChange("service", e.target.value)}
                className={`${inputClass} appearance-none cursor-pointer ${errors.service ? "border-destructive" : ""}`}
              >
                <option value="" className="bg-background" disabled>SELECT SERVICE</option>
                <option value="CINEMA" className="bg-background">CINEMATOGRAPHY</option>
                <option value="PHOTO" className="bg-background">PHOTOGRAPHY</option>
                <option value="DESIGN" className="bg-background">GRAPHIC DESIGN</option>
                <option value="POST" className="bg-background">POST-PRODUCTION</option>
                <option value="FULL" className="bg-background">FULL PACKAGE</option>
              </select>
              {errors.service && <p className={errorClass}>{errors.service}</p>}
            </label>
          </div>

          {/* Budget */}
          <label className="block">
            <span className={labelClass}>ISO: [BUDGET RANGE]</span>
            <select
              value={form.budget}
              onChange={(e) => handleChange("budget", e.target.value)}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="" className="bg-background">NOT SURE YET</option>
              <option value="5K" className="bg-background">100 — UNDER $5K</option>
              <option value="15K" className="bg-background">400 — $5K – $15K</option>
              <option value="50K" className="bg-background">1600 — $15K – $50K</option>
              <option value="50K+" className="bg-background">6400 — $50K+</option>
            </select>
          </label>

          {/* Message */}
          <label className="block">
            <span className={labelClass}>NOTES: [PROJECT DETAILS]</span>
            <textarea
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="TELL US ABOUT YOUR PROJECT, TIMELINE, AND VISION..."
              rows={4}
              maxLength={2000}
              className={`${inputClass} resize-none ${errors.message ? "border-destructive" : ""}`}
            />
            <div className="flex justify-between mt-1.5">
              {errors.message ? (
                <p className={errorClass}>{errors.message}</p>
              ) : <span />}
              <span className="font-mono text-[7px] text-muted-foreground/20 tracking-wider">
                {form.message.length}/2000
              </span>
            </div>
          </label>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-border/10">
            <div className="hidden md:block">
              <p className="font-mono text-[8px] text-muted-foreground/20 tracking-[0.2em]">
                ALL FIELDS ENCRYPTED · RESPONSE WITHIN 24H
              </p>
            </div>
            <MagneticButton
              className="border border-primary px-6 md:px-10 py-2.5 md:py-3.5 font-mono text-[9px] md:text-xs tracking-[0.2em] text-primary uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 ml-auto"
            >
              <span className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
                TRANSMIT
              </span>
            </MagneticButton>
          </div>
        </form>

        {/* Contact info below form */}
        <div className="mt-10 md:mt-14 pt-6 border-t border-border/10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-primary/40 uppercase mb-1">EMAIL</p>
            <p className="font-mono text-[10px] text-muted-foreground/40">info@thersproductions.com</p>
          </div>
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-primary/40 uppercase mb-1">PHONE</p>
            <p className="font-mono text-[10px] text-muted-foreground/40">+971 50 123 4567</p>
          </div>
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-primary/40 uppercase mb-1">LOCATIONS</p>
            <p className="font-mono text-[10px] text-muted-foreground/40">DUBAI · KERALA · BANGALORE · MUSCAT · RIYADH</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

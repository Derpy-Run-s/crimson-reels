import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import MagneticButton from "@/components/MagneticButton";

const services = [
  { label: "ADVERTISEMENTS", desc: "TV commercials, digital ads, and social media campaigns that cut through the noise." },
  { label: "SHORT FILMS", desc: "Narrative storytelling with cinematic production value — festival-ready." },
  { label: "PHOTOGRAPHY", desc: "Editorial, commercial, portrait, and event photography with meticulous post." },
  { label: "GRAPHIC DESIGN", desc: "Brand identity, packaging, and visual systems built for impact." },
  { label: "POST-PRODUCTION", desc: "Color grading, VFX, sound design, and final delivery across all formats." },
];

const milestones = [
  { year: "2025", event: "Red Sea Productions founded in Dubai" },
  { year: "2025", event: "Expanded operations to Kerala & Bangalore" },
  { year: "2025", event: "First major campaign — Bengaluru Torpedoes" },
  { year: "2026", event: "Opened Muscat & Riyadh offices" },
  { year: "2026", event: "100+ projects delivered worldwide" },
];

const team = [
  {
    name: "ABHI",
    role: "Founder & Creative Director",
    bio: "The vision behind Red Sea. Obsessed with light, shadow, and telling stories that stop people mid-scroll. Leads every project from concept to final frame.",
    initials: "A",
  },
  {
    name: "ROYCE",
    role: "Co-Founder & Head of Production",
    bio: "The engine that makes it all run. From scheduling shoots across 5 cities to managing post-production pipelines — nothing ships without Royce's stamp.",
    initials: "R",
  },
];

const About = () => (
  <main className="pt-20 md:pt-24 pb-0">

    {/* ── Hero ── */}
    <section className="relative overflow-hidden min-h-[60vh] md:min-h-[80vh] flex items-end">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="https://thersproductions.com/assets/rs-assets/worksnew/8.jpg"
          alt="Red Sea Productions Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Viewfinder */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/20" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/20" />

      {/* OSD */}
      <div className="absolute top-6 right-8 hidden md:flex items-center gap-3">
        <span className="w-2 h-2 bg-primary rec-pulse" />
        <p className="font-mono text-[8px] tracking-[0.3em] text-muted-foreground/30">
          REC · THE STUDIO
        </p>
      </div>

      <div className="relative z-10 px-5 md:px-12 pb-10 md:pb-16 w-full max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/80 uppercase">
              RED SEA PRODUCTIONS
            </p>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] uppercase tracking-cinematic text-foreground leading-[0.92]">
            THE STUDIO
            <span className="text-primary ml-3 md:ml-5" style={{ textShadow: "0 0 60px hsl(0 100% 45% / 0.2)" }}>
              BEHIND
            </span>
            <br className="hidden md:block" />
            <span className="md:ml-0"> THE LENS</span>
          </h1>
          <p className="font-mono text-[9px] md:text-[11px] text-muted-foreground/40 mt-3 md:mt-4 max-w-lg leading-relaxed">
            We don't just create content — we craft visual experiences that resonate, disrupt, and endure.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* ── Director's Statement ── */}
    <section className="px-5 md:px-12 py-16 md:py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-10 md:gap-24">
        {/* Left */}
        <div className="md:sticky md:top-32 md:self-start">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 md:w-12 h-px bg-primary/40" />
              <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
                DIRECTOR'S NOTE
              </p>
            </div>
            <p className="font-display text-[clamp(3rem,6vw,5rem)] uppercase tracking-cinematic text-primary/[0.08] leading-[0.9] hidden md:block">
              RED
              <br />
              SEA
            </p>
          </ScrollReveal>
        </div>

        {/* Right */}
        <div className="space-y-10 md:space-y-14">
          <ScrollReveal>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-primary/60 uppercase mb-3">// ORIGIN</p>
            <p className="font-mono text-[11px] md:text-[13px] text-muted-foreground leading-[2.2]">
              Red Sea Productions was born from a single belief: imagery should stop people in their tracks.
              We started with a camera, a vision, and an obsession with detail. Today, we operate across
              five cities, serving clients who demand nothing less than extraordinary.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-primary/60 uppercase mb-3">// APPROACH</p>
            <p className="font-mono text-[11px] md:text-[13px] text-muted-foreground leading-[2.2]">
              Every project begins with understanding — not just the brief, but the soul of the brand.
              We shoot on cinema-grade equipment, grade with custom LUTs built per project,
              and deliver with the precision of a surgical team. We don't cut corners — we cut everything else.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-primary/60 uppercase mb-3">// PHILOSOPHY</p>
            <p className="font-mono text-[11px] md:text-[13px] text-muted-foreground leading-[2.2]">
              Light is our language. Shadow is our punctuation. Silence is our loudest statement.
              We work with clients who understand that great imagery isn't just seen — it's felt.
              If you want safe, we're not for you. If you want unforgettable, pull up a chair.
            </p>
          </ScrollReveal>

          {/* Stats row */}
          <ScrollReveal delay={300}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border/15">
              <div>
                <span className="font-display text-3xl md:text-4xl text-primary">5+</span>
                <p className="font-mono text-[7px] md:text-[8px] tracking-[0.2em] text-muted-foreground/40 uppercase mt-1">CITIES</p>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl text-primary">100+</span>
                <p className="font-mono text-[7px] md:text-[8px] tracking-[0.2em] text-muted-foreground/40 uppercase mt-1">PROJECTS</p>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl text-primary">5</span>
                <p className="font-mono text-[7px] md:text-[8px] tracking-[0.2em] text-muted-foreground/40 uppercase mt-1">SERVICES</p>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl text-primary">∞</span>
                <p className="font-mono text-[7px] md:text-[8px] tracking-[0.2em] text-muted-foreground/40 uppercase mt-1">OBSESSION</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* ── Divider ── */}
    <div className="max-w-7xl mx-auto px-5 md:px-12">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-border/10" />
        <div className="w-1.5 h-1.5 bg-primary/30" />
        <div className="flex-1 h-px bg-border/10" />
      </div>
    </div>

    {/* ── Team ── */}
    <section className="px-5 md:px-12 py-16 md:py-28">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2 md:mb-3">
            <div className="w-8 md:w-12 h-px bg-primary/40" />
            <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
              THE CREW
            </p>
          </div>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] uppercase tracking-cinematic text-foreground leading-[0.95] mb-10 md:mb-16">
            FOUNDERS &{" "}
            <span className="text-primary">VISIONARIES</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 120}>
              <div className="group relative border border-border/15 hover:border-primary/30 transition-all duration-700 p-6 md:p-10 bg-card/30 hover:bg-card/50">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/0 group-hover:border-primary/40 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/0 group-hover:border-primary/40 transition-all duration-500" />

                <div className="flex items-start gap-5 md:gap-8">
                  {/* Initial avatar */}
                  <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 border border-border/30 group-hover:border-primary/50 flex items-center justify-center transition-all duration-500 bg-background">
                    <span className="font-display text-3xl md:text-4xl text-primary/60 group-hover:text-primary transition-colors duration-500">
                      {member.initials}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[7px] md:text-[8px] tracking-[0.3em] text-primary/50 uppercase mb-1">{member.role}</p>
                    <h3 className="font-display text-2xl md:text-3xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-500 mb-3">
                      {member.name}
                    </h3>
                    <p className="font-mono text-[10px] md:text-[11px] text-muted-foreground/50 leading-[2] group-hover:text-muted-foreground/70 transition-colors duration-500">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Index */}
                <span className="absolute top-4 right-5 font-mono text-[9px] text-muted-foreground/15 tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Divider ── */}
    <div className="max-w-7xl mx-auto px-5 md:px-12">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-border/10" />
        <div className="w-1.5 h-1.5 bg-primary/30" />
        <div className="flex-1 h-px bg-border/10" />
      </div>
    </div>

    {/* ── Services ── */}
    <section className="px-5 md:px-12 py-16 md:py-28">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2 md:mb-3">
            <div className="w-8 md:w-12 h-px bg-primary/40" />
            <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
              CAPABILITIES
            </p>
          </div>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] uppercase tracking-cinematic text-foreground leading-[0.95] mb-10 md:mb-14">
            WHAT WE{" "}
            <span className="text-primary">DO</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {services.map((service, i) => (
            <ScrollReveal key={service.label} delay={i * 60}>
              <div className="group flex items-start md:items-center justify-between py-6 md:py-8 border-b border-border/10 hover:border-primary/20 transition-all duration-500 cursor-default gap-6">
                <div className="flex items-start md:items-center gap-4 md:gap-6">
                  <span className="font-mono text-[9px] text-muted-foreground/20 tracking-[0.2em] shrink-0 pt-1 md:pt-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg md:text-2xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-500">
                      {service.label}
                    </h3>
                    <p className="font-mono text-[9px] md:text-[10px] text-muted-foreground/30 mt-1 leading-relaxed max-w-md group-hover:text-muted-foreground/50 transition-colors duration-500">
                      {service.desc}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-primary/0 group-hover:text-primary/60 transition-all duration-500 shrink-0 translate-x-2 group-hover:translate-x-0">
                  →
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Divider ── */}
    <div className="max-w-7xl mx-auto px-5 md:px-12">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-border/10" />
        <div className="w-1.5 h-1.5 bg-primary/30" />
        <div className="flex-1 h-px bg-border/10" />
      </div>
    </div>

    {/* ── Timeline ── */}
    <section className="px-5 md:px-12 py-16 md:py-28">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2 md:mb-3">
            <div className="w-8 md:w-12 h-px bg-primary/40" />
            <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
              OUR JOURNEY
            </p>
          </div>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] uppercase tracking-cinematic text-foreground leading-[0.95] mb-10 md:mb-14">
            THE{" "}
            <span className="text-primary">TIMELINE</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-[9px] top-0 bottom-0 w-px bg-border/15" />

          <div className="space-y-8 md:space-y-10">
            {milestones.map((m, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-5 md:gap-8 group">
                  {/* Dot */}
                  <div className="relative shrink-0">
                    <div className="w-[15px] h-[15px] md:w-[19px] md:h-[19px] border border-border/30 group-hover:border-primary/60 flex items-center justify-center transition-all duration-500 bg-background">
                      <div className="w-1.5 h-1.5 bg-primary/30 group-hover:bg-primary transition-all duration-500" />
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-primary/50">{m.year}</span>
                    <p className="font-mono text-[11px] md:text-[13px] text-muted-foreground/60 group-hover:text-foreground/80 mt-1 transition-colors duration-500">
                      {m.event}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── Locations ── */}
    <section className="px-5 md:px-12 py-16 md:py-24 border-t border-border/10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-8 md:w-12 h-px bg-primary/40" />
            <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
              GLOBAL PRESENCE
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 md:gap-x-14 gap-y-4">
            {["DUBAI", "KERALA", "BANGALORE", "MUSCAT", "RIYADH"].map((city, i) => (
              <div key={city} className="group">
                <p className="font-display text-xl md:text-3xl uppercase tracking-cinematic text-foreground/30 group-hover:text-primary transition-colors duration-500">
                  {city}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="py-20 md:py-32 px-5 bg-background relative overflow-hidden border-t border-border/10">
      <div className="absolute inset-0 spotlight-center pointer-events-none opacity-60" />
      <ScrollReveal>
        <div className="text-center relative z-10">
          <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/60 uppercase mb-4">
            READY TO CREATE SOMETHING?
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] uppercase tracking-cinematic text-foreground mb-8 leading-[0.95]">
            LET'S WORK
            <br />
            <span className="text-primary" style={{ textShadow: "0 0 60px hsl(0 100% 45% / 0.2)" }}>
              TOGETHER
            </span>
          </h2>
          <Link to="/contact">
            <MagneticButton className="inline-flex items-center gap-3 border border-primary/60 hover:border-primary px-7 md:px-10 py-3 md:py-4 font-mono text-[9px] md:text-xs tracking-[0.2em] text-primary uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 group">
              <span className="w-1.5 h-1.5 bg-primary group-hover:bg-primary-foreground animate-pulse" />
              GET IN TOUCH
            </MagneticButton>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  </main>
);

export default About;

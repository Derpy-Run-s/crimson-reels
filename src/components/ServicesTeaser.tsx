import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "CINEMATOGRAPHY",
    description: "Feature films, documentaries, and commercial motion. Shot on RED. Delivered in 8K.",
  },
  {
    number: "02",
    title: "EDITORIAL PHOTOGRAPHY",
    description: "Fashion, portrait, and product shoots. Raw and refined. Every frame a statement.",
  },
  {
    number: "03",
    title: "POST-PRODUCTION",
    description: "Color grading, VFX, sound design. We polish until it bleeds perfection.",
  },
];

const ServicesTeaser = () => (
  <section className="py-20 md:py-40 px-5 md:px-12 bg-background spotlight">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-3">
          WHAT WE DO
        </p>
        <h2 className="font-display text-3xl md:text-6xl uppercase tracking-cinematic text-foreground mb-12 md:mb-24">
          SERVICES
        </h2>
      </ScrollReveal>

      <div className="space-y-10 md:space-y-20">
        {services.map((service, i) => (
          <ScrollReveal key={service.number} delay={i * 120}>
            <div className="relative group">
              {/* Number watermark */}
              <span className="font-display text-[clamp(4rem,12vw,10rem)] leading-none text-primary/[0.05] absolute -top-4 md:-top-8 -left-1 md:-left-2 select-none pointer-events-none">
                {service.number}
              </span>

              <div className="relative z-10 pl-1 md:pl-4">
                <h3 className="font-display text-xl md:text-4xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-mono text-[11px] md:text-sm text-muted-foreground mt-2 md:mt-3 leading-relaxed max-w-xl">
                  {service.description}
                </p>
                <div className="h-px bg-border/30 mt-6 md:mt-8 w-full group-hover:bg-primary/30 transition-colors duration-500" />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesTeaser;

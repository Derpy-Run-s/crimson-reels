import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "CINEMATOGRAPHY",
    description: "Feature films, documentaries, and commercial motion. Shot on RED. Delivered in 8K.",
    specs: "RED MONSTRO · 8K · DOLBY ATMOS",
  },
  {
    number: "02",
    title: "PHOTOGRAPHY",
    description: "Fashion, portrait, and product shoots. Raw and refined. Every frame a statement.",
    specs: "HASSELBLAD · MEDIUM FORMAT · RAW",
  },
  {
    number: "03",
    title: "POST-PRODUCTION",
    description: "Color grading, VFX, sound design. We polish until it bleeds perfection.",
    specs: "DAVINCI RESOLVE · CUSTOM LUTS · ATMOS",
  },
];

const ServicesTeaser = () => (
  <section className="py-20 md:py-40 bg-background relative overflow-hidden">
    {/* Background watermark */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
      <span className="font-display text-[clamp(6rem,25vw,20rem)] uppercase tracking-cinematic text-primary/[0.02] whitespace-nowrap">
        SERVICES
      </span>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-2 md:mb-3">
          <div className="w-8 md:w-12 h-px bg-primary/40" />
          <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
            WHAT WE DO
          </p>
        </div>
        <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] uppercase tracking-cinematic text-foreground mb-12 md:mb-20 leading-[0.95]">
          OUR <span className="text-primary">CRAFT</span>
        </h2>
      </ScrollReveal>

      <div className="space-y-0">
        {services.map((service, i) => (
          <ScrollReveal key={service.number} delay={i * 100}>
            <div className="group relative border-t border-border/20 py-8 md:py-12 hover:bg-primary/[0.02] transition-colors duration-700">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                {/* Number */}
                <span className="font-mono text-[10px] md:text-xs text-primary/40 tracking-[0.3em] group-hover:text-primary/80 transition-colors duration-500 shrink-0 md:w-16 md:pt-1">
                  {service.number}
                </span>

                {/* Main content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-3xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-500 mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="font-mono text-[11px] md:text-[13px] text-muted-foreground leading-[1.8] max-w-lg">
                    {service.description}
                  </p>
                </div>

                {/* Technical specs */}
                <div className="md:text-right shrink-0">
                  <p className="font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors duration-500">
                    {service.specs}
                  </p>
                </div>
              </div>

              {/* Hover accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
            </div>
          </ScrollReveal>
        ))}
        {/* Bottom border */}
        <div className="border-t border-border/20" />
      </div>
    </div>
  </section>
);

export default ServicesTeaser;

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
  <section className="py-24 md:py-40 px-6 md:px-12 bg-background spotlight">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4">
          WHAT WE DO
        </p>
        <h2 className="font-display text-4xl md:text-6xl uppercase tracking-cinematic text-foreground mb-16 md:mb-24">
          SERVICES
        </h2>
      </ScrollReveal>

      <div className="space-y-16 md:space-y-24">
        {services.map((service, i) => (
          <ScrollReveal key={service.number} delay={i * 150}>
            <div className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-16 group">
              {/* Giant Number */}
              <span className="font-display text-[clamp(5rem,15vw,12rem)] leading-none text-primary/[0.07] absolute -top-8 -left-2 md:relative md:top-auto md:left-auto select-none">
                {service.number}
              </span>

              <div className="relative z-10 flex-1">
                <h3 className="font-display text-2xl md:text-4xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-mono text-xs md:text-sm text-muted-foreground mt-3 leading-relaxed max-w-xl">
                  {service.description}
                </p>
                <div className="h-px bg-border mt-8 w-full group-hover:bg-primary/30 transition-colors duration-500" />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesTeaser;

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "BRAND IDENTITY",
    description: "Comprehensive brand identity solutions that establish strong, memorable presence in the market.",
    specs: "LOGOS · GUIDELINES · COLLATERAL",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    number: "02",
    title: "ADVERTISEMENTS",
    description: "From concept to completion, we create compelling advertisements that captivate audiences and drive results.",
    specs: "CONCEPT · PRODUCTION · DELIVERY",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
  },
  {
    number: "03",
    title: "PHOTOGRAPHY",
    description: "Fashion, portrait, product and corporate shoots. Raw and refined. Every frame a statement.",
    specs: "PORTRAIT · PRODUCT · EVENTS",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
  },
  {
    number: "04",
    title: "SHORT FILMS",
    description: "Cinematic storytelling that moves audiences. From script to screen, crafted with precision.",
    specs: "SCRIPT · CINEMATOGRAPHY · POST",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
  },
  {
    number: "05",
    title: "GRAPHIC DESIGN",
    description: "Visual design solutions that communicate ideas with clarity, impact, and aesthetic excellence.",
    specs: "PRINT · DIGITAL · PACKAGING",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
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
        <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] uppercase tracking-cinematic text-foreground leading-[0.95]">
          OUR <span className="text-primary">SERVICES</span>
        </h2>
        <p className="font-mono text-[11px] md:text-[13px] text-muted-foreground/60 mt-3 md:mt-4 max-w-lg leading-relaxed">
          Comprehensive creative solutions — from advertisements and short films to photography, graphic design, and brand identity — all under one roof.
        </p>
      </ScrollReveal>

      <div className="mt-12 md:mt-20 space-y-0">
        {services.map((service, i) => (
          <ScrollReveal key={service.number} delay={i * 80}>
            <div className="group relative border-t border-border/15 hover:bg-primary/[0.015] transition-colors duration-700">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0 py-6 md:py-8">
                {/* Number */}
                <span className="font-mono text-[9px] md:text-[10px] text-primary/30 tracking-[0.3em] group-hover:text-primary/70 transition-colors duration-500 md:w-20 shrink-0">
                  {service.number}
                </span>

                {/* Image preview - desktop */}
                <div className="hidden md:block w-16 h-16 overflow-hidden mr-8 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img src={service.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg md:text-2xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-500 md:flex-1">
                  {service.title}
                </h3>

                {/* Description - shown on mobile, hidden on desktop until hover */}
                <p className="font-mono text-[10px] md:text-[11px] text-muted-foreground/50 group-hover:text-muted-foreground/80 leading-relaxed md:max-w-xs md:text-right transition-colors duration-500">
                  {service.description}
                </p>
              </div>

              {/* Left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
            </div>
          </ScrollReveal>
        ))}
        <div className="border-t border-border/15" />
      </div>
    </div>
  </section>
);

export default ServicesTeaser;

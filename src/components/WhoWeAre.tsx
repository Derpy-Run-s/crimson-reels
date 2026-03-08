import ScrollReveal from "./ScrollReveal";

const WhoWeAre = () => (
  <section className="py-20 md:py-32 px-5 md:px-12 bg-background relative overflow-hidden">
    {/* Background number */}
    <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none">
      <span className="font-display text-[clamp(8rem,30vw,24rem)] uppercase tracking-cinematic text-primary/[0.02] leading-none">
        01
      </span>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-2 md:mb-3">
          <div className="w-8 md:w-12 h-px bg-primary/40" />
          <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
            WHO WE ARE
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-20 mt-6 md:mt-10">
        {/* Left */}
        <ScrollReveal delay={100}>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] uppercase tracking-cinematic text-foreground leading-[1.05]">
            THE ULTIMATE
            <br />
            <span className="text-primary">CREATIVE</span>
            <br />
            PRODUCTION HOUSE
          </h2>
        </ScrollReveal>

        {/* Right */}
        <ScrollReveal delay={200}>
          <div className="space-y-6">
            <p className="font-mono text-[11px] md:text-[13px] text-muted-foreground leading-[2]">
              Red Sea Productions provides comprehensive creative solutions, encompassing everything from
              Advertisements, Short Films, Photography to Graphic Design and Brand Identity — all conveniently
              under one roof. We are dedicated to delivering top-tier quality, utilizing skilled professionals.
            </p>
            <p className="font-mono text-[11px] md:text-[13px] text-muted-foreground/60 leading-[2]">
              Operating across Dubai, Kerala, Bangalore, Muscat, and Riyadh — we bring cinematic
              excellence to every corner of the world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 md:pt-6 border-t border-border/15">
              <div>
                <span className="font-display text-2xl md:text-3xl text-primary">5+</span>
                <p className="font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-muted-foreground/50 uppercase mt-1">LOCATIONS</p>
              </div>
              <div>
                <span className="font-display text-2xl md:text-3xl text-primary">100+</span>
                <p className="font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-muted-foreground/50 uppercase mt-1">PROJECTS</p>
              </div>
              <div>
                <span className="font-display text-2xl md:text-3xl text-primary">5</span>
                <p className="font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-muted-foreground/50 uppercase mt-1">SERVICES</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default WhoWeAre;

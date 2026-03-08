import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const ApertureHero = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpened(true), 300);
    return () => clearTimeout(timer);
  }, []);



    <section className="relative h-screen w-full overflow-hidden bg-background spotlight">
      {/* Aperture Panels */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-background z-40 transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${
          opened ? "-translate-x-full duration-[1800ms]" : "translate-x-0 duration-0"
        }`}
      >
        <div className="absolute right-0 top-0 bottom-0 w-px bg-primary/20" />
      </div>
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-background z-40 transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${
          opened ? "translate-x-full duration-[1800ms]" : "translate-x-0 duration-0"
        }`}
      >
        <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20" />
      </div>

      {/* Content Behind Panels */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Crimson Pulse Glow (Mobile backdrop) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:hidden">
          <div className="w-64 h-64 rounded-full bg-primary/10 crimson-pulse" />
        </div>

        <ScrollReveal delay={1800}>
          <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
            RED SEA PRODUCTIONS
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2000}>
          <h1 className="font-display text-[clamp(2.5rem,8vw,8rem)] leading-[0.9] uppercase tracking-cinematic text-foreground">
            WE DON'T
            <br />
            <span className="text-primary">RECORD.</span>
            <br />
            WE CAPTURE.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={2400}>
          <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground uppercase mt-8 max-w-md">
            CINEMATOGRAPHY · EDITORIAL · COMMERCIAL
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ApertureHero;

import ApertureHero from "@/components/ApertureHero";
import FeaturedWork from "@/components/FeaturedWork";
import ServicesTeaser from "@/components/ServicesTeaser";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { Link } from "react-router-dom";

const Index = () => (
  <main>
    <ApertureHero />
    <FeaturedWork />
    <ServicesTeaser />

    {/* CTA Strip */}
    <section className="py-24 md:py-40 px-5 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 spotlight-center pointer-events-none opacity-60" />
      
      <ScrollReveal>
        <div className="text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-3 md:mb-4">
            <div className="w-6 md:w-10 h-px bg-primary/30" />
            <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/60 uppercase">
              READY TO CREATE?
            </p>
            <div className="w-6 md:w-10 h-px bg-primary/30" />
          </div>
          
          <h2 className="font-display text-[clamp(2rem,6vw,5.5rem)] uppercase tracking-cinematic text-foreground mb-6 md:mb-10 leading-[0.95]">
            ENTER THE
            <br />
            <span className="text-primary" style={{
              textShadow: "0 0 60px hsl(0 100% 45% / 0.2), 0 0 120px hsl(0 100% 45% / 0.08)"
            }}>
              DARKROOM
            </span>
          </h2>
          
          <Link to="/contact">
            <MagneticButton className="inline-flex items-center gap-3 border border-primary/60 hover:border-primary px-7 md:px-10 py-3 md:py-4 font-mono text-[9px] md:text-xs tracking-[0.2em] text-primary uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 group">
              <span className="w-1.5 h-1.5 bg-primary group-hover:bg-primary-foreground animate-pulse" />
              START A PROJECT
            </MagneticButton>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  </main>
);

export default Index;

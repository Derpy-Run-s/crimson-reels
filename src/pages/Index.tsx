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
    <section className="py-24 md:py-48 px-5 md:px-6 bg-background spotlight-center">
      <ScrollReveal>
        <div className="text-center">
          <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4 md:mb-6">
            READY TO CREATE?
          </p>
          <h2 className="font-display text-3xl md:text-7xl uppercase tracking-cinematic text-foreground mb-8 md:mb-10">
            ENTER THE <span className="text-primary">DARKROOM</span>
          </h2>
          <Link to="/contact">
            <MagneticButton className="inline-flex items-center gap-3 border border-primary px-8 md:px-10 py-3 md:py-4 font-mono text-[10px] md:text-xs tracking-widest text-primary uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500">
              <span className="w-2 h-2 bg-primary animate-pulse" />
              START A PROJECT
            </MagneticButton>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  </main>
);

export default Index;

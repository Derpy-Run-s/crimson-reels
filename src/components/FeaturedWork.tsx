import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";

const photoProjects = [
  { title: "Desert Mirage", category: "Commercial", year: "2026", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" },
  { title: "Neon Veil", category: "Editorial", year: "2025", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80" },
  { title: "Crimson Hour", category: "Portrait", year: "2025", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" },
];

const videoProjects = [
  { title: "The Depths", category: "Short Film", year: "2026", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80" },
  { title: "Velocity", category: "Commercial", year: "2025", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80" },
  { title: "After Dark", category: "Music Video", year: "2025", image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&q=80" },
];

const FeaturedWork = () => (
  <section className="py-24 md:py-40 px-6 md:px-12 bg-background">
    <div className="max-w-7xl mx-auto">
      {/* Photography */}
      <ScrollReveal>
        <div className="flex items-baseline justify-between mb-10 md:mb-16">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-2">SELECTED</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-cinematic text-foreground">
              PHOTOGRAPHY
            </h2>
          </div>
          <Link to="/photography" className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase hidden md:block">
            VIEW ALL →
          </Link>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
        {photoProjects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 100}>
            <ProjectCard {...project} link="/photography" aspectTall={i === 1} />
          </ScrollReveal>
        ))}
      </div>
      <Link to="/photography" className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase md:hidden block text-center mt-4">
        VIEW ALL →
      </Link>

      {/* Divider */}
      <div className="h-px bg-border my-16 md:my-24" />

      {/* Videos */}
      <ScrollReveal>
        <div className="flex items-baseline justify-between mb-10 md:mb-16">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-2">SELECTED</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-cinematic text-foreground">
              FILMS
            </h2>
          </div>
          <Link to="/videos" className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase hidden md:block">
            VIEW ALL →
          </Link>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
        {videoProjects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 100}>
            <ProjectCard {...project} link="/videos" />
          </ScrollReveal>
        ))}
      </div>
      <Link to="/videos" className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase md:hidden block text-center mt-4">
        VIEW ALL →
      </Link>
    </div>
  </section>
);

export default FeaturedWork;

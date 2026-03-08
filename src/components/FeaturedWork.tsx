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

const SectionHeader = ({ label, title, linkTo }: { label: string; title: string; linkTo: string }) => (
  <ScrollReveal>
    <div className="flex items-end justify-between mb-8 md:mb-14">
      <div>
        <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-2">
          {label}
        </p>
        <h2 className="font-display text-3xl md:text-6xl uppercase tracking-cinematic text-foreground">
          {title}
        </h2>
      </div>
      <Link
        to={linkTo}
        className="font-mono text-[9px] md:text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase hidden md:block pb-1"
      >
        VIEW ALL →
      </Link>
    </div>
  </ScrollReveal>
);

const FeaturedWork = () => (
  <section className="py-20 md:py-40 px-5 md:px-12 bg-background">
    <div className="max-w-7xl mx-auto">
      {/* Photography */}
      <SectionHeader label="SELECTED" title="PHOTOGRAPHY" linkTo="/photography" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-6">
        {photoProjects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 100}>
            <ProjectCard {...project} link="/photography" aspectTall={i === 1} />
          </ScrollReveal>
        ))}
      </div>
      <Link
        to="/photography"
        className="font-mono text-[9px] tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase md:hidden block text-center mt-2 py-3"
      >
        VIEW ALL →
      </Link>

      {/* Divider */}
      <div className="h-px bg-border/30 my-14 md:my-24" />

      {/* Videos */}
      <SectionHeader label="SELECTED" title="FILMS" linkTo="/videos" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-6">
        {videoProjects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 100}>
            <ProjectCard {...project} link="/videos" />
          </ScrollReveal>
        ))}
      </div>
      <Link
        to="/videos"
        className="font-mono text-[9px] tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase md:hidden block text-center mt-2 py-3"
      >
        VIEW ALL →
      </Link>
    </div>
  </section>
);

export default FeaturedWork;

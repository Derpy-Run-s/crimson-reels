import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const photoProjects = [
  { title: "Desert Mirage", category: "COMMERCIAL", year: "2026", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80" },
  { title: "Neon Veil", category: "EDITORIAL", year: "2025", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=80" },
  { title: "Crimson Hour", category: "PORTRAIT", year: "2025", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80" },
];

const videoProjects = [
  { title: "The Depths", category: "SHORT FILM", year: "2026", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900&q=80" },
  { title: "Velocity", category: "COMMERCIAL", year: "2025", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80" },
  { title: "After Dark", category: "MUSIC VIDEO", year: "2025", image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=900&q=80" },
];

interface WorkCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  index: number;
  size?: "large" | "normal";
}

const WorkCard = ({ title, category, year, image, index, size = "normal" }: WorkCardProps) => (
  <ScrollReveal delay={index * 120}>
    <div className="group cursor-pointer relative overflow-hidden">
      <div className={`relative overflow-hidden ${size === "large" ? "aspect-[16/10] md:aspect-[16/9]" : "aspect-[4/5] md:aspect-[3/4]"}`}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-[1.02] group-hover:scale-110 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700" />

        {/* Crimson accent line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-10" />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[8px] md:text-[9px] tracking-[0.3em] text-primary/80 uppercase mb-1 md:mb-2 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {category}
              </p>
              <h3 className="font-display text-xl md:text-3xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-500">
                {title}
              </h3>
            </div>
            <span className="font-mono text-[9px] text-muted-foreground/50 tracking-wider shrink-0">
              {year}
            </span>
          </div>
        </div>

        {/* Corner frame on hover */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-primary/0 group-hover:border-primary/40 transition-all duration-500" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-primary/0 group-hover:border-primary/40 transition-all duration-500" />
      </div>
    </div>
  </ScrollReveal>
);

const FeaturedWork = () => (
  <section className="py-20 md:py-32 bg-background relative">
    {/* Section spotlight */}
    <div className="absolute inset-0 spotlight pointer-events-none opacity-40" />

    <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12">
      {/* Photography Section */}
      <ScrollReveal>
        <div className="flex items-end justify-between mb-6 md:mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2 md:mb-3">
              <div className="w-8 md:w-12 h-px bg-primary/40" />
              <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
                SELECTED WORKS
              </p>
            </div>
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] uppercase tracking-cinematic text-foreground leading-[0.95]">
              PHOTO
              <span className="text-primary">GRAPHY</span>
            </h2>
          </div>
          <Link
            to="/photography"
            className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors uppercase hidden md:flex items-center gap-2 group pb-2"
          >
            VIEW ALL
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </ScrollReveal>

      {/* Photography Grid — Hero card + 2 side */}
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-3 md:gap-4 mb-4">
        <WorkCard {...photoProjects[0]} index={0} size="large" />
        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
          <WorkCard {...photoProjects[1]} index={1} />
          <WorkCard {...photoProjects[2]} index={2} />
        </div>
      </div>

      <Link
        to="/photography"
        className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors uppercase md:hidden flex items-center justify-center gap-2 py-4"
      >
        VIEW ALL PHOTOGRAPHY →
      </Link>

      {/* Cinematic divider */}
      <div className="relative my-16 md:my-28">
        <div className="h-px bg-border/20" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-2 bg-background px-4">
          <div className="w-1 h-1 bg-primary/40 mx-auto" />
        </div>
      </div>

      {/* Films Section */}
      <ScrollReveal>
        <div className="flex items-end justify-between mb-6 md:mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2 md:mb-3">
              <div className="w-8 md:w-12 h-px bg-primary/40" />
              <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
                MOTION PICTURES
              </p>
            </div>
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] uppercase tracking-cinematic text-foreground leading-[0.95]">
              FILM<span className="text-primary">S</span>
            </h2>
          </div>
          <Link
            to="/videos"
            className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors uppercase hidden md:flex items-center gap-2 group pb-2"
          >
            VIEW ALL
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </ScrollReveal>

      {/* Films Grid — equal columns with play indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4">
        {videoProjects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 120}>
            <Link to="/videos" className="group block relative overflow-hidden">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-[1.02] group-hover:scale-110 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-700" />

                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 border border-primary/40 group-hover:border-primary flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-background/20 group-hover:bg-background/40">
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-primary/70 group-hover:border-l-primary border-b-[5px] border-b-transparent ml-0.5 transition-colors duration-500" />
                  </div>
                </div>

                {/* Duration badge */}
                <span className="absolute bottom-2 right-2 md:bottom-3 md:right-3 font-mono text-[8px] md:text-[9px] text-foreground/80 bg-background/50 px-1.5 py-0.5 tracking-wider">
                  {project.category}
                </span>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-10" />
              </div>

              <div className="mt-3 flex items-baseline justify-between">
                <h3 className="font-display text-base md:text-xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="font-mono text-[8px] md:text-[9px] text-muted-foreground/50">{project.year}</span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <Link
        to="/videos"
        className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors uppercase md:hidden flex items-center justify-center gap-2 py-4"
      >
        VIEW ALL FILMS →
      </Link>
    </div>
  </section>
);

export default FeaturedWork;

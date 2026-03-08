import { useState, useMemo } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PhotoLightbox from "@/components/PhotoLightbox";

const categories = ["ALL", "ADVERTISEMENTS", "PHOTOGRAPHY", "BRAND IDENTITY", "PACKAGING", "AUTOMOTIVE"];

const projects = [
  {
    title: "Bengaluru Torpedoes",
    category: "ADVERTISEMENTS",
    year: "2025",
    image: "https://images.unsplash.com/photo-1461896836934-bd45ba8c028d?w=900&q=80",
    description: "Dynamic promotional campaign featuring match footage, player spotlights, and energetic content for the sports arena.",
    specs: "CINEMATOGRAPHY · EDITING · COLOR GRADE",
    size: "large" as const,
  },
  {
    title: "Portfolio Shoots",
    category: "PHOTOGRAPHY",
    year: "2025",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=80",
    description: "Vibrant photoshoot capturing the energy and atmosphere of live performances with dramatic lighting.",
    specs: "PORTRAIT · LIGHTING · POST",
    size: "medium" as const,
  },
  {
    title: "Celebrity Photoshoots",
    category: "PHOTOGRAPHY",
    year: "2025",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80",
    description: "Professional portrait and promotional photoshoot with elegant styling and cinematic compositions.",
    specs: "STUDIO · NATURAL LIGHT · RETOUCHING",
    size: "tall" as const,
  },
  {
    title: "Corporate Campaign",
    category: "ADVERTISEMENTS",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    description: "Strategic corporate advertising campaigns that communicate brand vision with precision and impact.",
    specs: "CONCEPT · ART DIRECTION · DELIVERY",
    size: "medium" as const,
  },
  {
    title: "Luxury Vehicle Showcase",
    category: "AUTOMOTIVE",
    year: "2024",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
    description: "Premium automotive photography showcasing luxury vehicles with cinematic depth and detail.",
    specs: "HASSELBLAD · HDR · COMPOSITE",
    size: "large" as const,
  },
  {
    title: "Brand Identity Package",
    category: "BRAND IDENTITY",
    year: "2024",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    description: "Comprehensive brand identity solutions establishing a strong, memorable market presence.",
    specs: "LOGO · GUIDELINES · COLLATERAL",
    size: "tall" as const,
  },
  {
    title: "Protein Shake Design",
    category: "PACKAGING",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900&q=80",
    description: "Bold packaging design for a premium protein brand with striking shelf presence.",
    specs: "3D RENDER · PRINT · MOCKUP",
    size: "medium" as const,
  },
  {
    title: "Gala Night Coverage",
    category: "PHOTOGRAPHY",
    year: "2024",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80",
    description: "High-energy event photography capturing the glamour and atmosphere of exclusive galas.",
    specs: "EVENT · LOW LIGHT · CANDID",
    size: "medium" as const,
  },
  {
    title: "Desert Automotive",
    category: "AUTOMOTIVE",
    year: "2023",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&q=80",
    description: "Cinematic desert shoot blending luxury automotive with dramatic Middle Eastern landscapes.",
    specs: "DRONE · GOLDEN HOUR · GRADE",
    size: "large" as const,
  },
];

// Masonry layout pattern for visual interest
const getGridClass = (size: string, index: number) => {
  // On mobile: all full width. On desktop: varied spans
  switch (size) {
    case "large":
      return "col-span-1 md:col-span-2 md:row-span-2";
    case "tall":
      return "col-span-1 md:row-span-2";
    default:
      return "col-span-1";
  }
};

const getAspect = (size: string) => {
  switch (size) {
    case "large":
      return "aspect-[4/3] md:aspect-[16/10]";
    case "tall":
      return "aspect-[3/4]";
    default:
      return "aspect-[4/3]";
  }
};

const Photography = () => {
  const [active, setActive] = useState("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "ALL" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextPhoto = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };
  const prevPhoto = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-20">
      {/* Hero Header */}
      <section className="px-5 md:px-12 pt-12 md:pt-24 pb-10 md:pb-16 relative overflow-hidden">
        {/* Background watermark */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(4rem,20vw,18rem)] uppercase tracking-cinematic text-primary/[0.03] select-none whitespace-nowrap pointer-events-none">
          PORTFOLIO
        </span>

        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 md:w-12 h-px bg-primary/40" />
              <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
                OUR WORK
              </p>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] uppercase tracking-cinematic text-foreground leading-[0.92]">
              PROJECT
              <br />
              <span className="text-primary" style={{ textShadow: "0 0 80px hsl(0 100% 45% / 0.15)" }}>
                GALLERY
              </span>
            </h1>
            <p className="font-mono text-[10px] md:text-[12px] text-muted-foreground/50 mt-4 md:mt-6 max-w-md leading-relaxed">
              A curated collection of our finest work across advertisements, photography, brand identity, and more.
            </p>
          </ScrollReveal>

          {/* Stats strip */}
          <ScrollReveal delay={150}>
            <div className="flex items-center gap-6 md:gap-10 mt-8 md:mt-12 pt-6 border-t border-border/15">
              <div>
                <span className="font-display text-xl md:text-2xl text-primary">{projects.length}</span>
                <p className="font-mono text-[7px] md:text-[8px] tracking-[0.3em] text-muted-foreground/40 uppercase mt-0.5">PROJECTS</p>
              </div>
              <div className="w-px h-8 bg-border/15" />
              <div>
                <span className="font-display text-xl md:text-2xl text-primary">{categories.length - 1}</span>
                <p className="font-mono text-[7px] md:text-[8px] tracking-[0.3em] text-muted-foreground/40 uppercase mt-0.5">CATEGORIES</p>
              </div>
              <div className="w-px h-8 bg-border/15" />
              <div>
                <span className="font-display text-xl md:text-2xl text-primary">2023–25</span>
                <p className="font-mono text-[7px] md:text-[8px] tracking-[0.3em] text-muted-foreground/40 uppercase mt-0.5">TIMELINE</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-5 md:px-12 mb-8 md:mb-14 sticky top-16 md:top-20 z-30 bg-background/80 backdrop-blur-xl py-4 border-b border-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-1.5 md:gap-3 overflow-x-auto scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-mono text-[8px] md:text-[9px] tracking-[0.2em] uppercase py-2 px-3 md:px-5 border whitespace-nowrap shrink-0 transition-all duration-500 ${
                  active === cat
                    ? "border-primary text-primary bg-primary/[0.08]"
                    : "border-border/20 text-muted-foreground/50 hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat}
                {active === cat && (
                  <span className="ml-2 text-primary/50">
                    ({active === "ALL" ? projects.length : projects.filter(p => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Bento Grid */}
      <section className="px-5 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-auto">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.title + active} delay={i * 60}>
              <button
                onClick={() => openLightbox(i)}
                className={`${getGridClass(project.size, i)} group relative overflow-hidden block w-full text-left cursor-pointer`}
              >
                <div className={`relative overflow-hidden ${getAspect(project.size)} w-full`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-[1.02] group-hover:scale-110 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700" />

                  {/* Corner viewfinder frames */}
                  <div className="absolute top-3 left-3 w-4 h-4 md:w-5 md:h-5 border-t border-l border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
                  <div className="absolute top-3 right-3 w-4 h-4 md:w-5 md:h-5 border-t border-r border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
                  <div className="absolute bottom-16 left-3 w-4 h-4 md:w-5 md:h-5 border-b border-l border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
                  <div className="absolute bottom-16 right-3 w-4 h-4 md:w-5 md:h-5 border-b border-r border-primary/0 group-hover:border-primary/50 transition-all duration-500" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <p className="font-mono text-[7px] md:text-[8px] tracking-[0.3em] text-primary/70 uppercase mb-1 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {project.category}
                    </p>
                    <h3 className="font-display text-lg md:text-2xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[8px] md:text-[9px] text-muted-foreground/0 group-hover:text-muted-foreground/60 transition-all duration-700 mt-1 line-clamp-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Crimson accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-10" />

                  {/* Index */}
                  <span className="absolute top-3 right-3 font-mono text-[8px] md:text-[9px] text-muted-foreground/20 tracking-[0.2em] group-hover:text-muted-foreground/50 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Year badge */}
                  <span className="absolute top-3 left-3 font-mono text-[7px] md:text-[8px] tracking-[0.2em] text-muted-foreground/0 group-hover:text-muted-foreground/40 transition-all duration-500">
                    {project.year}
                  </span>

                  {/* "View" hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 md:w-14 md:h-14 border border-primary/30 flex items-center justify-center backdrop-blur-sm bg-background/20">
                      <span className="font-mono text-[8px] md:text-[9px] tracking-[0.3em] text-primary uppercase">VIEW</span>
                    </div>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-mono text-[11px] text-muted-foreground/40 tracking-[0.2em] uppercase">
              No projects found in this category
            </p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      <PhotoLightbox
        project={lightboxIndex !== null ? filtered[lightboxIndex] : null}
        onClose={closeLightbox}
        onNext={filtered.length > 1 ? nextPhoto : undefined}
        onPrev={filtered.length > 1 ? prevPhoto : undefined}
        currentIndex={lightboxIndex ?? 0}
        totalCount={filtered.length}
      />
    </main>
  );
};

export default Photography;

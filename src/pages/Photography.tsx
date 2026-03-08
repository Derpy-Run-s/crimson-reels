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
  },
  {
    title: "Portfolio Shoots",
    category: "PHOTOGRAPHY",
    year: "2025",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=80",
    description: "Vibrant photoshoot capturing the energy and atmosphere of live performances with dramatic lighting.",
    specs: "PORTRAIT · LIGHTING · POST",
  },
  {
    title: "Celebrity Photoshoots",
    category: "PHOTOGRAPHY",
    year: "2025",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80",
    description: "Professional portrait and promotional photoshoot with elegant styling and cinematic compositions.",
    specs: "STUDIO · NATURAL LIGHT · RETOUCHING",
  },
  {
    title: "Corporate Campaign",
    category: "ADVERTISEMENTS",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    description: "Strategic corporate advertising campaigns that communicate brand vision with precision and impact.",
    specs: "CONCEPT · ART DIRECTION · DELIVERY",
  },
  {
    title: "Luxury Vehicle Showcase",
    category: "AUTOMOTIVE",
    year: "2024",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
    description: "Premium automotive photography showcasing luxury vehicles with cinematic depth and detail.",
    specs: "HASSELBLAD · HDR · COMPOSITE",
  },
  {
    title: "Brand Identity Package",
    category: "BRAND IDENTITY",
    year: "2024",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    description: "Comprehensive brand identity solutions establishing a strong, memorable market presence.",
    specs: "LOGO · GUIDELINES · COLLATERAL",
  },
  {
    title: "Protein Shake Design",
    category: "PACKAGING",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900&q=80",
    description: "Bold packaging design for a premium protein brand with striking shelf presence.",
    specs: "3D RENDER · PRINT · MOCKUP",
  },
  {
    title: "Gala Night Coverage",
    category: "PHOTOGRAPHY",
    year: "2024",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80",
    description: "High-energy event photography capturing the glamour and atmosphere of exclusive galas.",
    specs: "EVENT · LOW LIGHT · CANDID",
  },
  {
    title: "Desert Automotive",
    category: "AUTOMOTIVE",
    year: "2023",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&q=80",
    description: "Cinematic desert shoot blending luxury automotive with dramatic Middle Eastern landscapes.",
    specs: "DRONE · GOLDEN HOUR · GRADE",
  },
];

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
    <main className="pt-20 md:pt-24 pb-20 md:pb-32">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Full-width hero image */}
        <div className="relative h-[50vh] md:h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=80"
            alt="Red Sea Productions Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />

          {/* Hero text overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="px-5 md:px-12 pb-10 md:pb-16 w-full max-w-7xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-8 md:w-12 h-px bg-primary/50" />
                  <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/80 uppercase">
                    RED SEA PRODUCTIONS
                  </p>
                </div>
                <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] uppercase tracking-cinematic text-foreground leading-[0.92]">
                  OUR
                  <span className="text-primary ml-3 md:ml-5" style={{ textShadow: "0 0 60px hsl(0 100% 45% / 0.2)" }}>
                    PROJECTS
                  </span>
                </h1>
              </ScrollReveal>
            </div>
          </div>

          {/* Viewfinder corners */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/20" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/20" />

          {/* OSD metadata */}
          <div className="absolute top-6 right-8 hidden md:block">
            <p className="font-mono text-[8px] tracking-[0.3em] text-muted-foreground/30 text-right">
              {projects.length} PROJECTS · {categories.length - 1} CATEGORIES
            </p>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="px-5 md:px-12 py-6 md:py-8 sticky top-16 md:top-20 z-30 bg-background/90 backdrop-blur-xl border-b border-border/10">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <span className="font-mono text-[8px] tracking-[0.3em] text-muted-foreground/30 uppercase hidden md:block shrink-0">
            FILTER
          </span>
          <div className="hidden md:block w-px h-4 bg-border/20" />
          <div className="flex gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-mono text-[8px] md:text-[9px] tracking-[0.15em] uppercase py-2 px-3 md:px-4 border whitespace-nowrap shrink-0 transition-all duration-400 ${
                  active === cat
                    ? "border-primary text-primary bg-primary/[0.06]"
                    : "border-transparent text-muted-foreground/40 hover:text-foreground hover:border-border/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="font-mono text-[8px] tracking-[0.2em] text-muted-foreground/20 ml-auto hidden md:block shrink-0">
            {filtered.length} {filtered.length === 1 ? "RESULT" : "RESULTS"}
          </span>
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section className="px-5 md:px-12 pt-8 md:pt-14">
        <div className="max-w-7xl mx-auto">

          {/* Featured first project - full width */}
          {filtered.length > 0 && (
            <ScrollReveal>
              <button
                onClick={() => openLightbox(0)}
                className="w-full group cursor-pointer text-left mb-3 md:mb-4"
              >
                <div className="relative overflow-hidden aspect-[16/7] md:aspect-[21/9]">
                  <img
                    src={filtered[0].image}
                    alt={filtered[0].title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-[1.01] group-hover:scale-105 transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                    <p className="font-mono text-[7px] md:text-[9px] tracking-[0.3em] text-primary/60 uppercase mb-1">
                      {filtered[0].category} · {filtered[0].year}
                    </p>
                    <h3 className="font-display text-2xl md:text-5xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-500">
                      {filtered[0].title}
                    </h3>
                    <p className="font-mono text-[9px] md:text-[11px] text-muted-foreground/40 mt-2 max-w-lg leading-relaxed hidden md:block">
                      {filtered[0].description}
                    </p>
                  </div>

                  {/* Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                  {/* Corner frames */}
                  <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-primary/0 group-hover:border-primary/40 transition-all duration-500" />
                  <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-primary/0 group-hover:border-primary/40 transition-all duration-500" />

                  <span className="absolute top-4 right-5 font-mono text-[9px] text-muted-foreground/20 tracking-[0.2em]">01</span>
                </div>
              </button>
            </ScrollReveal>
          )}

          {/* Rest of grid - 2 columns on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {filtered.slice(1).map((project, i) => (
              <ScrollReveal key={project.title + active} delay={i * 50}>
                <button
                  onClick={() => openLightbox(i + 1)}
                  className="w-full group cursor-pointer text-left"
                >
                  <div className={`relative overflow-hidden ${i % 5 === 1 || i % 5 === 3 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-[1.01] group-hover:scale-105 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-100 group-hover:opacity-60 transition-opacity duration-500" />

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <p className="font-mono text-[6px] md:text-[7px] tracking-[0.25em] text-primary/50 uppercase mb-0.5 md:mb-1 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                        {project.category}
                      </p>
                      <h3 className="font-display text-sm md:text-lg uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-400 leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Crimson bottom line */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />

                    {/* Index */}
                    <span className="absolute top-3 right-3 font-mono text-[7px] md:text-[8px] text-muted-foreground/15 tracking-[0.15em]">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Below-image meta */}
                  <div className="flex items-center justify-between mt-2 md:mt-3">
                    <p className="font-mono text-[8px] md:text-[9px] text-muted-foreground/30 tracking-[0.15em]">
                      {project.year}
                    </p>
                    <p className="font-mono text-[7px] md:text-[8px] text-muted-foreground/20 tracking-[0.1em] uppercase">
                      {project.specs}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-32">
              <span className="font-display text-6xl text-primary/10">∅</span>
              <p className="font-mono text-[10px] text-muted-foreground/30 tracking-[0.3em] uppercase mt-4">
                No projects in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
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

import { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Bengaluru Torpedoes",
    category: "ADVERTISEMENTS / FILMS",
    image: "https://images.unsplash.com/photo-1461896836934-bd45ba8c028d?w=900&q=80",
    description: "Dynamic promotional campaign featuring match footage, player spotlights, and energetic content.",
  },
  {
    title: "Portfolio Shoots",
    category: "PHOTOGRAPHY",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=80",
    description: "Vibrant photoshoot capturing the energy and atmosphere of live performances with dramatic lighting.",
  },
  {
    title: "Celebrity Photoshoots",
    category: "PHOTOGRAPHY",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80",
    description: "Professional portrait and promotional photoshoot with elegant styling and cinematic compositions.",
  },
  {
    title: "Corporate Campaign",
    category: "ADVERTISEMENT DESIGN",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    description: "Strategic corporate advertising campaigns that communicate brand vision with precision.",
  },
  {
    title: "Luxury Vehicle Showcase",
    category: "AUTOMOTIVE PHOTOGRAPHY",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
    description: "Premium automotive photography showcasing luxury vehicles with cinematic depth and detail.",
  },
  {
    title: "Brand Identity Package",
    category: "BRAND IDENTITY",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    description: "Comprehensive brand identity solutions establishing a strong, memorable market presence.",
  },
];

const FeaturedWork = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const dragOffset = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const scrollTranslate = useRef(0);
  const [dragging, setDragging] = useState(false);

  // Compute max scroll
  const getMaxScroll = useCallback(() => {
    if (!scrollRef.current) return 0;
    return scrollRef.current.scrollWidth - window.innerWidth + 100;
  }, []);

  // Apply transform combining scroll-driven + drag offset
  const applyTransform = useCallback(() => {
    if (!scrollRef.current) return;
    const maxScroll = getMaxScroll();
    const total = Math.max(0, Math.min(maxScroll, scrollTranslate.current + dragOffset.current));
    scrollRef.current.style.transform = `translateX(-${total}px)`;
    // Update progress
    if (maxScroll > 0) setScrollProgress(total / maxScroll);
  }, [getMaxScroll]);

  // Desktop: horizontal scroll driven by vertical scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollRef.current) return;
      if (window.innerWidth < 768) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / (containerHeight - viewportHeight)));

      const maxScroll = getMaxScroll();
      scrollTranslate.current = progress * maxScroll;
      applyTransform();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [getMaxScroll, applyTransform]);

  // Click & drag support
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      setDragging(true);
      dragStartX.current = e.clientX;
      dragStartOffset.current = dragOffset.current;
      el.style.cursor = "grabbing";
      e.preventDefault();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const delta = dragStartX.current - e.clientX;
      dragOffset.current = dragStartOffset.current + delta;
      applyTransform();
    };

    const onMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      setDragging(false);
      el.style.cursor = "grab";
    };

    el.style.cursor = "grab";
    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [applyTransform]);
  return (
    <section className="bg-background relative">
      {/* Section Header */}
      <div className="px-5 md:px-12 pt-20 md:pt-32 pb-8 md:pb-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <div className="w-8 md:w-12 h-px bg-primary/40" />
                <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
                  LATEST WORKS
                </p>
              </div>
              <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] uppercase tracking-cinematic text-foreground leading-[0.95]">
                VISUAL MEDIA
                <br />
                <span className="text-primary">PROJECTS</span>
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

        {/* Progress bar - desktop */}
        <div className="hidden md:block mt-8">
          <div className="h-px bg-border/20 relative">
            <div
              className="absolute top-0 left-0 h-full bg-primary/60 transition-none"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Desktop: Horizontal Scroll Reel */}
      <div ref={containerRef} className="hidden md:block" style={{ height: `${projects.length * 80}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <div ref={scrollRef} className="flex gap-6 pl-12 will-change-transform">
            {projects.map((project, i) => (
              <Link
                to="/photography"
                key={project.title}
                className="flex-shrink-0 w-[520px] group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-[1.02] group-hover:scale-110 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />

                  {/* Corner viewfinder frames */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
                  <div className="absolute bottom-14 left-3 w-5 h-5 border-b border-l border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
                  <div className="absolute bottom-14 right-3 w-5 h-5 border-b border-r border-primary/0 group-hover:border-primary/50 transition-all duration-500" />

                  {/* Category slide-up */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-mono text-[8px] tracking-[0.3em] text-primary/70 uppercase mb-1 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {project.category}
                    </p>
                    <h3 className="font-display text-2xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>

                  {/* Crimson accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-10" />

                  {/* Index number */}
                  <span className="absolute top-4 right-4 font-mono text-[9px] text-muted-foreground/30 tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="font-mono text-[10px] text-muted-foreground/50 mt-3 leading-relaxed line-clamp-2 max-w-md group-hover:text-muted-foreground transition-colors duration-500">
                  {project.description}
                </p>
              </Link>
            ))}

            {/* End CTA card */}
            <Link
              to="/photography"
              className="flex-shrink-0 w-[320px] flex items-center justify-center group"
            >
              <div className="text-center">
                <p className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground/50 uppercase mb-4">
                  {projects.length} PROJECTS
                </p>
                <span className="font-display text-2xl uppercase tracking-cinematic text-muted-foreground group-hover:text-primary transition-colors duration-500">
                  VIEW ALL →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: Swipeable horizontal scroll */}
      <div className="md:hidden px-5 pb-16">
        <div className="overflow-x-auto scrollbar-hide -mx-5 px-5">
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {projects.map((project, i) => (
              <Link
                to="/photography"
                key={project.title}
                className="flex-shrink-0 w-[280px] group"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70" />

                  {/* Corner frames */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary/30" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary/30" />

                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-mono text-[7px] tracking-[0.2em] text-primary/60 uppercase mb-0.5">
                      {project.category}
                    </p>
                    <h3 className="font-display text-base uppercase tracking-cinematic text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/40" />

                  <span className="absolute top-2 right-2 font-mono text-[8px] text-muted-foreground/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Link
          to="/photography"
          className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors uppercase flex items-center justify-center gap-2 py-6"
        >
          VIEW ALL PROJECTS →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedWork;

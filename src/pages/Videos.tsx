import { useState, useRef, useEffect, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import VideoLightbox from "@/components/VideoLightbox";

const films = [
  {
    title: "The Depths",
    type: "SHORT FILM",
    duration: "12:34",
    year: "2026",
    image: "https://thersproductions.com/assets/rs-assets/worksnew/10.jpg",
    description: "A haunting short film exploring the boundaries between memory and reality, shot across remote desert landscapes.",
  },
  {
    title: "Meridian",
    type: "DOCUMENTARY",
    duration: "45:00",
    year: "2025",
    image: "https://thersproductions.com/assets/rs-assets/worksnew/11.jpg",
    description: "Feature documentary following artisan craftsmen preserving traditional methods in a rapidly modernizing world.",
  },
  {
    title: "Fracture",
    type: "SHORT FILM",
    duration: "08:15",
    year: "2024",
    image: "https://thersproductions.com/assets/rs-assets/worksnew/12.jpg",
    description: "Award-winning short exploring fractured identity through non-linear storytelling and bold cinematography.",
  },
  {
    title: "After Dark",
    type: "MUSIC VIDEO",
    duration: "04:22",
    year: "2025",
    image: "https://thersproductions.com/assets/rs-assets/worksnew/13.jpg",
    description: "Neon-drenched music video blending choreography with experimental visual effects and one-take sequences.",
  },
];

const reels = [
  {
    title: "Velocity",
    type: "AUTOMOTIVE",
    duration: "00:30",
    year: "2025",
    image: "https://thersproductions.com/assets/rs-assets/worksnew/14.jpg",
    description: "High-octane automotive reel showcasing luxury vehicles in motion.",
  },
  {
    title: "Pulse",
    type: "BRAND SPOT",
    duration: "00:45",
    year: "2024",
    image: "https://thersproductions.com/assets/rs-assets/worksnew/15.jpg",
    description: "Rapid-cut brand commercial for a premium lifestyle label.",
  },
  {
    title: "Ignite",
    type: "SPORTS",
    duration: "00:60",
    year: "2025",
    image: "https://thersproductions.com/assets/rs-assets/worksnew/16.jpg",
    description: "Explosive sports highlight reel for Bengaluru Torpedoes season campaign.",
  },
  {
    title: "Aura",
    type: "FASHION",
    duration: "00:30",
    year: "2024",
    image: "https://thersproductions.com/assets/rs-assets/worksnew/17.jpg",
    description: "Sleek fashion reel with moody tones and editorial framing.",
  },
  {
    title: "Horizon",
    type: "TRAVEL",
    duration: "00:45",
    year: "2024",
    image: "https://thersproductions.com/assets/rs-assets/worksnew/18.jpg",
    description: "Cinematic travel reel across Dubai, Muscat, and the Arabian desert.",
  },
  {
    title: "Forge",
    type: "PRODUCT",
    duration: "00:20",
    year: "2023",
    image: "https://thersproductions.com/assets/rs-assets/works/0.jpg",
    description: "Sleek product reveal reel with dramatic lighting and macro details.",
  },
];

const Videos = () => {
  const [lightbox, setLightbox] = useState<{ open: boolean; title: string; description: string; type: string; duration: string; year: string }>({
    open: false, title: "", description: "", type: "", duration: "", year: "",
  });

  // Reels horizontal scroll
  const reelScrollRef = useRef<HTMLDivElement>(null);
  const reelContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollLeft = useRef(0);

  const openVideo = (item: typeof films[0] | typeof reels[0]) => {
    setLightbox({ open: true, title: item.title, description: item.description, type: item.type, duration: item.duration, year: item.year });
  };

  // Drag to scroll for reels
  useEffect(() => {
    const el = reelScrollRef.current;
    if (!el) return;

    const onDown = (e: MouseEvent) => {
      isDragging.current = true;
      dragStartX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      el.style.cursor = "grabbing";
    };
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft.current - (x - dragStartX.current);
    };
    const onUp = () => {
      isDragging.current = false;
      el.style.cursor = "grab";
    };

    el.style.cursor = "grab";
    el.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <main className="pt-20 md:pt-24 pb-20 md:pb-32">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="relative h-[50vh] md:h-[70vh]">
          <img
            src="https://thersproductions.com/assets/rs-assets/worksnew/10.jpg"
            alt="Red Sea Productions Films"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />

          {/* Hero content */}
          <div className="absolute inset-0 flex items-end">
            <div className="px-5 md:px-12 pb-10 md:pb-16 w-full max-w-7xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-2 h-2 bg-primary animate-pulse" />
                  <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/80 uppercase">
                    FILMS & REELS
                  </p>
                </div>
                <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] uppercase tracking-cinematic text-foreground leading-[0.92]">
                  MOTION
                  <span className="text-primary ml-3 md:ml-5" style={{ textShadow: "0 0 60px hsl(0 100% 45% / 0.2)" }}>
                    PICTURE
                  </span>
                </h1>
                <p className="font-mono text-[9px] md:text-[11px] text-muted-foreground/40 mt-3 md:mt-4 max-w-md leading-relaxed">
                  From cinematic short films and documentaries to high-impact reels and brand spots — every frame tells a story.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Viewfinder corners */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/20" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/20" />

          {/* OSD */}
          <div className="absolute top-6 right-8 hidden md:flex items-center gap-3">
            <span className="w-2 h-2 bg-primary rec-pulse" />
            <p className="font-mono text-[8px] tracking-[0.3em] text-muted-foreground/30">
              REC · {films.length + reels.length} PRODUCTIONS
            </p>
          </div>
        </div>
      </section>

      {/* ── FILMS Section ── */}
      <section className="px-5 md:px-12 pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-8 md:mb-12">
              <div>
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <div className="w-8 md:w-12 h-px bg-primary/40" />
                  <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
                    LONG FORMAT
                  </p>
                </div>
                <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] uppercase tracking-cinematic text-foreground leading-[0.95]">
                  SHORT FILMS &{" "}
                  <span className="text-primary">FEATURES</span>
                </h2>
              </div>
              <p className="font-mono text-[8px] tracking-[0.2em] text-muted-foreground/30 hidden md:block">
                {films.length} PRODUCTIONS
              </p>
            </div>
          </ScrollReveal>

          {/* Magazine editorial grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
            {films.map((film, i) => {
              // Layout pattern: 0 = span-8, 1 = span-4 tall, 2 = span-4, 3 = span-8
              const spanMap = [
                "md:col-span-8 aspect-[16/9]",
                "md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full",
                "md:col-span-4 aspect-[4/3]",
                "md:col-span-8 aspect-[21/9]",
              ];
              const span = spanMap[i % 4];
              const isLarge = i === 0 || i === 3;

              return (
                <ScrollReveal key={film.title} delay={i * 80} className={span.split(" ").filter(c => c.startsWith("md:col") || c.startsWith("md:row")).join(" ")}>
                  <button
                    onClick={() => openVideo(film)}
                    className="w-full h-full group cursor-pointer text-left"
                  >
                    <div className={`relative overflow-hidden h-full ${span.split(" ").filter(c => c.startsWith("aspect") || (!c.startsWith("md:col") && !c.startsWith("md:row"))).join(" ")}`}>
                      <img
                        src={film.image}
                        alt={film.title}
                        loading={i === 0 ? "eager" : "lazy"}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-[1.01] group-hover:scale-105 transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-700" />

                      {/* Play */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`${isLarge ? "w-16 h-16 md:w-20 md:h-20" : "w-12 h-12"} border border-primary/40 group-hover:border-primary flex items-center justify-center bg-background/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110`}>
                          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-primary border-b-[6px] border-b-transparent ml-0.5" />
                        </div>
                      </div>

                      {/* Type + Duration badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="font-mono text-[7px] md:text-[8px] tracking-[0.3em] text-foreground/60 bg-background/50 backdrop-blur-sm px-2 py-0.5 uppercase">
                          {film.type}
                        </span>
                      </div>
                      <span className="absolute top-3 right-3 font-mono text-[7px] md:text-[8px] text-foreground/60 bg-background/50 backdrop-blur-sm px-2 py-0.5 tracking-wider">
                        {film.duration}
                      </span>

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        <h3 className={`font-display uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-500 ${isLarge ? "text-2xl md:text-4xl" : "text-lg md:text-xl"}`}>
                          {film.title}
                        </h3>
                        {isLarge && (
                          <p className="font-mono text-[9px] md:text-[11px] text-muted-foreground/30 mt-2 max-w-lg leading-relaxed hidden md:block group-hover:text-muted-foreground/60 transition-colors duration-500">
                            {film.description}
                          </p>
                        )}
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="font-mono text-[7px] md:text-[8px] text-muted-foreground/30 tracking-[0.2em]">{film.year}</span>
                        </div>
                      </div>

                      {/* Accent line */}
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border/10" />
          <div className="w-1.5 h-1.5 bg-primary/30" />
          <div className="flex-1 h-px bg-border/10" />
        </div>
      </div>

      {/* ── REELS Section ── */}
      <section className="relative">
        <div className="px-5 md:px-12 max-w-7xl mx-auto mb-8 md:mb-10">
          <ScrollReveal>
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <div className="w-8 md:w-12 h-px bg-primary/40" />
                  <p className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-primary/70 uppercase">
                    SHORT FORMAT
                  </p>
                </div>
                <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] uppercase tracking-cinematic text-foreground leading-[0.95]">
                  REELS &{" "}
                  <span className="text-primary">SPOTS</span>
                </h2>
                <p className="font-mono text-[9px] md:text-[11px] text-muted-foreground/40 mt-2 max-w-md leading-relaxed">
                  Quick-hit content — brand spots, social reels, and promotional teasers designed for maximum impact.
                </p>
              </div>
              <p className="font-mono text-[8px] tracking-[0.2em] text-muted-foreground/20 hidden md:block pb-1">
                DRAG TO BROWSE →
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontal scrollable reels */}
        <div
          ref={reelScrollRef}
          className="overflow-x-auto scrollbar-hide select-none"
        >
          <div className="flex gap-3 md:gap-4 px-5 md:px-12" style={{ width: "max-content" }}>
            {reels.map((reel, i) => (
              <ScrollReveal key={reel.title} delay={i * 40}>
                <button
                  onClick={() => openVideo(reel)}
                  className="flex-shrink-0 w-[200px] md:w-[280px] group cursor-pointer text-left"
                >
                  <div className="relative overflow-hidden aspect-[9/16]">
                    <img
                      src={reel.image}
                      alt={reel.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-[1.01] group-hover:scale-105 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/10 group-hover:opacity-50 transition-opacity duration-500" />

                    {/* Play */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <div className="w-12 h-12 border border-primary/50 flex items-center justify-center bg-background/20 backdrop-blur-sm">
                        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[9px] border-l-primary border-b-[5px] border-b-transparent ml-0.5" />
                      </div>
                    </div>

                    {/* Duration pill */}
                    <span className="absolute top-3 right-3 font-mono text-[7px] md:text-[8px] text-foreground/60 bg-background/50 backdrop-blur-sm px-2 py-0.5 tracking-wider">
                      {reel.duration}
                    </span>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <p className="font-mono text-[6px] md:text-[7px] tracking-[0.2em] text-primary/50 uppercase mb-0.5">{reel.type}</p>
                      <h3 className="font-display text-sm md:text-base uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-400 leading-tight">
                        {reel.title}
                      </h3>
                    </div>

                    {/* Corner frames */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary/0 group-hover:border-primary/40 transition-all duration-500" />
                    <div className="absolute bottom-12 right-2 w-3 h-3 border-b border-r border-primary/0 group-hover:border-primary/40 transition-all duration-500" />

                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
                  </div>

                  <p className="font-mono text-[7px] md:text-[8px] text-muted-foreground/25 mt-2 tracking-[0.1em]">
                    {reel.year} · {reel.description.slice(0, 50)}...
                  </p>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <VideoLightbox
        open={lightbox.open}
        onClose={() => setLightbox({ open: false, title: "", description: "", type: "", duration: "", year: "" })}
        title={lightbox.title}
      />
    </main>
  );
};

export default Videos;

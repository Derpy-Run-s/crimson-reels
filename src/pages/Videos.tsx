import { useState, useRef, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import VideoLightbox from "@/components/VideoLightbox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const videoProjects = [
  { title: "The Depths", type: "SHORT FILM", duration: "12:34", year: "2026", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80" },
  { title: "Velocity", type: "COMMERCIAL", duration: "01:30", year: "2025", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80" },
  { title: "After Dark", type: "MUSIC VIDEO", duration: "04:22", year: "2025", image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&q=80" },
  { title: "Meridian", type: "DOCUMENTARY", duration: "45:00", year: "2025", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80" },
  { title: "Fracture", type: "SHORT FILM", duration: "08:15", year: "2024", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80" },
  { title: "Pulse", type: "COMMERCIAL", duration: "00:45", year: "2024", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80" },
];

const Videos = () => {
  const [lightbox, setLightbox] = useState<{ open: boolean; title: string }>({ open: false, title: "" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !scrollRef.current) return;
      if (window.innerWidth < 768) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - viewportHeight)));
      const maxScroll = scrollRef.current.scrollWidth - window.innerWidth;
      scrollRef.current.style.transform = `translateX(-${scrollProgress * maxScroll}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-20">
      {/* Header */}
      <section className="px-5 md:px-12 py-12 md:py-24 relative overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(3rem,18vw,16rem)] uppercase tracking-cinematic text-primary/[0.04] select-none whitespace-nowrap pointer-events-none">
          VIDEOGRAPHY
        </span>
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-3">SHOWCASE</p>
            <h1 className="font-display text-4xl md:text-8xl uppercase tracking-cinematic text-foreground">
              VIDEO<span className="text-primary">GRAPHY</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Desktop: Horizontal Scroll */}
      <div ref={sectionRef} className="hidden md:block horizontal-scroll-section relative">
        <div className="horizontal-scroll-inner flex items-center px-12">
          <div ref={scrollRef} className="flex gap-8 will-change-transform">
            {videoProjects.map((project) => (
              <div
                key={project.title}
                className="flex-shrink-0 w-[500px] group cursor-pointer"
                onClick={() => setLightbox({ open: true, title: project.title })}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 border-2 border-primary flex items-center justify-center rec-pulse">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-primary border-b-[6px] border-b-transparent ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 font-mono text-[10px] text-foreground bg-background/60 px-2 py-1 tracking-wider">
                    {project.duration}
                  </span>
                </div>

                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[10px] text-muted-foreground tracking-widest mt-1">{project.type}</p>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground/60">{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Embla Carousel */}
      <section className="md:hidden px-5 py-6">
        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent className="-ml-3">
            {videoProjects.map((project) => (
              <CarouselItem key={project.title} className="pl-3 basis-[88%]">
                <div
                  className="group cursor-pointer"
                  onClick={() => setLightbox({ open: true, title: project.title })}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-background/30" />
                    {/* Play icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border border-primary/60 flex items-center justify-center bg-background/30">
                        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-primary border-b-[5px] border-b-transparent ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 font-mono text-[9px] text-foreground bg-background/60 px-2 py-0.5 tracking-wider">
                      {project.duration}
                    </span>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-display text-lg uppercase tracking-cinematic text-foreground">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[9px] text-muted-foreground tracking-widest mt-1">
                      {project.type} · {project.year}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <VideoLightbox
        open={lightbox.open}
        onClose={() => setLightbox({ open: false, title: "" })}
        title={lightbox.title}
      />
    </main>
  );
};

export default Videos;

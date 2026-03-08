import { useState, useEffect, useRef } from "react";

const ApertureHero = () => {
  const [opened, setOpened] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);
  const [subtitleRevealed, setSubtitleRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setOpened(true), 400);
    const t2 = setTimeout(() => setTextRevealed(true), 1600);
    const t3 = setTimeout(() => setSubtitleRevealed(true), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom > 0) {
        setParallaxY(-rect.top * 0.15);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Deep background layers */}
      <div
        className="absolute inset-0 spotlight opacity-60"
        style={{ transform: `translateY(${parallaxY * 0.5}px)` }}
      />

      {/* Animated scan line */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        <div
          className="absolute left-0 right-0 h-px bg-primary/20"
          style={{
            animation: "scanline 4s linear infinite",
          }}
        />
      </div>

      {/* Horizontal frame lines */}
      <div className="absolute top-[15%] left-0 right-0 h-px bg-border/10 z-20" />
      <div className="absolute bottom-[15%] left-0 right-0 h-px bg-border/10 z-20" />

      {/* Vertical frame lines */}
      <div className="absolute top-0 bottom-0 left-[8%] md:left-[12%] w-px bg-border/10 z-20" />
      <div className="absolute top-0 bottom-0 right-[8%] md:right-[12%] w-px bg-border/10 z-20" />

      {/* Corner markers (camera viewfinder feel) */}
      <div className="absolute top-[15%] left-[8%] md:left-[12%] w-4 h-4 border-t border-l border-primary/30 z-20" />
      <div className="absolute top-[15%] right-[8%] md:right-[12%] w-4 h-4 border-t border-r border-primary/30 z-20" />
      <div className="absolute bottom-[15%] left-[8%] md:left-[12%] w-4 h-4 border-b border-l border-primary/30 z-20" />
      <div className="absolute bottom-[15%] right-[8%] md:right-[12%] w-4 h-4 border-b border-r border-primary/30 z-20" />

      {/* Aperture Panels */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-background z-40 transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${
          opened ? "-translate-x-full duration-[2000ms]" : "translate-x-0 duration-0"
        }`}
      >
        <div className="absolute right-0 top-0 bottom-0 w-px bg-primary/30" />
      </div>
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-background z-40 transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${
          opened ? "translate-x-full duration-[2000ms]" : "translate-x-0 duration-0"
        }`}
      >
        <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30" />
      </div>

      {/* Main Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        {/* Crimson ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/[0.04] transition-all duration-[3000ms] ease-out ${
              opened ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
            style={{
              borderRadius: "50%",
              filter: "blur(80px)",
            }}
          />
        </div>

        {/* OSD Top-left metadata */}
        <div
          className={`absolute top-[18%] left-[10%] md:left-[14%] text-left transition-all duration-700 ${
            subtitleRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <p className="font-mono text-[8px] md:text-[10px] tracking-[0.3em] text-muted-foreground/60">
            <span className="text-primary/60">●</span> REC 00:00:01
          </p>
        </div>

        {/* OSD Top-right metadata */}
        <div
          className={`absolute top-[18%] right-[10%] md:right-[14%] text-right transition-all duration-700 delay-100 ${
            subtitleRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <p className="font-mono text-[8px] md:text-[10px] tracking-[0.3em] text-muted-foreground/60">
            8K · 24FPS · LOG
          </p>
        </div>

        {/* Studio Name */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            textRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-[9px] md:text-xs tracking-[0.4em] text-muted-foreground uppercase mb-4 md:mb-6">
            RED SEA PRODUCTIONS
          </p>
        </div>

        {/* Main Headline */}
        <div className="overflow-hidden">
          <h1
            className={`font-display text-[clamp(2.8rem,9vw,9rem)] leading-[0.88] uppercase tracking-cinematic text-foreground transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 ${
              textRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
            }`}
          >
            WE DON'T
            <br />
            <span className="text-primary inline-block" style={{
              textShadow: textRevealed ? "0 0 60px hsl(0 100% 45% / 0.3), 0 0 120px hsl(0 100% 45% / 0.1)" : "none",
              transition: "text-shadow 2s ease-out 0.5s"
            }}>
              RECORD.
            </span>
            <br />
            WE CAPTURE.
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
            subtitleRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-mono text-[9px] md:text-xs tracking-[0.3em] text-muted-foreground/70 uppercase mt-6 md:mt-10">
            CINEMATOGRAPHY · EDITORIAL · COMMERCIAL
          </p>
        </div>

        {/* Bottom OSD metadata */}
        <div
          className={`absolute bottom-[18%] left-[10%] md:left-[14%] transition-all duration-700 delay-500 ${
            subtitleRevealed ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-mono text-[8px] md:text-[10px] tracking-[0.3em] text-muted-foreground/40">
            ISO 800 · f/1.4 · 1/48
          </p>
        </div>

        <div
          className={`absolute bottom-[18%] right-[10%] md:right-[14%] transition-all duration-700 delay-600 ${
            subtitleRevealed ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-mono text-[8px] md:text-[10px] tracking-[0.3em] text-muted-foreground/40">
            RED MONSTRO 8K
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApertureHero;

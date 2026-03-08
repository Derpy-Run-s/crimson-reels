import { useEffect, useCallback } from "react";

interface PhotoLightboxProps {
  project: {
    title: string;
    category: string;
    year: string;
    image: string;
    description: string;
    specs?: string;
  } | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalCount?: number;
}

const PhotoLightbox = ({ project, onClose, onNext, onPrev, currentIndex = 0, totalCount = 0 }: PhotoLightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-xl animate-fade-in" />

      {/* Content */}
      <div
        className="relative z-10 w-full h-full flex flex-col md:flex-row animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 flex items-center justify-center border border-border/30 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 group"
        >
          <span className="font-mono text-sm group-hover:rotate-90 transition-transform duration-300">✕</span>
        </button>

        {/* Navigation arrows */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-border/20 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 bg-background/50 backdrop-blur-sm"
          >
            <span className="font-mono text-lg">←</span>
          </button>
        )}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-border/20 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 bg-background/50 backdrop-blur-sm"
          >
            <span className="font-mono text-lg">→</span>
          </button>
        )}

        {/* Image section */}
        <div className="flex-1 relative flex items-center justify-center p-4 pt-14 md:p-12">
          <div className="relative max-w-full max-h-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="max-w-full max-h-[60vh] md:max-h-[80vh] object-contain"
            />
            {/* Viewfinder corners */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/40" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/40" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/40" />
          </div>
        </div>

        {/* Info panel */}
        <div className="w-full md:w-[360px] shrink-0 border-t md:border-t-0 md:border-l border-border/15 bg-background/60 backdrop-blur-sm p-6 md:p-10 flex flex-col justify-center">
          {/* Counter */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary/70">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 h-px bg-border/20 relative">
              <div
                className="absolute top-0 left-0 h-full bg-primary/50 transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / totalCount) * 100}%` }}
              />
            </div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40">
              {String(totalCount).padStart(2, "0")}
            </span>
          </div>

          <p className="font-mono text-[8px] tracking-[0.4em] text-primary/60 uppercase mb-2">
            {project.category}
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-cinematic text-foreground leading-[1.05] mb-4">
            {project.title}
          </h2>
          <p className="font-mono text-[11px] text-muted-foreground/60 leading-[1.9] mb-6">
            {project.description}
          </p>

          {project.specs && (
            <div className="border-t border-border/15 pt-4 mb-6">
              <p className="font-mono text-[8px] tracking-[0.3em] text-muted-foreground/40 uppercase">
                {project.specs}
              </p>
            </div>
          )}

          <div className="flex items-center gap-4 mt-auto">
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/40">{project.year}</span>
            <div className="w-1 h-1 bg-primary/30" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-primary/50">RED SEA PRODUCTIONS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoLightbox;

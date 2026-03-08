import { useEffect, useCallback } from "react";

interface VideoLightboxProps {
  open: boolean;
  onClose: () => void;
  title: string;
  videoUrl?: string;
}

const VideoLightbox = ({ open, onClose, title, videoUrl }: VideoLightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-4 md:mx-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-20 flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/50 hover:text-primary transition-colors duration-300 uppercase group"
        >
          CLOSE
          <span className="w-8 h-8 border border-border/30 group-hover:border-primary/50 flex items-center justify-center transition-all duration-300">
            <span className="group-hover:rotate-90 transition-transform duration-300">✕</span>
          </span>
        </button>

        {/* Video area */}
        <div className="relative aspect-video bg-card border border-border/15 overflow-hidden">
          {videoUrl ? (
            <video src={videoUrl} controls autoPlay className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              {/* Placeholder with play icon */}
              <div className="text-center">
                <div className="w-20 h-20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-5 hover:border-primary hover:scale-110 transition-all duration-500 cursor-pointer">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-primary border-b-[10px] border-b-transparent ml-1.5" />
                </div>
                <p className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground/30 uppercase">
                  VIDEO PREVIEW UNAVAILABLE
                </p>
              </div>

              {/* Viewfinder corners */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/20" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-primary/20" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-primary/20" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/20" />

              {/* OSD overlay */}
              <div className="absolute top-4 left-5 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary animate-pulse" />
                <span className="font-mono text-[8px] tracking-[0.2em] text-primary/40">REC</span>
              </div>
            </div>
          )}
        </div>

        {/* Title bar */}
        <div className="flex items-center justify-between mt-4 md:mt-5">
          <h3 className="font-display text-xl md:text-2xl uppercase tracking-cinematic text-foreground">
            {title}
          </h3>
          <span className="font-mono text-[8px] tracking-[0.2em] text-primary/40">RED SEA PRODUCTIONS</span>
        </div>
      </div>
    </div>
  );
};

export default VideoLightbox;

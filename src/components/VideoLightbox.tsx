import { useEffect } from "react";

interface VideoLightboxProps {
  open: boolean;
  onClose: () => void;
  title: string;
  videoUrl?: string;
}

const VideoLightbox = ({ open, onClose, title, videoUrl }: VideoLightboxProps) => {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-background/95 flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <button className="absolute top-6 right-6 font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase">
        CLOSE
      </button>

      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="aspect-video bg-secondary flex items-center justify-center border border-border">
          {videoUrl ? (
            <video src={videoUrl} controls autoPlay className="w-full h-full object-cover" />
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
              </div>
              <p className="font-mono text-xs text-muted-foreground tracking-widest">VIDEO PREVIEW</p>
            </div>
          )}
        </div>
        <p className="font-display text-xl uppercase tracking-cinematic text-foreground mt-4">{title}</p>
      </div>
    </div>
  );
};

export default VideoLightbox;

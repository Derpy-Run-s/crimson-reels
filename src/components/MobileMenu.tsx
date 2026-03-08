import { Link } from "react-router-dom";
import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; path: string }[];
  currentPath: string;
}

const MobileMenu = ({ open, onClose, links, currentPath }: MobileMenuProps) => {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-5">
        <span className="font-display text-xl tracking-cinematic text-foreground uppercase">
          RED<span className="text-primary">SEA</span>
        </span>
        <button
          className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase active:text-primary transition-colors p-2 -mr-2"
          onClick={onClose}
        >
          CLOSE
        </button>
      </div>

      {/* Links */}
      <div className="flex-1 flex flex-col items-start justify-center px-8 gap-6">
        {links.map((link, i) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={`font-display text-[clamp(2.5rem,10vw,4.5rem)] tracking-cinematic uppercase transition-all duration-500 leading-[1.1] ${
              currentPath === link.path ? "text-primary" : "text-foreground active:text-primary"
            }`}
            style={{
              transitionDelay: open ? `${i * 80 + 150}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateX(0)" : "translateX(-20px)",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="px-8 pb-8">
        <div className="h-px bg-border/30 mb-4" />
        <p className="font-mono text-[9px] text-muted-foreground/60 tracking-[0.2em]">
          RED SEA PRODUCTIONS © 2026
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;

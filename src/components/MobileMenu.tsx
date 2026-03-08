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
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-all duration-500 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        className="absolute top-5 right-6 font-mono text-xs tracking-widest text-muted-foreground uppercase"
        onClick={onClose}
      >
        CLOSE
      </button>

      <div className="flex flex-col items-center gap-10">
        {links.map((link, i) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={`font-display text-5xl tracking-cinematic uppercase transition-all duration-500 ${
              currentPath === link.path ? "text-primary" : "text-foreground"
            }`}
            style={{
              transitionDelay: open ? `${i * 100 + 200}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="absolute bottom-10 font-mono text-xs text-muted-foreground tracking-widest">
        RED SEA PRODUCTIONS © 2026
      </div>
    </div>
  );
};

export default MobileMenu;

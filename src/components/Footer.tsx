import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/20 bg-background">
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16">
        {/* Brand */}
        <div>
          <Link to="/" className="font-display text-2xl tracking-cinematic uppercase text-foreground">
            RED<span className="text-primary">SEA</span>
          </Link>
          <p className="font-mono text-[10px] md:text-[11px] text-muted-foreground/50 mt-3 leading-relaxed max-w-sm">
            The ultimate creative media & design production company,
            delivering exceptional quality. Providing comprehensive solutions worldwide.
          </p>
          <div className="mt-4">
            <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/30 uppercase">
              DUBAI · KERALA · BANGALORE · MUSCAT · RIYADH
            </p>
          </div>
        </div>

        {/* Links */}
        <div>
          <p className="font-mono text-[9px] tracking-[0.3em] text-primary/50 uppercase mb-4">KEY LINKS</p>
          <div className="flex flex-col gap-2.5">
            <Link to="/" className="font-mono text-[10px] text-muted-foreground/60 hover:text-primary transition-colors tracking-wider uppercase">Home</Link>
            <Link to="/about" className="font-mono text-[10px] text-muted-foreground/60 hover:text-primary transition-colors tracking-wider uppercase">About</Link>
            <Link to="/photography" className="font-mono text-[10px] text-muted-foreground/60 hover:text-primary transition-colors tracking-wider uppercase">Projects</Link>
            <Link to="/videos" className="font-mono text-[10px] text-muted-foreground/60 hover:text-primary transition-colors tracking-wider uppercase">Films</Link>
            <Link to="/contact" className="font-mono text-[10px] text-muted-foreground/60 hover:text-primary transition-colors tracking-wider uppercase">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-mono text-[9px] tracking-[0.3em] text-primary/50 uppercase mb-4">CONTACT</p>
          <div className="space-y-2.5">
            <p className="font-mono text-[10px] text-muted-foreground/60 tracking-wider">+971 50 123 4567</p>
            <p className="font-mono text-[10px] text-muted-foreground/60 tracking-wider">info@redsea.com</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 md:mt-14 pt-6 border-t border-border/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p className="font-mono text-[8px] md:text-[9px] text-muted-foreground/30 tracking-wider">
          © 2025 RED SEA PRODUCTIONS. ALL RIGHTS RESERVED.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-[8px] md:text-[9px] tracking-[0.3em] text-muted-foreground/30 hover:text-primary transition-colors uppercase"
        >
          TO TOP ↑
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;

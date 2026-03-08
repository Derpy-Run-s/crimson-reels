import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/30 px-5 md:px-12 py-8 md:py-10 bg-background">
    <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <Link to="/" className="font-display text-lg tracking-cinematic uppercase text-foreground">
        RED<span className="text-primary">SEA</span>
      </Link>

      <div className="flex flex-wrap items-center gap-4 md:gap-6 font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
        <Link to="/photography" className="hover:text-primary transition-colors py-1">Work</Link>
        <Link to="/videos" className="hover:text-primary transition-colors py-1">Films</Link>
        <Link to="/about" className="hover:text-primary transition-colors py-1">About</Link>
        <Link to="/contact" className="hover:text-primary transition-colors py-1">Contact</Link>
      </div>

      <p className="font-mono text-[9px] text-muted-foreground/60 tracking-wider">
        © 2026 RED SEA PRODUCTIONS
      </p>
    </div>
  </footer>
);

export default Footer;

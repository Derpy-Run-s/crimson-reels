import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border px-6 md:px-12 py-10 bg-background">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <Link to="/" className="font-display text-lg tracking-cinematic uppercase text-foreground">
        RED SEA
      </Link>

      <div className="flex items-center gap-6 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
        <Link to="/photography" className="hover:text-primary transition-colors">Work</Link>
        <Link to="/videos" className="hover:text-primary transition-colors">Films</Link>
        <Link to="/about" className="hover:text-primary transition-colors">About</Link>
        <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
      </div>

      <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
        © 2026 RED SEA PRODUCTIONS. ALL RIGHTS RESERVED.
      </p>
    </div>
  </footer>
);

export default Footer;

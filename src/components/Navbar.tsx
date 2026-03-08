import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "WORK", path: "/photography" },
  { label: "FILMS", path: "/videos" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-sm">
        <Link to="/" className="font-display text-2xl md:text-3xl tracking-cinematic text-foreground uppercase">
          RED SEA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden font-mono text-xs tracking-widest text-muted-foreground uppercase"
          onClick={() => setMenuOpen(true)}
        >
          MENU
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} currentPath={location.pathname} />
    </>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-12 transition-all duration-500 ${
          scrolled
            ? "py-3 md:py-4 bg-background/90 backdrop-blur-md border-b border-border/30"
            : "py-5 md:py-6 bg-transparent"
        }`}
      >
        <Link
          to="/"
          className="font-display text-xl md:text-2xl tracking-cinematic text-foreground uppercase hover:text-primary transition-colors duration-300"
        >
          RED<span className="text-primary">SEA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-primary relative ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase active:text-primary transition-colors p-2 -mr-2"
          onClick={() => setMenuOpen(true)}
        >
          MENU
        </button>
      </nav>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        currentPath={location.pathname}
      />
    </>
  );
};

export default Navbar;

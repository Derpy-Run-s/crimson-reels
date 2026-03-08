import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";

const categories = ["ALL", "COMMERCIAL", "EDITORIAL", "PORTRAIT", "EVENTS"];

const projects = [
  { title: "Desert Mirage", category: "COMMERCIAL", year: "2026", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" },
  { title: "Neon Veil", category: "EDITORIAL", year: "2025", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80" },
  { title: "Crimson Hour", category: "PORTRAIT", year: "2025", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" },
  { title: "Glass Empire", category: "COMMERCIAL", year: "2025", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80" },
  { title: "Shadow Play", category: "EDITORIAL", year: "2024", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80" },
  { title: "Ember", category: "PORTRAIT", year: "2024", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80" },
  { title: "Gala Noir", category: "EVENTS", year: "2024", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" },
  { title: "The Unveiling", category: "EVENTS", year: "2024", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
  { title: "Still Waters", category: "EDITORIAL", year: "2023", image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80" },
];

const Photography = () => {
  const [active, setActive] = useState("ALL");
  const filtered = active === "ALL" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="px-6 md:px-12 py-16 md:py-24 relative overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(4rem,20vw,16rem)] uppercase tracking-cinematic text-primary/[0.04] select-none whitespace-nowrap pointer-events-none">
          PHOTOGRAPHY
        </span>
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4">SHOWCASE</p>
            <h1 className="font-display text-5xl md:text-8xl uppercase tracking-cinematic text-foreground">
              PHOTO<span className="text-primary">GRAPHY</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 md:px-12 mb-12 md:mb-16">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 md:gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-[10px] tracking-widest uppercase py-2 px-4 border transition-all duration-300 ${
                active === cat
                  ? "border-primary text-primary bg-primary/5"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 80}>
              <ProjectCard
                {...project}
                link="#"
                aspectTall={i % 3 === 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Photography;

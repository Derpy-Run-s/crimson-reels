import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  link?: string;
  index?: number;
  aspectTall?: boolean;
}

const ProjectCard = ({ title, category, year, image, link = "#", aspectTall = false }: ProjectCardProps) => (
  <Link to={link} className="group block relative overflow-hidden">
    <div className={`relative overflow-hidden ${aspectTall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-all duration-500" />

      {/* Hover border accent */}
      <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 transition-colors duration-500" />
    </div>

    <div className="mt-3 md:mt-4 flex items-baseline justify-between gap-4">
      <div>
        <h3 className="font-display text-base md:text-xl uppercase tracking-cinematic text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="font-mono text-[9px] md:text-[10px] text-muted-foreground tracking-widest uppercase mt-1">
          {category}
        </p>
      </div>
      <span className="font-mono text-[9px] md:text-[10px] text-muted-foreground/60 tracking-wider">
        {year}
      </span>
    </div>
  </Link>
);

export default ProjectCard;

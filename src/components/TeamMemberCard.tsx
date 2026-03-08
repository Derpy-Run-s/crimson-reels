interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamMemberCard = ({ name, role, bio, image }: TeamMemberCardProps) => (
  <div className="group">
    <div className="relative overflow-hidden aspect-[3/4] mb-4">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
    <h3 className="font-display text-xl uppercase tracking-cinematic text-foreground">
      {name}
    </h3>
    <p className="font-mono text-[10px] text-primary tracking-widest uppercase mt-1">
      {role}
    </p>
    <p className="font-mono text-xs text-muted-foreground mt-2 leading-relaxed">
      {bio}
    </p>
  </div>
);

export default TeamMemberCard;

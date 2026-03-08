import ScrollReveal from "@/components/ScrollReveal";
import TeamMemberCard from "@/components/TeamMemberCard";

const teamMembers = [
  {
    name: "Khalid Al-Rashid",
    role: "Founder & Director",
    bio: "15 years behind the lens. Former RED Camera ambassador. Obsessed with light.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Sara Mahmoud",
    role: "Head of Photography",
    bio: "Editorial and commercial photography. Published in Vogue Arabia and Harper's Bazaar.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
  {
    name: "Omar Farouk",
    role: "Lead Cinematographer",
    bio: "Cannes-screened short films. Specializes in underwater and aerial cinematography.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
  {
    name: "Leila Hassan",
    role: "Post-Production Lead",
    bio: "Color scientist. DaVinci Resolve certified. Makes every frame bleed emotion.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
  },
];

const About = () => (
  <main className="pt-20 md:pt-24 pb-16 md:pb-20">
    {/* Hero */}
    <section className="px-5 md:px-12 py-12 md:py-32 relative overflow-hidden spotlight">
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(3rem,18vw,16rem)] uppercase tracking-cinematic text-primary/[0.04] select-none whitespace-nowrap pointer-events-none">
        RED SEA
      </span>
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-3">THE STUDIO</p>
          <h1 className="font-display text-4xl md:text-8xl uppercase tracking-cinematic text-foreground">
            ABOUT <span className="text-primary">US</span>
          </h1>
        </ScrollReveal>
      </div>
    </section>

    {/* Split Narrative */}
    <section className="px-5 md:px-12 py-12 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-24">
        {/* Sticky Left */}
        <div className="md:sticky md:top-32 md:self-start hidden md:block">
          <ScrollReveal>
            <p className="font-display text-6xl md:text-8xl uppercase tracking-cinematic text-primary/10 leading-none">
              RED
              <br />
              SEA
            </p>
          </ScrollReveal>
        </div>

        {/* Scrollable Right */}
        <div className="space-y-10 md:space-y-12">
          <ScrollReveal>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-primary uppercase mb-3">// DIRECTOR'S STATEMENT</p>
            <p className="font-mono text-[12px] md:text-sm text-muted-foreground leading-[2]">
              Red Sea Productions was born from a single belief: imagery should stop people in their tracks.
              We don't chase trends. We set them. Every frame we produce carries the weight of intention —
              meticulously lit, precisely composed, ruthlessly edited.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-primary uppercase mb-3">// APPROACH</p>
            <p className="font-mono text-[12px] md:text-sm text-muted-foreground leading-[2]">
              We shoot on RED Monstro 8K and Hasselblad medium format. We grade in DaVinci Resolve
              with custom LUTs built for each project. Our sound is mixed in Dolby Atmos.
              We don't cut corners — we cut everything else.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-primary uppercase mb-3">// PHILOSOPHY</p>
            <p className="font-mono text-[12px] md:text-sm text-muted-foreground leading-[2]">
              Light is our language. Shadow is our punctuation. Silence is our loudest statement.
              We work with clients who understand that great imagery isn't just seen — it's felt.
              If you want safe, we're not for you. If you want unforgettable, pull up a chair.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Divider */}
    <div className="max-w-7xl mx-auto px-5 md:px-12">
      <div className="h-px bg-border/30" />
    </div>

    {/* Team */}
    <section className="px-5 md:px-12 py-14 md:py-32">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-3">THE CREW</p>
          <h2 className="font-display text-3xl md:text-6xl uppercase tracking-cinematic text-foreground mb-10 md:mb-24">
            OUR <span className="text-primary">TEAM</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 80}>
              <TeamMemberCard {...member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;

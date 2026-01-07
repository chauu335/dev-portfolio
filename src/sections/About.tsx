import { BookOpenText, Handshake, Search, Shapes } from "lucide-react";

const highlights = [
  {
    icon: Search,
    title: "Detail-oriented",
    description:
      "I pay attention to every detail to ensure the highest quality.",
  },
  {
    icon: Handshake,
    title: "Collaborative",
    description: "I work well with others to achieve shared goals.",
  },
  {
    icon: Shapes,
    title: "Creative Vision",
    description: "I bring innovative ideas and a fresh perspective to my work.",
  },
  {
    icon: BookOpenText,
    title: "Keen Learner",
    description: "I'm always eager to learn and grow in my field.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
              Approaching software development with{" "}
              <span className="italic text-accent-content">
                quality and accessibility in mind
              </span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-accent-content/70 animate-fade-in animation-delay-200">
              <p>
                I'm a computer science student with a deep curiosity for machine
                learning and software engineering. I love building things that
                are not only functional but also intuitive and thoughtfully
                crafted, always keeping the human experience at the heart of the
                solution.
              </p>
              <p>
                When I'm not coding, you can find me digging into the latest
                trends in tech, doing graphic designs, or adventuring the world
                inside a good book.
              </p>
            </div>

            {/* Statement */}
            <div className="hidden glass-custom rounded-2xl p-6 animate-fade-in animation-delay-300 glow-border">
              <p className="text-lg font-medium italic text-base-content">
                "Some mission statement."
              </p>
            </div>
          </div>
          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-custom p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-base-content/20 flex items-center justify-center mb-4 hover:bg-base-content/30">
                  {
                    <item.icon className="w-6 h-6" /> /* Switch to <item.icon className="w-6 h-6 "/> when you actually use it */
                  }
                </div>
                <h3 className="text-lg font-semibold text-accent-content mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-accent-content/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

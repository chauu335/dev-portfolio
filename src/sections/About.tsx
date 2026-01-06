import { BadgeQuestionMark } from "lucide-react";

const highlights = [
  {
    icon: BadgeQuestionMark,
    title: "No title",
    description: "Empty description",
  },
  {
    icon: BadgeQuestionMark,
    title: "No title",
    description: "Empty description",
  },
  {
    icon: BadgeQuestionMark,
    title: "No title",
    description: "Empty description",
  },
  {
    icon: BadgeQuestionMark,
    title: "No title",
    description: "Empty description",
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
              Headline,
              <span className="italic text-accent-content">
                {" "}
                and some other text
              </span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-accent-content/70 animate-fade-in animation-delay-200">
              <p>Paragraph 1</p>
              <p>Paragraph 2</p>
            </div>

            {/* Statement */}
            <div className="glass-custom rounded-2xl p-6 animate-fade-in animation-delay-300 glow-border">
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

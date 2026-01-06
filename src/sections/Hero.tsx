import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { Button } from "../components/Button";

const skills = [
  "Python",
  "HTML/CSS",
  "Javascript",
  "React",
  "Node.js",
  "SQL",
  "C",
  "C++",
  "Java",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/ets-station.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-base-100/20 via-base-100/80 to-base-100" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="badge badge-soft badge-primary animate-fade-in rounded-full px-0 py-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass text-sm rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />{" "}
                {/* Badge Dot */}
                CS Student • Honours
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-accent-content text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Life is a{" "}
                <span className="text-base-content glow-text">gamble</span>
                <br />
                and there is gambling in
                <br />
                <span className="italic">every single action.</span>
              </h1>
              <p className="text-lg text-base-content/70 max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Chau, a student at the University of Alberta with a
                strong interest in software design and machine learning. (Some
                other short description.)
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animation-delay-300">
              <Button size="lg" className="btn-primary">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <button className="btn btn-outline btn-primary text-lg rounded-full font-normal">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </span>
              </button>
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="max-w-md mx-auto">
              <div className="relative glass-custom rounded-3xl glow-border">
                <img
                  src="/vt-beach-1.JPG"
                  alt="Duc Hoang Chau Ngo"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="hidden absolute -bottom-6 -right-6 glass-custom rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-accent-content">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-base-content/70 mb-6 text-center">
            (My skills)
          </p>
          <div className="overflow-hidden relative">
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-linear-to-r from-base-100 to-transparent z-10" />
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-linear-to-l from-base-100 to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="shrink-0 px-8 py-4">
                  <span className="text-xl text-base-content/35 font-semibold hover:text-base-content/70 transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-base-content/70 hover:text-accent-content"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

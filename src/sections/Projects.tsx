import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Event Lottery System",
    description:
      "Developed an Android event lottery app in a team of five, implementing real-time data, multi-role workflows, QR check-ins, and automated notifications.",
    image: "/event_lottery_thumbnail.png",
    tags: ["Java", "Firebase", "XML"],
    link: "https://drive.google.com/file/d/1Rul9wUiP2nOIeeRqxCXOoFIvOLzlX5B1/view?usp=drive_link",
    github: "https://github.com/CMPUT301F25basket/shopping-basket",
  },
  {
    title: "Web-based Document Editor",
    description:
      "Built a document editor with full styling and async database functions for user auth and document management.",
    image: "/journal_app_thumbnail.png",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    link: "",
    github: "https://github.com/chauu335/journal-app",
  },
  {
    title: "Social Media App",
    description:
      "In a team of four, developed a CLI social media platform, enabling user authentication, posting, following, and search. Focused on data integrity with robust validation and protected database operations.",
    image: "/social_media_thumbnail.png",
    tags: ["Python", "SQLite"],
    link: "",
    github:
      "https://github.com/CMPUT291-F24/assignment-3-aacd-cmput-291-mini-project-1",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-base-content/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/7.5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Learning by
            <span className="italic text-accent-content"> building</span>
          </h2>
          <p className="text-accent-content/70 animate-fade-in animation-delay-200">
            A selection of projects showcasing my skills and experience through
            examples of my work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              className="group glass-custom rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              key={index}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral via-neutral/50 to-transparent opacity-30" />
                {/* Overlay Link(s) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full glass-custom hover:bg-neutral transition-all ${
                      project.link ? "" : "pointer-events-none opacity-50"
                    }`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-custom hover:bg-neutral transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Project Content */}
              <div className="p-6 space-y-4 text-accent-content">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-base-content transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-accent-content/70 group-hover:text-base-content group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-accent-content/70 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-neutral text-xs font-medium border border-base-200/40 text-accent-content/70 hover:text-base-content hover:border-neutral-content/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="hidden text-center mt-12 animate-fade-in animation-delay-500">
          <button className="btn btn-outline text-lg rounded-full font-normal py-6">
            <span className="relative z-10 flex items-center justify-center gap-2">
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

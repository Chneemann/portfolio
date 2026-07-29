import Link from "next/link";
import Image from "next/image";

/**
 * Static list of featured and secondary portfolio project items
 */
const PROJECTS = [
  {
    title: "DABubble",
    type: "Web Application",
    description:
      "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
    image: "/assets/projects/dabubble.png",
    tags: [
      { name: "Angular", featured: true },
      { name: "TypeScript", featured: true },
      { name: "Google Firebase", featured: false },
    ],
    isFeatured: true,
    demoLink: "https://dabubble.andre-kempf.com/",
    githubLink: "https://github.com/Chneemann/dabubble",
  },
  {
    title: "Join",
    type: "Full-Stack App",
    description:
      "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories to ensure efficient management.",
    image: "/assets/projects/join.png",
    tags: [
      { name: "Angular (TS)", featured: true },
      { name: "Django REST", featured: true },
      { name: "Python", featured: false },
      { name: "PostgreSQL", featured: false },
    ],
    isFeatured: false,
    frontendLink: "https://github.com/Chneemann/join",
    backendLink: "https://github.com/Chneemann/join-api",
  },
  {
    title: "Videoflix",
    type: "Full-Stack App",
    description:
      "Video platform for sharing and discovering videos. Upload, view, and stream content in various quality levels, all within a user-friendly interface designed to enhance the video experience.",
    image: "/assets/projects/videoflix.png",
    tags: [
      { name: "Angular (TS)", featured: true },
      { name: "Django REST", featured: true },
      { name: "Python", featured: false },
      { name: "PostgreSQL", featured: false },
    ],
    isFeatured: false,
    frontendLink: "https://github.com/Chneemann/videoflix/tree/main/frontend",
    backendLink: "https://github.com/Chneemann/videoflix/tree/main/backend",
  },
];

/**
 * Portfolio showcase section highlighting primary and secondary projects
 */
export default function Portfolio() {
  // Separate featured highlight from remaining secondary project cards
  const featuredProject = PROJECTS.find((p) => p.isFeatured);
  const secondaryProjects = PROJECTS.filter((p) => !p.isFeatured);

  return (
    <section
      id="portfolio"
      className="relative py-6 px-4 md:px-6 max-w-5xl mx-auto scroll-mt-15"
    >
      {/* Section Header */}
      <div className="mb-4 space-y-1">
        <p className="text-xs font-mono text-blue-500 tracking-wider uppercase">
          // 03. Projects
        </p>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Portfolio<span className="text-blue-500">.</span>
        </h2>
      </div>

      <div className="space-y-6">
        {/* Featured Main Project Card */}
        {featuredProject && (
          <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/90 backdrop-blur-md shadow-lg shadow-black/40 border-t-slate-600/50 hover:border-blue-500/50 hover:bg-slate-800/90 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 ease-out overflow-hidden grid md:grid-cols-12 items-center">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/15 rounded-full blur-xl group-hover:bg-blue-500/25 transition-all duration-500 pointer-events-none z-20" />
            <div className="absolute top-0 right-0 z-20 px-4 py-1.5 bg-blue-950/80 backdrop-blur-md border-b border-l border-blue-500/60 text-blue-300 font-mono text-xs font-semibold rounded-bl-xl shadow-md shadow-blue-500/10">
              Featured Project
            </div>

            {/* Description & Metadata */}
            <div className="p-5 md:col-span-7 z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-2 pr-28">
                  <p className="text-xs font-mono text-blue-400">
                    // {featuredProject.type}
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                  <span className="text-blue-500 font-mono text-lg">//</span>{" "}
                  {featuredProject.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {featuredProject.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 cursor-default hover:-translate-y-0.5 shadow-sm ${
                        tag.featured
                          ? "bg-blue-500/10 text-blue-300 border border-blue-500/40 shadow-blue-500/5 hover:bg-blue-500/20 hover:border-blue-400 hover:text-white"
                          : "bg-slate-800/60 text-slate-400 border border-slate-700/40 hover:border-slate-500 hover:text-slate-200 hover:bg-slate-800"
                      }`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 text-sm font-semibold">
                  {featuredProject.demoLink && (
                    <Link
                      href={featuredProject.demoLink}
                      target="_blank"
                      className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2 shadow-md shadow-blue-600/20"
                    >
                      Live Demo ↗
                    </Link>
                  )}
                  {featuredProject.githubLink && (
                    <Link
                      href={featuredProject.githubLink}
                      target="_blank"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      GitHub Repo
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Project Preview Image */}
            <div className="relative md:col-span-5 h-64 md:h-full min-h-260px overflow-hidden border-t md:border-t-0 md:border-l border-slate-800/60">
              <Image
                src={featuredProject.image}
                alt={`${featuredProject.title} Vorschau`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-slate-950/90 via-slate-950/0 to-transparent pointer-events-none" />
            </div>
          </div>
        )}

        {/* Secondary Projects Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {secondaryProjects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/90 backdrop-blur-md shadow-lg shadow-black/40 border-t-slate-600/50 hover:border-blue-500/50 hover:bg-slate-800/90 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 ease-out overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/15 rounded-full blur-xl group-hover:bg-blue-500/25 transition-all duration-500 pointer-events-none" />

              {/* Project Image */}
              <div className="relative h-44 overflow-hidden border-b border-slate-800/60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/0 to-transparent pointer-events-none" />
              </div>

              {/* Card Details & Stack */}
              <div className="p-5 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-mono text-slate-500">
                      // {project.type}
                    </p>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                    <span className="text-blue-500 font-mono text-sm">//</span>{" "}
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 cursor-default hover:-translate-y-0.5 shadow-sm ${
                          tag.featured
                            ? "bg-blue-500/10 text-blue-300 border border-blue-500/40 shadow-blue-500/5 hover:bg-blue-500/20 hover:border-blue-400 hover:text-white"
                            : "bg-slate-800/60 text-slate-400 border border-slate-700/40 hover:border-slate-500 hover:text-slate-200 hover:bg-slate-800"
                        }`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  {/* Repository Links */}
                  <div className="grid grid-cols-2 pt-2 border-t border-slate-800/60">
                    {project.frontendLink && (
                      <Link
                        href={project.frontendLink}
                        target="_blank"
                        className="text-xs font-mono text-blue-400 hover:underline inline-flex items-center gap-1"
                      >
                        Code (Frontend) →
                      </Link>
                    )}
                    {project.backendLink && (
                      <Link
                        href={project.backendLink}
                        target="_blank"
                        className="text-xs font-mono text-blue-400 hover:underline inline-flex items-center justify-end gap-1 text-right"
                      >
                        Code (Backend) →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "DABubble",
    type: "Web Application",
    description:
      "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
    image: "/assets/projects/join.jpg",
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
    image: "/assets/projects/dabubble.png",
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
    image: "/assets/projects/videoflix.jpg",
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

export default function Portfolio() {
  const featuredProject = PROJECTS.find((p) => p.isFeatured);
  const secondaryProjects = PROJECTS.filter((p) => !p.isFeatured);

  return (
    <section
      id="portfolio"
      className="relative py-6 px-4 md:px-6 max-w-5xl mx-auto scroll-mt-15"
    >
      {/* Title */}
      <div className="mb-4 space-y-1">
        <p className="text-xs font-mono text-blue-500 tracking-wider uppercase">
          // 03. Projects
        </p>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Portfolio<span className="text-blue-500">.</span>
        </h2>
      </div>
    </section>
  );
}

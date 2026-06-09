const PROJECTS = [
  {
    id: 1,
    title: "NBA Defensive Physicality Score",
    icon: "🏀",
    tags: ["Python", "NumPy", "Matplotlib", "Scikit-learn"],
    description:
      "Built a Defensive Physicality Score from NBA tracking data to evaluate defensive success and physicality. Created classification models reaching 70%+ accuracy and .70+ ROC AUC.",
    github: null,
  },
  {
    id: 2,
    title: "Personal Website",
    icon: "💻",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    description:
      "Designed and deployed this portfolio site to showcase my background, projects, and technical skills — including the interactive experience map you're looking at now.",
    github: "https://github.com/dtkauber/personal-website",
  },
  {
    id: 3,
    title: "Dungeon Crawler Game",
    icon: "⚔️",
    tags: ["Java", "JavaFX", "CSS"],
    description:
      "A tile-based dungeon crawler built with JavaFX, featuring custom rendering, game logic, and an interactive UI.",
    github: null,
  },
  {
    id: 4,
    title: "EPL Match Predictor",
    icon: "⚽",
    tags: ["Python", "Pandas", "Scikit-learn"],
    description:
      "A Random Forest Classifier that predicts English Premier League match outcomes with a 70% success rate.",
    github: "https://github.com/dtkauber/Predicting-EPL-Matches-using-Python-and-Machine-Learning",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group h-56 [perspective:1000px]">
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 [backface-visibility:hidden]">
          <div>
            <span className="text-3xl">{project.icon}</span>
            <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-blue-400/40 bg-slate-800 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-sm leading-6 text-slate-300">{project.description}</p>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-sm font-medium text-blue-300 transition hover:text-blue-200"
            >
              → View on GitHub
            </a>
          ) : (
            <span className="text-xs text-slate-500">Description only</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

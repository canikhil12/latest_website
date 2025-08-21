import { ArrowRight, ExternalLink, Github, Play } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Put your small preview videos in public/videos/*  (5–10s, muted)
// Optional poster images in public/images/*
// ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Sales Forecasting Dashboard",
    description:
      "Sales Forecasting built with Looker, Python, ML and SQL.",
    // Prefer WebM for size + an MP4 fallback (optional).
    previewVideoWebm: "/videos/2025-08-11 14-58-24 (online-video-cutter.com).mp4",
    previewVideoMp4: "/videos/2025-08-11 14-58-24 (online-video-cutter.com).mp4",
    poster: "/images/portfolio-poster.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=a0yS0lnjQXc&t=160s",
    tags: ["Looker", "Python", "API", "SQL"],
    demoUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/your-username/portfolio",
  },
  {
    title: "Retention Insights Visualization",
    description: "Full-stack app with Stripe and modern cart UX.",
    previewVideoWebm: "/videos/2025-08-21 14-54-04.mp4",
    previewVideoMp4: "/videos/2025-08-21 14-54-04 (online-video-cutter.com).mp4",
    poster: "/images/ecommerce-poster.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2",
    tags: ["Tableau", "Python", "SQL", "ML"],
    demoUrl: "https://public.tableau.com/shared/RYTFJ4978?:display_count=n&:origin=viz_share_link",
    githubUrl: "https://github.com/your-username/ecommerce",
  },
  {
    title: "HealthCare Dashboard",
    description:
      "This Power BI dashboard provides a summary of waitlist data across different case types and time bands. It offers valuable insights into the number of cases, their distribution over time, and key performance indicators such as average or median waitlists.",
    previewVideoWebm: "/videos/weather-preview.webm",
    previewVideoMp4: "/videos/weather-preview.mp4",
    poster: "/images/Screenshot 2024-12-15 204751.png",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_3",
    tags: ["Power BI", "Excel", "SQL", "Python"],
    demoUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/canikhil12/HealthCare",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Preview: small looping video. Click opens YouTube in new tab */}
              <div
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => window.open(project.youtubeUrl, "_blank", "noopener,noreferrer")}
                title="Watch on YouTube"
              >
                <video
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={project.poster}
                >
                  {/* Provide both when you have them */}
                  {project.previewVideoWebm && (
                    <source src={project.previewVideoWebm} type="video/webm" />
                  )}
                  {project.previewVideoMp4 && (
                    <source src={project.previewVideoMp4} type="video/mp4" />
                  )}
                </video>

                {/* Hover overlay + play glyph */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                  <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={`${project.title}-${tag}-${i}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="Source Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  {/* You can add a tiny 'Watch' text link if you like */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to your GitHub profile */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/canikhil12"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
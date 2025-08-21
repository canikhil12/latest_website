import { Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Chilaka <span className="text-primary">Akhil</span>
        </h2>

        {/* Main row: Image left • Content right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Photo */}
          <div className="order-1">
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl">
              <img
                src="https://i.postimg.cc/KjLgmLs7/cropped-Chilaka-Akhil.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Copy + Socials + CTAs + Feature cards */}
          <div className="order-2">
            {/* Title + copy */}
            <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
              Passionate Data Analyst & BI Analyst <img className="wave" style={{width:"68px",height:"68px"}} src="https://assets.zyrosite.com/mePGrL1bXRFjZ2nQ/wave-YNqN17z9R5s6aaxo.png" alt="Waving hand" />
            </h3>

            <p className="mt-4 text-muted-foreground text-center md:text-left">
            With over 4 years of experience in data analysis, I specialize in transforming complex datasets into clear, actionable insights using tools like Python, SQL, Power BI, and Excel.
            </p>
            <br></br>
            <p className="mt-3 text-muted-foreground text-center md:text-left">
              I’m passionate about uncovering trends, optimizing processes through data, and continuously learning new analytical techniques to stay at the forefront of the evolving data landscape.

            </p>
            <br></br>
            {/* Social row */}
            <div className="mt-5 flex items-center justify-center md:justify-start gap-4">
              <span className="text-sm text-muted-foreground">
                Hakuna Matata! 🕊️
              </span>
              <span className="h-2 w-8 rounded-full bg-primary/70" />

              {/* inline SVGs so no new imports */}
              <a href="https://www.youtube.com/@chakhil8771" aria-label="YouTube" className="opacity-80 hover:opacity-100 transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32.7 32.7 0 0 0 0 12a32.7 32.7 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c1.8.5 9.3.5 9.3.5s7.5 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.7 32.7 0 0 0 24 12a32.7 32.7 0 0 0-.5-5.8zM9.6 15.5V8.5L15.8 12l-6.2 3.5z"/>
                </svg>
              </a>
              <a href="https://leetcode.com/progress/" aria-label="LeetCode" className="opacity-80 hover:opacity-100 transition">
                <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.3 3.5l-9.4 9.4c-1.7 1.7-1.7 4.5 0 6.2l9.4 9.4c.4.4 1 .4 1.4 0s.4-1 0-1.4l-9.4-9.4c-1-1-1-2.5 0-3.5l9.4-9.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0zM28.5 16c0-6.9-5.6-12.5-12.5-12.5S3.5 9.1 3.5 16 9.1 28.5 16 28.5c2.9 0 5.6-1 7.7-2.7.4-.3.5-1 .1-1.4s-1-.5-1.4-.1C20.9 25 18.5 25.8 16 25.8c-5.4 0-9.8-4.4-9.8-9.8S10.6 6.2 16 6.2 25.8 10.6 25.8 16c0 1.6-.4 3.2-1.1 4.6-.2.5 0 1.1.5 1.3.5.2 1.1 0 1.3-.5.9-1.8 1.4-3.7 1.4-5.4z"/>
                </svg>
              </a>
              <a href="https://github.com/canikhil12" aria-label="GitHub" className="opacity-80 hover:opacity-100 transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.204.084 1.837 1.236 1.837 1.236 1.07 1.834 2.809 1.304 3.495.997.107-.776.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.403c1.018.005 2.042.138 3.003.403 2.29-1.552 3.295-1.23 3.295-1.23.653 1.649.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.104.823 2.224 0 1.606-.015 2.898-.015 3.293 0 .32.19.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/akhil-chilaka/" aria-label="LinkedIn" className="opacity-80 hover:opacity-100 transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM9 8h4.8v2.2h.1c.7-1.2 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.5V24h-5v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24H9V8z"/>
                </svg>
              </a>
            </div>
            <br></br>
            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-white font-medium shadow-md shadow-black/10 hover:opacity-90 transition"
              >
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1ABVJ_2DTghGUVYAfRfZSND5fkjSZkQy0/view?usp=drive_link"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
              >
                Download CV
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=canikhil3@gmail.com&su=Hello&body=I%20wanted%20to%20connect%20with%20you" target="_blank">
                Email Me
              </a>
            </div>

            {/* Feature cards */}
            <div className="mt-8 grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Data Analysis</h4>
                    <p className="text-muted-foreground">
                      Designing scalable data pipelines and delivering actionable insights using modern tools like Python, SQL, Power BI, and Databricks.

                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> ETL & Automation</h4>
                    <p className="text-muted-foreground">
                    Automating large-scale data workflows using Python, SQL, and Databricks, reducing manual effort and increasing pipeline efficiency by up to 40%.

                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Feature cards */}
          </div>
        </div>
      </div>
    </section>
  );
};
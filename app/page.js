const projects = [
  {
    name: "Research Brief Builder",
    href: "https://airesearcher-psi.vercel.app",
    stack: ["Next.js", "Node.js", "LLM API", "Web Scraping"],
    summary:
      "AI research tool that scrapes and analyzes 5-10 URLs, then generates clear briefs with key points and citations.",
    impact: "Multi-source ingestion, URL history, live generation status, and AI summarization.",
  },
  {
    name: "Trust Point Hospital",
    href: "https://trustpointhospital.in",
    stack: ["Next.js", "Node.js", "Admin Panel", "Appointments"],
    summary:
      "Full-featured hospital website for a 20-bed multispeciality hospital with appointments, doctor listings, and service pages.",
    impact: "Admin login, appointment booking flow, responsive pages, and operational content management.",
  },
  {
    name: "AI Agent Run Panel",
    href: "https://aiagent-azure.vercel.app",
    stack: ["Next.js", "Node.js", "LLM API", "Agents"],
    summary:
      "AI orchestration dashboard for running multi-step agent pipelines with parallel execution and real-time logs.",
    impact: "Structured reports, task visibility, pipeline controls, and live progress tracking.",
  },
];

const skills = [
  ["Frontend", "React.js", "Next.js App Router", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"],
  ["Backend", "Node.js", "Express.js", "REST API Design", "JWT", "RBAC"],
  ["Data", "MongoDB", "PostgreSQL", "Indexing", "Database Optimization"],
  ["Real-Time + AI", "Socket.io", "WebSockets", "LLM APIs", "Multilingual AI Pipelines"],
  ["Tools", "Git", "GitHub", "Postman", "Vercel", "Render", "Scalable Architecture"],
];

const stats = [
  ["56+", "Languages supported"],
  ["10+", "REST APIs shipped"],
  ["35%", "Backend response gain"],
  ["60%", "Manual content effort reduced"],
];

const focusAreas = ["AI SaaS", "Next.js", "MERN", "REST APIs", "Auth", "Real-time apps"];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">
          <span>JN</span>
          <strong>Jaun Naqvi</strong>
        </a>
        <div className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Open to remote / Immediate joiner / Moradabad, India</p>
          <p className="heroName" aria-label="Jaun Naqvi">
            <span className="heroNameText" aria-hidden="true">Jaun Naqvi</span>
          </p>
          <h1>Full-stack developer for AI products, SaaS platforms, and polished web apps.</h1>
          <p className="intro">
            I build production-ready interfaces, APIs, auth systems, dashboards, and LLM-powered workflows with
            Next.js, React, Node.js, Express, MongoDB, and PostgreSQL.
          </p>
          <div className="focusStrip" aria-label="Core focus areas">
            {focusAreas.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="heroActions">
            <a className="button primary" href="#projects">View Projects</a>
            <a className="button secondary" href="mailto:jounnaqvi@gmail.com">Hire Me</a>
          </div>
        </div>

        <div className="heroVisual" aria-hidden="true">
          <div className="profilePanel">
            <div className="profileTop">
              <div>
                <span className="statusDot" />
                Available for full-stack roles
              </div>
              <strong>2026</strong>
            </div>
            <div className="profileIdentity">
              <span>JN</span>
              <div>
                <h2>Jaun Naqvi</h2>
                <p>MERN + Next.js Developer</p>
              </div>
            </div>
            <div className="signalGrid">
              <div>
                <span>Current focus</span>
                <strong>AI-powered SaaS</strong>
              </div>
              <div>
                <span>Experience</span>
                <strong>Remote UK startup</strong>
              </div>
              <div>
                <span>Strength</span>
                <strong>Ship end-to-end</strong>
              </div>
            </div>
          </div>

          <div className="metricsPanel">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section introBand">
        <div>
          <p className="sectionLabel">What I Bring</p>
          <h2>SaaS thinking, clean interfaces, and reliable backend delivery.</h2>
        </div>
        <p>
          From LLM integrations and multilingual content pipelines to role-based dashboards and appointment systems,
          I like building products that feel polished on the surface and practical underneath.
        </p>
      </section>

      <section className="section" id="projects">
        <div className="sectionHeader">
          <p className="sectionLabel">Selected Work</p>
          <h2>Projects that show the stack in motion.</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.name}>
              <div>
                <div className="projectTop">
                  <h3>{project.name}</h3>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                    Open
                  </a>
                </div>
                <p>{project.summary}</p>
              </div>
              <p className="impact">{project.impact}</p>
              <div className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="skills">
        <div className="sectionHeader stickyHeader">
          <p className="sectionLabel">Skills</p>
          <h2>A full-stack toolkit for modern product teams.</h2>
          <p>
            Strongest around React, Next.js, Node.js, REST APIs, MongoDB, PostgreSQL, authentication, real-time
            features, and practical LLM integration.
          </p>
        </div>
        <div className="skillList">
          {skills.map(([group, ...items]) => (
            <div className="skillGroup" key={group}>
              <h3>{group}</h3>
              <div>
                {items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="sectionHeader">
          <p className="sectionLabel">Experience</p>
          <h2>Remote startup delivery with measurable product impact.</h2>
        </div>
        <div className="timeline">
          <article>
            <span>May 2025 - Oct 2025</span>
            <h3>Full-Stack / Frontend Developer / Move Production, UK</h3>
            <p>
              Built Brainstarta, an AI-powered multilingual SaaS learning platform with React, Next.js, Node.js,
              Express, and LLM APIs. Improved backend response time by 35% and page load time by 25%.
            </p>
          </article>
          <article>
            <span>Sept 2023 - Oct 2023</span>
            <h3>Full-Stack Developer Intern / Tech Gyan, Mumbai</h3>
            <p>
              Developed MERN applications and RESTful APIs, integrated MongoDB, and improved query performance
              through indexing strategies.
            </p>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="sectionLabel">Contact</p>
          <h2>Let&apos;s build something useful, fast, and production-ready.</h2>
        </div>
        <div className="contactLinks">
          <a href="mailto:jounnaqvi@gmail.com">jounnaqvi@gmail.com</a>
          <a href="tel:+919760070684">+91 9760070684</a>
          <a href="https://linkedin.com/in/jaun-naqvi" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/jounnaqvi" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>
    </main>
  );
}

import React, { useMemo, useState } from "react";

// Single-file, job-ready React Portfolio (TailwindCSS)
// Replace:
// - /your-photo.jpg
// - /your-resume.pdf
// - social links + email

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-28 py-12 sm:py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-10">
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          {subtitle}
        </p>
        <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">{title}</h3>
      </div>
      {children}
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-slate-200 bg-white/90 shadow-sm hover:shadow-md transition-shadow ${className}`}
  >
    {children}
  </div>
);

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const PROFILE = useMemo(
    () => ({
      name: "Ameer Ali",
      title: "Software Engineer",
      tagline:
        "I build fast, responsive, and maintainable web applications using React.js and modern JavaScript.",
      location: "Pakistan",
      email: "ameerali4302@gmail.com",
      github: "https://github.com/ali4302",
      linkedin: "https://www.linkedin.com/in/ameer-ali-07862225b",
      resume: "./files/Ameer Ali CV .pdf.pdf",
      photo: "./images/Ameer Ali.jpg",
    }),
    []
  );

  const skills = useMemo(
    () => [
      "JavaScript (ES6+)",
      "React.js",
      "Node.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "REST APIs",
      "Git & GitHub",
      "Responsive UI",
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Patient Record Management System",
        type: "Final Year Project",
        description:
          "A web-based system to manage patient records, appointments, and prescriptions with role-based access and fast search.",
        tech: ["React", "Node.js", "MongoDB"],
        highlights: [
          "Role-based login (Admin/Staff)",
          "Patient search + filters",
          "Clean UI for medical workflows",
        ],
        demo: "#",
        repo: "#",
      },
      {
        id: 2,
        title: "E-Commerce Web App",
        type: "Frontend Project",
        description:
          "A responsive eCommerce UI with product listing, cart management, and checkout flow built for performance and usability.",
        tech: ["React", "Context API"],
        highlights: ["Product filters", "Cart + quantity updates", "Mobile-first layout"],
        demo: "#",
        repo: "#",
      },
      {
        id: 3,
        title: "Blog Platform",
        type: "Full Stack",
        description:
          "A blogging platform with authentication, CRUD posts, and structured content management.",
        tech: ["React", "Express", "MongoDB"],
        highlights: ["Login/Register", "Create/Edit/Delete posts", "Modern dashboard"],
        demo: "#",
        repo: "#",
      },
      {
        id: 4,
        title: "Portfolio Website",
        type: "Personal Branding",
        description:
          "A professional portfolio website designed for recruiters with clear sections, project cards, and direct contact.",
        tech: ["React", "TailwindCSS"],
        highlights: ["Clean layout", "Responsive design", "Fast loading"],
        demo: "#",
        repo: "#",
      },
      {
        id: 5,
        title: "Inventory / Lab Management",
        type: "Web App",
        description:
          "A simple inventory tracking app for lab equipment with add/edit/delete and search features.",
        tech: ["React", "Node.js"],
        highlights: ["CRUD operations", "Search & filters", "Reusable components"],
        demo: "#",
        repo: "#",
      },
      {
        id: 6,
        title: "Task Manager",
        type: "Productivity",
        description:
          "A task management app with clean UX for tracking daily tasks and progress.",
        tech: ["React"],
        highlights: ["Add/complete tasks", "Simple UI", "Responsive layout"],
        demo: "#",
        repo: "#",
      },
    ],
    []
  );

  const experience = useMemo(
    () => [
      {
        company: "MSN Academy",
        role: "Frontend Development Intern",
        period: "1 Oct 2025 — 21 Oct 2025",
        bullets: [
          "Built responsive UI components using React.js and reusable patterns.",
          "Worked with the team to implement clean layouts and improve user experience.",
          "Assisted in debugging UI issues and improving performance on mobile screens.",
        ],
      },
    ],
    []
  );

  const nav = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio enquiry — ${PROFILE.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Background accent */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full overflow-hidden border border-slate-200 shadow-sm">
              <img src={PROFILE.photo} alt="profile" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">{PROFILE.name}</p>
              <p className="text-xs sm:text-sm text-slate-600">{PROFILE.title}</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-slate-700 hover:text-indigo-700 transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href={PROFILE.resume}
              download
              className="ml-2 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
            >
              Download CV
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm"
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-indigo-700"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={PROFILE.resume}
                download
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section className="py-14 sm:py-18">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Open to internships / junior roles
                </p>

                <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                  {PROFILE.title}
                  <span className="text-indigo-700">.</span>
                </h1>

                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                  {PROFILE.tagline}
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl bg-indigo-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 transition"
                  >
                    View Projects
                  </a>
                  <a
                    href={PROFILE.resume}
                    download
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition"
                  >
                    Download Resume
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Pill>React.js</Pill>
                  <Pill>JavaScript</Pill>
                  <Pill>Node.js</Pill>
                  <Pill>MongoDB</Pill>
                  <Pill>Responsive UI</Pill>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
                    📍 {PROFILE.location}
                  </span>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm hover:border-slate-300 hover:text-slate-900 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm hover:border-slate-300 hover:text-slate-900 transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <Card className="p-4 sm:p-5 w-full max-w-md">
                  <div className="rounded-2xl overflow-hidden border border-slate-200">
                    <img
                      src={PROFILE.photo}
                      alt="Ameer Ali"
                      className="w-full h-72 sm:h-80 object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-slate-900">{PROFILE.name}</p>
                    <p className="text-sm text-slate-600">{PROFILE.title}</p>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600">
                      Focused on clean UI, performance, and real-world projects.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About" subtitle="Profile">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 lg:col-span-2">
              <p className="text-slate-700 leading-relaxed">
                I'm a final-year Software Engineering student passionate about building modern web
                applications. I enjoy working on real-world projects where I can improve UI/UX,
                performance, and code quality. I'm actively looking for opportunities to grow as a
                Software Engineer and contribute to impactful products.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Clean Code</Pill>
                <Pill>Component Reuse</Pill>
                <Pill>REST APIs</Pill>
                <Pill>Mobile-first</Pill>
              </div>
            </Card>

            <Card className="p-6">
              <p className="text-sm font-semibold text-slate-900">Quick Info</p>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-500">Role</span>
                  <span className="font-medium">{PROFILE.title}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-500">Stack</span>
                  <span className="font-medium">MERN</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-500">Email</span>
                  <span className="font-medium">{PROFILE.email}</span>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills" subtitle="Toolbox">
          <Card className="p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </Card>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects" subtitle="Work">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Card key={p.id} className="p-6 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">
                      {p.type}
                    </p>
                    <h4 className="mt-2 text-lg font-bold text-slate-900">{p.title}</h4>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={p.demo}
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition"
                  >
                    Live
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                  >
                    Code
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience" subtitle="Timeline">
          <div className="space-y-6">
            {experience.map((e) => (
              <Card key={e.company} className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{e.role}</h4>
                    <p className="text-sm text-slate-600">{e.company}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-700">{e.period}</p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact" subtitle="Let's talk">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="text-lg font-bold text-slate-900">Send a message</h4>
              <p className="mt-2 text-sm text-slate-600">
                For hiring, internships, collaborations, or project discussions.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    placeholder="Write your message..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-indigo-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 transition"
                >
                  Send Message
                </button>

                {sent && (
                  <p className="text-sm text-emerald-700 font-medium">
                    Message ready — your email app will open.
                  </p>
                )}
              </form>
            </Card>

            <Card className="p-6">
              <h4 className="text-lg font-bold text-slate-900">Contact Details</h4>
              <p className="mt-2 text-sm text-slate-600">
                You can also reach me directly using these links.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50 transition"
                >
                  <span className="text-slate-600">Email</span>
                  <span className="font-semibold text-slate-900">{PROFILE.email}</span>
                </a>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50 transition"
                >
                  <span className="text-slate-600">GitHub</span>
                  <span className="font-semibold text-slate-900">Open</span>
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50 transition"
                >
                  <span className="text-slate-600">LinkedIn</span>
                  <span className="font-semibold text-slate-900">Open</span>
                </a>

                <a
                  href={PROFILE.resume}
                  download
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50 transition"
                >
                  <span className="text-slate-600">Resume</span>
                  <span className="font-semibold text-slate-900">Download</span>
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Tip for recruiters</p>
                <p className="mt-1 text-sm text-slate-600">
                  I can share project demos, code samples, and documentation on request.
                </p>
              </div>
            </Card>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="py-10 border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
            <div className="flex items-center gap-3 text-sm">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-slate-900"
              >
                GitHub
              </a>
              <span className="text-slate-300">|</span>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import {
  Github, Linkedin, Mail, FileText, Send,
  Brain, Cpu, MessageSquare, Database, BarChart3, Sparkles,
  GraduationCap, Briefcase, Code2, Bot, Image as ImageIcon, FileType,
  ExternalLink, ChevronLeft, ChevronRight, MapPin, Award, Star,
} from "lucide-react";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Archee Sinha — AI Engineer Portfolio" },
      { name: "description", content: "Portfolio of Archee Sinha — AI Engineer, ML Engineer & Data Analyst. Projects, experience and skills in AI, ML, NLP." },
      { property: "og:title", content: "Archee Sinha — AI Engineer Portfolio" },
      { property: "og:description", content: "AI Engineer specialized in ML, NLP and Data Analytics." },
    ],
  }),
  component: Index,
});

const ROLES = ["AI Engineer", "ML Engineer", "Data Analyst", "NLP Specialist"];

const NAV = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  { icon: Brain, title: "Machine Learning", desc: "Supervised, unsupervised & reinforcement learning at scale." },
  { icon: Cpu, title: "Deep Learning", desc: "CNNs, Transformers, GANs with PyTorch & TensorFlow." },
  { icon: MessageSquare, title: "NLP", desc: "LLMs, embeddings, RAG pipelines & semantic search." },
  { icon: BarChart3, title: "Data Analytics", desc: "Statistical modeling, visualization & insight delivery." },
  { icon: Database, title: "MLOps", desc: "Model deployment, monitoring & data pipelines." },
  { icon: Sparkles, title: "Generative AI", desc: "Agents, diffusion models & multimodal systems." },
];

const EXPERIENCE = [
  {
    period: "2023 — Present",
    role: "Senior AI Research Engineer",
    company: "Apex Tech",
    points: [
      "Architected production-grade LLM pipelines serving 1M+ daily requests.",
      "Led a team building multimodal recommendation systems.",
      "Reduced inference latency by 40% via model distillation.",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Machine Learning Engineer",
    company: "Nimbus AI",
    points: [
      "Designed transformer-based NLP services for enterprise clients.",
      "Built end-to-end MLOps stack on Kubernetes + MLflow.",
    ],
  },
  {
    period: "2019 — 2021",
    role: "Data Analyst",
    company: "Lumen Analytics",
    points: [
      "Delivered dashboards & forecasting models that drove 12% revenue lift.",
      "Owned data quality across 30+ ingestion pipelines.",
    ],
  },
];

const PROJECTS = [
  { icon: Bot, title: "AI Agent", desc: "Autonomous task-completion agent with tool-use & planning over LLM backbone.", tags: ["LangChain", "OpenAI", "RAG"], live: "https://example.com", github: "https://github.com/archeesinha" },
  { icon: FileType, title: "Text Summarizer", desc: "Abstractive summarizer fine-tuned on news + research corpora.", tags: ["Transformers", "PyTorch"], github: "https://github.com/archeesinha" },
  { icon: ImageIcon, title: "Image Classifier", desc: "Vision model with augmentation pipeline reaching 97% top-1 accuracy.", tags: ["CNN", "TensorFlow"], live: "https://example.com", github: "https://github.com/archeesinha" },
  { icon: Code2, title: "Code Assistant", desc: "IDE-integrated code-completion assistant with semantic context retrieval.", tags: ["LLM", "Embeddings"], github: "https://github.com/archeesinha" },
  { icon: Sparkles, title: "GenAI Studio", desc: "Multimodal generation playground combining diffusion + LLM pipelines.", tags: ["Diffusion", "Multimodal"], live: "https://example.com", github: "https://github.com/archeesinha" },
  { icon: Database, title: "Realtime Analytics", desc: "Streaming analytics dashboard with ML-driven anomaly detection.", tags: ["Kafka", "MLOps"], live: "https://example.com" },
];

const EDUCATION = [
  { degree: "Ph.D. in Computer Science", school: "Stanford University", major: "Machine Learning", year: "2023 — Present", gpa: "4.0 / 4.0", location: "California, USA" },
  { degree: "M.Tech in Artificial Intelligence", school: "IIT Bombay", major: "AI Engineering", year: "2019 — 2021", gpa: "9.6 / 10", location: "Mumbai, India" },
];

function Index() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero roleIdx={roleIdx} />
      <PortfolioBanner />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Archee Sinha. Crafted with care.
      </footer>
    </div>
  );
}

function Nav() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-full glow-card">
      <ul className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
        {NAV.map((n) => (
          <li key={n.id}>
            <a
              href={`#${n.id}`}
              className={`px-3 sm:px-4 py-2 rounded-full transition-colors ${
                active === n.id ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >{n.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function OrbitIcon({ Icon, radius, duration, delay = 0, size = 36 }: { Icon: typeof Brain; radius: number; duration: number; delay?: number; size?: number; }) {
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        ["--r" as never]: `${radius}px`,
        animation: `float-orbit ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      } as React.CSSProperties}
    >
      <div className="rounded-full bg-card/80 border border-primary/40 flex items-center justify-center backdrop-blur"
        style={{ width: size, height: size, boxShadow: "0 0 20px oklch(0.65 0.27 340 / .6)" }}>
        <Icon className="text-primary" size={size * 0.55} />
      </div>
    </div>
  );
}

function Hero({ roleIdx }: { roleIdx: number }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-28 overflow-hidden">
      {/* twinkles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className="absolute animate-twinkle rounded-full bg-primary"
          style={{
            width: 3 + (i % 3), height: 3 + (i % 3),
            top: `${(i * 53) % 100}%`, left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 7) * 0.3}s`,
          }} />
      ))}

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up text-center md:text-left">
          <p className="text-sm tracking-[0.3em] text-primary mb-4">HI, I'M</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Archee <span className="text-gradient">Sinha</span>
          </h1>
          <div className="mt-6 h-10 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-out"
              style={{ transform: `translateY(-${roleIdx * 2.5}rem)` }}
            >
              {ROLES.map((r) => (
                <div key={r} className="h-10 text-2xl sm:text-3xl font-light text-primary-glow"
                  style={{ color: "oklch(0.78 0.20 340)" }}>{r}</div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-muted-foreground max-w-md mx-auto md:mx-0">
            Building intelligent systems at the intersection of research and production —
            from large language models to real-time analytics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            <a href="https://linkedin.com/in/archeesinha" target="_blank" rel="noreferrer"
              className="btn-glow inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/archeesinha" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium glow-card hover:text-primary">
              <Github size={18} /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium glow-card hover:text-primary">
              <FileText size={18} /> Resume
            </a>
          </div>
        </div>

        {/* Profile + orbits */}
        <div className="relative h-[420px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[360px] h-[360px]">
              <OrbitIcon Icon={Brain} radius={170} duration={18} />
              <OrbitIcon Icon={Cpu} radius={170} duration={18} delay={-6} />
              <OrbitIcon Icon={MessageSquare} radius={170} duration={18} delay={-12} />
              <OrbitIcon Icon={Sparkles} radius={210} duration={26} delay={-3} size={30} />
              <OrbitIcon Icon={Database} radius={210} duration={26} delay={-15} size={30} />
              <OrbitIcon Icon={BarChart3} radius={140} duration={14} delay={-8} size={28} />
            </div>
          </div>
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1 animate-pulse-glow"
            style={{ background: "var(--gradient-primary)" }}>
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
              <img src={profileImg} alt="Archee Sinha" className="w-full h-full object-cover" width={512} height={512} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
      <span className="text-gradient">{children}</span>
    </h2>
  );
}

function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = React.useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) el.classList.add("in"); }),
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function PortfolioBanner() {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* circuit lines */}
        <svg className="absolute left-0 top-1/2 -translate-y-1/2 h-40 w-1/3" viewBox="0 0 400 200" fill="none">
          <g stroke="oklch(0.75 0.30 340)" strokeWidth="1.5" strokeDasharray="6 6"
             style={{ animation: "circuit-flow 2.5s linear infinite" }}>
            <path d="M0 40 H120 V100 H220" />
            <path d="M0 120 H80 V160 H260" />
            <path d="M0 80 H40 V20 H180" />
          </g>
          <g fill="oklch(0.85 0.30 340)">
            <circle cx="120" cy="40" r="3" /><circle cx="220" cy="100" r="3" />
            <circle cx="80" cy="120" r="3" /><circle cx="40" cy="80" r="3" />
          </g>
        </svg>
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 h-40 w-1/3 scale-x-[-1]" viewBox="0 0 400 200" fill="none">
          <g stroke="oklch(0.75 0.30 340)" strokeWidth="1.5" strokeDasharray="6 6"
             style={{ animation: "circuit-flow 2.5s linear infinite" }}>
            <path d="M0 40 H120 V100 H220" />
            <path d="M0 120 H80 V160 H260" />
            <path d="M0 80 H40 V20 H180" />
          </g>
          <g fill="oklch(0.85 0.30 340)">
            <circle cx="120" cy="40" r="3" /><circle cx="220" cy="100" r="3" />
            <circle cx="80" cy="120" r="3" /><circle cx="40" cy="80" r="3" />
          </g>
        </svg>
      </div>

      {/* sparkles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <Sparkles
          key={i}
          className="absolute text-primary-glow pointer-events-none"
          style={{
            top: `${10 + (i * 37) % 80}%`,
            left: `${5 + (i * 53) % 90}%`,
            width: 10 + (i % 4) * 4,
            height: 10 + (i % 4) * 4,
            color: "oklch(0.85 0.30 340)",
            animation: `sparkle-pop ${2 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${(i % 5) * 0.4}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="banner-title font-black tracking-tight leading-none"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)", letterSpacing: "0.04em" }}>
          PORTFOLIO
        </h2>
        <div className="script-name -mt-6 sm:-mt-10"
             style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
          Archee Sinha
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto reveal">
        <SectionTitle>Skills & Expertise</SectionTitle>
        <p className="text-center text-muted-foreground mb-12">A toolkit forged across research and shipping.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((s, i) => (
            <div key={s.title}
                 className="skill-card-3d glow-card rounded-2xl p-6 animate-fade-up overflow-hidden"
                 style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="skill-icon w-14 h-14 rounded-xl flex items-center justify-center mb-4 relative"
                style={{ background: "var(--gradient-primary)" }}>
                <s.icon className="text-primary-foreground" size={26} />
                <span className="absolute inset-0 rounded-xl animate-pulse-glow pointer-events-none" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
              <div className="mt-4 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500"
                   style={{ background: "var(--gradient-primary)", width: `${60 + ((i*17)%40)}%`, opacity: .7 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("experience");
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight + vh;
      const seen = Math.min(Math.max(vh - r.top, 0), total);
      setProgress(Math.min(1, seen / total));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Work Experience</SectionTitle>
        <p className="text-center text-muted-foreground mb-16">A timeline of building intelligent systems.</p>

        <div className="relative pl-12 sm:pl-20">
          {/* track */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border" />
          {/* progress fill */}
          <div className="absolute left-4 sm:left-8 top-0 w-px"
            style={{
              height: `${progress * 100}%`,
              background: "var(--gradient-primary)",
              boxShadow: "0 0 12px oklch(0.65 0.27 340 / .8)",
            }} />
          {/* moving dot */}
          <div className="absolute left-4 sm:left-8 -translate-x-1/2 w-4 h-4 rounded-full transition-all"
            style={{
              top: `calc(${progress * 100}% - 8px)`,
              background: "var(--gradient-primary)",
              boxShadow: "0 0 20px oklch(0.75 0.30 340 / .9)",
            }} />

          <div className="space-y-14">
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="relative">
                <div className="absolute -left-12 sm:-left-16 top-2 w-4 h-4 rounded-full border-2 border-primary bg-background" />
                <div className="glow-card rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-xs text-primary mb-2">
                    <Briefcase size={14} /> {e.period}
                  </div>
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <p className="text-primary-glow mb-3" style={{ color: "oklch(0.78 0.20 340)" }}>{e.company}</p>
                  <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Featured Projects</SectionTitle>
        <p className="text-center text-muted-foreground mb-12">Selected work — more on GitHub.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <div key={p.title}
              className="glow-card rounded-2xl p-6 group animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-6 group-hover:scale-110"
                  style={{ background: "var(--gradient-primary)" }}>
                  <p.icon className="text-primary-foreground" size={26} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full border border-primary/30 text-primary bg-primary/5">{t}</span>
                    ))}
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

function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>Education</SectionTitle>
        <p className="text-center text-muted-foreground mb-12">Where the foundations were built.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {EDUCATION.map((ed, i) => (
            <div key={ed.degree} className="glow-card rounded-2xl p-8 text-center animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "var(--gradient-primary)" }}>
                <GraduationCap className="text-primary-foreground" size={30} />
              </div>
              <h3 className="text-lg font-semibold">{ed.degree}</h3>
              <p className="text-primary mt-1">{ed.school}</p>
              <p className="text-sm text-muted-foreground mt-2">{ed.major}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle>Contact Me</SectionTitle>
        <p className="text-center text-muted-foreground mb-12">Let's build something intelligent together.</p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { Icon: Linkedin, label: "Connect", href: "https://linkedin.com/in/archeesinha" },
            { Icon: Mail, label: "Email Me", href: "mailto:archee.sinha.ai@gmail.com" },
            { Icon: FileText, label: "Resume", href: "#" },
          ].map(({ Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              className="glow-card rounded-2xl p-6 text-center group">
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                style={{ background: "var(--gradient-primary)" }}>
                <Icon className="text-primary-foreground" size={24} />
              </div>
              <p className="font-medium text-primary">{label}</p>
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
          className="glow-card rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="bg-input/60 border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition" />
            <input required type="email" placeholder="Email" className="bg-input/60 border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition" />
          </div>
          <textarea required placeholder="Message" rows={5} className="w-full bg-input/60 border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition resize-none" />
          <button type="submit" className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium">
            <Send size={16} /> {sent ? "Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

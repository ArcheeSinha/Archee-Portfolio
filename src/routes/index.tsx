import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import {
  Github, Linkedin, Mail, FileText, Send, Sun, Moon,
  Brain, Cpu, MessageSquare, Database, BarChart3, Sparkles,
  Briefcase, Code2, Bot, Image as ImageIcon, FileType,
  ExternalLink, ChevronLeft, ChevronRight, Rocket, Target,
  Terminal, MessageCircle, Network, Activity, Calendar,
  Phone, MapPin, Clock, Users, Star, Zap, Twitter, Instagram,
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
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  { icon: Brain, title: "Machine Learning", desc: "Building smart models that learn from data and make predictions.", tags: ["Scikit-learn", "XGBoost"], level: 90 },
  { icon: Network, title: "Deep Learning", desc: "Designing deep neural networks for complex patterns.", tags: ["PyTorch", "TensorFlow"], level: 85 },
  { icon: MessageSquare, title: "NLP", desc: "Working with language models to understand and generate text.", tags: ["Transformers", "RAG"], level: 90 },
  { icon: BarChart3, title: "Data Analytics", desc: "Turning raw data into meaningful insights and dashboards.", tags: ["SQL", "Power BI"], level: 85 },
  { icon: Database, title: "MLOps", desc: "Deploying, monitoring and scaling ML models reliably.", tags: ["Docker", "MLflow"], level: 85 },
  { icon: Sparkles, title: "Generative AI", desc: "Creating generative applications powered by LLMs.", tags: ["LangChain", "OpenAI"], level: 90 },
];

const STATS = [
  { icon: Brain, value: "6+", label: "Core Domains" },
  { icon: Code2, value: "20+", label: "Technologies" },
  { icon: Rocket, value: "10+", label: "Projects Built" },
  { icon: Target, value: "2+", label: "Years Exploring" },
];

const TECHS = ["Py", "PT", "TF", "Dk", "Git", "FA", "PG"];

const HERO_HIGHLIGHTS = [
  { icon: Brain, title: "NLP FOCUS", lines: ["Language Models, LLMs", "RAG, Prompt Engineering"] },
  { icon: Rocket, title: "PROBLEM SOLVER", lines: ["Turning complex data", "into intelligent solutions"] },
  { icon: Code2, title: "TECH ENTHUSIAST", lines: ["Python, PyTorch, LangChain", "Transformers, FastAPI"] },
  { icon: Target, title: "IMPACT DRIVEN", lines: ["Building scalable systems", "that create real impact"] },
];

const EXPERIENCE = [
  {
    period: "2024 — Present",
    role: "Senior AI Research Engineer",
    company: "Apex Tech",
    icon: Briefcase,
    points: [
      "Architected production-grade LLM pipelines serving 1M+ daily.",
      "Led a team building retrieval-augmented AI systems.",
      "Reduced inference latency by 40% via model distillation.",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Machine Learning Engineer",
    company: "Nimbus AI",
    icon: Bot,
    points: [
      "Designed transformer-based NLP services for enterprise clients.",
      "Built end-to-end MLOps stack on Kubernetes + MLflow.",
    ],
  },
  {
    period: "2019 — 2021",
    role: "Data Analyst",
    company: "Lumen Analytics",
    icon: BarChart3,
    points: [
      "Delivered dashboards & forecasts that drove 15% revenue lift.",
      "Owned data quality across 30+ reports pipelines.",
    ],
  },
];

const FEATURED = {
  title: "CrisisIQ",
  subtitle: "AI-Powered Disaster Management Platform",
  desc: "Real-time disaster detection, report classification and smart resource allocation using AI.",
  stats: [
    { v: "97%", l: "Accuracy" },
    { v: "1.2s", l: "Response Time" },
    { v: "10K+", l: "Reports Analyzed" },
    { v: "24/7", l: "Monitoring" },
  ],
  live: "https://example.com",
  github: "https://github.com/archeesinha",
};

const PROJECTS = [
  { icon: Bot, title: "AI Agent", desc: "Autonomous task-completion agent with tool-use & planning over LLM backbone.", tags: ["LangChain", "OpenAI", "RAG"], label: "DEPLOYED", live: "https://example.com", github: "https://github.com/archeesinha" },
  { icon: FileType, title: "Text Summarizer", desc: "Abstractive summarizer fine-tuned on news + research corpora.", tags: ["Transformers", "PyTorch"], label: "RESEARCH", github: "https://github.com/archeesinha" },
  { icon: ImageIcon, title: "Image Classifier", desc: "Vision model with augmentation pipeline reaching 97% top-1 accuracy.", tags: ["CNN", "TensorFlow"], label: "PRODUCTION", live: "https://example.com", github: "https://github.com/archeesinha" },
  { icon: Activity, title: "AI Credit Scoring", desc: "ML model that predicts creditworthiness using financial behavior patterns.", tags: ["XGBoost", "Scikit-learn"], label: "HACKATHON", github: "https://github.com/archeesinha" },
  { icon: Code2, title: "Code Assistant", desc: "IDE-integrated code-completion assistant with semantic context retrieval.", tags: ["LLM", "Embeddings"], label: "DEPLOYED", github: "https://github.com/archeesinha" },
  { icon: Sparkles, title: "GenAI Studio", desc: "Multimodal generation playground combining diffusion + LLM pipelines.", tags: ["Diffusion", "Multimodal"], label: "RESEARCH", live: "https://example.com", github: "https://github.com/archeesinha" },
];

function Index() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <CustomCursor />
      <ThemeToggle />
      <Nav />
      <Hero roleIdx={roleIdx} />
      <PortfolioBanner />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Archee Sinha. Crafted with care.
      </footer>
    </div>
  );
}

/* ---------- Theme toggle ---------- */
function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);
  return (
    <button
      onClick={() => setLight((v) => !v)}
      aria-label="Toggle theme"
      className="fixed top-4 right-4 z-[60] w-11 h-11 rounded-full hud-frame flex items-center justify-center hover:scale-110 transition"
      style={{ boxShadow: "0 0 24px oklch(0.74 0.28 340 / .5)" }}
    >
      {light ? <Moon size={18} className="text-primary" /> : <Sun size={18} className="text-primary" />}
    </button>
  );
}

/* ---------- Custom cursor ---------- */
function CustomCursor() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let tx = x, ty = y;
    const tick = () => {
      x += (tx - x) * 0.25; y += (ty - y) * 0.25;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,input,textarea,[role='button']")) el.classList.add("is-hover");
      else el.classList.remove("is-hover");
    };
    const onDown = () => el.classList.add("is-click");
    const onUp = () => el.classList.remove("is-click");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);
  return (
    <div ref={ref} className="cursor-orbit" aria-hidden>
      <span className="c-ring" />
      <span className="c-ring r2" />
      <span className="c-core" />
      <span className="c-particle" style={{ ["--r" as never]: "22px", animationDuration: "2.5s" } as React.CSSProperties} />
      <span className="c-particle" style={{ ["--r" as never]: "22px", animationDuration: "2.5s", animationDelay: "-1.2s" } as React.CSSProperties} />
      <span className="c-particle" style={{ ["--r" as never]: "16px", animationDuration: "1.8s", animationDelay: "-0.6s" } as React.CSSProperties} />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 140 && r.bottom >= 140) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 nav-shell rounded-2xl px-3 py-2">
      <ul className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-sm">
        {NAV.map((n, i) => (
          <React.Fragment key={n.id}>
            {i > 0 && <li aria-hidden className="nav-sep hidden sm:block" />}
            <li>
              <a href={`#${n.id}`} className={`nav-tab inline-flex items-center rounded-md ${active === n.id ? "is-active" : ""}`}>
                <span>{n.label}</span>
              </a>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}

/* ---------- Orbit icon (hero) ---------- */
function OrbitIcon({ Icon, radius, duration, delay = 0, size = 40 }: { Icon: typeof Brain; radius: number; duration: number; delay?: number; size?: number }) {
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        ["--r" as never]: `${radius}px`,
        animation: `float-orbit ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        marginLeft: -size / 2, marginTop: -size / 2,
      } as React.CSSProperties}
    >
      <div className="rounded-full bg-card/80 border border-primary/50 flex items-center justify-center backdrop-blur"
        style={{ width: size, height: size, boxShadow: "0 0 20px oklch(0.74 0.30 340 / .6)" }}>
        <Icon className="text-primary" size={size * 0.5} />
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero({ roleIdx }: { roleIdx: number }) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-10 overflow-hidden">
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className="absolute animate-twinkle rounded-full bg-primary"
          style={{ width: 3 + (i % 3), height: 3 + (i % 3), top: `${(i * 53) % 100}%`, left: `${(i * 37) % 100}%`, animationDelay: `${(i % 7) * 0.3}s` }} />
      ))}

      <div className="relative z-10 max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/50 text-xs tracking-[0.3em] text-primary mb-6">
            <Sparkles size={12} /> NLP SPECIALIST <Sparkles size={12} />
          </div>
          <p className="flex items-center gap-3 text-sm text-muted-foreground mb-3 md:justify-start justify-center">
            <span className="h-px w-8 bg-primary" /> Crafting intelligence. Driving impact.
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Archee <span className="text-gradient">Sinha</span>
          </h1>
          <div className="mt-4 h-10 overflow-hidden">
            <div className="transition-transform duration-500 ease-out" style={{ transform: `translateY(-${roleIdx * 2.5}rem)` }}>
              {ROLES.map((r) => (
                <div key={r} className="h-10 text-2xl sm:text-3xl font-light" style={{ color: "oklch(0.78 0.22 340)" }}>{r}</div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-muted-foreground max-w-md mx-auto md:mx-0">
            I build <span className="text-primary font-semibold">intelligent</span> systems at the intersection of research and production — from large language models to real-time analytics.
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
        <div className="relative h-[440px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[380px] h-[380px]">
              <OrbitIcon Icon={Brain} radius={180} duration={18} />
              <OrbitIcon Icon={Terminal} radius={180} duration={18} delay={-6} />
              <OrbitIcon Icon={MessageCircle} radius={180} duration={18} delay={-12} />
              <OrbitIcon Icon={BarChart3} radius={210} duration={26} delay={-3} size={34} />
              <OrbitIcon Icon={Network} radius={210} duration={26} delay={-15} size={34} />
            </div>
          </div>
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full p-1 animate-pulse-glow"
            style={{ background: "var(--gradient-primary)" }}>
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
              <img src={profileImg} alt="Archee Sinha" className="w-full h-full object-cover" width={512} height={512} />
            </div>
          </div>
        </div>
      </div>

      {/* highlight strip */}
      <div className="relative z-10 max-w-6xl mx-auto mt-12 w-full grid grid-cols-2 lg:grid-cols-4 gap-3 hud-frame rounded-2xl p-4">
        {HERO_HIGHLIGHTS.map((h) => (
          <div key={h.title} className="flex items-center gap-3 px-2 py-2">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-primary/40 text-primary" style={{ background: "oklch(0.62 0.28 340 / .12)" }}>
              <h.icon size={20} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider text-primary">{h.title}</p>
              <p className="text-[11px] text-muted-foreground leading-tight">{h.lines[0]}<br />{h.lines[1]}</p>
            </div>
          </div>
        ))}
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

/* ---------- Portfolio banner (unchanged) ---------- */
function PortfolioBanner() {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="absolute left-0 top-1/2 -translate-y-1/2 h-40 w-1/3" viewBox="0 0 400 200" fill="none">
          <g stroke="oklch(0.75 0.30 340)" strokeWidth="1.5" strokeDasharray="6 6" style={{ animation: "circuit-flow 2.5s linear infinite" }}>
            <path d="M0 40 H120 V100 H220" /><path d="M0 120 H80 V160 H260" /><path d="M0 80 H40 V20 H180" />
          </g>
          <g fill="oklch(0.85 0.30 340)">
            <circle cx="120" cy="40" r="3" /><circle cx="220" cy="100" r="3" />
            <circle cx="80" cy="120" r="3" /><circle cx="40" cy="80" r="3" />
          </g>
        </svg>
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 h-40 w-1/3 scale-x-[-1]" viewBox="0 0 400 200" fill="none">
          <g stroke="oklch(0.75 0.30 340)" strokeWidth="1.5" strokeDasharray="6 6" style={{ animation: "circuit-flow 2.5s linear infinite" }}>
            <path d="M0 40 H120 V100 H220" /><path d="M0 120 H80 V160 H260" /><path d="M0 80 H40 V20 H180" />
          </g>
          <g fill="oklch(0.85 0.30 340)">
            <circle cx="120" cy="40" r="3" /><circle cx="220" cy="100" r="3" />
            <circle cx="80" cy="120" r="3" /><circle cx="40" cy="80" r="3" />
          </g>
        </svg>
      </div>
      {Array.from({ length: 14 }).map((_, i) => (
        <Sparkles key={i} className="absolute pointer-events-none" style={{
          top: `${10 + (i * 37) % 80}%`, left: `${5 + (i * 53) % 90}%`,
          width: 10 + (i % 4) * 4, height: 10 + (i % 4) * 4,
          color: "oklch(0.85 0.30 340)",
          animation: `sparkle-pop ${2 + (i % 3)}s ease-in-out infinite`,
          animationDelay: `${(i % 5) * 0.4}s`,
        }} />
      ))}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="banner-title font-black tracking-tight leading-none" style={{ fontSize: "clamp(3rem, 10vw, 7rem)", letterSpacing: "0.04em" }}>PORTFOLIO</h2>
        <div className="script-name -mt-6 sm:-mt-10" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>Archee Sinha</div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-7xl mx-auto reveal">
        <SectionTitle>Skills & Expertise</SectionTitle>
        <p className="text-center text-muted-foreground mb-10">A toolkit forged across <span className="text-primary">research</span> and <span className="text-primary">shipping</span>.</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 hud-frame rounded-2xl p-4">
          {STATS.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-ico"><s.icon size={22} /></div>
              <div>
                <p className="text-2xl font-bold text-gradient">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {SKILLS.map((s, i) => (
            <div key={s.title} className="skill-big animate-fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="skill-ico-big"><s.icon className="text-primary-foreground" size={22} /></div>
                <h3 className="font-semibold text-sm">{s.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 relative z-10 min-h-[3rem]">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-3 relative z-10">
                {s.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-primary/40 text-primary">{t}</span>
                ))}
              </div>
              <div className="relative z-10">
                <div className="skill-progress"><span style={{ width: `${s.level}%`, animationDelay: `${0.3 + i * 0.1}s` }} /></div>
                <p className="text-[10px] text-right text-primary mt-1 font-semibold">{s.level}%</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 hud-frame rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-14 h-14 rounded-full flex items-center justify-center border border-primary/40" style={{ background: "oklch(0.62 0.28 340 / .15)" }}>
              <Brain className="text-primary" size={26} />
            </div>
            <p className="text-sm">I love turning ideas into <span className="text-primary font-semibold">intelligent solutions</span>.<br /><span className="text-muted-foreground">Always learning. Always building.</span></p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs font-bold tracking-wider text-primary mr-2">TECHNOLOGIES I USE</p>
            {TECHS.map((t) => (<div key={t} className="tech-chip text-primary">{t}</div>))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */
function Experience() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh / 2 - r.top) / r.height;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>Work Experience</SectionTitle>
        <p className="text-center text-muted-foreground mb-16">A timeline of building <span className="text-primary">intelligent</span> systems.</p>

        <div ref={trackRef} className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px] rounded-full"
            style={{ height: `${progress * 100}%`, background: "var(--gradient-primary)", boxShadow: "0 0 16px oklch(0.75 0.30 340 / .9)" }} />
          <div className="absolute left-1/2 w-5 h-5 rounded-full z-20"
            style={{ top: `${progress * 100}%`, transform: "translate(-50%, -50%)", background: "var(--gradient-primary)", boxShadow: "0 0 24px 4px oklch(0.85 0.30 340 / .8)" }}>
            <span className="absolute inset-0 rounded-full animate-pulse-glow" />
          </div>

          <div className="space-y-20">
            {EXPERIENCE.map((e, i) => (
              <ExperienceItem key={e.role} item={e} side={i % 2 === 0 ? "left" : "right"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ item, side }: { item: typeof EXPERIENCE[number]; side: "left" | "right" }) {
  const ref = useReveal<HTMLDivElement>();
  const isLeft = side === "left";
  return (
    <div className="relative grid md:grid-cols-2 gap-6 md:gap-12 items-center">
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background z-10" />
      <div className={isLeft ? "md:pr-10" : "md:col-start-2 md:pl-10"}>
        <div ref={ref} className={`glow-card rounded-2xl p-6 ${isLeft ? "reveal-l" : "reveal-r"}`}>
          <div className="flex items-center gap-2 text-xs text-primary mb-2">
            <Calendar size={14} /> {item.period}
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "oklch(0.62 0.28 340 / .15)", border: "1px solid oklch(0.62 0.28 340 / .4)" }}>
              <item.icon className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p style={{ color: "oklch(0.78 0.22 340)" }}>{item.company}</p>
            </div>
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
            {item.points.map((p) => <li key={p} className="flex gap-2"><span className="text-primary mt-1">•</span><span>{p}</span></li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const scroll = (dir: 1 | -1) => {
    const el = railRef.current; if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.7, 420), behavior: "smooth" });
  };
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 flex items-center justify-center gap-4">
          <ChevronLeft className="text-primary opacity-50" />
          <SectionTitle>My Projects</SectionTitle>
          <ChevronRight className="text-primary opacity-50" />
        </div>
        <p className="text-center text-muted-foreground mb-10">AI solutions built with <span className="text-primary">code</span>, <span className="text-primary">creativity</span> and <span className="text-primary">curiosity</span>.</p>

        {/* Featured project */}
        <div className="featured-project mb-10 grid lg:grid-cols-[1.2fr_1fr] gap-6">
          <div>
            <p className="text-xs tracking-widest text-primary mb-3">★ FEATURED PROJECT</p>
            <h3 className="text-4xl font-bold">{FEATURED.title}</h3>
            <p className="text-primary mt-1">{FEATURED.subtitle}</p>
            <p className="text-sm text-muted-foreground mt-4 max-w-md">{FEATURED.desc}</p>
            <div className="grid grid-cols-4 gap-3 mt-6">
              {FEATURED.stats.map((s) => (
                <div key={s.l} className="rounded-xl p-3 text-center border border-primary/40" style={{ background: "oklch(0.62 0.28 340 / .1)" }}>
                  <p className="text-lg font-bold text-primary">{s.v}</p>
                  <p className="text-[10px] text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <a href={FEATURED.live} target="_blank" rel="noreferrer" className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium">
                <Rocket size={16} /> Live Demo
              </a>
              <a href={FEATURED.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-primary/50 text-primary hover:bg-primary/10 transition">
                <Github size={16} /> View Source
              </a>
            </div>
          </div>
          <div className="rounded-xl p-4 border border-primary/30 flex items-center justify-center min-h-[260px]" style={{ background: "oklch(0.10 0.04 340 / .5)" }}>
            <div className="text-center">
              <Zap className="mx-auto text-primary mb-3" size={48} />
              <p className="text-sm text-muted-foreground">Live Dashboard Preview</p>
              <p className="text-xs text-muted-foreground mt-1">Real-time global crisis monitoring</p>
            </div>
          </div>
        </div>

        {/* Horizontal rail */}
        <div className="relative">
          <button onClick={() => scroll(-1)} aria-label="Scroll left"
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center glow-card hover:text-primary">
            <ChevronLeft />
          </button>
          <button onClick={() => scroll(1)} aria-label="Scroll right"
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center glow-card hover:text-primary">
            <ChevronRight />
          </button>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-[5]" style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-[5]" style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />

          <div ref={railRef} className="project-rail flex gap-6 overflow-x-auto py-10 px-12 sm:px-16">
            {PROJECTS.map((p) => (
              <article key={p.title} className="project-card glow-card rounded-3xl shrink-0 w-[300px] sm:w-[330px] h-[380px] p-6 flex flex-col relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-20 blur-2xl" style={{ background: "var(--gradient-primary)" }} />
                <p className="text-[10px] tracking-widest text-primary mb-3 relative z-10">● {p.label}</p>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative z-10" style={{ background: "var(--gradient-primary)" }}>
                  <p.icon className="text-primary-foreground" size={26} />
                </div>
                <h3 className="text-lg font-semibold mb-2 relative z-10">{p.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 relative z-10 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-primary/30 text-primary bg-primary/5">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 relative z-10">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live`}
                       className="w-10 h-10 rounded-full flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition">
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub`}
                       className="w-10 h-10 rounded-full flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition">
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Contact Me</SectionTitle>
        <p className="text-center text-muted-foreground mb-12">Let's build something <span className="text-primary">intelligent</span> together.</p>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { Icon: Users, label: "Connect", sub: "Let's connect and build something great.", href: "https://linkedin.com/in/archeesinha" },
            { Icon: Mail, label: "Email Me", sub: "Drop me an email anytime!", href: "mailto:archee.sinha.ai@gmail.com" },
            { Icon: FileText, label: "Resume", sub: "View my resume and experience.", href: "#" },
          ].map(({ Icon, label, sub, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="hud-frame rounded-2xl p-6 flex items-center gap-4 hover:scale-[1.02] transition">
              <div className="w-14 h-14 rounded-full flex items-center justify-center border border-primary/50 text-primary" style={{ background: "oklch(0.62 0.28 340 / .12)" }}>
                <Icon size={24} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-primary text-lg">{label}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </div>
              <ExternalLink className="text-primary" size={16} />
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-6">
          <aside className="hud-frame rounded-2xl p-6">
            <p className="text-xs tracking-widest text-primary mb-4">LET'S TALK</p>
            <p className="text-sm leading-relaxed">
              I'm always open to <span className="text-primary font-semibold">discussing new projects</span>, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><MapPin size={16} className="text-primary" /> India, Earth</div>
              <div className="flex items-center gap-3"><Mail size={16} className="text-primary" /> archee.sinha.ai@gmail.com</div>
              <div className="flex items-center gap-3"><Phone size={16} className="text-primary" /> +91 98765 43210</div>
              <div className="flex items-center gap-3"><Clock size={16} className="text-primary" /> Available for Freelance & Full-time</div>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/50 text-xs">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="tracking-wider text-green-400">STATUS: AVAILABLE</span>
            </div>
          </aside>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
            className="hud-frame rounded-2xl p-6 sm:p-8 space-y-4">
            <p className="text-xs tracking-widest text-primary mb-2">SEND A MESSAGE</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Your Name" className="bg-input/60 border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition" />
              <input required type="email" placeholder="Your Email" className="bg-input/60 border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition" />
            </div>
            <textarea required placeholder="Your Message" rows={6} className="w-full bg-input/60 border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition resize-none" />
            <div className="flex flex-wrap items-center gap-4 justify-between">
              <button type="submit" className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium">
                <Send size={16} /> {sent ? "Sent!" : "Send Message"}
              </button>
              <p className="text-xs text-muted-foreground">I typically reply within <span className="text-primary font-semibold">24 hours</span></p>
            </div>
          </form>
        </div>

        <div className="mt-10 hud-frame rounded-2xl p-6 text-center">
          <p className="text-xs tracking-widest text-primary mb-4">CONNECT WITH ME</p>
          <div className="flex items-center justify-center gap-4">
            {[
              { Icon: Linkedin, href: "https://linkedin.com/in/archeesinha" },
              { Icon: Github, href: "https://github.com/archeesinha" },
              { Icon: Twitter, href: "https://twitter.com" },
              { Icon: Instagram, href: "https://instagram.com" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center border border-primary/50 text-primary hover:scale-110 hover:bg-primary hover:text-primary-foreground transition">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

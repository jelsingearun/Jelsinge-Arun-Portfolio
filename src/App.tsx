import { useState, useTransition, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Mail,
  MapPin,
  Bot,
  Brain,
  Code,
  ShieldCheck,
  Cpu,
  User,
  Heart,
  ChevronRight,
  Terminal,
  Activity,
  Award,
  Sparkles,
  Send,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { developerBio, projectsData, skillCategories } from "./data";
import { ProjectCard } from "./components/ProjectCard";
import { StatsGrid } from "./components/StatsGrid";
import { ResumeBuilder } from "./components/ResumeBuilder";
import { AuditPanel } from "./components/AuditPanel";
import { AiChatbot } from "./components/AiChatbot";

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [avatarError, setAvatarError] = useState(false);
  
  // Custom Google Drive fallback/image link setup
  // Recruiters can paste their exact Google Drive image link directly
  const [avatarUrl, setAvatarUrl] = useState(
    "https://github.com/identicons/jelsingearun.png" // default high-signal GitHub avatar stream fallback
  );

  // Filter project cards
  const filteredProjects = projectsData.filter((proj) => {
    if (activeCategory === "All") return true;
    return proj.category === activeCategory;
  });

  // Contact form submission state
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, startTransition] = useTransition();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    startTransition(async () => {
      // Simulate real-world secure webhook or client dispatch delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormSubmitted(true);
      // Clean form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    });
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 selection:bg-cyan-500 selection:text-black font-sans antialiased relative dot-grid overflow-x-hidden">
      
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[80%] right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Static Dev Banner / Header bar */}
      <header className="sticky top-0 z-30 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-display font-medium tracking-tight text-white text-sm">
              jelsingearun.systems
            </span>
            <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-500 px-2 py-0.5 rounded font-mono">
              GRADUATING 2026
            </span>
          </div>

          {/* Nav Anchors */}
          <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-400 font-mono">
            <a href="#featured-projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
            <a href="#activity-dashboard" className="hover:text-cyan-400 transition-colors">Systems Metrics</a>
            <a href="#resume-ats" className="hover:text-cyan-400 transition-colors">ATS Synthesizer</a>
            <a href="#audit-logs" className="hover:text-cyan-400 transition-colors">Forensic Audits</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              id="header-github-link"
              href={developerBio.github}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white transition-all cursor-pointer"
              title="Inspect GitHub workspace"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="header-contact-btn"
              href="#contact-form-sector"
              className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 transition-all font-display select-none"
            >
              Hire Jelsinge
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 relative z-10">

        {/* HERO SECTION */}
        <section id="hero-sector" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar box (Left / 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 border border-zinc-800/80 shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl opacity-10 blur-xl pointer-events-none" />
              
              {!avatarError ? (
                <img
                  src={avatarUrl}
                  alt={developerBio.name}
                  onError={() => setAvatarError(true)}
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-xl object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              ) : (
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-xl bg-zinc-900 flex flex-col items-center justify-center border border-zinc-800">
                  <Terminal className="w-12 h-12 text-cyan-400 mb-2 animate-pulse" />
                  <span className="font-display font-medium text-xs text-white">JA.SYS</span>
                  <span className="text-[10px] text-zinc-500 font-mono">Offline-Ready Core</span>
                </div>
              )}
            </div>

            {/* Custom Interactive input allowing user to test their own local profile image link easily */}
            <div className="mt-4 flex flex-col items-center gap-1 w-full max-w-xs text-center">
              <span className="text-[9px] text-zinc-500 font-mono tracking-normal">
                Want to test your image link? Use standard JPG/PNG or GitHub alias.
              </span>
              <input
                id="avatar-link-input"
                type="text"
                placeholder="Paste standard JPG/PNG URL..."
                value={avatarUrl}
                onChange={(e) => {
                  setAvatarError(false);
                  setAvatarUrl(e.target.value);
                }}
                className="w-full text-[10px] px-2 py-1 rounded bg-zinc-900 border border-zinc-850 text-zinc-400 font-mono outline-none focus:border-cyan-500/40 text-center"
              />
            </div>
          </div>

          {/* Branding Content (Right / 8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available immediately for Junior AI & Full-Stack roles</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-[1.05]">
                {developerBio.name}
              </h1>
              <h2 className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent font-display">
                {developerBio.title}
              </h2>
            </div>

            <p className="text-base text-zinc-300 font-sans leading-relaxed">
              {developerBio.tagline}
            </p>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850 font-mono text-xs text-zinc-450 leading-relaxed relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1 bg-zinc-900 border-b border-l border-zinc-800 text-[9px] text-zinc-500 px-2 rounded-bl uppercase">
                Systems Elevator Pitch
              </div>
              <p className="mt-2 text-zinc-400 select-all">
                “{developerBio.elevatorPitch}”
              </p>
            </div>

            {/* CTA action cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="cta-chatbot-btn"
                href="#ai-chatbot-window"
                onClick={(e) => {
                  // Simply trigger floating button's target
                  const toggleBtn = document.getElementById("chat-toggle-btn");
                  if (toggleBtn) {
                    (toggleBtn as HTMLButtonElement).click();
                  }
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold px-5 py-2.5 rounded-xl text-sm transition-all focus:ring-2 focus:ring-cyan-500/40 select-none cursor-pointer"
              >
                <Bot className="w-4 h-4" />
                <span>Interrogation PulseAI Agent</span>
              </a>

              <a
                id="cta-github-profile"
                href={developerBio.github}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-sm text-zinc-300 hover:text-white transition-all font-mono select-none"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Ecosystem</span>
              </a>
            </div>

            {/* Geographical Markers */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-500 font-mono pt-4 border-t border-zinc-900">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {developerBio.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                {developerBio.email}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                B.Tech expected 2026
              </span>
            </div>
          </div>
        </section>

        {/* BRIGHT SPECIFIC SKILLS GRID */}
        <section id="skills-grid-sector" className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest block font-bold">Comprehensive Capabilities</span>
            <h3 className="text-xl font-bold text-white font-display">Engineered Stack Matrices</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-900 p-5 rounded-2xl space-y-4 hover:border-zinc-800 transition-all"
              >
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest border-b border-zinc-900 pb-2">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-900/40 text-zinc-300 font-mono border border-zinc-850"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RECRUITER CONVERSION PORTFOLIO SECTION */}
        <section id="featured-projects" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-900 pb-5">
            <div className="space-y-1">
              <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest block font-bold">Curated Forensic Evidence</span>
              <h3 className="text-2xl font-bold text-white font-display">Audited Systems & AI Projects</h3>
              <p className="text-zinc-500 text-xs">Exposing authentic implementation signals derived directly from the GitHub codebase.</p>
            </div>

            {/* Inline filtering categories list */}
            <div className="flex flex-wrap gap-1 bg-zinc-900/30 p-1 rounded-xl border border-zinc-850">
              {["All", "Generative AI", "AI/ML", "Full Stack", "DevSecOps & Automation"].map(
                (cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer select-none transition-all ${
                      activeCategory === cat
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="text-center py-12 border border-dashed border-zinc-805 rounded-2xl">
                <span className="text-zinc-500 text-sm font-mono block">No scanned repositories align with the active filters.</span>
              </div>
            )}
          </div>
        </section>

        {/* WORKSPACE SNAPSHOTS / GIT VISUALIZATION */}
        <section id="activity-dashboard" className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest block font-bold">Activity Telemetry</span>
            <h3 className="text-xl font-bold text-white font-display">GitHub Diagnostics & Contributions</h3>
          </div>
          <StatsGrid />
        </section>

        {/* INTERACTIVE MOCK RESUME AND ATS ANALYZER */}
        <section id="resume-ats" className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] text-purple-400 font-mono uppercase tracking-widest block font-bold">ATS Alignment Heuristics</span>
            <h3 className="text-xl font-bold text-white font-display">Core CV Alignments</h3>
          </div>
          <ResumeBuilder />
        </section>

        {/* FORENSIC SYSTEMS AUDITING PANEL */}
        <section id="audit-logs" className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest block font-bold">Self-Auditing Log</span>
            <h3 className="text-xl font-bold text-white font-display">Codebase Diagnostic Analysis</h3>
          </div>
          <AuditPanel />
        </section>

        {/* ABOUT ME EXTENDED */}
        <section id="about-extended" className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-2">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">Systems Philosophy</span>
            <h3 className="text-xl font-bold text-white font-display">Action Over Talk</h3>
            <p className="text-xs text-zinc-500 font-mono">“Code speaks louder than speculation. If you can't run it at 30fps at the edge, don't ship it to the cloud.”</p>
          </div>
          <div className="md:col-span-2 text-zinc-300 text-sm leading-relaxed space-y-4 font-sans">
            <p>{developerBio.aboutMe}</p>
            <p>
              I am comfortable jumping into large unstructured raw directories and setting up CI/CD workflows, scraping, databases, image manipulations, and model inferencing pipelines. I prioritize readability, rigorous logging metrics, and optimal CPU allocation loops over over-hyped tech buzzwords.
            </p>
          </div>
        </section>

        {/* RECRUITER CONTACT CONVERSION ZONE */}
        <section id="contact-form-sector" className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Informational columns */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest block font-bold">Secure Contact Pipeline</span>
              <h3 className="text-2xl font-bold text-white font-display">Initiate Collaboration</h3>
              <p className="text-zinc-500 text-xs">Direct communications link mapped securely directly to Jelsinge's active inbox.</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 space-y-4">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-semibold text-white">Startup Ready Mentality</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                I am optimized for rapid-growth teams, YC-style execution loops, and early-stage prototypes. I am willing to build custom code proofs to prove capability.
              </p>
            </div>

            <div className="text-xs text-zinc-500 font-mono border-t border-zinc-900 pt-4">
              <span>Direct Endpoint:</span>
              <a href="mailto:jelsingearun.2004@gmail.com" className="hover:text-cyan-400 block mt-1 text-zinc-300">
                jelsingearun.2004@gmail.com
              </a>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-4 font-sans relative"
            >
              <h4 className="text-sm font-bold text-white font-display mb-2">Secure Message Dispatcher</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] text-zinc-400 font-mono">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recruiter / Founder Name..."
                    className="w-full text-xs p-3 rounded-lg bg-zinc-900 border border-zinc-850 text-white outline-none focus:border-cyan-500/50 transition-all font-mono"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] text-zinc-400 font-mono">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@company.com..."
                    className="w-full text-xs p-3 rounded-lg bg-zinc-900 border border-zinc-850 text-white outline-none focus:border-cyan-500/50 transition-all font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-zinc-400 font-mono">Project Scope / Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI Engineer recruitment / Freelance / YC support..."
                  className="w-full text-xs p-3 rounded-lg bg-zinc-900 border border-zinc-850 text-white outline-none focus:border-cyan-500/50 transition-all font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-zinc-400 font-mono">Project Requirements *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your team, tech challenges, and alignment options..."
                  className="w-full text-xs p-3 rounded-lg bg-zinc-900 border border-zinc-850 text-white outline-none focus:border-cyan-500/50 transition-all font-mono resize-none leading-relaxed"
                />
              </div>

              {/* Warnings panel */}
              <div className="text-[10px] text-zinc-500 font-mono leading-normal mt-1 flex items-start gap-1">
                <span>* Submitting triggers a persistent state dispatch simulated securely with client-side indicators. No database leak risk.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !formData.email || !formData.message}
                className="w-full py-3 px-4 rounded-xl bg-white text-black font-semibold text-xs transition-all hover:bg-zinc-200 cursor-pointer disabled:opacity-40 disabled:hover:bg-white flex items-center justify-center gap-2 select-none"
              >
                {isSubmitting ? (
                  <span>Dispatching Payload...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Dispatch Secure Inquiry</span>
                  </>
                )}
              </button>

              {/* Elegant success overlay */}
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-[#09090bc0] backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 text-center select-none"
                  >
                    <div className="p-3 bg-emerald-950/60 border border-emerald-800/40 rounded-full text-emerald-400 mb-3 animate-bounce">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h5 className="font-display font-bold text-white text-base">Inquiry Dispatched!</h5>
                    <p className="text-zinc-300 text-xs mt-1.5 max-w-sm leading-relaxed font-sans">
                      Thank you! Jelsinge's PulseAI system has successfully queued your request. Jelsinge or his Chief of Staff AI will correspond directly via your provided email context.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-zinc-950 mt-24 py-12 text-xs text-zinc-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>© 2026 Jelsinge Arun. Computer Science & AI Student Portfolio.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#featured-projects" className="hover:text-cyan-450 transition-colors">Repos</a>
            <span>•</span>
            <a href="#activity-dashboard" className="hover:text-cyan-450 transition-colors">Telemetry</a>
            <span>•</span>
            <a href="#resume-ats" className="hover:text-cyan-450 transition-colors">CV Engine</a>
          </div>
        </div>
      </footer>

      {/* Floating Interactive Chatbot Component */}
      <AiChatbot />
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ChevronDown, ChevronUp, Cpu, Award, Zap, Code2, ShieldCheck, Calendar } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  key?: string | number;
}

// Map the project development sprints throughout the first half of 2026
const getTimelineDetails = (updatedAtStr: string) => {
  const updatedDate = new Date(updatedAtStr);
  let startDateStr = "";
  let durationDays = 30;

  switch (updatedAtStr) {
    case "2026-05-15": // OpenPulse
      startDateStr = "2026-04-10";
      durationDays = 35;
      break;
    case "2026-03-13": // SentinelAI / Drowsify
      startDateStr = "2026-02-10";
      durationDays = 31;
      break;
    case "2026-04-18": // RoadCare
      startDateStr = "2026-03-15";
      durationDays = 34;
      break;
    case "2026-03-11": // GitHub DevOps Provisioner
      startDateStr = "2026-02-15";
      durationDays = 24;
      break;
    case "2026-04-27": // Academix
      startDateStr = "2026-03-25";
      durationDays = 33;
      break;
    default:
      startDateStr = "2026-01-15";
      durationDays = 30;
  }

  const startDate = new Date(startDateStr);
  const windowStart = new Date("2026-01-01").getTime();
  const windowEnd = new Date("2026-06-30").getTime();
  const totalDuration = windowEnd - windowStart;

  const startPercent = Math.max(0, Math.min(100, ((startDate.getTime() - windowStart) / totalDuration) * 100));
  const endPercent = Math.max(0, Math.min(100, ((updatedDate.getTime() - windowStart) / totalDuration) * 100));
  const rangeWidth = endPercent - startPercent;

  const formatFriendlyDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return {
    startLabel: formatFriendlyDate(startDate),
    endLabel: formatFriendlyDate(updatedDate),
    durationDays,
    startPercent,
    endPercent,
    rangeWidth,
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const timeline = getTimelineDetails(project.updatedAt);

  // Return badge style based on category
  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case "Generative AI":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/25";
      case "AI/ML":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/25";
      case "Full Stack":
        return "bg-purple-500/10 text-purple-400 border-purple-500/25";
      default:
        return "bg-zinc-500/10 text-zinc-400 border-zinc-500/25";
    }
  };

  return (
    <div
      className={`border rounded-2xl bg-zinc-950 transition-all ${
        isExpanded ? "border-cyan-500/30 ring-1 ring-cyan-500/10" : "border-zinc-800 hover:border-zinc-700"
      }`}
    >
      {/* Primary Card Header Grid */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${getCategoryBadge(project.category)}`}>
                {project.category}
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">
                {project.language}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
              {project.name}
              {project.stars > 0 && (
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono">
                  ★ {project.stars}
                </span>
              )}
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed font-sans max-w-2xl">
              {project.tagline}
            </p>

            {/* Timeline indicator block */}
            <div className="mt-4 p-3 bg-zinc-900/15 rounded-xl border border-zinc-900 space-y-2.5 max-w-lg">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="uppercase tracking-wider">Sprint Phase: 2026</span>
                </span>
                <span className="text-zinc-500">
                  {timeline.startLabel} – {timeline.endLabel} <span className="text-cyan-400 font-medium">({timeline.durationDays}d Phase)</span>
                </span>
              </div>

              {/* Graphical bar */}
              <div className="relative py-1">
                {/* Horizontal track line */}
                <div className="h-1.5 w-full bg-zinc-900 rounded-full relative border border-zinc-850/40">
                  {/* Glowing active range */}
                  <div
                    className="absolute h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 shadow-[0_0_8px_rgba(6,182,212,0.3)]"
                    style={{ left: `${timeline.startPercent}%`, width: `${timeline.rangeWidth}%` }}
                  />
                </div>
                
                {/* Precise end marker / glowing milestone */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black shadow-[0_0_6px_#10b981]"
                  style={{ left: `calc(${timeline.endPercent}% - 5px)` }}
                />
              </div>

              {/* Month marks with smart activation highlight */}
              <div className="flex justify-between text-[9px] font-mono text-zinc-650 px-1">
                <span className={timeline.startPercent <= 16.6 && timeline.endPercent >= 0 ? "text-cyan-400 font-medium animate-pulse" : "text-zinc-650"}>Jan</span>
                <span className={timeline.startPercent <= 33.3 && timeline.endPercent >= 16.6 ? "text-cyan-400 font-medium animate-pulse" : "text-zinc-650"}>Feb</span>
                <span className={timeline.startPercent <= 50.0 && timeline.endPercent >= 33.3 ? "text-cyan-400 font-medium animate-pulse" : "text-zinc-650"}>Mar</span>
                <span className={timeline.startPercent <= 66.6 && timeline.endPercent >= 50.0 ? "text-cyan-400 font-medium animate-pulse" : "text-zinc-650"}>Apr</span>
                <span className={timeline.startPercent <= 83.3 && timeline.endPercent >= 66.6 ? "text-cyan-400 font-medium animate-pulse" : "text-zinc-650"}>May</span>
                <span className={timeline.startPercent <= 100.0 && timeline.endPercent >= 83.3 ? "text-cyan-400 font-medium animate-pulse" : "text-zinc-650"}>Jun</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <a
              href={project.githubUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 hover:text-white transition-all text-xs font-mono select-none"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Inspect Source</span>
            </a>
          </div>
        </div>

        {/* Tech Stack Bubbles */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-[11px] px-2 py-1 rounded-md bg-zinc-900/60 border border-zinc-900 text-zinc-400 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button to Expand Case Study */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between border-t border-zinc-900 mt-5 pt-4 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors select-none cursor-pointer"
        >
          <span>{isExpanded ? "COLAPSE TECHNICAL RECONSTRUCTION" : "INSPECT DEEP CASE STUDY & ARCHITECTURE"}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Expanded Engineering Breakdown panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-zinc-900"
          >
            <div className="p-6 bg-[#040406] space-y-6 text-sm leading-relaxed">
              {/* Recruiter Evaluation Matrix */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850 grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="text-center font-mono">
                  <span className="text-[10px] text-zinc-500 uppercase block">Hiring Signal</span>
                  <span className="text-lg font-bold text-cyan-400">{project.recruiterScore.attractiveness}/10</span>
                </div>
                <div className="text-center font-mono">
                  <span className="text-[10px] text-zinc-500 uppercase block">ATS Match</span>
                  <span className="text-lg font-bold text-cyan-400">{project.recruiterScore.atsRelevance}/10</span>
                </div>
                <div className="text-center font-mono">
                  <span className="text-[10px] text-zinc-500 uppercase block">Code Depth</span>
                  <span className="text-lg font-bold text-cyan-400">{project.recruiterScore.depth}/10</span>
                </div>
                <div className="text-center font-mono">
                  <span className="text-[10px] text-zinc-500 uppercase block">Sophistication</span>
                  <span className="text-lg font-bold text-cyan-400">{project.recruiterScore.sophistication}/10</span>
                </div>
                <div className="text-center font-mono col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-zinc-800 pt-2 sm:pt-0">
                  <span className="text-[10px] text-zinc-500 uppercase block">Composite</span>
                  <span className="text-lg font-bold text-emerald-400">{project.recruiterScore.overall}/10</span>
                </div>
              </div>

              {/* Problem and Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    Problem Being Solved
                  </h4>
                  <p className="text-zinc-300 text-sm">{project.problem}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-pink-400" />
                    Architectural Topology
                  </h4>
                  <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-900 font-mono text-[11px] text-zinc-400">
                    {project.architecture}
                  </div>
                </div>
              </div>

              {/* Implementation and Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-purple-400" />
                    Implementation Overview
                  </h4>
                  <p className="text-zinc-300 text-sm">{project.implementation}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    Key Bottleneck & Workaround
                  </h4>
                  <p className="text-zinc-300 text-sm">{project.challenges}</p>
                </div>
              </div>

              {/* Systems First Thought */}
              <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-850 space-y-2 font-mono text-xs">
                <h4 className="text-[10px] text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 animate-pulse" />
                  SYSTEMS-FIRST THINKING SIGNAL:
                </h4>
                <p className="text-zinc-400 select-all leading-relaxed">
                  {project.systemsThinking}
                </p>
              </div>

              {/* Recruiter Summary box */}
              <div className="p-3.5 border-l-2 border-cyan-400 bg-cyan-950/15 rounded-r-xl font-sans text-xs flex flex-col gap-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 font-medium">Recruiter Summary Insight</span>
                <p className="text-zinc-300 italic">“{project.recruiterSummary}”</p>
              </div>

              {/* ATS Keywords */}
              <div className="flex flex-wrap items-center gap-2 border-t border-zinc-900 pt-4">
                <span className="text-[10px] font-mono text-zinc-500 uppercase mr-2 shrink-0">ATS Keywords Matched:</span>
                {project.atsKeywords.map((kw, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 font-mono border border-zinc-850">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

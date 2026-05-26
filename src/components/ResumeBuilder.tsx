import { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, FileText, Briefcase, Eye, ChevronRight } from "lucide-react";
import { resumeVariants, developerBio } from "../data";

export function ResumeBuilder() {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const activeVariant = resumeVariants[selectedRoleIndex];

  const handleCopySingle = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAll = () => {
    const fullText = `ROLE: ${activeVariant.role}\nSUMMARY: ${activeVariant.summary}\n\nBULLETS:\n${activeVariant.bullets.map((b) => `- ${b}`).join("\n")}`;
    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-purple-950/40 border border-purple-800/60 rounded-xl">
            <FileText className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-base">ATS Resume Synthesizer</h3>
            <p className="text-zinc-400 text-xs font-mono">Select target role and export ready bullets</p>
          </div>
        </div>

        {/* Action button to copy whole block */}
        <button
          onClick={handleCopyAll}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-xs text-zinc-300 hover:text-white font-mono cursor-pointer transition-all active:scale-95 select-none"
        >
          {copiedAll ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied Core Profile!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Full Model ATS Block</span>
            </>
          )}
        </button>
      </div>

      {/* Selector Toggles */}
      <div className="grid grid-cols-2 gap-2 bg-zinc-900/30 p-1 rounded-xl border border-zinc-800/80">
        {resumeVariants.map((v, i) => (
          <button
            key={i}
            onClick={() => setSelectedRoleIndex(i)}
            className={`py-2.5 px-2 text-center rounded-lg text-xs font-semibold cursor-pointer select-none font-display transition-all ${
              selectedRoleIndex === i
                ? "bg-purple-950/50 border border-purple-800/60 text-purple-300"
                : "text-zinc-500 hover:text-zinc-300 border border-transparent"
            }`}
          >
            {v.role}
          </button>
        ))}
      </div>

      {/* Meta Profile Card Mock */}
      <div className="rounded-xl bg-zinc-900/30 border border-zinc-850/80 p-5 space-y-4">
        {/* Headline */}
        <div>
          <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest block mb-1">Target ATS Headline</span>
          <h4 className="text-sm font-bold text-white leading-snug">{activeVariant.headline}</h4>
          <span className="text-xs text-zinc-400 mt-1 block font-medium italic">{developerBio.location} • {developerBio.email}</span>
        </div>

        {/* Professional Summary */}
        <div>
          <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest block mb-1">Professional Summary</span>
          <p className="text-sm text-zinc-350 leading-relaxed font-sans">{activeVariant.summary}</p>
        </div>

        {/* Bullet achievements with copy markers */}
        <div className="space-y-3.5 pt-2">
          <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest block mb-2">Quantified Accomplishments & Repo Evidence</span>
          {activeVariant.bullets.map((bullet, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 group/item bg-zinc-950/40 p-3 rounded-xl border border-zinc-900/80 hover:border-zinc-800/80 transition-all"
            >
              <div className="mt-1">
                <ChevronRight className="w-4 h-4 text-purple-400 shrink-0" />
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans flex-1">
                {bullet}
              </p>
              <button
                onClick={() => handleCopySingle(bullet, idx)}
                className="opacity-0 group-hover/item:opacity-100 p-1.5 rounded-md hover:bg-zinc-900 border border-zinc-800 hover:text-white text-zinc-500 transition-all cursor-pointer"
                title="Copy standard bullet copy"
              >
                {copiedIndex === idx ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional education line */}
      <div className="border-t border-zinc-900 pt-4 flex items-start gap-4">
        <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg shrink-0">
          <Briefcase className="w-4 h-4 text-cyan-400" />
        </div>
        <div>
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-0.5">Education Credentials</span>
          <h5 className="text-xs font-bold text-white">{developerBio.education.degree}</h5>
          <span className="text-[11px] text-zinc-500 font-mono">{developerBio.education.timeline}</span>
          <p className="text-xs text-zinc-400 mt-1">{developerBio.education.details}</p>
        </div>
      </div>
    </div>
  );
}

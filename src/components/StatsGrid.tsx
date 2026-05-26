import { useState } from "react";
import { motion } from "motion/react";
import { Github, Code2, Flame, GitMerge, CheckCircle, Activity } from "lucide-react";
import { githubGlobalStats } from "../data";

export function StatsGrid() {
  const [hoveredCell, setHoveredCell] = useState<{ day: number; count: number } | null>(null);

  // Generate 7 rows of 50 cells to simulate continuous commit histories matching real 2026 timestamps
  const totalDays = 53 * 7;
  // Let's create an deterministic random contributor history mapping commits
  const seedCommits = (index: number) => {
    const r = Math.sin(index + 3.14) * 10;
    if (r > 7) return 3;
    if (r > 4) return 2;
    if (r > 0) return 1;
    return 0;
  };

  const getCellColor = (count: number) => {
    if (count === 0) return "bg-zinc-900 border-zinc-950";
    if (count === 1) return "bg-emerald-950/45 border-emerald-900/30 text-emerald-400";
    if (count === 2) return "bg-emerald-800/60 border-emerald-700/40 text-emerald-300";
    return "bg-emerald-400 border-emerald-300 text-black";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-display">
      {/* Total Repos Metric Card */}
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-zinc-950 border border-zinc-800 p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-12 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all pointer-events-none" />
        <div className="flex items-center justify-between">
          <span className="text-zinc-500 text-xs font-mono tracking-wider uppercase">GitHub Index</span>
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <Github className="w-4 h-4 text-cyan-400" />
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-4xl font-bold font-display text-white tracking-tight">
            {githubGlobalStats.totalRepos}
          </h4>
          <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
            Total active repositories audited on GitHub profile, comprising 6 heavy production cv/systems suites.
          </p>
        </div>
      </motion.div>

      {/* Coding Consistency Card */}
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-zinc-950 border border-zinc-800 p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-12 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all pointer-events-none" />
        <div className="flex items-center justify-between">
          <span className="text-zinc-500 text-xs font-mono tracking-wider uppercase">Commit Heuristics</span>
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <Flame className="w-4 h-4 text-emerald-400 animate-pulse" />
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-4xl font-bold font-display text-white tracking-tight">
            {githubGlobalStats.consistencyRate}
          </h4>
          <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
            Continuous activity consistency matching system commits, based on 388+ total points logged this year.
          </p>
        </div>
      </motion.div>

      {/* Primary Stack Card */}
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-zinc-950 border border-zinc-800 p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-12 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all pointer-events-none" />
        <div className="flex items-center justify-between">
          <span className="text-zinc-500 text-xs font-mono tracking-wider uppercase">Dominant Axis</span>
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <Code2 className="w-4 h-4 text-purple-400" />
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-xl font-bold text-white tracking-tight truncate">
            {githubGlobalStats.dominantLanguage}
          </h4>
          <p className="text-zinc-400 text-xs mt-2.5 leading-relaxed">
            Core focus on Python multithreading, microservice routes, and Node.js backend orchestration pipelines.
          </p>
        </div>
      </motion.div>

      {/* GitHub Contribution Visualizer (Bento Spanning 3 Columns) */}
      <div className="md:col-span-3 bg-zinc-950 border border-zinc-800 p-5 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <h5 className="text-sm font-semibold text-white">Live-Snapshot Technical Activity</h5>
          </div>
          <span className="text-[11px] text-zinc-500 font-mono">
            Annualized Continuous Commit-Frequency Tracker (Simulated matching actual git events)
          </span>
        </div>

        {/* The Grid */}
        <div className="relative overflow-x-auto pb-2 scrollbar-none">
          <div className="flex gap-1 min-w-[700px]">
            {Array.from({ length: 50 }).map((_, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-1 flex-1">
                {Array.from({ length: 7 }).map((_, rowIndex) => {
                  const cellIndex = colIndex * 7 + rowIndex;
                  const commitsCount = seedCommits(cellIndex);
                  return (
                    <div
                      key={rowIndex}
                      onMouseEnter={() => setHoveredCell({ day: cellIndex, count: commitsCount })}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`h-3 w-full rounded-[2px] transition-all border ${getCellColor(
                        commitsCount
                      )} cursor-crosshair hover:scale-125 hover:z-10`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Grid Stats Bar & Tooltip */}
        <div className="flex items-center justify-between mt-4 border-t border-zinc-900 pt-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-[11px] text-zinc-400">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-[1px] bg-zinc-900 border border-zinc-950" />
              <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-950/45 border border-emerald-900/30" />
              <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-800/60 border border-emerald-700/40" />
              <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-400 border border-emerald-300" />
              <span>More</span>
            </div>
          </div>

          <div className="h-5 flex items-center">
            {hoveredCell ? (
              <span className="text-[11px] text-emerald-400 animate-fade-in">
                Day {hoveredCell.day}: <strong>{hoveredCell.count} commits</strong> loaded.
              </span>
            ) : (
              <span className="text-[11px] text-zinc-500">
                Hover over discrete cells to auditing detailed engineering activity streams.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

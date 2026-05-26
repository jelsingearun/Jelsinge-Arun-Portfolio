import { ShieldAlert, CheckCircle, HelpCircle, ArrowUpRight, Flame } from "lucide-react";
import { forensicAuditData } from "../data";

export function AuditPanel() {
  const getStatusBadge = (status: "high-signal" | "incomplete" | "action-required") => {
    switch (status) {
      case "high-signal":
        return {
          label: "CORE STRENGTH",
          color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
          icon: <Flame className="w-3.5 h-3.5 text-emerald-400" />
        };
      case "action-required":
        return {
          label: "PORTFOLIO GAP",
          color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
          icon: <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
        };
      default:
        return {
          label: "HYGIENE MITIGATION",
          color: "bg-amber-500/10 text-amber-500/25 border-amber-500/20",
          icon: <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
        };
    }
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden font-sans">
      <div className="p-6 border-b border-zinc-900 bg-zinc-900/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white font-display">Forensic Repository Audit Logs</h3>
          <p className="text-xs text-zinc-400 font-mono mt-0.5">Automated workspace scan identifying strengths & corrective gaps</p>
        </div>
        <div className="flex gap-2 text-[10px] font-mono tracking-wider">
          <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">2 CORE STRENGTHS</span>
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">1 PORTFOLIO GAP</span>
          <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">1 HYGIENE ISSUE</span>
        </div>
      </div>

      <div className="divide-y divide-zinc-900">
        {forensicAuditData.map((item, index) => {
          const badge = getStatusBadge(item.status);
          return (
            <div key={index} className="p-6 hover:bg-zinc-900/10 transition-colors space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{item.category}</span>
                <span className={`inline-flex items-center gap-1 text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full border ${badge.color}`}>
                  {badge.icon}
                  {badge.label}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white leading-snug">{item.title}</h4>
                <p className="text-zinc-405 text-xs mt-1.5 leading-relaxed font-sans">{item.description}</p>
              </div>

              {/* Corrective action recommendations */}
              <div className="p-3 bg-zinc-900/30 border border-zinc-850 rounded-lg flex items-start gap-2.5 text-xs font-mono">
                <ArrowUpRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-emerald-400 font-bold block mb-0.5 uppercase text-[10px] tracking-wider">Recommended Action:</span>
                  <p className="text-zinc-400 leading-normal">{item.action}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

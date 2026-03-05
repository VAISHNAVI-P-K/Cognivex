import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Target, Eye, Share2, Lock, Unlock, Zap, Hexagon, Diamond, Triangle, Circle, Cpu, Scan } from "lucide-react";

const badgeCategories = [
  {
    name: "SUSTAINABILITY",
    icon: Sparkles,
    badges: [
      { icon: Cpu, label: "", status: "unlocked" as const },
      { icon: Zap, label: "", status: "unlocked" as const },
      { icon: Hexagon, label: "", status: "locked" as const },
      { icon: Diamond, label: "", status: "locked" as const },
    ],
  },
  {
    name: "RESILIENCE",
    icon: Shield,
    badges: [
      { icon: Diamond, label: "", status: "unlocked" as const },
      { icon: Hexagon, label: "", status: "locked" as const },
      { icon: Triangle, label: "", status: "locked" as const },
      { icon: Triangle, label: "", status: "locked" as const },
    ],
  },
  {
    name: "FOCUS",
    icon: Target,
    badges: [
      { icon: Scan, label: "THE DEEP-WORK SENTINEL", status: "unlocked" as const },
      { icon: Circle, label: "STEADY FLOW", status: "unlocked" as const },
      { icon: Circle, label: "", status: "locked" as const },
      { icon: Cpu, label: "", status: "locked" as const },
    ],
  },
];

const Milestones = () => {
  return (
    <DashboardLayout>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">Cognitive Milestones</h1>
          <p className="text-muted-foreground">Your path to neural mastery. Earn badges for sustainability, resilience, and deep focus.</p>
        </div>
        <div className="stat-card flex items-center gap-6 px-6 py-3">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Current Tier</p>
            <p className="text-primary font-display font-bold">Cognitive Architect</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Progress</p>
            <p className="font-display font-bold text-foreground">14 / 28</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Left: Badge Grid */}
        <div className="col-span-3 space-y-10">
          {badgeCategories.map((cat) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <cat.icon size={18} className="text-primary" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">{cat.name}</h3>
                <div className="flex-1 h-px bg-border ml-2" />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {cat.badges.map((badge, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-2 border transition-all ${
                      badge.status === "unlocked"
                        ? "bg-card border-primary/30 glow-border"
                        : "bg-secondary/50 border-border opacity-50"
                    }`}
                  >
                    <badge.icon size={32} className={badge.status === "unlocked" ? "text-primary" : "text-muted-foreground"} />
                    {badge.label && (
                      <span className={`text-[10px] uppercase tracking-wider text-center px-2 font-semibold ${badge.status === "unlocked" ? "text-primary" : "text-muted-foreground"}`}>
                        {badge.label}
                      </span>
                    )}
                    <span className={`text-[10px] uppercase tracking-wider ${badge.status === "unlocked" ? "text-primary" : "text-muted-foreground"}`}>
                      {badge.status === "unlocked" ? "Unlocked" : "Locked"}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Featured Achievement */}
        <motion.div
          className="col-span-2 stat-card glow-border p-8 h-fit sticky top-24"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
                  <Scan size={48} className="text-primary" />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-success animate-pulse-glow" />
            </div>
          </div>

          <h3 className="font-display font-bold text-xl text-center text-foreground mb-2">The Deep-Work Sentinel</h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-wider text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded">Elite Achievement</span>
            <span className="text-xs text-muted-foreground">Earned June 14, 2024</span>
          </div>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Awarded for maintaining 10+ hours of uninterrupted deep-work cycles within a 7-day period. This signifies a high degree of cognitive endurance and neural pathway stability.
          </p>

          <div className="bg-secondary rounded-lg p-4 mb-6">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Cognitive Benefit</p>
            <p className="text-sm text-foreground">
              Increased neuroplasticity in the prefrontal cortex, leading to a 12% improvement in complex problem-solving speed.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Next Mastery Tier</span>
              <span className="text-sm font-semibold text-primary">82%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-1.5">
              <div className="bg-primary rounded-full h-1.5" style={{ width: "82%" }} />
            </div>
          </div>

          <div className="space-y-2">
            <Button variant="default" className="w-full"><Share2 size={16} /> Share Achievement</Button>
            <Link to="/analytics">
              <Button variant="outline" className="w-full">View Roadmap</Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          <Sparkles size={14} className="text-primary" /> Powered by Cognivex Neural Core v4.2.0
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground uppercase tracking-wider">
          <Link to="/" className="hover:text-primary">Privacy Protocol</Link>
          <Link to="/" className="hover:text-primary">Neural Ethics</Link>
          <Link to="/" className="hover:text-primary">Support Node</Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Milestones;

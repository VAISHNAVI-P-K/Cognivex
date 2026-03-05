import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Share2, Download, Sparkles, Zap, LayoutGrid, TrendingUp, ArrowUpRight } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "JAN", value: 20 },
  { month: "FEB", value: 40 },
  { month: "MAR", value: 35 },
  { month: "APR", value: 55 },
  { month: "MAY", value: 70 },
  { month: "JUN (CURRENT)", value: 78 },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">Individual Progress Summary</h1>
          <p className="text-muted-foreground">Personal user growth and cognitive evolution tracking since January 2024.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm"><Share2 size={16} /> Share Summary</Button>
          <Button variant="default" size="sm"><Download size={16} /> Export Report</Button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {[
          { icon: Sparkles, label: "TOTAL ACCURACY STABILITY", value: "98.4%", sub: "vs 96.3%", change: "+2.1%", color: "text-primary" },
          { icon: Zap, label: "DECISION SPEED OPTIMIZATION", value: "120ms", sub: "avg. response", change: "-15% speed-up", color: "text-success" },
          { icon: LayoutGrid, label: "AUTOMATION DEPENDENCY DELTA", value: "14.2%", sub: "autonomous load", change: "-5.4% dependency", color: "text-success" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between mb-3">
              <stat.icon size={20} className="text-primary" />
              <span className={`text-xs font-semibold ${stat.color} bg-primary/10 px-2 py-0.5 rounded-full`}>{stat.change}</span>
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-display font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.sub}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart + Sidebar */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <motion.div
          className="stat-card col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display font-semibold text-foreground">Cognitive Sustainability Index (CSI) Evolution</h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-success" /> Last 6 Months Performance</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-display font-bold text-primary">85.5</span>
              <p className="text-xs text-primary uppercase tracking-wider">Growth Trend +12.2%</p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="analyticsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(192, 100%, 50%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(192, 100%, 50%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 11 }} />
                <YAxis hide />
                <Area type="monotone" dataKey="value" stroke="hsl(192, 100%, 50%)" strokeWidth={2.5} fill="url(#analyticsGrad)" dot={{ fill: "hsl(192, 100%, 50%)", r: 4, strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-xs uppercase tracking-wider text-primary font-semibold">Next Milestone</span>
            <h3 className="font-display font-semibold text-foreground mt-2">Neural Resilience Phase 2</h3>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-muted-foreground">Task Completion</span>
              <span className="text-sm font-semibold text-primary">82%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-1.5 mt-1">
              <div className="bg-primary rounded-full h-1.5" style={{ width: "82%" }} />
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">Expected Achievement: July 12, 2024</p>
            <Link to="/milestones">
              <Button variant="outline" size="sm" className="w-full mt-3">View Goals</Button>
            </Link>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">AI Recommendations</span>
            <div className="space-y-3 mt-3">
              <div className="flex gap-2">
                <TrendingUp size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Increase deep-work cycles to stabilize accuracy during peak cognitive load hours.</p>
              </div>
              <div className="flex gap-2">
                <Sparkles size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Sustainability levels drop between 2PM-4PM. Consider micro-recovery breaks.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "FOCUS CONTINUITY", value: "4h 22m", color: "bg-primary" },
          { label: "PATTERN RECOGNITION", value: "92/100", color: "bg-primary" },
          { label: "COGNITIVE LOAD", value: "Optimal", color: "bg-success" },
          { label: "RECALL EFFICIENCY", value: "88.1%", color: "bg-primary" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.05 }}
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{stat.label}</p>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-display font-bold text-foreground">{stat.value}</span>
              <div className={`flex-1 h-1.5 rounded-full ${stat.color}/30`}>
                <div className={`h-1.5 rounded-full ${stat.color}`} style={{ width: `${60 + i * 10}%` }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
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

export default Analytics;

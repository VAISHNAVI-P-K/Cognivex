import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import CSIRing from "@/components/CSIRing";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, AlertTriangle, CheckSquare, ChevronRight, ArrowUpRight } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const chartData = [
  { day: "MON", value: 30 },
  { day: "TUE", value: 55 },
  { day: "WED", value: 48 },
  { day: "THU", value: 52 },
  { day: "FRI", value: 65 },
  { day: "SAT", value: 72 },
  { day: "SUN", value: 80 },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* CSI Hero Card */}
      <motion.div
        className="stat-card glow-border-strong p-8 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="badge-enterprise mb-4 inline-flex items-center gap-1.5">
              <Sparkles size={14} /> Operational Health
            </span>
            <h2 className="text-3xl font-display font-bold mb-3 text-foreground">
              Cognitive Sustainability Index (CSI)
            </h2>
            <p className="text-muted-foreground mb-6">
              Your system's equilibrium is currently optimal. Automation efficiency is exceeding target benchmarks for Q3.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-display font-bold text-primary">78%</p>
                <p className="text-xs text-muted-foreground">Index Score</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-success">+12.4%</p>
                <p className="text-xs text-muted-foreground">MoM Growth</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <CSIRing score={78} size={220} label="OPTIMAL STATUS" />
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* Automation Dependency */}
        <motion.div
          className="stat-card col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display font-semibold text-foreground">Automation Dependency</h3>
              <p className="text-xs text-muted-foreground">Resource allocation vs manual intervention</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-md text-xs font-medium bg-secondary text-foreground border border-border">Real-time</button>
              <button className="px-3 py-1 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground">Historical</button>
            </div>
          </div>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-4xl font-display font-bold text-foreground">64%</span>
            <span className="text-sm text-success flex items-center gap-1"><ArrowUpRight size={14} /> 12%</span>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(192, 100%, 50%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(192, 100%, 50%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 11 }} />
                <YAxis hide />
                <Area type="monotone" dataKey="value" stroke="hsl(192, 100%, 50%)" strokeWidth={2} fill="url(#colorVal)" dot={{ fill: "hsl(192, 100%, 50%)", r: 4, strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Risk Alert */}
        <motion.div
          className="rounded-xl border border-destructive/40 bg-destructive/5 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle size={16} className="text-destructive" />
            <span className="text-xs uppercase tracking-wider text-destructive font-semibold">Priority Risk Alert</span>
            <span className="text-xs text-muted-foreground ml-auto">2m ago</span>
          </div>
          <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Anomalous Data Drift</h3>
          <p className="text-sm text-muted-foreground mb-6">
            System detected a 14% deviation in training data parity within the 'Automation' module. Immediate re-validation recommended.
          </p>
          <div className="space-y-2">
            <Button variant="destructive" className="w-full">Resolve Conflict</Button>
            <Button variant="outline" className="w-full">Ignore (Risk 3.2)</Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Decision Velocity */}
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-foreground">Decision Velocity Trend</h3>
            <span className="text-xs text-muted-foreground">AVG 124MS</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Current Velocity</span>
            <span className="text-sm font-semibold text-primary">124ms</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div className="bg-primary rounded-full h-2" style={{ width: "65%" }} />
          </div>
        </motion.div>

        {/* Daily Action Plan */}
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-display font-semibold text-foreground mb-4">Daily Action Plan</h3>
          <div className="space-y-3">
            {[
              { task: "Re-sync Cognitive Arcs", tag: "INFRASTRUCTURE • HIGH PRIORITY" },
              { task: "Validate Neural Pathways", tag: "ANALYTICS • MEDIUM" },
            ].map((item) => (
              <Link
                key={item.task}
                to="/analytics"
                className="flex items-center justify-between bg-secondary rounded-lg p-3 hover:bg-secondary/80 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <CheckSquare size={18} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.task}</p>
                    <p className="text-xs text-muted-foreground">{item.tag}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

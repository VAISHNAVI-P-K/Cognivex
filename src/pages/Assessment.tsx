import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CSIRing from "@/components/CSIRing";
import { CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

const Assessment = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <Sparkles size={20} className="text-primary" />
            <span className="font-display font-bold text-lg text-foreground">Cognivex AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["Dashboard", "Assessments", "Reports", "Settings"].map((link) => (
              <Link
                key={link}
                to={link === "Dashboard" ? "/dashboard" : link === "Reports" ? "/analytics" : "/assessment"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="text-muted-foreground hover:text-foreground">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-xs font-bold">AC</div>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-16 px-6 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="badge-enterprise mb-6 inline-flex items-center gap-1.5">
            <CheckCircle2 size={14} /> ICP Baseline Established
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">Assessment Success</h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Your comprehensive Ideal Customer Profile baseline has been successfully calculated and securely stored in your repository.
          </p>
        </motion.div>

        {/* Score Card */}
        <motion.div
          className="stat-card glow-border-strong p-8 mb-10 inline-block w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <CSIRing score={85} size={220} label="CSI SCORE" />
            </div>
            <div className="text-left">
              <h3 className="font-display font-bold text-xl text-foreground mb-2">Baseline Established</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-display font-bold text-primary">85/100</span>
                <span className="text-xs font-semibold text-success bg-success/10 px-2 py-0.5 rounded uppercase">Excellent</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your Cognivex Strategy Index (CSI) indicates a highly optimized market alignment. We've identified key growth sectors and prioritized conversion pathways based on your data points.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Market resonance at 92%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Competitive differentiation: Strong</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
          {[
            { label: "Analysis Accuracy", value: "99.4%", change: "+0.2%", color: "text-primary" },
            { label: "Data Points Processed", value: "1,240", change: "●", color: "text-success" },
            { label: "vs. Industry Average", value: "+12%", change: "+5%", color: "text-primary" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-display font-bold text-foreground">{stat.value}</span>
                <span className={`text-xs font-semibold ${stat.color}`}>{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Link to="/analytics">
            <Button variant="hero" size="lg"><TrendingUp size={18} /> View Full Analysis</Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="heroOutline" size="lg">Return to Dashboard</Button>
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mt-12">
          © 2024 Cognivex AI Solutions. All rights reserved. Data encrypted with 256-bit AES.
        </p>
      </main>
    </div>
  );
};

export default Assessment;

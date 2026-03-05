import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code2, BarChart3, Waves, CheckCircle2, LayoutGrid, Image, Shield, TrendingUp, ExternalLink } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Methodology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb & Header */}
      <section className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>›</span>
          <span>Platform Overview</span>
          <span>›</span>
          <span className="text-foreground font-medium">Methodology Deep-Dive</span>
        </div>
        <motion.div {...fadeUp}>
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Screen 03 // Core Architecture</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">
            Platform Methodology & Architecture
          </h1>
          <p className="text-muted-foreground max-w-xl mb-6">
            Deep-dive into ICP and CSI proprietary frameworks driving problem-solving velocity through advanced neural orchestration.
          </p>
          <div className="flex gap-2">
            {["ICP Core", "CSI Framework", "Architecture"].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="pb-12 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "PROBLEM-SOLVING VELOCITY", value: "12.4x", change: "↗ 14%", changeColor: "text-primary" },
            { label: "INFERENCE COHESION", value: "99.2%", change: "● stable", changeColor: "text-success" },
            { label: "DATA INGESTION RATE", value: "4.8 GB/s", change: "↗ peak", changeColor: "text-primary" },
          ].map((stat, i) => (
            <motion.div key={stat.label} className="stat-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-display font-bold text-foreground">{stat.value}</span>
                <span className={`text-sm font-medium ${stat.changeColor}`}>{stat.change}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {i === 0 && "Average acceleration across enterprise-tier cognitive workloads."}
                {i === 1 && "Cross-modal accuracy rating for the ICP (Integrated Cognitive Processor)."}
                {i === 2 && "Real-time processing throughput for CSI (Cognitive Systems Interface)."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* System Flow Diagram */}
      <section className="pb-16 px-6 max-w-7xl mx-auto">
        <motion.div className="stat-card glow-border p-8" {...fadeUp}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <LayoutGrid size={18} className="text-primary" />
              <h3 className="font-display font-semibold text-foreground">System Flow Diagram</h3>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-success" /> Active Node</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-muted-foreground" /> Passive Cache</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 py-12">
            {[
              { icon: LayoutGrid, label: "INPUT MATRIX" },
              { icon: Image, label: "NEURAL PROCESSOR" },
              { icon: Shield, label: "LOGIC GATE" },
              { icon: Shield, label: "CACHE LAYER" },
              { icon: Image, label: "CORE ENGINE" },
              { icon: TrendingUp, label: "CSI OUTPUT" },
            ].map((node, i) => (
              <div key={node.label} className="flex flex-col items-center gap-3">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${i === 1 || i === 4 ? "bg-primary/20 border border-primary/40" : i === 5 ? "bg-primary text-primary-foreground" : "bg-secondary border border-border"}`}>
                  <node.icon size={24} className={i === 5 ? "text-primary-foreground" : "text-foreground"} />
                </div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{node.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Choose Your Path */}
      <section className="pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-display font-bold mb-2">Choose Your Path</h2>
          <p className="text-muted-foreground mb-12">Select your operational profile to see how Cognivex adapts for you.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Code2, title: "Technical Professional", features: ["API-first integration", "Custom neural weights", "Real-time debugging console"], cta: "View Tech Specs", link: "/methodology" },
            { icon: BarChart3, title: "Strategic Management", features: ["KPI dashboard generation", "Resource allocation AI", "Risk assessment reports"], cta: "Explore Dashboards", link: "/dashboard" },
            { icon: Waves, title: "Academic & Research", features: ["Citation verification", "Hypothesis testing sandbox", "Dataset cross-referencing"], cta: "Research Tools", link: "/methodology" },
          ].map((path, i) => (
            <motion.div key={path.title} className="stat-card card-hover text-left" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <path.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-4 text-foreground">{path.title}</h3>
              <ul className="space-y-2 mb-6">
                {path.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to={path.link}>
                <Button variant="outline" className="w-full">{path.cta}</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Methodology;

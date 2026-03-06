import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code2, BarChart3, Waves, CheckCircle2, LayoutGrid, Image, Shield, TrendingUp, ExternalLink, Cpu, Database, Zap, Lock, GitBranch, Server, FileSearch, Microscope, BookOpen } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const tabs = ["ICP Core", "CSI Framework", "Architecture"] as const;
type Tab = typeof tabs[number];

const Methodology = () => {
  const [activeTab, setActiveTab] = useState<Tab>("ICP Core");
  const location = useLocation();
  const techSpecsRef = useRef<HTMLDivElement>(null);
  const researchToolsRef = useRef<HTMLDivElement>(null);
  const csiRef = useRef<HTMLDivElement>(null);
  const archRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#tech-specs") {
      setActiveTab("Architecture");
      setTimeout(() => techSpecsRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    } else if (hash === "#research-tools") {
      setTimeout(() => researchToolsRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    } else if (hash === "#csi-framework") {
      setActiveTab("CSI Framework");
      setTimeout(() => csiRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    } else if (hash === "#architecture") {
      setActiveTab("Architecture");
      setTimeout(() => archRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [location.hash]);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    if (tab === "CSI Framework") {
      csiRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (tab === "Architecture") {
      archRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ICP Core - Stats (always visible) */}
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

      {/* CSI Framework Section */}
      <section ref={csiRef} className="pb-16 px-6 max-w-7xl mx-auto" id="csi-framework">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-2 mb-6">
            <Cpu size={20} className="text-primary" />
            <h2 className="text-2xl font-display font-bold text-foreground">CSI Framework</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: Zap, title: "Cognitive Signal Integration", desc: "Real-time neural signal processing across multi-modal data streams with adaptive weighting for context-aware outputs." },
              { icon: Database, title: "Semantic Memory Layer", desc: "Persistent knowledge graph maintaining cross-session context with hierarchical memory consolidation." },
              { icon: GitBranch, title: "Decision Branching Engine", desc: "Multi-path inference evaluation with probabilistic outcome scoring and confidence-weighted selection." },
              { icon: Lock, title: "Integrity Verification", desc: "Continuous output validation against ground-truth benchmarks with automated bias detection and correction." },
            ].map((item, i) => (
              <motion.div key={item.title} className="stat-card card-hover" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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

      {/* Architecture Section */}
      <section ref={archRef} className="pb-16 px-6 max-w-7xl mx-auto" id="architecture">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-2 mb-6">
            <Server size={20} className="text-primary" />
            <h2 className="text-2xl font-display font-bold text-foreground">Architecture & Tech Specs</h2>
          </div>
          <div ref={techSpecsRef} id="tech-specs" className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { label: "Compute Layer", specs: ["Distributed GPU clusters", "Auto-scaling inference pods", "Sub-10ms latency routing", "99.99% uptime SLA"] },
              { label: "Data Pipeline", specs: ["Stream processing at 4.8 GB/s", "Multi-format ingestion (JSON, CSV, API)", "Real-time ETL transformations", "End-to-end encryption"] },
              { label: "API Gateway", specs: ["RESTful & GraphQL endpoints", "OAuth 2.0 + JWT auth", "Rate limiting & throttling", "Webhook event streaming"] },
            ].map((tier, i) => (
              <motion.div key={tier.label} className="stat-card card-hover" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
                <h3 className="font-display font-semibold text-foreground mb-4">{tier.label}</h3>
                <ul className="space-y-2">
                  {tier.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-primary flex-shrink-0" /> {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Research Tools Section */}
      <section ref={researchToolsRef} className="pb-16 px-6 max-w-7xl mx-auto" id="research-tools">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-2 mb-6">
            <Microscope size={20} className="text-primary" />
            <h2 className="text-2xl font-display font-bold text-foreground">Research Tools</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileSearch, title: "Citation Verification Engine", desc: "Automated cross-referencing against 200M+ academic papers with confidence scoring and source credibility analysis." },
              { icon: Microscope, title: "Hypothesis Testing Sandbox", desc: "Interactive environment for formulating and stress-testing hypotheses with simulated datasets and statistical validation." },
              { icon: BookOpen, title: "Dataset Cross-Referencing", desc: "Multi-source dataset alignment with schema mapping, anomaly detection, and automated correlation discovery." },
            ].map((tool, i) => (
              <motion.div key={tool.title} className="stat-card card-hover" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <tool.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                <Link to="/solutions">
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </motion.div>
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
            { icon: Code2, title: "Technical Professional", features: ["API-first integration", "Custom neural weights", "Real-time debugging console"], cta: "View Tech Specs", link: "/methodology#tech-specs" },
            { icon: BarChart3, title: "Strategic Management", features: ["KPI dashboard generation", "Resource allocation AI", "Risk assessment reports"], cta: "Explore Dashboards", link: "/dashboard" },
            { icon: Waves, title: "Academic & Research", features: ["Citation verification", "Hypothesis testing sandbox", "Dataset cross-referencing"], cta: "Research Tools", link: "/methodology#research-tools" },
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

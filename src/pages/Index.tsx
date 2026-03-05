import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CSIRing from "@/components/CSIRing";
import { Play, LayoutGrid, Zap, Asterisk, CheckCircle2 } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <span className="badge-enterprise mb-6 inline-block">
              <span className="w-2 h-2 rounded-full bg-success inline-block" /> Enterprise Grade AI
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
              Monitor{" "}
              <span className="gradient-text">Cognitive Sustainability</span>{" "}
              in High-Automation
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Optimize human-machine collaboration with real-time CSI monitoring and neural data visualizations designed for the modern enterprise floor.
            </p>
            <div className="flex gap-4">
              <Link to="/signup">
                <Button variant="hero" size="lg">Start Monitoring</Button>
              </Link>
              <Link to="/methodology">
                <Button variant="heroOutline" size="lg">
                  <Play size={16} /> Watch Demo
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="stat-card glow-border p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display font-semibold text-foreground">System CSI Score</h3>
                  <p className="text-xs text-muted-foreground">Real-time load balancing</p>
                </div>
                <span className="badge-enterprise text-xs">+12% Optimal</span>
              </div>
              <div className="flex justify-center my-4">
                <CSIRing score={84} size={180} label="SUSTAINABLE" />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Attention</p>
                  <p className="text-lg font-display font-bold text-foreground">92%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Fatigue</p>
                  <p className="text-lg font-display font-bold text-foreground">14%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Sync</p>
                  <p className="text-lg font-display font-bold text-primary">High</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeUp}>
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">The Problem</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">Why Traditional Monitoring Fails</h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            Legacy systems track performance, but ignore the biological cost of high-automation environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: LayoutGrid, title: "Attention Fragmentation", desc: "Constant context switching in automated environments leads to a documented 40% loss in workforce productivity." },
            { icon: Zap, title: "Decision Fatigue", desc: "Cognitive load peaks result in critical error rates increasing exponentially during late-shift automation cycles." },
            { icon: Asterisk, title: "System Complexity", desc: "Opaque automation layers create trust gaps and operational siloes that hinder rapid incident response." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="stat-card card-hover"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto" id="about">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div className="stat-card glow-border p-6" {...fadeUp}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-destructive" />
              <div className="w-2 h-2 rounded-full bg-warning" />
              <div className="w-2 h-2 rounded-full bg-success" />
              <div className="flex-1 h-1 bg-primary/30 rounded ml-4" />
            </div>
            <div className="mb-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Cognitive Flux Index</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-3xl font-display font-bold text-foreground">4.2ms</span>
                <span className="text-xs text-success font-semibold">Stable</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary rounded-lg p-3">
                <p className="text-xs text-muted-foreground uppercase">Human Sync</p>
                <p className="text-xl font-display font-bold text-foreground">78%</p>
              </div>
              <div className="bg-secondary rounded-lg p-3">
                <p className="text-xs text-muted-foreground uppercase">Automation Bias</p>
                <p className="text-xl font-display font-bold text-foreground">Low</p>
              </div>
            </div>
            <div className="mt-4 bg-success/10 border border-success/30 rounded-lg p-3 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-success" />
              <div>
                <p className="text-sm font-semibold text-foreground">System Optimal</p>
                <p className="text-xs text-muted-foreground">All neural nodes aligned</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">The Solution</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              Augment Intelligence, Don't Replace It.
            </h2>
            <p className="text-muted-foreground mb-8">
              Cognivex AI provides the bridge between human intuition and machine precision. Our platform monitors physiological data and operational context to maintain the "Flow State" across your entire enterprise.
            </p>
            {[
              { title: "Predictive Intervention", desc: "Alert supervisors before cognitive fatigue impacts safety." },
              { title: "Dynamic Task Allocation", desc: "Real-time redistribution of workload based on cognitive availability." },
              { title: "Enterprise Analytics", desc: "Identify structural bottlenecks in human-machine collaboration." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 mb-4">
                <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          className="glow-border-strong rounded-2xl p-12 text-center bg-card"
          {...fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to stabilize your cognitive infrastructure?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join the world's leading high-automation facilities and start monitoring your human-centric KPIs today.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/signup">
              <Button variant="cta" size="lg">Request Enterprise Access</Button>
            </Link>
            <Link to="/methodology">
              <Button variant="ctaOutline" size="lg">Speak with an Expert</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

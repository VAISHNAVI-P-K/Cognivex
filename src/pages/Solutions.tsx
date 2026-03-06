import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ExternalLink, Server, MessageSquare, Waves } from "lucide-react";
import futureB2bImage from "@/assets/the_future_of_b2b.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <span className="badge-enterprise mb-6 inline-block">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" /> Enterprise Grade AI
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Powering the next{" "}
              <span className="gradient-text">Cognitive Era</span>{" "}
              for global institutions.
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Tailored solutions for IT conglomerates, strategic consulting firms, and leading research universities. Scale your intelligence with secure, private models.
            </p>
            <div className="flex gap-4">
              <Link to="/signup">
                <Button variant="hero" size="lg">Launch Enterprise Portal <ArrowRight size={18} /></Button>
              </Link>
              <Link to="/methodology">
                <Button variant="heroOutline" size="lg">View Documentation</Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="stat-card glow-border p-1 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-secondary rounded-lg aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="text-center z-10">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-3">
                  <Play size={20} className="text-primary ml-0.5" />
                </div>
                <p className="text-sm text-muted-foreground">Watch: The Future of B2B AI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="pb-20 px-6 max-w-7xl mx-auto" id="case-studies">
        <motion.div className="flex items-center justify-between mb-8" {...fadeUp}>
          <div>
            <h2 className="text-3xl font-display font-bold">Industry Solutions</h2>
            <p className="text-muted-foreground">Specialized modules designed for complex sectors.</p>
          </div>
          <Link to="/methodology" className="text-primary text-sm hover:underline flex items-center gap-1">
            All Industries <ExternalLink size={14} />
          </Link>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Server, title: "IT Infrastructure", desc: "Automate server orchestration and predictive maintenance across global data centers with 99.9% AI accuracy." },
            { icon: MessageSquare, title: "Strategic Consulting", desc: "Hyper-scale market analysis and sentiment tracking for Fortune 500 clients using proprietary LLM connectors." },
            { icon: Waves, title: "Academic Research", desc: "Enable rapid literature reviews and automated hypothesis testing for R1 universities and global labs." },
          ].map((item, i) => (
            <motion.div key={item.title} className="stat-card card-hover" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
              <Link to="/methodology" className="text-xs uppercase tracking-wider text-primary font-semibold hover:underline flex items-center gap-1">
                Explore Case Study <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI Estimator + Heatmaps */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div className="stat-card glow-border" {...fadeUp}>
            <h3 className="font-display font-semibold text-lg mb-1 text-foreground">ROI Estimator</h3>
            <p className="text-sm text-muted-foreground mb-6">Calculate your potential savings with Cognivex.</p>
            <div className="space-y-4 mb-6">
              {[
                { label: "TEAM SIZE", value: "250 Users" },
                { label: "COMPUTE LOAD", value: "High (TB/MO)" },
                { label: "LEGACY INTEGRATION", value: "Full" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{row.label}</span>
                  <span className="text-sm font-semibold text-primary">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="bg-secondary rounded-lg p-4">
              <p className="text-xs text-muted-foreground">Estimated Annual Savings</p>
              <p className="text-4xl font-display font-bold text-foreground">$4.2M</p>
              <p className="text-sm text-success font-semibold mt-1">↗ 240% Efficiency Increase</p>
            </div>
          </motion.div>

          <motion.div className="stat-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground">Team Cognitive Heatmaps</h3>
                <p className="text-xs text-muted-foreground">Real-time resource allocation and mental bandwidth.</p>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 mb-6">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md"
                  style={{
                    backgroundColor: `hsl(192, ${30 + Math.random() * 70}%, ${15 + Math.random() * 25}%)`,
                  }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {["AC", "JD", "KL"].map((initials) => (
                  <div key={initials} className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {initials}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs text-muted-foreground">+12</div>
              </div>
              <Link to="/analytics" className="text-sm text-primary hover:underline">Analyze Team ↗</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <motion.div className="glow-border-strong rounded-2xl p-12 text-center bg-card" {...fadeUp}>
          <h2 className="text-3xl font-display font-bold mb-4">Ready to elevate your institutional intelligence?</h2>
          <p className="text-muted-foreground mb-8">Join 400+ enterprises redefining their workflow with Cognivex.</p>
          <div className="flex justify-center gap-4">
            <Link to="/signup">
              <Button variant="cta" size="lg">Book Strategy Call</Button>
            </Link>
            <Link to="/methodology">
              <Button variant="ctaOutline" size="lg">Request Whitepaper</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;

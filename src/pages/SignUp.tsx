import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CognivexLogo from "@/components/CognivexLogo";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, CheckCircle2 } from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getPasswordStrength = () => {
    if (password.length === 0) return { label: "", width: "0%", segments: 0 };
    if (password.length < 6) return { label: "WEAK", width: "25%", segments: 1 };
    if (password.length < 10) return { label: "MEDIUM", width: "50%", segments: 2 };
    if (password.length < 14) return { label: "STRONG", width: "75%", segments: 3 };
    return { label: "VERY STRONG", width: "100%", segments: 4 };
  };

  const strength = getPasswordStrength();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-background p-12">
        <Link to="/">
          <CognivexLogo size="lg" />
        </Link>
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            className="w-full max-w-md mx-auto aspect-square rounded-2xl glow-border-strong bg-card flex items-center justify-center overflow-hidden mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-40 h-40">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-1 rounded-full bg-primary"
                  style={{
                    height: `${30 + Math.random() * 60}%`,
                    transformOrigin: "center center",
                  }}
                  initial={{ x: "-50%", y: "-50%", rotate: i * 22.5 }}
                  animate={{ scaleY: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </motion.div>
          <h2 className="text-3xl font-display font-bold mb-3">
            Empowering Human <span className="gradient-text">Cognitive Resilience</span>
          </h2>
          <p className="text-muted-foreground max-w-md">
            Join the next generation of enterprise intelligence. Secure your workspace with our neural network architecture.
          </p>
          <div className="flex gap-4 mt-6">
            <Shield size={24} className="text-primary" />
            <CheckCircle2 size={24} className="text-primary" />
            <Lock size={24} className="text-primary" />
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center bg-card p-8 lg:p-16">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-display font-bold mb-1 text-foreground">Create Enterprise Account</h1>
          <p className="text-muted-foreground mb-8">Step 1 of 2: Basic Authentication</p>

          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 bg-secondary border border-border rounded-lg h-12 text-sm font-medium text-foreground hover:border-primary transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-secondary border border-border rounded-lg h-12 text-sm font-medium text-foreground hover:border-primary transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.5A2.5 2.5 0 015.5 3h5A2.5 2.5 0 0113 5.5v5a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 013 10.5v-5zm8 0A2.5 2.5 0 0113.5 3h5A2.5 2.5 0 0121 5.5v5a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 0111 10.5v-5zM3 13.5A2.5 2.5 0 015.5 11h5a2.5 2.5 0 012.5 2.5v5a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 013 18.5v-5zm8 0a2.5 2.5 0 012.5-2.5h5a2.5 2.5 0 012.5 2.5v5a2.5 2.5 0 01-2.5 2.5h-5a2.5 2.5 0 01-2.5-2.5v-5z"/></svg>
              Sign up with Microsoft
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Or continue with email</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-12 bg-secondary border border-border rounded-lg pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Work Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 bg-secondary border border-border rounded-lg pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 bg-secondary border border-border rounded-lg pl-10 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {password.length > 0 && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`h-1 flex-1 rounded-full ${i <= strength.segments ? "bg-primary" : "bg-border"}`} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Password Strength: {strength.label}</p>
                </div>
              )}
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Continue to Workspace <ArrowRight size={18} />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary hover:underline font-medium">Sign In</Link>
          </p>

          <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-border">
            <span className="text-xs text-muted-foreground flex items-center gap-1"><Shield size={12} /> SOC2 TYPE II</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1"><Shield size={12} /> ISO 27001</span>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">© 2024 COGNIVEX AI. ALL RIGHTS RESERVED.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;

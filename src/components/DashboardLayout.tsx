import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BarChart3, Target, FileText, Settings, Bell, Search, HelpCircle } from "lucide-react";
import CognivexLogo from "./CognivexLogo";
import { Button } from "./ui/button";

const sidebarLinks = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Analytics", icon: BarChart3, href: "/analytics" },
  { label: "Milestones", icon: Target, href: "/milestones" },
  { label: "Reports", icon: FileText, href: "/assessment" },
  { label: "Settings", icon: Settings, href: "/dashboard" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 border-r border-border bg-background flex flex-col justify-between py-6 px-4 fixed h-full">
        <div>
          <Link to="/dashboard" className="mb-10 block px-2">
            <CognivexLogo size="sm" showSubtitle subtitle="Premium Analytics" />
          </Link>
          <nav className="flex flex-col gap-1">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <link.icon size={18} />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-4 px-2">
          <div>
            <p className="text-xs text-muted-foreground mb-2">STORAGE</p>
            <div className="w-full bg-secondary rounded-full h-1.5">
              <div className="bg-primary rounded-full h-1.5" style={{ width: "72%" }} />
            </div>
            <p className="text-xs text-muted-foreground mt-1">7.2 GB of 10 GB used</p>
          </div>
          <Link to="/solutions">
            <Button variant="cta" className="w-full" size="sm">Upgrade Plan</Button>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 ml-60">
        {/* Top Bar */}
        <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-background sticky top-0 z-40">
          <h2 className="font-display font-semibold text-foreground">Product Dashboard</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2">
              <Search size={16} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search insights..."
                className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none w-40"
              />
            </div>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Bell size={20} />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <HelpCircle size={20} />
            </button>
            <div className="flex items-center gap-2 ml-2">
              <span className="text-sm font-medium">Alex Chen</span>
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-xs font-bold">
                AC
              </div>
            </div>
          </div>
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

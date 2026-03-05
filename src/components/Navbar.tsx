import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CognivexLogo from "./CognivexLogo";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Technology", href: "/methodology" },
  { label: "Case Studies", href: "/solutions#case-studies" },
  { label: "About", href: "/#about" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/">
          <CognivexLogo />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/signin">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="cta" size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

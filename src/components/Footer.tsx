import { Link } from "react-router-dom";
import CognivexLogo from "./CognivexLogo";

const Footer = () => (
  <footer className="border-t border-border bg-background py-8">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <Link to="/">
        <CognivexLogo size="sm" />
      </Link>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
        <Link to="/methodology" className="hover:text-primary transition-colors">Technology</Link>
        <Link to="/solutions" className="hover:text-primary transition-colors">Case Studies</Link>
        <Link to="/" className="hover:text-primary transition-colors">About</Link>
      </div>
      <p className="text-xs text-muted-foreground">© 2024 Cognivex AI. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

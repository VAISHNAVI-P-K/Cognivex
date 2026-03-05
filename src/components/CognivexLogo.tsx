import { Sparkles } from "lucide-react";

interface CognivexLogoProps {
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  subtitle?: string;
}

const CognivexLogo = ({ size = "md", showSubtitle = false, subtitle }: CognivexLogoProps) => {
  const sizes = {
    sm: { icon: 20, text: "text-lg" },
    md: { icon: 24, text: "text-xl" },
    lg: { icon: 32, text: "text-2xl" },
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Sparkles size={sizes[size].icon} className="text-primary" />
      </div>
      <div>
        <span className={`font-display font-bold ${sizes[size].text} text-foreground`}>
          Cognivex <span className="gradient-text">AI</span>
        </span>
        {showSubtitle && subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default CognivexLogo;

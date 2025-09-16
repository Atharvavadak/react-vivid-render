import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "FEATURES", path: "/features" },
    { name: "ABOUT US", path: "/about" },
    { name: "HOW IT WORKS", path: "/how-it-works" },
  ];

  return (
    <nav className="flex items-center justify-between p-6 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          <div className="w-4 h-8 bg-primary rounded"></div>
          <div className="w-4 h-8 bg-primary rounded"></div>
          <div className="w-4 h-8 bg-primary rounded"></div>
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold text-foreground">FormFIT</h1>
          <p className="text-xs text-primary font-medium tracking-wider">REP POSTURE SMART</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-link ${
              location.pathname === item.path ? "text-primary" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Button className="login-button">LOGIN</Button>
      </div>
    </nav>
  );
};

export default Navigation;
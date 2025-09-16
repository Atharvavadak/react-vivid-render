import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-black text-foreground mb-6 leading-tight">
              COUNT REPS. CORRECT POSTURE.{" "}
              <span className="text-primary">TRAIN SMARTER</span>
            </h1>
            
            <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
              AI-powered workout assistant for accuracy, safety and result
            </p>
            
            <div className="flex space-x-6">
              <Link to="/get-started">
                <Button className="hero-button text-lg">GET STARTED</Button>
              </Link>
              <Button 
                variant="outline" 
                className="hero-button border-primary/50 text-primary hover:bg-primary/10 text-lg"
              >
                WATCH DEMO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
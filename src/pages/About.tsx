import Navigation from "@/components/Navigation";
import { Target, Shield, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "PRECISION",
      description: "Advanced AI technology for accurate rep counting and form analysis"
    },
    {
      icon: Shield,
      title: "SAFETY",
      description: "Real-time posture correction to prevent injuries and optimize performance"
    },
    {
      icon: Users,
      title: "COMMUNITY",
      description: "Supporting fitness enthusiasts of all levels in their journey"
    },
    {
      icon: Award,
      title: "EXCELLENCE",
      description: "Committed to delivering the highest quality fitness experience"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-black text-foreground mb-12">ABOUT US</h1>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">OUR MISSION</h2>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              FormFIT revolutionizes fitness training by combining cutting-edge AI technology 
              with expert knowledge to create smarter, safer, and more effective workouts. 
              We believe everyone deserves access to professional-grade form correction and 
              performance tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="feature-card">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">JOIN THE REVOLUTION</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Start your journey to smarter training today
            </p>
            <button className="hero-button">GET STARTED NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
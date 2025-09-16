import Navigation from "@/components/Navigation";
import { Clock, AlertTriangle, BarChart3, Rocket } from "lucide-react";
import fitnessEquipment from "@/assets/fitness-equipment.jpg";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "REAL-TIME REP COUNTER",
      description: "Accurate rep counting using advanced AI computer vision technology"
    },
    {
      icon: AlertTriangle,
      title: "POSTURE CORRECTION ALERTS",
      description: "Instant feedback to maintain proper form and prevent injuries"
    },
    {
      icon: BarChart3,
      title: "PROGRESS TRACKING",
      description: "Comprehensive analytics to monitor your fitness journey"
    },
    {
      icon: Rocket,
      title: "PERSONALIZED FEEDBACK",
      description: "Tailored recommendations based on your performance and goals"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div 
        className="relative min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${fitnessEquipment})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-6xl font-black text-foreground mb-20">FEATURES</h1>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="feature-card text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
import Navigation from "@/components/Navigation";
import { Camera, Activity, CheckCircle, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "TURN ON YOUR CAMERA",
      description: "Simply activate your device camera to begin the AI analysis"
    },
    {
      icon: Activity,
      title: "DO YOUR WORKOUT",
      description: "Perform your exercises while our AI monitors your form in real-time"
    },
    {
      icon: CheckCircle,
      title: "GET INSTANT FEEDBACK",
      description: "Receive immediate corrections and rep counts for optimal results"
    }
  ];

  const problems = [
    { issue: "WRONG POSTURE", consequence: "INJURIES" },
    { issue: "LOSING REP COUNT", consequence: "CONFUSION" }
  ];

  const solution = "WITH US: SAFER + SMARTER WORKOUTS";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div 
        className="relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-6xl font-black text-foreground mb-20">HOW IT WORKS</h1>
          
          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="feature-card text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Value Proposition */}
          <div className="mb-24">
            <h2 className="text-4xl font-black text-foreground mb-12">VALUE PREPOSITION</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Problems */}
              <div className="bg-card/20 border-2 border-red-500/40 rounded-2xl p-8">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-center justify-between mb-6 last:mb-0">
                    <div className="flex items-center space-x-4">
                      <X className="w-6 h-6 text-red-500" />
                      <span className="text-lg font-bold text-foreground">{problem.issue}</span>
                    </div>
                    <span className="text-red-400 font-medium">{problem.consequence}</span>
                  </div>
                ))}
              </div>

              {/* Solution */}
              <div className="bg-card/20 border-2 border-primary/40 rounded-2xl p-8 flex items-center">
                <div className="flex items-center space-x-4">
                  <Check className="w-8 h-8 text-primary" />
                  <span className="text-xl font-bold text-primary">{solution}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-5xl font-black text-foreground mb-6">
              START YOUR FITNESS{" "}
              <span className="text-primary">JOURNEY NOW!!</span>
            </h2>
            
            <div className="flex justify-center space-x-8">
              <Link to="/get-started">
                <Button className="hero-button text-lg">GET STARTED</Button>
              </Link>
              
              <div className="bg-card/30 border border-primary/40 rounded-xl p-6 max-w-xs">
                <p className="text-primary font-bold text-lg">DEMO VIDEO COMING SOON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
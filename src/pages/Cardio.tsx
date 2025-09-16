import Navigation from "@/components/Navigation";
import { Heart, Timer, Zap } from "lucide-react";

const Cardio = () => {
  const cardioExercises = [
    { name: "TREADMILL", duration: "15 min", intensity: "Medium" },
    { name: "CYCLING", duration: "20 min", intensity: "High" },
    { name: "ROWING", duration: "10 min", intensity: "High" },
    { name: "ELLIPTICAL", duration: "15 min", intensity: "Medium" },
    { name: "STAIR CLIMBER", duration: "10 min", intensity: "High" },
    { name: "BURPEES", duration: "5 min", intensity: "High" },
    { name: "MOUNTAIN CLIMBERS", duration: "3 min", intensity: "Medium" },
    { name: "JUMP ROPE", duration: "5 min", intensity: "Medium" }
  ];

  const getIntensityIcon = (intensity: string) => {
    switch(intensity) {
      case "High": return <Zap className="w-4 h-4 text-red-400" />;
      case "Medium": return <Timer className="w-4 h-4 text-yellow-400" />;
      default: return <Heart className="w-4 h-4 text-green-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-6xl font-black text-foreground mb-8">CARDIO</h1>
        <p className="text-xl text-primary mb-20">Boost your cardiovascular health and endurance</p>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cardioExercises.map((exercise, index) => (
            <div key={index} className="workout-card aspect-[4/5] flex flex-col items-center justify-between group cursor-pointer">
              <div className="flex-1 flex items-center justify-center">
                <Heart className="w-12 h-12 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </div>
              
              <div className="text-center p-4 w-full">
                <h3 className="text-sm font-bold text-foreground mb-2">
                  {exercise.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {getIntensityIcon(exercise.intensity)}
                  <span className="text-xs text-muted-foreground">{exercise.intensity}</span>
                </div>
                <p className="text-xs text-primary">
                  {exercise.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="hero-button text-lg mr-4">START CARDIO SESSION</button>
          <button className="hero-button bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg">
            CUSTOMIZE ROUTINE
          </button>
          <p className="text-foreground/60 mt-6">
            AI will monitor your heart rate and provide real-time coaching
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardio;
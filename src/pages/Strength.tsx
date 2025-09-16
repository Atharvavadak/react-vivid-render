import Navigation from "@/components/Navigation";
import { Dumbbell, Target, TrendingUp } from "lucide-react";

const Strength = () => {
  const strengthExercises = [
    { name: "BENCH PRESS", target: "Chest", reps: "3x8-12" },
    { name: "SQUATS", target: "Legs", reps: "3x10-15" },
    { name: "DEADLIFTS", target: "Back", reps: "3x6-8" },
    { name: "SHOULDER PRESS", target: "Shoulders", reps: "3x8-12" },
    { name: "PULL UPS", target: "Back", reps: "3x5-10" },
    { name: "LUNGES", target: "Legs", reps: "3x10 each" },
    { name: "BICEP CURLS", target: "Arms", reps: "3x12-15" },
    { name: "TRICEP DIPS", target: "Arms", reps: "3x10-12" },
    { name: "PLANKS", target: "Core", reps: "3x30-60s" },
    { name: "RUSSIAN TWISTS", target: "Core", reps: "3x20" }
  ];

  const getTargetColor = (target: string) => {
    const colors: { [key: string]: string } = {
      "Chest": "text-blue-400",
      "Legs": "text-red-400", 
      "Back": "text-green-400",
      "Shoulders": "text-yellow-400",
      "Arms": "text-purple-400",
      "Core": "text-pink-400"
    };
    return colors[target] || "text-primary";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-6xl font-black text-foreground mb-8">STRENGTH TRAINING</h1>
        <p className="text-xl text-primary mb-20">Build muscle and increase your power</p>
        
        <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {strengthExercises.map((exercise, index) => (
            <div key={index} className="workout-card aspect-square flex flex-col items-center justify-between group cursor-pointer">
              <div className="flex-1 flex items-center justify-center">
                <Dumbbell className="w-10 h-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </div>
              
              <div className="text-center p-3 w-full">
                <h3 className="text-xs font-bold text-foreground mb-2">
                  {exercise.name}
                </h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Target className="w-3 h-3" />
                  <span className={`text-xs ${getTargetColor(exercise.target)}`}>
                    {exercise.target}
                  </span>
                </div>
                <p className="text-xs text-primary">
                  {exercise.reps}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="hero-button text-lg mr-4">START STRENGTH SESSION</button>
          <button className="hero-button bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg">
            TRACK PROGRESS
          </button>
          <p className="text-foreground/60 mt-6">
            AI will ensure perfect form and count your reps automatically
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="feature-card text-center">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">Progressive Overload</h3>
            <p className="text-sm text-muted-foreground">Automatically adjust weights based on your progress</p>
          </div>
          <div className="feature-card text-center">
            <Target className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">Perfect Form</h3>
            <p className="text-sm text-muted-foreground">Real-time posture correction for maximum results</p>
          </div>
          <div className="feature-card text-center">
            <Dumbbell className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">Smart Tracking</h3>
            <p className="text-sm text-muted-foreground">Automatic rep counting and performance analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
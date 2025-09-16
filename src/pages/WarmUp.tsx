import Navigation from "@/components/Navigation";
import { Play } from "lucide-react";

const WarmUp = () => {
  const exercises = [
    { name: "SKIPPING ROPE", duration: "2 min" },
    { name: "JUMPING JACKS", duration: "1 min" },
    { name: "HIGH KNEES", duration: "1 min" },
    { name: "JOGGING IN PLACE", duration: "2 min" },
    { name: "JOGGING IN PLACE", duration: "2 min" },
    { name: "ARM CIRCLES", duration: "30 sec" },
    { name: "LEG SWINGS", duration: "30 sec" },
    { name: "HIP CIRCLES", duration: "30 sec" },
    { name: "SHOULDER ROLLS", duration: "30 sec" },
    { name: "ARM CIRCLES", duration: "30 sec" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-6xl font-black text-foreground mb-20">WARM UPS</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {exercises.map((exercise, index) => (
            <div key={index} className="workout-card aspect-square flex flex-col items-center justify-between group">
              <div className="flex-1 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="text-center p-4">
                <h3 className="text-sm font-bold text-foreground mb-2">
                  {exercise.name}
                </h3>
                <p className="text-xs text-primary">
                  {exercise.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="hero-button text-lg">START WARM UP ROUTINE</button>
          <p className="text-foreground/60 mt-4">
            Complete all exercises to prepare your body for the main workout
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarmUp;
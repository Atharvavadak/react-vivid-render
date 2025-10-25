import Navigation from "@/components/Navigation";
import { Play } from "lucide-react";

const WarmUp = () => {
  const exercises = [
    { name: "SKIPPING ROPE", duration: "2 min", gif: "/assets/gifs/warmup_skipping_rope.gif" },
    { name: "JUMPING JACKS", duration: "1 min", gif: "/assets/gifs/warmup_jumping_jacks.gif" },
    { name: "HIGH KNEES", duration: "1 min", gif: "/assets/gifs/warmup_high_knees.gif" },
    { name: "JOGGING IN PLACE", duration: "2 min", gif: "/assets/gifs/warmup_jogging_in_place.gif" },
    { name: "JOGGING IN PLACE", duration: "2 min", gif: "/assets/gifs/warmup_jogging_in_place.gif" },
    { name: "ARM CIRCLES", duration: "30 sec", gif: "/assets/gifs/warmup_arm_circles.gif" },
    { name: "LEG SWINGS", duration: "30 sec", gif: "/assets/gifs/warmup_leg_swings.gif" },
    { name: "HIP CIRCLES", duration: "30 sec", gif: "/assets/gifs/warmup_hip_circles.gif" },
    { name: "SHOULDER ROLLS", duration: "30 sec", gif: "/assets/gifs/warmup_shoulder_rolls.gif" },
    { name: "ARM CIRCLES", duration: "30 sec", gif: "/assets/gifs/warmup_arm_circles.gif" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-6xl font-black text-foreground mb-20">WARM UPS</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {exercises.map((exercise, index) => (
            <div 
              key={index} 
              className="workout-card aspect-square flex flex-col items-center justify-between group hover:scale-105 hover:border-primary hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300"
            >
              <div className="w-full h-32 overflow-hidden rounded-t-2xl bg-muted/20">
                <img 
                  src={exercise.gif} 
                  alt={exercise.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-6 h-6 text-primary" />
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
import { useState, useEffect } from "react";
import { Camera, CheckCircle, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";

const PostureTracker = () => {
  const [leftReps, setLeftReps] = useState(8);
  const [rightReps, setRightReps] = useState(7);
  const [setCount, setSetCount] = useState(1);
  const [totalSets] = useState(3);
  const [targetReps] = useState(10);
  const [postureStatus, setPostureStatus] = useState<"perfect" | "adjust">("perfect");
  
  const [postureIndicators, setPostureIndicators] = useState({
    spine: true,
    shoulder: true,
    knees: false
  });

  const completedReps = Math.min(leftReps, rightReps);
  const repsRemaining = targetReps - completedReps;
  const progressPercentage = (completedReps / targetReps) * 100;

  // Simulate posture changes for demo
  useEffect(() => {
    const interval = setInterval(() => {
      const allCorrect = Math.random() > 0.3;
      setPostureStatus(allCorrect ? "perfect" : "adjust");
      setPostureIndicators({
        spine: Math.random() > 0.2,
        shoulder: Math.random() > 0.2,
        knees: Math.random() > 0.3
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          POSTURE TRACKING
        </h1>
        <p className="text-center text-muted-foreground mb-8">Real-time Form Analysis</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Left Panel - Reps */}
          <div className="space-y-6">
            {/* Left Reps */}
            <div className="relative bg-card/30 border-2 border-primary/40 rounded-2xl p-6 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(126,211,33,0.3)]">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl"></div>
              <div className="relative">
                <p className="text-sm text-muted-foreground mb-2">LEFT SIDE</p>
                <p className="text-5xl font-bold text-primary">{leftReps}</p>
                <p className="text-sm text-foreground/60 mt-1">reps completed</p>
              </div>
            </div>

            {/* Right Reps */}
            <div className="relative bg-card/30 border-2 border-primary/40 rounded-2xl p-6 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(126,211,33,0.3)]">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl"></div>
              <div className="relative">
                <p className="text-sm text-muted-foreground mb-2">RIGHT SIDE</p>
                <p className="text-5xl font-bold text-primary">{rightReps}</p>
                <p className="text-sm text-foreground/60 mt-1">reps completed</p>
              </div>
            </div>
          </div>

          {/* Center Panel - Camera Feed */}
          <div className="lg:col-span-1">
            <div className="relative bg-black border-2 border-primary/40 rounded-2xl overflow-hidden aspect-[3/4] hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(126,211,33,0.3)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <Camera className="w-16 h-16 text-primary/40 mb-4" />
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Please ensure your face and body are fully visible to the camera for best tracking results.
                </p>
                <div className="mt-6 w-full max-w-xs h-48 border-2 border-dashed border-primary/30 rounded-xl flex items-center justify-center">
                  <span className="text-primary/50 text-xs">CAMERA FEED AREA</span>
                </div>
              </div>
              
              {/* Camera status indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/30">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs text-primary">LIVE</span>
              </div>
            </div>
          </div>

          {/* Right Panel - Analysis */}
          <div className="space-y-6">
            {/* Posture Analysis */}
            <div className={`relative border-2 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 ${
              postureStatus === "perfect" 
                ? "bg-primary/10 border-primary hover:shadow-[0_0_30px_rgba(126,211,33,0.3)]" 
                : "bg-card/30 border-destructive/40 hover:border-destructive"
            }`}>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-muted-foreground">POSTURE ANALYSIS</p>
                  {postureStatus === "perfect" ? (
                    <CheckCircle className="w-6 h-6 text-primary" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-destructive" />
                  )}
                </div>
                <p className={`text-2xl font-bold ${postureStatus === "perfect" ? "text-primary" : "text-destructive"}`}>
                  {postureStatus === "perfect" ? "Perfect Form" : "Adjust Posture"}
                </p>
                
                {/* Posture Indicators */}
                <div className="mt-4 space-y-2">
                  {Object.entries(postureIndicators).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between text-sm">
                      <span className="text-foreground/80 uppercase">{key}</span>
                      <div className={`w-3 h-3 rounded-full ${value ? "bg-primary" : "bg-destructive"}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Set Progress */}
            <div className="relative bg-card/30 border-2 border-primary/40 rounded-2xl p-6 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(126,211,33,0.3)]">
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-muted-foreground">SET PROGRESS</p>
                  <p className="text-xs text-primary font-semibold">Set {setCount} of {totalSets}</p>
                </div>
                
                <Progress value={progressPercentage} className="mb-3 h-3" />
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/80">{completedReps} / {targetReps} reps</span>
                  <span className="text-primary font-semibold">{repsRemaining} remaining</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card/20 border border-primary/30 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">{completedReps}</p>
                <p className="text-xs text-muted-foreground mt-1">Total Reps</p>
              </div>
              <div className="bg-card/20 border border-primary/30 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">95%</p>
                <p className="text-xs text-muted-foreground mt-1">Accuracy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-primary/20 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-xl px-8 py-3 font-bold tracking-wide backdrop-blur-sm">
            PAUSE TRACKING
          </button>
          <button className="bg-card/30 border-2 border-primary/40 text-foreground hover:border-primary transition-all duration-300 rounded-xl px-8 py-3 font-bold tracking-wide backdrop-blur-sm">
            END SESSION
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostureTracker;

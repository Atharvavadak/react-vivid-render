import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Users, Heart, Dumbbell } from "lucide-react";
import groupWorkout from "@/assets/group-workout.jpg";

const GetStarted = () => {
  const workoutTypes = [
    {
      title: "WARM UP",
      icon: Users,
      description: "Prepare your body for exercise",
      path: "/warm-up",
      bgPosition: "left"
    },
    {
      title: "CARDIO",
      icon: Heart,
      description: "Boost your cardiovascular health",
      path: "/cardio",
      bgPosition: "center"
    },
    {
      title: "STRENGTH TRAINING",
      icon: Dumbbell,
      description: "Build muscle and increase power",
      path: "/strength",
      bgPosition: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div 
        className="relative min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${groupWorkout})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-6xl font-black text-foreground mb-20 text-center">
            SELECT YOUR WORKOUT
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {workoutTypes.map((workout, index) => {
              const IconComponent = workout.icon;
              return (
                <Link key={index} to={workout.path}>
                  <div className="workout-card h-96 flex flex-col justify-end relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                    
                    <div className="absolute top-6 right-6 z-20">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div className="relative z-20 p-6">
                      <h3 className="text-2xl font-black text-primary mb-2 transform -rotate-90 origin-bottom-left absolute left-6 bottom-20">
                        {workout.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-foreground/80">
              Choose your workout type to begin your AI-powered training session
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
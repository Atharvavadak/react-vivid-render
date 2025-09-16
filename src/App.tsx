import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import GetStarted from "./pages/GetStarted";
import WarmUp from "./pages/WarmUp";
import Cardio from "./pages/Cardio";
import Strength from "./pages/Strength";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/warm-up" element={<WarmUp />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/strength" element={<Strength />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

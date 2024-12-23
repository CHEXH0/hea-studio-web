import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <video className="absolute inset-0 object-cover w-full h-full opacity-60" autoPlay loop muted>
        <source src="/lovable-uploads/shaman.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 opacity-0 animate-fade-in technical-border p-8 bg-white/80 backdrop-blur-sm" 
               style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="technical-label">Recording Studio</p>
                <h1 className="handwritten text-4xl md:text-6xl mb-2">HechoEnAmerica</h1>
              </div>
              <p className="technical-label">_2024</p>
            </div>
            
            <div className="space-y-4">
              <p className="technical-label">La Music Es Medicine</p>
              <p className="text-xl md:text-2xl text-black/70 font-mono">
              ✽professional recording studio crafting the sound of tomorrow✽
              </p>
            </div>
          </div>

          <div className="space-x-4 opacity-0 animate-fade-up" 
               style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <Button
              onClick={() => document.getElementById('artists').scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-black text-white hover:bg-black/90 font-mono"
            >
              Explore Artists
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black/5 font-mono"
            >
              Book Studio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
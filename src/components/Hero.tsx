import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-background" />

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Where Music Comes to Life
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Professional recording studio crafting the sound of tomorrow
            </p>
          </div>

          {/* Waveform Animation */}
          <div className="waveform-container justify-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="waveform-bar"
                style={{ "--delay": i } as React.CSSProperties}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-x-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <Button
              size="lg"
              className="bg-studio hover:bg-studio/90"
            >
              Explore Artists
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-studio text-studio hover:bg-studio/10"
            >
              Book Studio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
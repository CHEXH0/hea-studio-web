import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-white">
              HechoEnAmerica
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#artists" className="nav-item">
              Artists
            </a>
            <a href="#listen" className="nav-item">
              Listen Now
            </a>
            <a href="#shop" className="nav-item">
              Shop
            </a>
            <a href="#contact" className="nav-item">
              Contact
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg rounded-lg mt-2">
              <a
                href="#artists"
                className="block px-3 py-2 text-white hover:bg-studio/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Artists
              </a>
              <a
                href="#listen"
                className="block px-3 py-2 text-white hover:bg-studio/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Listen Now
              </a>
              <a
                href="#shop"
                className="block px-3 py-2 text-white hover:bg-studio/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white hover:bg-studio/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
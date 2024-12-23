import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ArtistGrid } from "@/components/ArtistGrid";
import { MusicPlatforms } from "@/components/MusicPlatforms";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <ArtistGrid />
      <MusicPlatforms />
      <ContactForm />
    </div>
  );
};

export default Index;
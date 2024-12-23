import { useState } from "react";
import { ArtistCard } from "./ArtistCard";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const ARTISTS = [
  {
    name: "Luna Eclipse",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    genre: "Electronic",
    bio: "Pioneering the future of electronic music with innovative soundscapes and rhythmic exploration.",
    spotifyUrl: "#",
  },
  {
    name: "Sonic Wave",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    genre: "Hip Hop",
    bio: "Breaking boundaries in hip hop with unique beats and powerful lyrics.",
    spotifyUrl: "#",
  },
  {
    name: "Crystal Voice",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    genre: "Pop",
    bio: "Creating chart-topping pop hits with unforgettable melodies.",
    spotifyUrl: "#",
  },
];

export const ArtistGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArtists = ARTISTS.filter(
    (artist) =>
      artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="artists" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Artists</h2>
          <p className="text-gray-400 mb-8">
            Discover the talented artists shaping the future of music at our studio
          </p>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search artists by name or genre..."
              className="pl-10 bg-white/5 border-white/10 focus:border-studio"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.name} {...artist} />
          ))}
        </div>
      </div>
    </section>
  );
};
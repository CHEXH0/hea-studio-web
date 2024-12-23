import { useState } from "react";
import { ArtistCard } from "./ArtistCard";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const ARTISTS = [
  {
    name: "CHEXHO",
    image: "/laptop-pics/Chexho.png",
    genre: "Riverside, California",
    bio: "Planting the seeds for the future of musica medicina with a passion for the art of healing through music.",
    spotifyUrl: "https://open.spotify.com/artist/51oO373JL3YH8dvT6v94xg?si=3SXqEjWHTWiolUFoaHsYhA",
  },
  
  {
    name: "Jeisson Díaz Santiago",
    image: "/laptop-pics/Jiesson Diaz.jpg",
    genre: "Bogotá, Colombia",
    bio: "Pioneering the future of musica medicina with native soundscapes and mystical rhythmic explorations.",
    spotifyUrl: "#",
  },
  
  {
    name: "Nick Zinchenko",
    image: "/laptop-pics/Nick Zinchenko.jpg",
    genre: "Luhansk, Ukraine",
    bio: "Breaking boundaries in beat-making with innovative waves and powerful engineering.",
    spotifyUrl: "https://open.spotify.com/artist/5MNMLU5i9pBJCNh9kEP9F5?si=Mw8UPTSvQA61DfpFZdYgcA",
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
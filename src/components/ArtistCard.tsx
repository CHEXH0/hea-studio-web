import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Music } from "lucide-react";

interface ArtistCardProps {
  name: string;
  image: string;
  genre: string;
  bio: string;
  spotifyUrl?: string;
}

export const ArtistCard = ({ name, image, genre, bio, spotifyUrl }: ArtistCardProps) => {
  return (
    <Card className="glass-card overflow-hidden group">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Button
            variant="secondary"
            className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
            onClick={() => spotifyUrl && window.open(spotifyUrl, "_blank")}
          >
            <Music className="mr-2 h-4 w-4" />
            Listen on Spotify
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <p className="text-sm text-gray-400">{genre}</p>
          </div>
          {spotifyUrl && (
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              onClick={() => window.open(spotifyUrl, "_blank")}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </div>
        <p className="text-sm text-gray-300 line-clamp-3">{bio}</p>
      </div>
    </Card>
  );
};
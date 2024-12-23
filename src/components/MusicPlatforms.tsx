import { Button } from "./ui/button";

const PLATFORMS = [
  {
    name: "Spotify",
    icon: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",
    url: "#",
  },
  {
    name: "Apple Music",
    icon: "/laptop-pics/Apple-Music.png",
    url: "#",
  },
  {
    name: "YouTube Music",
    icon: "/laptop-pics/YouTube-Music.png",
    url: "#",
  },
];

export const MusicPlatforms = () => {
  return (
    <section id="listen" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-purple-500">Listen Now</h2>
          <p className="text-white">
            Stream our music on your favorite platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {PLATFORMS.map((platform) => (
            <Button
              key={platform.name}
              variant="outline"
              className="h-auto p-6 bg-grey/5 hover:bg-purple-500 border-white/10 group"
              onClick={() => window.open(platform.url, "_blank")}
            >
              <div className="w-full space-y-4">
                <img
                  src={platform.icon}
                  alt={platform.name}
                  className="h-8 object-contain mx-auto filter brightness-90 group-hover:brightness-100 transition-all"
                />
                <span className="block text-sm text-gray-400 group-hover:text-white">
                  Listen on {platform.name}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
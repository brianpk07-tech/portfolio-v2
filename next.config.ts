import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <-- Ajoutez cette ligne magique
  images: {
    unoptimized: true, // <-- Ajoutez aussi ça pour éviter les bugs d'images sur GitHub
  },
  basePath: '/portfolio-v2', // <-- AJOUTE CETTE LIGNE (avec le nom exact de ton dossier GitHub)
};

export default nextConfig;
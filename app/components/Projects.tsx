"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[]; // Modifié en tableau pour gérer le carrousel
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Developpement Web – Site de concession",
    description: "J'ai toujours aimé les voitures, dans mon temps libre pendant mon année de seconde, j'ai développé un site de concession automobile tout en apprenant le html, css et javascript à ce moment là.",
    images: ["/projects/1-1.png", "/projects/1-2.png", "/projects/1-5.png"],
  },
  {
    id: 2,
    title: "Modélisation 3D – Reproduction de Los Angeles",
    description: "Depuis plusieurs années, je modélise en 3D via l'outil blender, en 2025 j'ai commencé une reproduction miniaturisée de la ville de los angeles aux Etats Unis.",
    images: ["/projects/2-1.jpeg", "/projects/2-2.jpeg", "/projects/2-3.jpeg", "/projects/2-4.jpeg", "/projects/2-5.jpeg", "/projects/2-6.jpeg",],
  },
  {
    id: 3, // ID unique
    title: "Etude de Marché – Michelin & Apple",
    description: "Dans le cadre de mon bachelor, j'ai fait des études de marchés poussés en utilisant différents type d'outils d'analyse tels que le swot, pestel, matrice d'Eisenhower, 4P... J'ai étudié le cas de Apple ainsi que celui de Michelin.",
    images: ["/projects/3-1.png", "/projects/3-2.png","/projects/3-3.png", "/projects/3-4.png", "/projects/3-5.png", "/projects/3-6.png", "/projects/3-7.png", "/projects/3-8.png", "/projects/3-9.png", "/projects/3-10.png"],
  },
  {
    id: 4, // ID unique
    title: "Développement d'une Méssagerie – Python",
    description: "Egalement dans le cadre de mon bachelor, j'ai dévellopé une messagerie local en python qui théoriquement fait communiquer deux ordinateurs entres eux, sauvegarde les conversations dans des logs, ainsi qu'un système de transfert d'image.",
    images: ["/projects/4-1.png", "/projects/4-2.png", "/projects/4-3.png", "/projects/4-4.png", "/projects/4-5.png",],
  },
  {
    id: 5, // ID unique
    title: "Projet de lancement d'une App – ChatBot Orpi",
    description: "Afin de valider mon cours d'analyse du besoin, nous avons dû préparer le lancement d'un projet informatique, en l'occurence mon projet consistait en l'ajout d'une ia dans des sites de d'agence immobillière afin de pouvoir trouver plus simplement le bien qui nous correspond le mieux en discutant avec l'ia. J'ai dû réaliser: l'analyse du besoin, validation cadrage, réalisation, recette, communication, lancement, suivi .",
    images: ["/projects/5-1.png", "/projects/5-2.png","/projects/5-3.png", "/projects/5-4.png", "/projects/5-5.png", "/projects/5-6.png", "/projects/5-7.png", "/projects/5-8.png", "/projects/5-9.png", "/projects/5-10.png", "/projects/5-11.png" , "/projects/5-12.png" , "/projects/5-13.png"],
  }, 
];

// Sous-composant pour gérer les images et les flèches de chaque projet indépendamment 
function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl group">
      {/* Container Image */}
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`${title} - image ${currentIndex + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-all duration-300"
        />
      </div>

      {/* Flèches de navigation superposées en bas de l'image */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-900/80 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md z-30 shadow-xl">
        <button
          onClick={handlePrev}
          className="text-white/70 hover:text-purple-400 transition-colors p-1"
          aria-label="Image précédente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <span className="text-sm text-white font-mono min-w-[40px] text-center select-none">
          {currentIndex + 1} / {images.length}
        </span>

        <button
          onClick={handleNext}
          className="text-white/70 hover:text-purple-400 transition-colors p-1"
          aria-label="Image suivante"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className="mb-28 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Mes Projets
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  
                  {/* Description Card */}
                  <div className="relative z-10 mb-6">
                    <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                      isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                    }`}>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Website link */}
                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200"
                        aria-label="Visit project website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {/* Image Content (Appel du composant Carrousel) */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <ProjectCarousel images={project.images} title={project.title} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
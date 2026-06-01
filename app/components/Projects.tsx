import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Developpement Web – Site de concession",
    description: "J'ai toujours aimé les voitures, dans mon temps libre pendant mon année de seconde, j'ai développé un site de concession automobile tout en apprenant le html, css et javascript à ce moment là.",
    image: "/projects/project-1.png",
  },
  {
    id: 2,
    title: "Modélisation 3D – Reproduction de Los Angeles",
    description: "Depuis plusieurs années, je modélise en 3D via l'outil blender, en 2025 j'ai commencé une reproduction miniaturisée de la ville de los angeles aux états unis.",
    image: "/projects/project-2.png",
  },
  {
    id: 1,
    title: "Etude de Marché – Michelin & Apple",
    description: "Dans le cadre de mon bachelor, j'ai fait des études de marchés poussés en utilisant différents type d'outils d'analyse tels que le swot, pestel, matrice d'Eisenhower, 4P... J'ai étudié le cas de Apple ainsi que celui de Michelin.",
    image: "/projects/project-1.png",
  },
  {
    id: 2,
    title: "Développement d'une Méssagerie – Python",
    description: "Egalement dans le cadre de mon bachelor, j'ai dévellopé une messagerie local en python qui théoriquement fait communiquer deux ordinateurs entres eux, sauvegarde les conversations dans des logs, ainsi qu'un système de transfert d'image.",
    image: "/projects/project-2.png",
  },
  {
    id: 1,
    title: "Projet de lancement d'une App – Préparation",
    description: "Afin de valider mon cours d'analyse du besoin, nous avons dû préparer le lancement d'un projet informatique, en l'occurence mon projet consistait en l'ajout d'une ia dans des sites de d'agence immobillière afin de pouvoir trouver plus simplement le bien qui nous correspond le mieux en discutant avec l'ia. J'ai dû réaliser: l'analyse du besoin, validation cadrage, réalisation, recette, communication, lancement, suivi .",
    image: "/projects/project-1.png",
  },
  
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className="mb-20 last:mb-0">
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
                  {/* Description Card - extends over image */}
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

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


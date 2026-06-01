import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Serveur - Pizzeria Il Pescatore",
    description: "De 2020 à 2022 j'ai été serveur dans une pizzeria, cela m'a appris à gérer la pression d'avoir beaucoup de clients à la fois, à developper mon relationnel et mon service client. ",
    icon: "/cards/card-2.png",
  },
  {
    id: 2,
    title: "Developpeur Web - Stage de 2 mois",
    description: "Dans le cadre d'un stage à l'étranger imposé par mon école, j'ai travaillé deux mois comme développeur web pour une association caritative en croatie où j'avais pour mission d'ajouter un système d'inscripiton et de suivi directement sur leur site à la place d'un forms et de google sheet.",
    icon: "/cards/card-3.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Experience Professionelle
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


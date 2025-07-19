import Image from "next/image";
import { WobbleCard } from "./components/ui/wobble-card";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { Timeline } from "./components/ui/timeline";
import { FocusCards } from "./components/ui/focus-cards";
import BackgroundBlobs from "./components/ui/BackgroundBlobs";
import { Header } from "./components/ui/Header";


export default function Home() {
  const timelineData = [
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-6 text-xs font-normal text-neutral-200 md:text-sm">
            Début de mes études en informatique, avec une passion pour le développement web.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="Début études"
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="Projet étudiant"
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-6 text-xs font-normal text-neutral-200 md:text-sm">
            Réalisation de plusieurs projets en React, découverte de Next.js et premiers pas avec Tailwind CSS.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="Projet React"
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="Interface utilisateur"
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            Stage en entreprise, montée en compétences sur les API, le responsive design, et les composants UI réutilisables.
          </p>
          <ul className="text-xs text-neutral-300 list-disc list-inside">
            <li>Création d’un design system interne</li>
            <li>Amélioration de la performance</li>
            <li>Tests avec Cypress et Jest</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            En recherche active d’une alternance pour continuer à progresser tout en travaillant sur des projets concrets.
          </p>
          <TextGenerateEffect words="Disponible dès maintenant pour relever de nouveaux défis 🚀" />
        </div>
      ),
    },
  ];


  const cards = [
    {
      title: "Miamateur",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Smart Vision",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "AI Recognition",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Maxi Asso",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Locomotive",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sedistock",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];


  return (

    <div className="min-h-screen bg-gradient-to-b from-white-50 to-black-100 text-gray-900 overflow-hidden">
      <Header />
 <main className="pt-20 min-h-screen bg-[rgb(242,230,215)]">
      <div className="text-center space-y-6 p-8">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-300 shadow-lg">
            <img
              src="/profile-picture.jpg"
              alt="Mon visage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-lg mx-auto text-left">
          <h1 className="text-5xl font-poppins text-[rgb(41,37,36)] mb-4">
            Théotime Huybrechts
          </h1>
          <p className="text-xl text-gray-600">
            Software Engineer Studying at Efrei
          </p>
        </div>
        <TextGenerateEffect words="À la recherche d'une alternance" />

        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:opacity-90 transition-opacity mb-120">
          Commencer
        </button>
        <WobbleCard>
          <div className="text-center text-white">
            <h2 className="text-2xl font-semibold">Card Content</h2>
            <p>Voici un contenu pour la carte avec un effet de mouvement !</p>
          </div>
        </WobbleCard>
        <div className="mt-12 w-full max-w-5xl">
          <Timeline data={timelineData} />
        </div>
        <div className="mt-16 w-full max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Mes projets</h2>
          <FocusCards cards={cards} />
        </div>
      </div>
      </main>
    </div>
  );
}
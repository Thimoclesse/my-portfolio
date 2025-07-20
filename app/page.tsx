import Image from "next/image";
import { WobbleCard } from "./components/ui/wobble-card";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { Timeline } from "./components/ui/timeline";
import { FocusCards } from "./components/ui/focus-cards";
import BackgroundBlobs from "./components/ui/BackgroundBlobs";
import { Header } from "./components/ui/Header";
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card";
import { ScrollLinkedUnderline } from "./components/ui/ScrollAnimatedUnderline";



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
      <main className="pt-20 min-h-screen">
        <div className="text-center space-y-6 p-8">
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-orange-300 shadow-lg mb-10">
              <img
                src="/profile-picture.jpg"
                alt="Mon visage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl mx-auto font-poppins text-[rgb(41,37,36)] mb-4">
            Théotime Huybrechts
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-600 mb-10">
            <div className="relative inline-block">
<div className="flex justify-center text-gray-600 mb-10">
<p className="text-4xl text-left flex items-center flex-wrap">
  <span className="mr-2">Student</span>
  <ScrollLinkedUnderline /> 
    <span className="ml-2">learning at Efrei</span>
  <img src="/logo-efrei.svg" alt="Logo" className="h-8 w-8 ml-2" />
</p>
</div>
            </div>
          </div>
          
          <div className="mb-20" />
  <CardContainer className="inter-var">
<CardBody className="bg-[#292524] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-black/[0.1]">

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          À la recherche d'une Alternance
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Pour une durée de 1 an à partir de novembre 2025
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src="https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2023/06/23/node_426318/39646530/public/2023/06/23/a_chaque_alternance_son_contrat.jpg?itok=-FqhjJGF1687553433"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            En savoir plus
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Me contacter
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
            {/* <WobbleCard>
              À la recherche d'une Alternance
              <div className="text-center text-gray-600 ">
                <TextGenerateEffect 
                  words="" 
                  boldWords={["alternance"]}
                  fontWeight={700}
                />
              </div>
            </WobbleCard> */}
          <div className="mb-40" />

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
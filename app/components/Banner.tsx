"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["Étudiant En Ingénierie", "Développeur Python & Web", "Marketeur Digital"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-30 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Left side - Text content */}
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden  -top-150 z-10">
                <div className="relative inline-block ">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative">
                    <p className="text-white text-lg whitespace-nowrap">
                      Bonjour! Je suis{" "}
                      <span className="text-purple-400">Brian Parkansky</span>
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>
              <Image
                src="/assets/me.png"
                alt="Brian Parkansky - Software Engineer and Designer"
                width={300}
                height={300}
                className=" max-w-md absolute"
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <Image
                src="/assets/me-glow.png"
                alt="Brian Parkansky - Software Engineer and Designer"
                width={300}
                height={300}
                className="max-w-md "
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
          </div>
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute "
                style={{ left: "-100px", top: "-50px", width: "auto", height: "auto" }}
              />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-white text-lg">
                  Bonjour! Je suis{" "}
                  <span className="text-purple-400">Brian Parkansky</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>
            <div className="">
              <p className="text-2xl"> Un étudiant qui </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Juge un livre
                <br /> à sa{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    couverture
                  </span>
                </span>
                ...
              </h1>
              <p className="text-md text-white/80">
                Après tout, si la couverture ne vous impressionne pas, qu'est-ce qui le pourrait ?
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-15 text-center lg:text-left">
          <p className="text-5xl text-white font-bold">
            Je suis un {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Actuellement, étudiant en</span>
              <span className="text-blue-400 font-semibold">Ingénierie Data Sciences et Management</span>
            </span>
          </p>
          <p className="text-lg text-white/80 max-w-2xl mt-15 mx-auto lg:mx-0">
            Doté d’un bon relationnel et du sens du service, je me positionne à la croisée de la technique et du business. Capable aussi bien de coder des sites web et des applications en Python que de piloter des études de marché complexes, je mets cette double compétence au service de projets numériques innovants.
          </p>
        </div>
      </div>
    </section>
  );
}

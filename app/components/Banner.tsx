"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["Software Engineer", "UI/UX Designer", "React Native Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-36 pb-12 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6 text-center lg:text-left w-full">
            {/* Desktop & Mobile Hello badge */}
            <div className="relative inline-block mb-4">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute hidden lg:block"
                style={{ left: "-100px", top: "-50px", width: "auto", height: "auto" }}
              />
              <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full lg:bg-transparent lg:border-none lg:p-0">
                <p className="text-white text-lg">
                  Bonjour! Je suis{" "}
                  <span className="text-purple-400 font-semibold">Brian Parkansky</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-2xl text-white/90"> Un étudiant qui </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Juge un livre
                <br /> à sa{" "}
                <span className="relative inline-block z-10 px-2">
                  <Image 
                    src="/assets/circle.png" 
                    alt="Circle" 
                    width={320} 
                    height={120} 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[140%] max-w-none -z-10 object-contain" 
                  />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    couverture
                  </span>
                </span>
                ...
              </h1>
              <p className="text-md lg:text-lg text-white/80 max-w-lg mx-auto lg:mx-0 pt-2">
                Après tout, si la couverture ne vous impressionne pas, qu'est-ce qui le pourrait ?
              </p>
            </div>
          </div>

          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto mb-8 lg:mb-0">
            <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px]">
              <Image
                src="/assets/me.png"
                alt="Brian Parkansky - Software Engineer and Designer"
                fill
                className="absolute object-contain z-10"
                priority
              />
              <Image
                src="/assets/me-glow.png"
                alt="Brian Parkansky - Glow effect"
                fill
                className="absolute object-contain"
                priority
              />
            </div>
          </div>

        </div>

        {/* Bottom Text Area (Typing effect & Bio) */}
        <div className="space-y-4 pt-16 text-center lg:text-left border-t border-white/5 mt-12">
          <p className="text-4xl lg:text-5xl text-white font-bold min-h-[60px]">
            I&apos;m a {displayedText}
            <span className="animate-pulse text-purple-400">|</span>
          </p>
          
          <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Actuellement, étudiant à</span>
            <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-md border border-white/10">
              <Image src="/assets/webhr.webp" alt="WebHR" width={20} height={20} className="w-5 h-5 object-contain" />
              <span className="text-blue-400 font-semibold">L&apos;EPF</span>
            </span>
          </p>
          
          <p className="text-base lg:text-lg text-white/70 max-w-3xl pt-2 leading-relaxed mx-auto lg:mx-0">
            Étudiant en ingénierie et stratégie marketing, je me positionne à la croisée de la technique et du business. Capable aussi bien de coder des sites web et des applications en Python que de piloter des études de marché complexes, je mets cette double compétence au service de projets numériques innovants.
          </p>
        </div>
      </div>
    </section>
  );
}
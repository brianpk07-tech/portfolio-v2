import Link from "next/link";
import Image from "next/image";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="py-10  px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact
          </h2>
          <p className="text-md text-white/80 max-w-2xl mx-auto mb-8">
            Actuellement à la recherche d'une alternance de 2 ans à partir de septembre 2026, je souhaite mettre ma double compétence en tech et en marketing au service de projets concrets et centrés sur l'utilisateur. Un projet en tête ou envie d'échanger ? Discutons-en !
          </p>
          <a
            href="brianpk07@gmail.com"
            className="text-md text-purple-400 hover:text-purple-300 transition-colors"
          >
            brianpk07@gmail.com
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-12">
          <Link
            href="https://www.linkedin.com/in/brian-parkansky-3b3118355/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Brian Parkansky.
          </p>
        </div>
      </div>
    </footer>
  );
}


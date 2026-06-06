import Header from "./components/Header";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-white">
      <Header />
      <Banner />
      <Projects />
      <Footer />
    </main>
  );
}

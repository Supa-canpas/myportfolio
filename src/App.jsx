import Header from "./components/Header";
import HeroSwiper from "./components/HeroSwiper";
import AboutSection from "./components/AboutSection";
import HighlightsBooks from "./components/HighlightsBooks";

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <HeroSwiper />
        <AboutSection />
        <HighlightsBooks />
        <div className="h-[200vh]" />
      </main>
    </>
  );
}

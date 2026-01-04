import Header from "./components/Header";
import HeroSwiper from "./components/HeroSwiper";
import AboutSection from "./components/AboutSection";
import HighlightsBooks from "./components/HighlightsBooks";
import ShrineTimeline from "./components/ShrineTimeline";
import { timelineItems } from "./components/timelineData";

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <HeroSwiper />
        <AboutSection />
        <HighlightsBooks />
        <ShrineTimeline items={timelineItems} />
        <div className="h-[200vh]" />
      </main>
    </>
  );
}

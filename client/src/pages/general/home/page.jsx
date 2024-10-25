import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServiceSecton from "./components/ServiceSection";
import EventSection from "./components/EventSection";

export default function HomePage() {
  return (
    <article>
      <HeroSection />
      <AboutSection />
      <ServiceSecton />
      <EventSection />
    </article>
  );
}

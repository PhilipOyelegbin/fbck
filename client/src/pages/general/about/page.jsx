import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import HistorySection from "./components/HistorySection";
import TeamSection from "./components/TeamSection";

function About() {
  return (
    <article>
      <HeroSection />
      <HistorySection />
      <TeamSection />
      <ContactSection />
    </article>
  );
}

export default About;

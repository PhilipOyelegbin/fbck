import WebPricing from "./components/WebPricing";
import HostPricing from "./components/HostPricing";
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import HistorySection from "./components/HistorySection";

function About() {
  return (
    <article>
      <HeroSection />
      <HistorySection />
      <WebPricing />
      <HostPricing />
      <FAQ />
    </article>
  );
}

export default About;

import { Section as HeroSection } from './sections/hero';
import { Section as AboutSection } from './sections/about';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
    </main>
  );
}

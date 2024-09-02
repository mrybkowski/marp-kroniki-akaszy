import { ModeToggle } from '@/components/ui/toggle-mode';

import { Section as HeroSection } from './sections/hero';
import { Section as AboutSection } from './sections/about';
import { Section as SessionsSection } from './sections/sessions';
import { Section as MaterialsSection } from './sections/materials';

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <ModeToggle />
      <HeroSection />
      <AboutSection />
      <SessionsSection />
      <MaterialsSection />
    </main>
  );
}

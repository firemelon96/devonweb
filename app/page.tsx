import { Contact } from '@/components/contact';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Metrics } from '@/components/metrics';
import { Pricing } from '@/components/pricing';
import { Projects } from '@/components/projects';
import { Steps } from '@/components/steps';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Metrics />
      <Steps />
      <Pricing />
      <Projects />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

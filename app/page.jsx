import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Kartikey Dwivedi — Data Engineer',
  description: 'B.Tech CS graduate passionate about data engineering, ETL, and building scalable data solutions.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <ContactForm />
    </main>
  );
}

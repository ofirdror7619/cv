import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Military from '@/components/Military';
import Skills from '@/components/Skills';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#0F172A'}}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-12 sm:space-y-16">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Military />
      </main>
    </div>
  );
}
import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import BootSequence from './components/BootSequence';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; 

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      <CustomCursor />
      
      {/* 1. Omega Boot Sequence */}
      {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}
      
      {/* 2. Main Portfolio Engine */}
      <div className={`transition-opacity duration-1000 ${bootComplete ? 'opacity-100' : 'opacity-0'}`}>
        {bootComplete && (
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
              {/* Future Components: About, Skills, Projects, Contact will go here */}
            </main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
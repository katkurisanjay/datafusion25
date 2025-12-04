import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Schedule from './components/Schedule';
import Highlights from './components/Highlights';
import Speakers from './components/Speakers';
import Coordinators from './components/Coordinators';
import Register from './components/Register';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import SEO from './components/SEO';

function App() {
  return (
    <div className="min-h-screen">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Schedule />
        <Highlights />
        <Speakers />
        <Coordinators />
        <Register />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;


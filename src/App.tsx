import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Schedule from './components/Schedule';
import Highlights from './components/Highlights';
import Coordinators from './components/Coordinators';
import Register from './components/Register';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Schedule />
        <Highlights />
        <Coordinators />
        <Register />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;


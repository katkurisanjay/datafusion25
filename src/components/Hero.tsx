import CircularTimer from './CircularTimer';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Abstract gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">
            3-Day Annual Flagship Fest
          </span>
          <span className="px-4 py-1 bg-warning/20 text-warning rounded-full text-sm font-medium border border-warning/30">
            Organized by CSE (Data Science) – Data Quest Club
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            DATA FUSION - 2'5
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-slide-up">
          Unleash the Prospects of Data Science
        </p>

        
        {/* Subtitle */}
        <p
          className="text-5xl md:text-6xl font-extrabold tracking-widest 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500
          drop-shadow-[0_0_20px_rgba(139,92,246,0.8)]
          mb-10 animate-slide-up"
        >
          Privacy-Preserving Fusion
        </p>





        {/* Prominent Register Button */}
        <div className="mb-12 animate-slide-up">
          <button
            onClick={() => scrollToSection('register')}
            className="px-12 py-6 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-2xl md:text-3xl hover:shadow-2xl transition-all glow-primary hover:scale-110 shadow-2xl inline-block"
          >
            🚀 REGISTER NOW
          </button>
        </div>

        {/* Date & Venue */}
        <div className="glass-effect rounded-2xl p-6 md:p-8 mb-8 max-w-3xl mx-auto animate-slide-up">
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2 text-lg md:text-xl">
              <span>📅</span>
              <span className="text-accent font-semibold">
                22nd – 24th December 2025
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-base md:text-lg text-gray-300">
              <span>📍</span>
              <span>
                West Block Ground Floor Auditorium, Vaagdevi College of Engineering, Warangal
              </span>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <CircularTimer />

        {/* Description */}
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-sm md:text-base">
          Annual Data Science Fest by CSE – Data Science, Vaagdevi College of Engineering.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up mb-20">
          <button
            onClick={() => scrollToSection('register')}
            className="px-10 py-5 bg-primary text-white rounded-lg font-bold text-xl md:text-2xl hover:bg-primary/90 transition-all glow-primary hover:scale-110 shadow-2xl"
          >
            🚀 Register Now
          </button>
          <button
            onClick={() => scrollToSection('schedule')}
            className="px-8 py-4 glass-effect border-2 border-accent text-accent rounded-lg font-semibold text-lg hover:bg-accent/10 transition-all glow-accent hover:scale-105"
          >
            View Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


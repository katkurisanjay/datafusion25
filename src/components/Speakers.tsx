import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Speakers = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const speakers = [
    {
      name: 'Bernard Bhutia',
      designation: 'Vocal Image Mentor | Leadership Trainer | Career Coach', 
      company: 'Head Center of Talent Development & Study Abroad Cell | Author | Learning & Development | National Award Winner',
      linkedin: 'https://www.linkedin.com/in/bernardbhutia/?originalSubdomain=in',
      img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1765867772/copy_of_speaker_1_pnuhus_192460.jpg'
    },
    {
      name: '',
      designation: 'STAY TUNED', 
      company: '',
      linkedin: '',
      img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764871578/Guest-Speaker_ev5rcn.png'
    },
    {
      name: '',
      designation: 'STAY TUNED', 
      company: '',
      linkedin: '',
      img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764871578/Guest-Speaker_ev5rcn.png'
    },
    {
      name: '',
      designation: 'STAY TUNED', 
      company: '',
      linkedin: '',
      img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764871578/Guest-Speaker_ev5rcn.png'
    }
  ];

  return (
    <section id="speakers" className="py-20 px-4 relative overflow-hidden">
      {/* Highlighted Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Speakers
            </span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Learn from industry experts and thought leaders
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-bg to-transparent z-20 pointer-events-none"></div>
          
          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-bg to-transparent z-20 pointer-events-none"></div>

          {/* Marquee Animation */}
          <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-100% / 2));
              }
            }

            .marquee {
              animation: marquee 50s linear infinite;
            }

            .marquee:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Marquee Track - Left to Right */}
          <div className="overflow-hidden py-8">
            <div className="marquee flex gap-6 w-max">
              {speakers.map((speaker, index) => (
                <div key={`marquee-${index}`} className="flex-shrink-0 w-80">
                  <div className="glass-effect rounded-2xl p-6 h-full border border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/30">
                    {/* Speaker Image */}
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 border-2 border-primary/40">
                      <img 
                        src={speaker.img} 
                        alt={speaker.name} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Speaker Info */}
                    <h3 className="text-xl font-bold text-primary mb-2">{speaker.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-1">{speaker.designation}</p>
                    <p className="text-text-secondary text-sm mb-4">{speaker.company}</p>

                    {/* Contact */}
                    {/* <a 
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary/20 hover:bg-primary/40 border border-primary/50 rounded-lg text-primary hover:text-white transition-all text-sm font-medium"
                    >
                      🔗 Connect on LinkedIn
                    </a> */}
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {speakers.map((speaker, index) => (
                <div key={`marquee-dup-${index}`} className="flex-shrink-0 w-80">
                  <div className="glass-effect rounded-2xl p-6 h-full border border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/30">
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 border-2 border-primary/40">
                      <img 
                        src={speaker.img} 
                        alt={speaker.name} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{speaker.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-1">{speaker.designation}</p>
                    <p className="text-text-secondary text-sm mb-4">{speaker.company}</p>
                    {<a 
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary/20 hover:bg-primary/40 border border-primary/50 rounded-lg text-primary hover:text-white transition-all text-sm font-medium"
                    >
                      🔗 Connect on LinkedIn
                    </a> } 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;

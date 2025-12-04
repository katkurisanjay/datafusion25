import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Speakers = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const speakers = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'AI & ML Expert',
      company: 'Tech Innovators',
      phone: '9876543210',
      img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764603809/Dr.K.Prakash_d9lo0d.jpg'
    },
    {
      name: 'Ms. Priya Sharma',
      designation: 'Data Science Lead',
      company: 'Data Solutions Inc',
      phone: '9123456789',
      img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764584482/hod_ymkniv.jpg'
    },
    {
      name: 'Mr. Arjun Singh',
      designation: 'Cloud Architecture Expert',
      company: 'Cloud Systems',
      phone: '9987654321',
      img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764766339/WhatsApp_Image_2025-12-03_at_14.40.24_8cce187f_qsmxrb.jpg'
    },
    {
      name: 'Dr. Ananya Patel',
      designation: 'Cybersecurity Specialist',
      company: 'SecureNet',
      phone: '8765432109',
      img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764607739/sohail_jc0qr1.jpg'
    },
    {
      name: 'Mr. Vikram Das',
      designation: 'Software Architect',
      company: 'Tech Ventures',
      phone: '7654321098',
      img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764607255/sirajj_j7nf9j.jpg'
    },
    {
      name: 'Ms. Sarah Johnson',
      designation: 'Full Stack Developer',
      company: 'Digital Innovations',
      phone: '9111111111',
      img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764666343/aishwarya_iaofyc.jpg'
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
                transform: translateX(-100%);
              }
            }

            @keyframes marquee-reverse {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(0);
              }
            }

            .marquee {
              animation: marquee 40s linear infinite;
            }

            .marquee-reverse {
              animation: marquee-reverse 40s linear infinite;
            }

            .marquee:hover,
            .marquee-reverse:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Marquee Track 1 - Left to Right */}
          <div className="overflow-hidden py-8">
            <div className="marquee flex gap-6 w-max">
              {speakers.map((speaker, index) => (
                <div key={`marquee1-${index}`} className="flex-shrink-0 w-80">
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
                    <a 
                      href={`tel:+91${speaker.phone}`}
                      className="inline-block px-4 py-2 bg-primary/20 hover:bg-primary/40 border border-primary/50 rounded-lg text-primary hover:text-white transition-all text-sm font-medium"
                    >
                      📞 {speaker.phone}
                    </a>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {speakers.map((speaker, index) => (
                <div key={`marquee1-dup-${index}`} className="flex-shrink-0 w-80">
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
                    <a 
                      href={`tel:+91${speaker.phone}`}
                      className="inline-block px-4 py-2 bg-primary/20 hover:bg-primary/40 border border-primary/50 rounded-lg text-primary hover:text-white transition-all text-sm font-medium"
                    >
                      📞 {speaker.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Track 2 - Right to Left */}
          <div className="overflow-hidden py-8">
            <div className="marquee-reverse flex gap-6 w-max">
              {speakers.slice().reverse().map((speaker, index) => (
                <div key={`marquee2-${index}`} className="flex-shrink-0 w-80">
                  <div className="glass-effect rounded-2xl p-6 h-full border border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-2xl hover:shadow-secondary/30">
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 border-2 border-secondary/40">
                      <img 
                        src={speaker.img} 
                        alt={speaker.name} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{speaker.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-1">{speaker.designation}</p>
                    <p className="text-text-secondary text-sm mb-4">{speaker.company}</p>
                    <a 
                      href={`tel:+91${speaker.phone}`}
                      className="inline-block px-4 py-2 bg-secondary/20 hover:bg-secondary/40 border border-secondary/50 rounded-lg text-secondary hover:text-white transition-all text-sm font-medium"
                    >
                      📞 {speaker.phone}
                    </a>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {speakers.slice().reverse().map((speaker, index) => (
                <div key={`marquee2-dup-${index}`} className="flex-shrink-0 w-80">
                  <div className="glass-effect rounded-2xl p-6 h-full border border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-2xl hover:shadow-secondary/30">
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 border-2 border-secondary/40">
                      <img 
                        src={speaker.img} 
                        alt={speaker.name} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{speaker.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-1">{speaker.designation}</p>
                    <p className="text-text-secondary text-sm mb-4">{speaker.company}</p>
                    <a 
                      href={`tel:+91${speaker.phone}`}
                      className="inline-block px-4 py-2 bg-secondary/20 hover:bg-secondary/40 border border-secondary/50 rounded-lg text-secondary hover:text-white transition-all text-sm font-medium"
                    >
                      📞 {speaker.phone}
                    </a>
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
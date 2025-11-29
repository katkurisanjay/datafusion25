import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Tracks = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const technicalTracks = [
    {
      name: 'Data Essentials',
      description: 'Hands-on introduction to core data concepts and fundamentals',
    },
    {
      name: 'GenAI Power',
      description: 'Explore the power of Generative AI and its applications',
    },
    {
      name: 'Innovators Edge',
      description: 'Showcase your innovative ideas and creative solutions',
    },
    {
      name: 'Tech Utilities',
      description: 'Master essential data science tools and utilities',
    },
    {
      name: 'Career Sprint',
      description: 'Accelerate your career with industry insights and guidance',
    },
  ];

  const nonTechnicalEvents = [
    {
      name: 'BGMI',
      description: 'Compete in thrilling gaming battles and showcase your skills',
    },
    {
      name: 'Cultural Events',
      description: 'Express your creativity through various cultural performances',
    },
    {
      name: 'Pick and Speak',
      description: 'Test your quick thinking and public speaking abilities',
    },
    {
      name: 'Ramp Walk',
      description: 'Walk the ramp and showcase your confidence and style',
    },
    {
      name: 'Scavenger Hunt',
      description: 'Solve clues and complete exciting challenges around campus',
    },
  ];

  return (
    <section id="tracks" className="py-20 px-4 bg-dark-card">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Tracks & Events
        </h2>
        <p className="text-center text-text-muted mb-12 text-lg">
          Explore our diverse range of technical and non-technical activities
        </p>

        {/* Technical Tracks */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-accent text-center">
            Technical Tracks
          </h3>
          <div 
            ref={ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {technicalTracks.map((track, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 hover:scale-105 transition-all glow-secondary hover:glow-accent"
              >
                <h4 className="text-xl font-bold text-primary mb-3">
                  {track.name}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Technical Events */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-accent text-center">
            Non-Technical Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTechnicalEvents.map((event, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 hover:scale-105 transition-all glow-secondary hover:glow-accent"
              >
                <h4 className="text-xl font-bold text-primary mb-3">
                  {event.name}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;


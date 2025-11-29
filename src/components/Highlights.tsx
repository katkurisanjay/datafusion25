import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Highlights = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const highlights = [
    {
      icon: '🎓',
      title: 'Learn from Hands-on Workshops',
      description: 'Gain practical experience through interactive workshops led by industry experts and faculty members.',
    },
    {
      icon: '🏆',
      title: 'Compete in Technical & Non-Technical Events',
      description: 'Showcase your skills in various competitions and stand a chance to win exciting prizes and recognition.',
    },
    {
      icon: '💡',
      title: 'Showcase Projects & Creative Talents',
      description: 'Present your innovative projects and creative work to peers, mentors, and industry professionals.',
    },
    {
      icon: '🤝',
      title: 'Network with Peers, Seniors, and Faculty',
      description: 'Build meaningful connections with fellow students, alumni, and faculty members in a collaborative environment.',
    },
  ];

  return (
    <section id="highlights" className="py-20 px-4 bg-dark-card">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Why Attend Data Fusion 2025?
        </h2>
        <p className="text-center text-text-muted mb-12 text-lg">
          Discover what makes this fest a must-attend event
        </p>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all glow-secondary"
            >
              <div className="text-5xl mb-4">{highlight.icon}</div>
              <h3 className="text-2xl font-bold text-accent mb-4">
                {highlight.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;


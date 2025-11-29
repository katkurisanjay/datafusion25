import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-dark-bg to-dark-card"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          About Data Fusion
        </h2>

        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Content */}
          <div className="space-y-6 text-text-secondary">
            <p className="text-lg leading-relaxed">
              <strong className="text-accent">DATA FUSION</strong> is an annual flagship event of the{' '}
              <strong className="text-primary">CSE–Data Science</strong> branch of Vaagdevi College of Engineering.
            </p>

            <p className="text-lg leading-relaxed">
              It blends <strong className="text-accent">technical and non-technical events</strong>, giving students space to{' '}
              <strong className="text-accent">enjoy, connect, and learn</strong>. The fest runs for{' '}
              <strong className="text-primary">three days</strong>, immersing participants in the world of{' '}
              <strong className="text-accent">data science, innovation, and collaboration</strong>.
            </p>

            <p className="text-lg leading-relaxed">
              Activities include <strong className="text-accent">workshops, flash mobs, ice-breaking sessions, and networking opportunities</strong>.
            </p>

            <p className="text-lg leading-relaxed">
              The theme "Data Fusion" represents the <strong className="text-primary">fusion of learning and fun</strong>, creating a dynamic environment for tech enthusiasts and students to explore the realms of data science.
            </p>
          </div>

          {/* Event Snapshot Card */}
          <div className="glass-effect rounded-2xl p-6 glow-accent">
            <h3 className="text-2xl font-bold text-accent mb-6">
              Event Snapshot
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl">⏱️</span>
                <div>
                  <strong className="text-white">Duration:</strong>
                  <span className="text-gray-300 ml-2">3 Days</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl">💻</span>
                <div>
                  <strong className="text-text-primary">Mode:</strong>
                  <span className="text-text-secondary ml-2">Offline</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl">📍</span>
                <div>
                  <strong className="text-text-primary">Location:</strong>
                  <span className="text-text-secondary ml-2">Vaagdevi College Auditorium</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl">👥</span>
                <div>
                  <strong className="text-white">Open to:</strong>
                  <span className="text-gray-300 ml-2">All engineering & degree students</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


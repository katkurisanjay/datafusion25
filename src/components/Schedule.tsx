import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Schedule = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const schedule = [
    {
      day: 'Day 1',
      date: '22 Dec 2025',
      events: [
        'Inaugural Ceremony',
        'Ice-breaking sessions',
        'Introductory Data Science workshop',
        'Campus flash mob teaser',
      ],
    },
    {
      day: 'Day 2',
      date: '23 Dec 2025',
      events: [
        'Hands-on technical workshops (GenAI, data tools, etc.)',
        'Technical track events & challenges',
        'Networking and mentor connect',
      ],
    },
    {
      day: 'Day 3',
      date: '24 Dec 2025',
      events: [
        'Final rounds of technical & non-technical events',
        'Cultural night & performances',
        'Prize distribution & closing ceremony',
      ],
    },
  ];

  return (
    <section id="schedule" className="py-20 px-4 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          3-Day Immersive Experience
        </h2>
        <p className="text-center text-text-muted mb-12 text-lg">
          Mark your calendars and join us for an unforgettable journey
        </p>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {schedule.map((day, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all glow-accent"
            >
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-3">
                  <span className="text-primary font-bold text-lg">{day.day}</span>
                </div>
                <p className="text-accent font-semibold text-lg">{day.date}</p>
              </div>

              <ul className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <li key={eventIndex} className="flex items-start space-x-3">
                    <span className="text-primary text-xl mt-1">▸</span>
                    <span className="text-text-secondary flex-1">{event}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;


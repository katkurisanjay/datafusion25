import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CircularTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date('2025-12-22T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculatePercentage = (value: number, max: number) => {
    return Math.min((value / max) * 100, 100);
  };

  const timeUnits = [
    { value: timeLeft.days, max: 31, label: 'Days', color: 'primary' },
    { value: timeLeft.hours, max: 24, label: 'Hours', color: 'accent' },
    { value: timeLeft.minutes, max: 60, label: 'Minutes', color: 'primary' },
    { value: timeLeft.seconds, max: 60, label: 'Seconds', color: 'accent' },
  ];

  return (
    <div className="glass-effect rounded-2xl p-6 md:p-8 mb-8 max-w-4xl mx-auto animate-slide-up glow-accent">
      <p className="text-text-secondary mb-6 text-sm md:text-base text-center">Event starts in</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {timeUnits.map((unit, index) => {
          const percentage = calculatePercentage(unit.value, unit.max);
          const colorClass = unit.color === 'primary' ? 'text-primary stroke-primary' : 'text-accent stroke-accent';

          const size = 96; // Base size for mobile
          const radius = size / 2 - 8; // Leave some padding
          const center = size / 2;
          const circleCircumference = 2 * Math.PI * radius;
          const circleOffset = circleCircumference - (percentage / 100) * circleCircumference;

          return (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <svg 
                  className="transform -rotate-90 w-full h-full" 
                  viewBox={`0 0 ${size} ${size}`}
                >
                  {/* Background circle */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-dark-border opacity-30"
                  />
                  {/* Progress circle */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={circleOffset}
                    className={colorClass}
                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-2xl md:text-3xl font-bold ${colorClass.split(' ')[0]}`}>
                      {unit.value}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-xs md:text-sm text-text-muted uppercase font-medium">
                {unit.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularTimer;


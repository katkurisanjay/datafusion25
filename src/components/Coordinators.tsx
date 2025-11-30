import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Coordinators = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const coordinators = {
    patron: [{ name: 'Dr. K. Prakash', role: 'Principal, VCE' }],
    convenor: [{ name: 'Dr. Ayesha Banu', role: 'HOD, CSE-DS' }],
    faculty: [
      { name: 'Mrs. Zareena Begum', role: 'Assistant Professor, VCE' },
      { name: 'Mr. Mohammad Sohail', role: 'Assistant Professor, VCE' },
    ],
    club: [
      { name: 'Mrs. Zareena Begum', role: 'Assistant Professor' },
      { name: 'Mrs. G. Pallavi', role: 'Assistant Professor' },
    ],
    student: [
      { name: 'Mohammad Siraj', role: 'Chair' },
      { name: 'Aishwarya', role: 'Vice Chair' },
    ],
  };

  const contactQueries = [
    { name: 'Jaleel', phone: '9347277723' },
    { name: 'Siddharth', phone: '9133776565' },
    { name: 'Sarika', phone: '9908997987' },
    { name: 'Pardhiv', phone: '8309019959' },
    { name: 'Saathwik', phone: '7672036882' },
    { name: 'Charan', phone: '9381187033' },
  ];

  return (
    <section
      id="coordinators"
      className="py-20 px-4 bg-gradient-to-b from-dark-bg to-dark-card"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Coordinators & Team
        </h2>

        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 rounded-2xl border-2 border-dark-border p-4 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >

          {/* Marquee */}
          <div className="marquee">
            {/* FIX APPLIED HERE → removed animate-marquee */}
            <div className="marquee__track">

              {/* ORIGINAL ITEMS */}
              <div className="marquee__inner flex gap-6">

                {/* Patron */}
                <div className="glass-effect rounded-xl p-6 glow-primary flex-shrink-0 w-64">
                  <h3 className="text-xl font-bold text-primary mb-4">Patron</h3>
                  {coordinators.patron.map((person, index) => (
                    <div key={`patron-${index}`} className="mb-3">
                      <p className="text-text-primary font-semibold">{person.name}</p>
                      <p className="text-text-muted text-sm">{person.role}</p>
                    </div>
                  ))}
                </div>

                {/* Convenor */}
                <div className="glass-effect rounded-xl p-6 glow-accent flex-shrink-0 w-64">
                  <h3 className="text-xl font-bold text-accent mb-4">Convenor</h3>
                  {coordinators.convenor.map((person, index) => (
                    <div key={`convenor-${index}`} className="mb-3">
                      <p className="text-text-primary font-semibold">{person.name}</p>
                      <p className="text-text-muted text-sm">{person.role}</p>
                    </div>
                  ))}
                </div>

                {/* Faculty */}
                <div className="glass-effect rounded-xl p-6 glow-secondary flex-shrink-0 w-64">
                  <h3 className="text-xl font-bold text-secondary mb-4">Faculty Coordinators</h3>
                  {coordinators.faculty.map((person, index) => (
                    <div key={`faculty-${index}`} className="mb-3">
                      <p className="text-text-primary font-semibold">{person.name}</p>
                      <p className="text-text-muted text-sm">{person.role}</p>
                    </div>
                  ))}
                </div>

                {/* Club */}
                {/* <div className="glass-effect rounded-xl p-6 glow-purple flex-shrink-0 w-64">
                  <h3 className="text-xl font-bold text-accent-purple mb-4">Club Coordinators</h3>
                  {coordinators.club.map((person, index) => (
                    <div key={`club-${index}`} className="mb-3">
                      <p className="text-text-primary font-semibold">{person.name}</p>
                      <p className="text-text-muted text-sm">{person.role}</p>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* DUPLICATE ITEMS */}
              <div className="marquee__inner flex gap-6" aria-hidden="true">
                
                {/* Patron duplicate */}
                <div className="glass-effect rounded-xl p-6 glow-primary flex-shrink-0 w-64">
                  <h3 className="text-xl font-bold text-primary mb-4">Patron</h3>
                  {coordinators.patron.map((person, index) => (
                    <div key={`patron-dup-${index}`} className="mb-3">
                      <p className="text-text-primary font-semibold">{person.name}</p>
                      <p className="text-text-muted text-sm">{person.role}</p>
                    </div>
                  ))}
                </div>

                {/* Convenor duplicate */}
                <div className="glass-effect rounded-xl p-6 glow-accent flex-shrink-0 w-64">
                  <h3 className="text-xl font-bold text-accent mb-4">Convenor</h3>
                  {coordinators.convenor.map((person, index) => (
                    <div key={`convenor-dup-${index}`} className="mb-3">
                      <p className="text-text-primary font-semibold">{person.name}</p>
                      <p className="text-text-muted text-sm">{person.role}</p>
                    </div>
                  ))}
                </div>

                {/* Faculty duplicate */}
                <div className="glass-effect rounded-xl p-6 glow-secondary flex-shrink-0 w-64">
                  <h3 className="text-xl font-bold text-secondary mb-4">Faculty Coordinators</h3>
                  {coordinators.faculty.map((person, index) => (
                    <div key={`faculty-dup-${index}`} className="mb-3">
                      <p className="text-text-primary font-semibold">{person.name}</p>
                      <p className="text-text-muted text-sm">{person.role}</p>
                    </div>
                  ))}
                </div>

                {/* Club duplicate */}
                <div className="glass-effect rounded-xl p-6 glow-purple flex-shrink-0 w-64">
                  <h3 className="text-xl font-bold text-accent-purple mb-4">Club Coordinators</h3>
                  {coordinators.club.map((person, index) => (
                    <div key={`club-dup-${index}`} className="mb-3">
                      <p className="text-text-primary font-semibold">{person.name}</p>
                      <p className="text-text-muted text-sm">{person.role}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Student Coordinators */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            Student Coordinators
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coordinators.student.map((person, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 glow-accent hover:scale-105 transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center border-2 border-accent/30">
                    <img
                      src={`https://via.placeholder.com/128x128/00D9FF/FFFFFF?text=${
                        person.name.split(' ')[0][0]
                      }`}
                      alt={person.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  <h4 className="text-xl font-bold text-primary mb-2">
                    {person.name}
                  </h4>
                  <p className="text-text-muted text-sm mb-3">{person.role}</p>
                  <p className="text-text-secondary text-sm">
                    CSE - Data Science, Vaagdevi College of Engineering
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Queries */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            Contact for Queries
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactQueries.map((contact, index) => (
              <div
                key={index}
                className="glass-effect rounded-lg p-4 hover:scale-105 transition-all"
              >
                <p className="text-text-primary font-semibold mb-2">
                  {contact.name}
                </p>
                <a
                  href={`tel:+91${contact.phone}`}
                  className="text-accent hover:text-primary transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Coordinators;

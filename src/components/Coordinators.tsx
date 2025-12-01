import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Coordinators = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const coordinators = {
    patron: [
    { 
      name: 'Dr. K. Prakash', 
      role: 'Principal, VCE',
      img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764584378/Dr.K.Prakash_d9lo0d.jpg'
    }
    ],

    convenor: [
      { 
        name: 'Dr. Ayesha Banu', 
        role: 'HOD, CSE-DS',
        img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764584482/hod_ymkniv.jpg' // ← Replace later
      }
    ],

    club: [
      { 
        name: 'Mrs. Zareena Begum', 
        role: 'Assistant Professor',
        img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764584484/zareena_mam_zjcg6k.jpg' // ← Replace later
      }
    ],
    
  faculty: [
      { 
        name: 'Mohammad Sohail', 
        role: 'Assistant Professor, VCE',
        img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764584484/sohail_jc0qr1.jpg' // ← Replace later
      }
    ],
    

    

   

    student: [
      { 
        name: 'Mohammad Siraj', 
        role: 'Chair',
        img: '/images/student1.jpg' // ← Replace later
      },
      { 
        name: 'Aishwarya', 
        role: 'Vice Chair',
        img: '/images/student2.jpg' // ← Replace later
      }
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

        {/* ---- TOP COORDINATORS WITH IMAGE CARDS ---- */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >

          {/* Patron */}
          {coordinators.patron.map((person, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-all">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary/40">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Patron</h3>
              <p className="text-text-primary font-semibold">{person.name}</p>
              <p className="text-text-muted text-sm">{person.role}</p>
            </div>
          ))}

          {/* Convenor */}
          {coordinators.convenor.map((person, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-all">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-accent/40">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-2">Convenor</h3>
              <p className="text-text-primary font-semibold">{person.name}</p>
              <p className="text-text-muted text-sm">{person.role}</p>
            </div>
          ))}

          {/* Faculty */}
          {coordinators.faculty.map((person, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-all">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-secondary/40">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Faculty Coordinator</h3>
              <p className="text-text-primary font-semibold">{person.name}</p>
              <p className="text-text-muted text-sm">{person.role}</p>
            </div>
          ))}

          {/* Club */}
          {coordinators.club.map((person, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-all">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-purple-400/40">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Club Coordinator</h3>
              <p className="text-text-primary font-semibold">{person.name}</p>
              <p className="text-text-muted text-sm">{person.role}</p>
            </div>
          ))}

        </div>


        {/* ---- STUDENT COORDINATORS ---- */}
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
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-accent/40">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-full h-full object-cover"
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


        {/* ---- CONTACT QUERIES ---- */}
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

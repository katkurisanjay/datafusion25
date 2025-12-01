import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Coordinators = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const coordinators = {
    patron: [
      { 
        name: 'Dr. K. Prakash', 
        role: 'Principal, VCE',
        img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764603809/Dr.K.Prakash_d9lo0d.jpg'
      }
    ],

    convenor: [
      { 
        name: 'Dr. Ayesha Banu', 
        role: 'HOD, CSE-DS',
        img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764584482/hod_ymkniv.jpg'
      }
    ],

    faculty: [
      { 
        name: 'Mrs. Zareena Begum', 
        role: 'Assistant Professor, VCE',
        img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764584484/zareena_mam_zjcg6k.jpg'
      },
      { 
        name: 'Mohammad Sohail', 
        role: 'Assistant Professor, VCE',
        img: 'https://res.cloudinary.com/dika0ttaj/image/upload/v1764602523/sohail_jc0qr1.jpg'
      }
    ],

    student: [
      { 
        name: 'Mohammad Siraj', 
        role: 'Chair',
        img: '/images/student1.jpg'
      },
      { 
        name: 'Aishwarya', 
        role: 'Vice Chair',
        img: '/images/student2.jpg'
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

  const hoverClasses =
    "transition-all duration-300 hover:scale-105 hover:shadow-xl";

  return (
    <section id="coordinators" className="py-20 px-4 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Coordinators & Team
        </h2>

        {/* ---- TOP COORDINATORS ---- */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >

          {/* Patron */}
          {coordinators.patron.map((person, index) => (
            <div key={index} className={`glass-effect rounded-2xl p-6 text-center ${hoverClasses}`}>
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary/40">
                <img src={person.img} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Patron</h3>
              <p className="text-text-primary font-semibold">{person.name}</p>
              <p className="text-text-muted text-sm">{person.role}</p>
            </div>
          ))}

          {/* Convenor */}
          {coordinators.convenor.map((person, index) => (
            <div key={index} className={`glass-effect rounded-2xl p-6 text-center ${hoverClasses}`}>
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-accent/40">
                <img src={person.img} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-2">Convenor</h3>
              <p className="text-text-primary font-semibold">{person.name}</p>
              <p className="text-text-muted text-sm">{person.role}</p>
            </div>
          ))}

          {/* Faculty */}
          {coordinators.faculty.map((person, index) => (
            <div key={index} className={`glass-effect rounded-2xl p-6 text-center ${hoverClasses}`}>
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-secondary/40">
                <img src={person.img} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Faculty Coordinator</h3>
              <p className="text-text-primary font-semibold">{person.name}</p>
              <p className="text-text-muted text-sm">{person.role}</p>
            </div>
          ))}
        </div>

        {/* ---- STUDENT COORDINATORS ---- */}
        <h3 className="text-3xl font-bold text-center text-primary mb-8">Student Coordinators</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {coordinators.student.map((person, index) => (
            <div key={index} className={`glass-effect rounded-2xl p-6 text-center ${hoverClasses}`}>
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-blue-400/40">
                <img src={person.img} className="w-full h-full object-cover" />
              </div>
              <p className="text-xl font-bold text-text-primary">{person.name}</p>
              <p className="text-sm text-text-muted">{person.role}</p>
            </div>
          ))}
        </div>

        {/* ---- CONTACT QUERIES ---- */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">Contact for Queries</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactQueries.map((contact, index) => (
              <div key={index} className="glass-effect rounded-lg p-4 hover:scale-105 transition-all">
                <p className="text-text-primary font-semibold mb-2">{contact.name}</p>
                <a href={`tel:+91${contact.phone}`} className="text-accent hover:text-primary transition-colors">
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

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Who can participate?',
      answer: 'Data Fusion 2025 is open to all engineering and degree students. Whether you are a beginner or an expert in data science, you are welcome to join us!',
    },
    {
      question: 'Do I need prior knowledge of data science?',
      answer: 'No prior knowledge is required! Our workshops and events are designed to accommodate participants of all skill levels, from beginners to advanced learners.',
    },
    {
      question: 'Will participation certificates be provided?',
      answer: 'Yes, all participants will receive participation certificates. Winners and runners-up will also receive special recognition certificates and prizes.',
    },
    {
      question: 'Are on-spot registrations allowed?',
      answer: 'On-spot registrations may be available subject to availability. However, we strongly recommend registering online in advance to secure your spot and avail the early bird discount.',
    },
    {
      question: 'Is there a dress code for cultural events?',
      answer: 'There is no strict dress code, but we encourage participants to dress appropriately for the events. For cultural performances, traditional or semi-formal attire is recommended.',
    },
    {
      question: 'What is included in the registration fee?',
      answer: 'The registration fee includes access to all workshops, technical and non-technical events, networking sessions, refreshments, and a participation certificate.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark-bg/50 transition-colors"
              >
                <span className="font-semibold text-text-primary pr-4">{faq.question}</span>
                <span className="text-accent text-2xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-text-secondary leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


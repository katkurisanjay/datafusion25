const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-dark-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Contact Us
        </h2>

        <div className="glass-effect rounded-2xl p-8 glow-accent">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">
                Vaagdevi College of Engineering
              </h3>
              <p className="text-text-secondary mb-2">
                Bollikunta, Khila Warangal (Mandal)
              </p>
              <p className="text-text-secondary mb-2">
                Warangal Urban (Dist.), Telangana – 506 005
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="mailto:info@vaagdevi.edu.in"
                className="flex items-center justify-center space-x-2 text-accent hover:text-primary transition-colors"
              >
                <span>📧</span>
                <span>info@vaagdevi.edu.in</span>
              </a>
              <a
                href="tel:+918886536969"
                className="flex items-center justify-center space-x-2 text-accent hover:text-primary transition-colors"
              >
                <span>📞</span>
                <span>+91-8886536969</span>
              </a>
            </div>

            <div className="pt-6 border-t border-dark-border">
              <p className="text-text-muted mb-4">Follow us on social media</p>
              <a
                href="https://instagram.com/datahub_vce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-accent hover:text-primary transition-colors"
              >
                <span>📷</span>
                <span>@datahub_vce</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


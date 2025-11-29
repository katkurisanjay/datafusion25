import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Register = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    studentName: '',
    branch: '',
    rollNo: '',
    section: '',
    gender: '',
    email: '',
    mobile: '',
    collegeName: '',
    paymentMethod: '',
    transactionId: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Google Apps Script URL - Update this with your actual Google Apps Script web app URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzwythtUbhhF8geeB56C-NQeRFanaIMYawsNLVoRacC4MowahiQcpMqQ_6Gz0TtPhdKkw/exec';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.studentName.trim()) {
      setErrorMessage('Student Name is required');
      return false;
    }
    if (!formData.branch.trim()) {
      setErrorMessage('Branch is required');
      return false;
    }
    if (!formData.rollNo.trim()) {
      setErrorMessage('Roll No is required');
      return false;
    }
    if (!formData.section.trim()) {
      setErrorMessage('Section is required');
      return false;
    }
    if (!formData.gender) {
      setErrorMessage('Gender is required');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Valid Email is required');
      return false;
    }
    if (!formData.mobile.trim() || !/^[0-9]{10}$/.test(formData.mobile)) {
      setErrorMessage('Valid 10-digit Mobile number is required');
      return false;
    }
    if (!formData.collegeName.trim()) {
      setErrorMessage('College Name is required');
      return false;
    }
    if (!formData.paymentMethod) {
      setErrorMessage('Payment Method is required');
      return false;
    }
    if (formData.paymentMethod === 'Online' && !formData.transactionId.trim()) {
      setErrorMessage('Transaction ID is required for online payment');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmitStatus('idle');

    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for Google Sheets
      const dataToSubmit = {
        timestamp: new Date().toISOString(),
        studentName: formData.studentName,
        branch: formData.branch,
        rollNo: formData.rollNo,
        section: formData.section,
        gender: formData.gender,
        email: formData.email,
        mobile: formData.mobile,
        collegeName: formData.collegeName,
        paymentMethod: formData.paymentMethod,
        transactionId: formData.paymentMethod === 'Online' ? formData.transactionId : '',
      };

      // Send to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      // Since we're using no-cors, we can't check the response
      // Assume success if no error is thrown
      setSubmitStatus('success');
      setFormData({
        studentName: '',
        branch: '',
        rollNo: '',
        section: '',
        gender: '',
        email: '',
        mobile: '',
        collegeName: '',
        paymentMethod: '',
        transactionId: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-20 px-4 bg-dark-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Join Data Fusion 2025
        </h2>
        <p className="text-center text-text-muted mb-12 text-lg">
          Register now and be part of this exciting event
        </p>

        {/* Pricing Display */}
        <div className="glass-effect rounded-2xl p-8 mb-8 text-center glow-accent">
          <p className="text-text-secondary mb-2">Early Bird Pass</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl font-bold text-primary">₹399/-</span>
            <span className="text-2xl text-text-muted line-through">₹500</span>
          </div>
          <p className="text-sm text-text-muted">
            Limited early bird slots available. Certificates for all participants.
          </p>
        </div>

        {/* Registration Form */}
        <form 
          ref={ref}
          onSubmit={handleSubmit} 
          className={`glass-effect rounded-2xl p-8 space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Name */}
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-text-secondary mb-2">
                Student Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Enter your full name"
              />
            </div>

            {/* Branch */}
            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-300 mb-2">
                Branch <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="e.g., CSE, ECE, EEE"
              />
            </div>

            {/* Roll No */}
            <div>
              <label htmlFor="rollNo" className="block text-sm font-medium text-gray-300 mb-2">
                Roll No <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="rollNo"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Enter your roll number"
              />
            </div>

            {/* Section */}
            <div>
              <label htmlFor="section" className="block text-sm font-medium text-gray-300 mb-2">
                Section <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="section"
                name="section"
                value={formData.section}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="e.g., A, B, C"
              />
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-300 mb-2">
                Gender <span className="text-primary">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-2">
                Mobile <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                maxLength={10}
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="10-digit mobile number"
              />
            </div>

            {/* College Name */}
            <div>
              <label htmlFor="collegeName" className="block text-sm font-medium text-gray-300 mb-2">
                College Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Enter your college name"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-300 mb-2">
              Payment Method <span className="text-primary">*</span>
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
            >
              <option value="">Select Payment Method</option>
              <option value="Online">Online (UPI)</option>
              <option value="Offline">Offline (Pay at Fest)</option>
            </select>
          </div>

          {/* Payment Information */}
          {formData.paymentMethod === 'Online' && (
            <div className="space-y-4">
              <div className="glass-effect rounded-xl p-6 border-2 border-accent/30">
                <h3 className="text-lg font-bold text-accent mb-4 text-center">UPI Payment</h3>
                <div className="flex flex-col items-center">
                  <div className="w-64 h-64 bg-white rounded-lg p-4 mb-4 flex items-center justify-center">
                    <img
                      src="https://via.placeholder.com/256x256/00D9FF/FFFFFF?text=UPI+QR+CODE"
                      alt="UPI QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-text-secondary text-sm text-center mb-4">
                    Scan the QR code with any UPI app to complete payment
                  </p>
                </div>
              </div>

              {/* Transaction ID */}
              <div>
                <label htmlFor="transactionId" className="block text-sm font-medium text-gray-300 mb-2">
                  Transaction ID <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="transactionId"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleChange}
                  required={formData.paymentMethod === 'Online'}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Enter UPI transaction ID"
                />
                <p className="text-text-muted text-xs mt-1">
                  Enter the transaction ID from your UPI payment receipt
                </p>
              </div>
            </div>
          )}

          {formData.paymentMethod === 'Offline' && (
            <div className="glass-effect rounded-xl p-6 border-2 border-warning/30">
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-warning mb-2">Offline Payment</h3>
                <p className="text-text-secondary">
                  Please pay at the fest and collect your pass
                </p>
                <p className="text-text-muted text-sm mt-2">
                  Payment can be made at the registration desk during the event
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && errorMessage && (
            <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
              {errorMessage}
            </div>
          )}

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
              Registration submitted successfully! We'll contact you soon.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all glow-primary hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? 'Submitting...' : 'Register Now'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;


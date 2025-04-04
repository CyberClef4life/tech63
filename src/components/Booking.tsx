
import { useState, useRef, useEffect } from 'react';
import { toast } from "sonner";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    date: '',
    experienceType: 'yacht',
    specialRequests: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your booking request has been submitted successfully! Our team will contact you shortly.");
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        date: '',
        experienceType: 'yacht',
        specialRequests: ''
      });
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="booking" ref={sectionRef} className="py-20 md:py-28 relative transition-fade">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-luxury-gold/5 filter blur-[100px]"></div>
      
      <div className="luxury-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold gold-text mb-6">
            Reserve Your Yacht or Lamborghini
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Submit your details below and our concierge team will contact you to finalize your exclusive experience.
          </p>
        </div>
        
        <form 
          onSubmit={handleSubmit} 
          className="max-w-3xl mx-auto neo-gold-blur rounded-lg p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="luxury-label">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="luxury-input"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="luxury-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="luxury-input"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="whatsapp" className="luxury-label">WhatsApp Number</label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="luxury-input"
                placeholder="Include country code"
              />
            </div>
            
            <div>
              <label htmlFor="date" className="luxury-label">Preferred Date & Time</label>
              <input
                id="date"
                name="date"
                type="datetime-local"
                required
                value={formData.date}
                onChange={handleChange}
                className="luxury-input"
              />
            </div>
            
            <div>
              <label htmlFor="experienceType" className="luxury-label">Experience Type</label>
              <select
                id="experienceType"
                name="experienceType"
                required
                value={formData.experienceType}
                onChange={handleChange}
                className="luxury-select"
              >
                <option value="yacht">Yacht Charter</option>
                <option value="lamborghini">Lamborghini Rental</option>
                <option value="both">Yacht & Lamborghini Package</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6">
            <label htmlFor="specialRequests" className="luxury-label">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows={4}
              value={formData.specialRequests}
              onChange={handleChange}
              className="luxury-input resize-none"
              placeholder="Tell us about any special requirements or questions"
            ></textarea>
          </div>
          
          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`gold-button ${
                isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Processing...' : 'Set Sail or Drive Now'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;

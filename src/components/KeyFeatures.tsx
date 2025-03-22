import { useEffect, useRef } from 'react';
import {
  Ruler,
  Gauge,
  Sofa,
  Tablet,
  Star,
  Ship
} from 'lucide-react';

const features = [
  {
    icon: Ruler,
    title: "Sleek Design",
    description: "Inspired by the iconic Lamborghini sports cars, this yacht features sharp lines and an aerodynamic profile."
  },
  {
    icon: Gauge,
    title: "Powerful Performance",
    description: "Powered by twin MAN V12 engines, it delivers 2,000hp and a top speed of 60 knots."
  },
  {
    icon: Sofa,
    title: "Luxurious Interiors",
    description: "Step inside to discover plush seating, carbon fiber finishes, and handcrafted Italian materials."
  },
  {
    icon: Tablet,
    title: "Advanced Technology",
    description: "Integrated touchscreen controls, GPS systems, and marine-grade automation for seamless cruising."
  },
  {
    icon: Star,
    title: "Tailored Amenities",
    description: "Experience elite services with custom itineraries, fine dining, and onboard entertainment."
  },
  {
    icon: Ship,
    title: "Unrivaled Comfort",
    description: "Ergonomic layouts, climate control, and spacious lounges ensure a smooth ride."
  }
];

const KeyFeatures = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.feature-card');
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.classList.add('appear');
            }, i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-20 md:py-28 bg-luxury-black relative z-10">
      <div className="luxury-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold gold-text mb-4">
            Why Choose Lamborghini Yacht
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A seamless blend of speed, innovation, and Italian design philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-6 bg-luxury-black/60 rounded-2xl border border-luxury-gold/20 shadow-lg hover:shadow-luxury-gold/20 transition-all duration-300 transform opacity-0 translate-y-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mr-4">
                  <feature.icon size={24} className="text-luxury-gold" />
                </div>
                <h3 className="text-xl font-playfair gold-text font-semibold">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;

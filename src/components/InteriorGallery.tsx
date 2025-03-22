import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(11).jpeg', caption: 'Lamborghini Yacht Interior Lounge' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(12)%20-%20Copie.jpeg', caption: 'Elegant Cabin Design' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(12).jpeg', caption: 'Luxury Interior Setup' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(17)%20-%20Copie.jpeg', caption: 'Premium Seating Area' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(17).jpeg', caption: 'Exclusive Lounge Space' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(18)%20-%20Copie.jpeg', caption: 'Sophisticated Yacht Interior' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(18).jpeg', caption: 'Cozy Yacht Lounge' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(3)%20-%20Copie.jpeg', caption: 'Exclusive Interior Design' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(31).jpeg', caption: 'State-of-the-Art Yacht Interior' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(32).jpeg', caption: 'Exclusive Interior Features' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(33).jpeg', caption: 'Luxury Cabin with Modern Touch' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(38)b.jpeg', caption: 'Spacious Living Area' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(39).jpeg', caption: 'Elegant Dining Space' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(54).jpeg', caption: 'Exclusive Yacht Interior Decor' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(55).jpeg', caption: 'Modern Interior Setup' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(56).jpeg', caption: 'Lamborghini Yacht Interior Elegance' },
  { url: 'https://vip.tov.ae/images/yacht63/img/INTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(7).jpeg', caption: 'Ultimate Luxury Cabin Experience' }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 md:py-28 transition-fade">
      <div className="luxury-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold gold-text mb-6 text-center">
          Interior Gallery
        </h2>
        <div className="relative overflow-hidden rounded-lg gold-border max-w-5xl mx-auto aspect-[16/9]">
          <img 
            src={images[currentIndex].url} 
            alt={images[currentIndex].caption} 
            className="w-full h-full object-cover transition-transform duration-500" 
            style={{ opacity: isAnimating ? 0.7 : 1, transform: `scale(${isAnimating ? 1.05 : 1})` }} 
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 neo-gold-blur">
            <p className="text-lg md:text-xl font-playfair text-luxury-gold">{images[currentIndex].caption}</p>
          </div>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full \
                       neo-gold-blur flex items-center justify-center text-luxury-gold \
                       transition-all duration-300 hover:bg-luxury-gold/20"
            onClick={goToPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full \
                       neo-gold-blur flex items-center justify-center text-luxury-gold \
                       transition-all duration-300 hover:bg-luxury-gold/20"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

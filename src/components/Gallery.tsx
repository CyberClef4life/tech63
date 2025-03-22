import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(1).jpeg', caption: 'Lamborghini Yacht Front View' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(2).jpeg', caption: 'Dubai Luxury Yacht Profile' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(3).jpeg', caption: 'High-Speed Tecnomar Yacht' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(5).jpeg', caption: 'Lamborghini Yacht Sleek Design' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(6).jpeg', caption: 'Elite Yacht Experience Dubai' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(10).jpeg', caption: 'Yacht Sunset Cruise Dubai' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(13).jpeg', caption: 'Lamborghini 63 Tecnomar Exterior' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(15).jpeg', caption: 'Dubai Marina Yacht Experience' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(16).jpeg', caption: 'Exclusive Lamborghini Yacht' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(19).jpeg', caption: 'Luxury Yacht in UAE' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(20).jpeg', caption: 'Tecnomar for Lamborghini 63 Side View' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(21).jpeg', caption: 'Dubai Yacht Rental Premium Experience' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(24).jpeg', caption: 'Luxury Yacht with Skyline View' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(25)%20-%20Copie.jpeg', caption: 'Exclusive Yacht Lifestyle Dubai' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(26).jpeg', caption: 'High-Performance Lamborghini Yacht' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(27).jpeg', caption: 'Premium Tecnomar Yacht Rental' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(28).jpeg', caption: 'Dubai’s Best Luxury Yacht' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(29).jpeg', caption: 'Lamborghini Yacht Open Sea Experience' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(30).jpeg', caption: 'VIP Yachting in Dubai' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(34).jpeg', caption: 'Dubai Lamborghini Yacht Adventure' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(37).jpg', caption: 'Exclusive Dubai Yacht Excursion' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(54).jpg', caption: 'Luxury Yacht Performance on Water' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(54).jpeg', caption: 'Dubai Lamborghini Yacht Aesthetics' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(55).jpg', caption: 'Prestigious Yacht Rental Dubai' },
  { url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20%20Rent%20Lamborghini%20Yacht%20(56).jpeg', caption: 'Yacht Luxury Meets Speed' }
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

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex(index);
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
    <section id="gallery" ref={sectionRef} className="py-20 md:py-28 transition-fade">
      <div className="luxury-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold gold-text mb-6">
            Experience Luxury
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse through our gallery of the exclusive Tecnomar for Lamborghini 63 yacht experience in Dubai.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg gold-border max-w-5xl mx-auto aspect-[16/9]">
          <div className="w-full h-full transition-all duration-500 ease-out overflow-hidden">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].caption}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{
                opacity: isAnimating ? 0.7 : 1,
                transform: `scale(${isAnimating ? 1.05 : 1})`
              }}
            />
          </div>

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

        <div className="flex justify-center mt-6 space-x-2 overflow-x-auto py-2 px-4 max-w-full">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                index === currentIndex
                  ? 'bg-luxury-gold'
                  : 'bg-luxury-gold/30 hover:bg-luxury-gold/50'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="mt-8 hidden md:block">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {images.map((image, index) => (
              <div
                key={index}
                className={`aspect-video rounded overflow-hidden cursor-pointer transition-all duration-300 hover:opacity-100 ${
                  currentIndex === index ? 'ring-2 ring-luxury-gold opacity-100' : 'opacity-60'
                }`}
                onClick={() => goToSlide(index)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

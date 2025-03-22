import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize video with proper settings
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.autoplay = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;
      
      // Add event listeners for debugging
      videoRef.current.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
        setVideoLoaded(true);
      });
      
      videoRef.current.addEventListener('error', (e) => {
        console.error("Video loading error:", e);
        setVideoError("Failed to load video");
      });
      
      // Force play
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
        setVideoError(`Autoplay failed: ${error.message}`);
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Video background with parallax effect */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 z-0 h-full w-full"
      >
        {/* Video element for large screens - MOV format */}
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        >
          {/* Try multiple source formats for better compatibility */}
          <source src="https://vip.tov.ae/images/yacht63/video/YACHT63.mov" type="video/quicktime" />
          <source src="https://vip.tov.ae/images/yacht63/video/YACHT63.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback image if video fails to load */}
        {videoError && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <p className="text-white text-sm">{videoError}</p>
          </div>
        )}
        
        {/* Loading indicator */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <p className="text-white">Loading video...</p>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 animate-fade-in-up" style={{animationDelay: "0.3s"}}>
          <span className="text-white">Experience Maritime Excellence –</span> <br />
          <span className="text-yellow-400">Tecnomar for Lamborghini 63 in Dubai</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 md:mb-10 animate-fade-in-up" style={{animationDelay: "0.6s"}}>
          Luxury. Power. Unparalleled Design.
        </p>
        
        <a 
          href="#booking" 
          className="inline-block px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-md transition-all duration-300 animate-fade-in-up"
          style={{animationDelay: "0.9s"}}
        >
          Reserve Your Experience
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-yellow-400 flex justify-center items-start p-1">
          <div className="w-1 h-3 bg-yellow-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
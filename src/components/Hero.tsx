import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import homeImg from '@/assets/home.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Featured Artwork */}
      <div className="absolute inset-0 z-0">
        <img
          src={homeImg}
          alt="Contemporary artwork background"
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
      </div>
      {/* Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 fade-in ${isVisible ? 'visible' : ''}`}>
        <h1 className="mb-6 text-foreground">
          A Journey in art
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed">
         Minimal, raw, spiritual, and modern — a collection of works that reflect both tradition and experimentation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => navigate('/gallery')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-sm font-light tracking-wide transition-all duration-300"
          >
            View Gallery
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigate('/about')}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-sm font-light tracking-wide transition-all duration-300"
          >
            About the Artist
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-muted-foreground to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

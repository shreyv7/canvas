import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';

// Import all 10 images
import img1 from '@/assets/1.png';
import img2 from '@/assets/2.png';
import img3 from '@/assets/3.png';
import img4 from '@/assets/4.png';
import img5 from '@/assets/5.png';
import img6 from '@/assets/6.png';
import img7 from '@/assets/7.png';
import img8 from '@/assets/8.png';
import img9 from '@/assets/9.png';
import img10 from '@/assets/10.png';
import img11 from '@/assets/11.png';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Artworks array with 10 images
  const artworks = [
    {
      id: 1,
      title: 'Under the Streetlight',
      image: img1,
      description: 'A charcoal style sketch capturing a romantic silhouette.',
    },
    {
      id: 2,
      title: 'Wings of Embrace',
      image: img2,
      description: 'A surreal graphite sketch where human and abstract forms blend',
    },
    {
      id: 3,
      title: 'Hanuman in Silence',
      image: img3,
      description: 'A minimalist line drawing capturing the calm presence of Lord Hanuman.',
    },
    {
      id: 4,
      title: 'Sacred Offering',
      image: img4,
      description: 'A depiction of the Shivling adorned with flowers, alongside the Trishul and the sacred thread',
    },
    {
      id: 5,
      title: 'Rama and Sita',
      image: img5,
      description: 'A vibrant folk-style composition of Lord Rama and Goddess Sita.',
    },
    {
      id: 6,
      title: 'Lord Ganesh',
      image: img6,
      description: 'Abstract interpretation of god.',
    },
    {
      id: 7,
      title: 'Bal Hanuman',
      image: img7,
      description: 'A cute picture of Bal Hanuman meditating.',
    },
    {
      id: 8,
      title: 'Contemprary Art',
      image: img8,
      description: 'Skull made with pencil.'
    },
    {
      id: 9,
      title: 'Random Shit',
      image: img9,
      description: 'Bleeding eye',
    },
    {
      id: 10,
      title: 'Radha Krishna',
      image: img10,
      description: 'A portrait capturing love in abstract form',
    },
    {
      id: 11,
      title: 'Entangled',
      image: img11,
      description: 'Too deep to explain.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className={`text-center fade-in ${isVisible ? 'visible' : ''}`}>
              <h1 className="mb-4 text-foreground">Gallery</h1>
              <p className="text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                A collection of portraits exploring various forms of artistic expressions.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-6 pb-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {artworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className={`gallery-item bg-card rounded-sm overflow-hidden shadow-sm fade-in ${
                    isVisible ? 'visible' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="gallery-image w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-foreground mb-2">{artwork.title}</h3>
                    <p className="text-muted-foreground text-sm font-light tracking-wide">
                      {artwork.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
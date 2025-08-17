import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import meImg from '@/assets/me.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Portrait */}
              <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
                <div className="flex flex-col items-center">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl border-8 border-[#f5f5f5] shadow-2xl group transition-all duration-300">
                    <img
                      src={meImg}
                      alt="About the author"
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <div className="mt-6">
                    <span className="block font-[Dancing_Script,cursive] text-3xl font-semibold tracking-wide text-[#b30000]">Pawni Garg</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className={`fade-in ${isVisible ? 'visible' : ''} lg:mt-8`} style={{ animationDelay: '200ms' }}>
                <h1 className="mb-8 text-foreground">About</h1>
                
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>
                  My work is not bound to a single theme or style. Some days it takes the shape of quiet minimalistic lines, while on others it turns into bold strokes filled with color. I often create portraits of Indian gods, pieces that carry both cultural depth and personal meaning. Alongside them, I experiment with contemporary forms, abstract compositions, and playful studies that emerge without any strict plan.
                  </p>
                  
                  <p>
                  There are also moments when I return to raw expression through pen sketches, where simplicity leaves space for imperfections to become part of the story. These works often feel the most personal, as if they are captured in a moment before they could be refined. The contrast between minimal art and more detailed, colorful pieces allows me to explore different emotions and states of mind.
                  </p>
                  
                  <p>
                  The gallery is a space where all of these experiments come together. It is less about presenting a perfect style and more about showing the many ways I choose to express myself. Each artwork, whether traditional or contemporary, polished or raw, carries a fragment of thought and experience. My hope is that viewers find not just an image to look at, but a feeling they can relate to in their own way.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-foreground mb-4">Medium & Technique</h3>
                  <p className="text-muted-foreground font-light">
                    Watercolor, charcoal, and mixed media on paper. Contemporary minimalist approach 
                    with emphasis on natural lighting and organic composition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
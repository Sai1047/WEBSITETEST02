import React from 'react';
import { Home, FileText, BarChart3, ChevronRight, Star } from 'lucide-react';
import { sliderImages, marqueeImages } from '../constants';

const Hero: React.FC = () => {
  // We duplicate the images enough times to cover the screen, then duplicate THAT entire set again.
  // The CSS animation moves -50%, so it seamlessly snaps back to the start of the second half.
  const baseSet = [...sliderImages, ...sliderImages, ...sliderImages];
  const repeatedSliderImages = [...baseSet, ...baseSet]; // 2x the base set for -50% loop logic
  
  const repeatedMarqueeImages = [...marqueeImages, ...marqueeImages, ...marqueeImages];

  return (
    <section className="pt-32 pb-12 relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute right-[-10%] top-[10%] w-[45rem] h-[45rem] bg-primary blur-[200px] rounded-full animate-pulse opacity-40"></div>
        <div className="absolute left-[-10%] top-[20%] w-[35rem] h-[35rem] bg-blue-600 blur-[200px] rounded-full opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10 flex flex-col items-center text-center">
        
        {/* Rating Block */}
        <div className="flex flex-col items-center mb-8 animate-pop-up opacity-0" style={{ animationDelay: '0ms' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-white/20 z-10 text-black font-bold text-xs">
                BPO
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-bold text-white leading-none mb-1">4.9</span>
              <div className="flex text-primary gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-secondary font-medium tracking-wide">Property Preservation & BPO Services</p>
        </div>

        {/* Headings */}
        <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-6 tracking-tight">
          <span className="block text-white animate-pop-up opacity-0" style={{ animationDelay: '150ms' }}>Streamline Your</span>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 animate-pop-up opacity-0" style={{ animationDelay: '300ms' }}>
            <span className="text-secondary">Preservation</span>
            {/* Pill Container */}
            <div className="h-12 md:h-20 px-4 md:px-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full flex items-center gap-4 md:gap-6 shadow-[0_0_30px_rgba(56,189,248,0.1)]">
              <Home className="h-6 w-6 md:h-10 md:w-10 text-primary hover:scale-110 transition-transform" />
              <FileText className="h-6 w-6 md:h-10 md:w-10 text-white hover:scale-110 transition-transform" />
              <div className="w-px h-6 bg-white/20"></div>
              <BarChart3 className="h-6 w-6 md:h-10 md:w-10 text-primary hover:scale-110 transition-transform" />
            </div>
            <span className="text-secondary">Workflow</span>
          </div>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-secondary text-lg md:text-2xl mt-4 mb-10 animate-pop-up opacity-0 leading-relaxed font-light" style={{ animationDelay: '450ms' }}>
          We provide fast, accurate, and scalable data processing & backend support tailored to grow your property preservation business.
        </p>

        {/* CTA Button */}
        <div className="animate-pop-up opacity-0" style={{ animationDelay: '600ms' }}>
          <a href="#services" className="inline-flex items-center gap-3 px-10 py-5 bg-blue-900/40 border border-primary hover:bg-primary hover:text-black text-primary rounded-full transition-all duration-300 group shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <span className="font-bold text-lg group-hover:text-black transition-colors">Explore Our Services</span>
            <ChevronRight className="w-5 h-5 text-current group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Slider Section */}
        <div className="mt-24 w-full overflow-hidden relative animate-pop-up opacity-0" style={{ animationDelay: '800ms' }}>
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
            {repeatedSliderImages.map((src, idx) => (
              <div key={idx} className="relative w-[280px] md:w-[420px] aspect-[16/10] rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-2xl bg-white/5 group">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                <img src={src} alt="Slide" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Section */}
        <div className="mt-16 w-full max-w-6xl mx-auto relative overflow-hidden animate-pop-up opacity-0" style={{ animationDelay: '1000ms' }}>
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="flex gap-16 animate-marquee w-max py-4 items-center">
            {repeatedMarqueeImages.map((src, idx) => (
               <img key={idx} src={src} alt="Brand" className="h-8 md:h-12 w-auto opacity-40 hover:opacity-100 transition-opacity invert grayscale hover:grayscale-0" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Play,
  X,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Proof = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const proofItems = [
    {
      type: 'video',
      title: 'Live $2,847 Scalp Trade',
      description: 'Watch the complete breakdown of a high-probability setup',
      thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      profit: '$2,847',
      duration: '3:24',
    },
    {
      type: 'chart',
      title: 'Account Growth: $5K → $47K',
      description: "Student Michael's 9-month transformation journey",
      thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
      profit: '+940%',
      timeframe: '9 months',
    },
    {
      type: 'video',
      title: 'Psychology Session Breakdown',
      description: 'Overcoming revenge trading patterns',
      thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '12:15',
    },
    {
      type: 'chart',
      title: 'Weekly Consistency Report',
      description: "Sarah's 12-week profit streak",
      thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
      profit: '+287%',
      timeframe: '12 weeks',
    },
  ];

  const testimonials = [
    {
      name: 'Marcus Chen',
      role: 'Day Trader',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      quote: 'Mentis transformed my trading from emotional gambling to systematic profit generation. Up 340% in 6 months.',
      rating: 5,
      profit: '+340%',
    },
    {
      name: 'Sarah Williams',
      role: 'Swing Trader',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      quote: 'The psychology coaching was game-changing. I finally stopped revenge trading and started following my plan.',
      rating: 5,
      profit: '+187%',
    },
    {
      name: 'David Rodriguez',
      role: 'Forex Trader',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100',
      quote: "Best investment I've ever made. Mentis taught me to trade with discipline and consistent profitability.",
      rating: 5,
      profit: '+523%',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.proof-card',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.testimonials-container',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setSelectedVideo(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="proof"
      ref={containerRef}
      className="relative py-24  bg-gradient-to-br from-[#0e0c2d] via-[#15124b] to-[#1b155f] overflow-hidden text-white"
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-mentis-blue-400 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-mentis-blue-600 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anton mb-6">
            <span className="gradient-stroke">Trader Proof</span> That Works
          </h2>
          <p className="text-xl font-montserrat text-white/80 max-w-3xl mx-auto leading-relaxed">
            Real trades, real results, real transformations. See how our students turned their trading around.
          </p>
        </motion.div>

        {/* Proof Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {proofItems.map((item, index) => (
            <motion.div
              key={index}
              className="proof-card group relative overflow-hidden rounded-xl bg-card/10 backdrop-blur-sm border border-white/10 hover:border-mentis-teal-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              style={{ y }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {item.type === 'video' && (
                  <motion.button
                    onClick={() => openVideo(item.videoUrl!)}
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.button>
                )}

                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                  {item.profit}
                </div>
                <div className="absolute bottom-4 left-4 text-white/90 text-sm font-montserrat">
                  {item.duration || item.timeframe}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-anton text-white mb-2">{item.title}</h3>
                <p className="text-white/70 font-montserrat text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-anton text-white mb-4">What Our Traders Say</h3>
            <p className="text-white/70 font-montserrat">Hear from traders who transformed their results</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="testimonial-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-mentis-teal-400 mx-auto mb-4" />
                      <div className="flex justify-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-white/90 font-montserrat italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex justify-center items-center gap-4">
                        <div>
                          <div className="font-anton text-white">{testimonial.name}</div>
                          <div className="text-white/70 font-montserrat text-sm">{testimonial.role}</div>
                        </div>
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                          {testimonial.profit}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation */}
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === currentSlide ? 'bg-mentis-teal-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeVideo}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl mx-4 bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeVideo} className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video">
              <iframe
                src={selectedVideo}
                title="Proof Video"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Proof;

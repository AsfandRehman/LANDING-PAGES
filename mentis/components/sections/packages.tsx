'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Check,
  Crown,
  Users,
  Video,
  Shield
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Packages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [isAnnual, setIsAnnual] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const packages = [
    {
      name: 'Single Session',
      description: 'Perfect for testing our approach',
      price: isAnnual ? 197 : 247,
      originalPrice: isAnnual ? 247 : 297,
      icon: Video,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: [
        '1-hour strategy session',
        'Personal trading analysis',
        'Custom action plan',
        'Recording included',
        'Email follow-up support'
      ],
      popular: false
    },
    {
      name: 'Elite Mentorship',
      description: 'Complete transformation program',
      price: isAnnual ? 2497 : 3497,
      originalPrice: isAnnual ? 3497 : 4997,
      icon: Crown,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: [
        'Weekly 1:1 coaching calls',
        'Live trading sessions',
        'Psychology breakthrough work',
        'Custom strategy development',
        '24/7 emergency support',
        'Private Telegram access',
        'Performance tracking',
        'Lifetime community access'
      ],
      popular: true
    },
    {
      name: 'Group Coaching',
      description: 'Learn with elite traders',
      price: isAnnual ? 997 : 1297,
      originalPrice: isAnnual ? 1297 : 1697,
      icon: Users,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      features: [
        'Bi-weekly group calls',
        'Live market analysis',
        'Group chat support',
        'Strategy video library',
        'Monthly challenges',
        'Peer accountability'
      ],
      popular: false
    }
  ];

  const bonuses = [
    {
      title: 'Trading Psychology Masterclass',
      value: '$497',
      description: 'Complete course on mental game mastery'
    },
    {
      title: 'Risk Management Calculator',
      value: '$197',
      description: 'Advanced position sizing tool'
    },
    {
      title: 'Strategy Backtesting Guide',
      value: '$297',
      description: 'Learn to test your strategies'
    },
    {
      title: 'Emergency Hotline Access',
      value: '$997',
      description: '24/7 crisis support line'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.package-card',
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
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
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.bonus-card',
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.bonuses-container',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handlePackageSelect = (index: number) => {
    setSelectedPackage(index);
  };

  return (
    <>
      {/* PACKAGES SECTION */}
      <section
        id="packages"
        ref={containerRef}
        className="relative z-10 py-24 bg-gradient-to-br from-background to-mentis-blue-50 overflow-visible"
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-mentis-blue-400 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-mentis-blue-600 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anton text-mentis-slate-900 mb-6">
              Your <span className="gradient-stroke shiny-text">Investment</span> in Success
            </h2>
            <p className="text-xl font-montserrat text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the mentorship level that fits your commitment to trading excellence.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-12"
          >
            <div className="bg-card rounded-lg p-2 border border-border shadow-sm">
              <div className="flex items-center space-x-4">
                <span className={`font-montserrat font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  One-time
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative w-16 h-8 rounded-full transition-colors ${isAnnual ? 'bg-primary' : 'bg-gray-300'}`}
                >
                  <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`} />
                </button>
                <span className={`font-montserrat font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Annual
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-montserrat font-semibold">
                  Save 30%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative z-10">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`package-card relative group cursor-pointer transition-all duration-300 ${pkg.popular ? 'transform scale-105' : ''}`}
                style={{ y }}
                onClick={() => handlePackageSelect(index)}
              >
                <div className={`relative h-full p-8 bg-card rounded-xl shadow-lg border-2 transition-all duration-300 ${
                  selectedPackage === index 
                    ? `${pkg.borderColor} shadow-xl` 
                    : 'border-border hover:border-primary/50'
                } ${pkg.popular ? 'bg-gradient-to-br from-white to-purple-50' : ''}`}>
                  
                  <div className={`w-16 h-16 ${pkg.bgColor} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                    <pkg.icon className={`${pkg.color} w-8 h-8`} />
                  </div>

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-anton text-black mb-2">{pkg.name}</h3>
                    <p className="text-black font-montserrat mb-6">{pkg.description}</p>

                    <div className="mb-6">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-4xl font-anton text-mentis-slate-900">${pkg.price}</span>
                        <span className="text-lg text-black line-through">${pkg.originalPrice}</span>
                      </div>
                      <div className="text-green-600 font-montserrat font-semibold">
                        Save ${pkg.originalPrice - pkg.price}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-montserrat text-black">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-primary to-mentis-blue-600 text-white hover:shadow-lg'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    } ${selectedPackage === index ? 'animate-glow' : ''}`}
                  >
                    {pkg.popular ? 'Get Started Now' : 'Choose This Package'}
                  </motion.button>

                  {selectedPackage === index && (
                    <div className="absolute inset-0 rounded-xl border-2 border-primary animate-pulse" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS SECTION */}
      <section className="relative z-20 bg-white py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bonuses-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-anton text-mentis-slate-900 mb-8">
              Exclusive Bonuses Worth <span className="gradient-stroke">$1,988</span>
            </h3>
            <p className="text-black font-montserrat">
              Get these premium resources when you join Elite Mentorship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bonus-card glassmorphism p-6 rounded-xl text-center">
                <div className="text-2xl font-anton text-primary mb-2">{bonus.value}</div>
                <h4 className="font-montserrat font-semibold text-mentis-slate-900 mb-2">{bonus.title}</h4>
                <p className="text-sm text-muted-foreground">{bonus.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border/50 max-w-2xl mx-auto">
            <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-anton text-mentis-slate-900 mb-4">
              60-Day Money Back Guarantee
            </h3>
            <p className="text-muted-foreground font-montserrat leading-relaxed">
              If you don't see improvement in your trading within 60 days, we'll refund every penny.
              No questions asked. Your success is our commitment.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Packages;

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  DollarSign,
  Clock,
  Target,
  CheckCircle,
  Sparkles
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Apply = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    capital: '',
    goals: '',
    commitment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        capital: '',
        goals: '',
        commitment: ''
      });
    }, 3000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate form fields
      gsap.fromTo('.form-field',
        { 
          opacity: 0,
          y: 30
        },
        { 
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate stats
      gsap.fromTo('.stat-item',
        { 
          opacity: 0,
          scale: 0.8
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="apply"
      ref={containerRef}
      className="relative py-24 bg-gradient-to-br from-background to-mentis-blue-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-mentis-blue-400 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-mentis-blue-600 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anton text-mentis-slate-900 mb-6">
            Ready to <span className="gradient-stroke shiny-text">Transform</span> Your Trading?
          </h2>
          <p className="text-xl font-montserrat text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Apply now for personalized mentorship and join the ranks of consistently profitable traders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl shadow-lg border border-border/50 p-8"
          >
            <h3 className="text-2xl font-anton text-mentis-slate-900 mb-6">
              Application Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field">
                <label className="block text-sm font-montserrat font-medium text-muted-foreground mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-montserrat"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="block text-sm font-montserrat font-medium text-muted-foreground mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-montserrat"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="block text-sm font-montserrat font-medium text-muted-foreground mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-montserrat"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="block text-sm font-montserrat font-medium text-muted-foreground mb-2">
                  Trading Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-montserrat"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-1 year)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                </select>
              </div>

              <div className="form-field">
                <label className="block text-sm font-montserrat font-medium text-muted-foreground mb-2">
                  Trading Capital *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <select
                    name="capital"
                    value={formData.capital}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-montserrat"
                  >
                    <option value="">Select your capital range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-25k">$5,000 - $25,000</option>
                    <option value="25k-100k">$25,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label className="block text-sm font-montserrat font-medium text-muted-foreground mb-2">
                  Trading Goals *
                </label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-montserrat resize-none"
                  placeholder="Describe your trading goals and what you want to achieve..."
                />
              </div>

              <div className="form-field">
                <label className="block text-sm font-montserrat font-medium text-muted-foreground mb-2">
                  Time Commitment *
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <select
                    name="commitment"
                    value={formData.commitment}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-montserrat"
                  >
                    <option value="">Select your availability</option>
                    <option value="part-time">Part-time (5-10 hours/week)</option>
                    <option value="full-time">Full-time (20+ hours/week)</option>
                    <option value="serious">Serious commitment (40+ hours/week)</option>
                  </select>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full py-4 px-6 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSuccess 
                    ? 'bg-green-500 text-black' 
                    : isSubmitting 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Application Submitted!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-black-400" />
                    <span>Submit Application</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Stats & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* What Happens Next */}
            <div className="bg-card rounded-xl shadow-lg border border-border/50 p-8">
              <h3 className="text-2xl font-anton text-deep-midnight-900 mb-6">
                What Happens Next?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-montserrat font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-mentis-slate-900">Application Review</h4>
                    <p className="text-muted-foreground text-sm">We'll review your application within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-montserrat font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-mentis-slate-900">Strategy Call</h4>
                    <p className="text-muted-foreground text-sm">30-minute call to discuss your goals and fit</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-montserrat font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-mentis-slate-900">Program Start</h4>
                    <p className="text-muted-foreground text-sm">Begin your transformation journey</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stats */}
            <div className="stats-grid grid grid-cols-2 gap-4">
              <div className="stat-item bg-card rounded-xl p-6 text-center shadow-lg border border-border/50">
                <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-anton text-mentis-slate-900">94%</div>
                <div className="text-sm font-montserrat text-muted-foreground">Success Rate</div>
              </div>
              <div className="stat-item bg-card rounded-xl p-6 text-center shadow-lg border border-border/50">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-anton text-mentis-slate-900">$247K</div>
                <div className="text-sm font-montserrat text-muted-foreground">Avg. Profit</div>
              </div>
              <div className="stat-item bg-card rounded-xl p-6 text-center shadow-lg border border-border/50">
                <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-anton text-mentis-slate-900">3.2</div>
                <div className="text-sm font-montserrat text-muted-foreground">Months Avg.</div>
              </div>
              <div className="stat-item bg-card rounded-xl p-6 text-center shadow-lg border border-border/50">
                <Sparkles className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-anton text-mentis-slate-900">24/7</div>
                <div className="text-sm font-montserrat text-muted-foreground">Support</div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-gradient-to-r from-primary to-mentis-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-anton mb-4">Our Guarantee</h3>
              <p className="font-montserrat text-sm leading-relaxed">
                If you don't see significant improvement in your trading within 60 days, 
                we'll refund your investment completely. No questions asked.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Confetti Effect */}
      {isSuccess && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                y: -10, 
                x: Math.random() * window.innerWidth,
                rotate: 0
              }}
              animate={{ 
                opacity: [0, 1, 0], 
                y: window.innerHeight + 100,
                rotate: 360
              }}
              transition={{ 
                duration: 3,
                delay: Math.random() * 2,
                ease: 'easeOut'
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-primary to-mentis-blue-600 rounded-full"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Apply;
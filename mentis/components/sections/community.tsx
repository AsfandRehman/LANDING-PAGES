'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  MessageCircle, 
  TrendingUp, 
  DollarSign,
  Users,
  Zap,
  Star,
  ChevronRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Community = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const liveMessages = [
    {
      user: 'Marcus_Trader',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50',
      message: 'Just closed +$2,847 on EURUSD following the London session strategy 🚀',
      timestamp: '2 min ago',
      type: 'profit',
      amount: '+$2,847'
    },
    {
      user: 'Sarah_FX',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50',
      message: 'The psychology session last week was a game changer. No more revenge trading!',
      timestamp: '5 min ago',
      type: 'testimonial'
    },
    {
      user: 'David_Scalper',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=50',
      message: 'Screenshot of my trading journal - 12 wins in a row using the Mentis method',
      timestamp: '8 min ago',
      type: 'achievement',
      attachment: 'trading_journal.jpg'
    },
    {
      user: 'Alex_Crypto',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=50',
      message: 'Anyone else seeing this BTC setup? Looks like a perfect entry point',
      timestamp: '12 min ago',
      type: 'analysis'
    },
    {
      user: 'Emma_Trader',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50',
      message: 'Monthly P&L update: +47% this month thanks to the risk management course',
      timestamp: '15 min ago',
      type: 'profit',
      amount: '+47%'
    }
  ];

  const communityStats = [
    {
      icon: Users,
      value: '2,847',
      label: 'Active Traders',
      color: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      value: '94%',
      label: 'Success Rate',
      color: 'text-green-500'
    },
    {
      icon: DollarSign,
      value: '$2.4M',
      label: 'Monthly Profits',
      color: 'text-purple-500'
    },
    {
      icon: MessageCircle,
      value: '24/7',
      label: 'Live Support',
      color: 'text-orange-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate community stats
      gsap.fromTo('.stat-card',
        { 
          opacity: 0,
          y: 50,
          scale: 0.8
        },
        { 
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate feed messages
      gsap.fromTo('.feed-message',
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
            trigger: '.community-feed',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % liveMessages.length);
        setIsTyping(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getMessageIcon = (type: string) => {
    switch (type) {
      case 'profit': return <DollarSign className="w-4 h-4 text-green-500" />;
      case 'achievement': return <Star className="w-4 h-4 text-yellow-500" />;
      case 'analysis': return <TrendingUp className="w-4 h-4 text-blue-500" />;
      default: return <MessageCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <section
      id="community"
      ref={containerRef}
      className="relative py-24 bg-gradient-to-br from-mentis-slate-900 via-mentis-slate-800 to-mentis-slate-700 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anton text-white mb-6">
            Live <span className="gradient-stroke shiny-text">Community Pulse</span>
          </h2>
          <p className="text-xl font-montserrat text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of traders sharing wins, strategies, and supporting each other in real-time.
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-mentis-teal-400/50 transition-all duration-300"
              style={{ y }}
            >
              <div className={`w-12 h-12 mx-auto mb-4 ${stat.color}`}>
                <stat.icon className="w-full h-full" />
              </div>
              <div className="text-3xl font-anton text-white mb-2">{stat.value}</div>
              <div className="text-white/70 font-montserrat text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Live Community Feed */}
        <div className="community-feed max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-anton text-white">Live Trading Feed</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/70 font-montserrat text-sm">Live</span>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-4 h-96 overflow-y-auto">
              {liveMessages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`feed-message flex items-start space-x-3 p-4 rounded-lg transition-all duration-300 ${
                    index === currentMessage ? 'bg-mentis-blue-500/20 border border-mentis-blue-400/30' : 'bg-white/5'
                  }`}
                  animate={{
                    scale: index === currentMessage ? 1.02 : 1,
                    opacity: index === currentMessage ? 1 : 0.8
                  }}
                >
                  <img
                    src={message.avatar}
                    alt={message.user}
                    className="w-10 h-10 rounded-full border-2 border-white/20"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-montserrat font-semibold text-white text-sm">{message.user}</span>
                      {getMessageIcon(message.type)}
                      <span className="text-white/50 text-xs">{message.timestamp}</span>
                    </div>
                    
                    <p className="text-white/90 font-montserrat text-sm mb-2">{message.message}</p>
                    
                    {message.amount && (
                      <div className="inline-flex items-center space-x-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-montserrat font-semibold">
                        <TrendingUp className="w-3 h-3" />
                        <span>{message.amount}</span>
                      </div>
                    )}
                    
                    {message.attachment && (
                      <div className="flex items-center space-x-2 mt-2 text-mentis-blue-400 text-sm">
                        <Zap className="w-4 h-4" />
                        <span>{message.attachment}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg"
                >
                  <div className="w-10 h-10 bg-gray-400 rounded-full animate-pulse" />
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                    <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Join Community CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-mentis-blue-600 text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Join the Community</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
            <p className="mt-4 text-white/70 font-montserrat text-sm">
              Connect with profitable traders and get real-time support
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;
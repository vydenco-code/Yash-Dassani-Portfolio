import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Users, 
  Target, 
  Smartphone, 
  Video, 
  MessageSquare, 
  Briefcase, 
  Zap, 
  CheckCircle, 
  Image as ImageIcon,
  CircleUserRound,
  Play
} from 'lucide-react';

const LogoPlaceholder = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center shrink-0 ${className}`}>
    <img src="/rg logo - Edited.png" alt="RG Cellulars" className="w-full h-full object-contain drop-shadow-lg" />
  </div>
);

const slideData = [
  {
    id: 'intro',
    layout: 'centered',
    title: 'RG Cellulars – Work Portfolio',
    subtitle: 'Contributions by Yashvardhan Dassani',
    content: 'Driving digital growth, sales generation, influencer marketing, automation, and community building.',
    icon: <LogoPlaceholder className="w-16 h-16 mb-6" />
  },
  {
    id: 'exec_summary',
    layout: 'split',
    title: 'Executive Summary',
    subtitle: 'Reducing costs while scaling impact.',
    bullets: [
      'Achieved 10x+ ROAS through Meta Ads',
      'Generated 1000s of leads with direct sales conversions',
      'Reduced influencer marketing costs to ~1/5th of agency budgets',
      'Built Realme Kolkata’s first fan community (1M+ reach)',
      'Revived RG Cellulars’ social presence (Instagram, FB, YTube)',
      'Saved thousands via self-built chatbot automation'
    ],
    icon: <Target className="w-10 h-10 text-indigo-400 mb-6" />
  },
  {
    id: 'meta_ads',
    layout: 'split',
    title: '1. Meta Ads & Performance',
    subtitle: 'Immediate Sales Generation',
    image: '/Hero Meta.png',
    metrics: [
      { label: 'ROAS', value: '10x+' },
      { label: 'Leads', value: '1000s' },
      { label: 'Min Budget', value: '₹4k' }
    ],
    bullets: [
      'Achieved 3–5 direct sales per campaign',
      'Proved social media can become a direct sales channel',
      'Built a scalable lead-generation framework',
      'Improved digital customer acquisition at low costs'
    ],
    icon: <TrendingUp className="w-10 h-10 text-green-400 mb-6" />
  },
  {
    id: 'influencer',
    layout: 'split',
    title: '2. Influencer Marketing',
    subtitle: 'High-Impact Execution at Minimal Costs',
    image: '/Hero Influencer.png',
    metrics: [
      { label: 'Agency Proposal', value: '3 for ₹75k' },
      { label: 'My Execution', value: '15 for ₹75k' },
      { label: 'Total Managed', value: '100+' }
    ],
    bullets: [
      'Executed 3 major Realme campaigns curating high-quality influencers',
      'Completed campaigns at nearly 1/5th of agency costs',
      'Maintained strong relationships despite payment delays',
      'Established long-term categorized influencer networks'
    ],
    icon: <Users className="w-10 h-10 text-pink-400 mb-6" />
  },
  {
    id: 'community',
    layout: 'split',
    title: '3. Realme Fan Community',
    subtitle: 'From Scratch to 1M+ Reach in Weeks',
    image: '/Hero RKF.png',
    metrics: [
      { label: 'Organic Reach', value: '1M+' },
      { label: 'Social Followers', value: '800+' },
      { label: 'WhatsApp Group', value: '400+' }
    ],
    bullets: [
      'Built Kolkata\'s first Realme fan community',
      'Coordinated 100+ influencers and 50+ students',
      'Managed UGC contests, gifts, creatives, and events',
      'Strengthened offline + online brand presence simultaneously'
    ],
    icon: <Users className="w-10 h-10 text-orange-400 mb-6" />
  },
  {
    id: 'social',
    layout: 'split',
    title: '4. Social Media Revival',
    subtitle: 'Breathing life into zero-reach platforms.',
    image: '/Hero SM .png',
    metrics: [
      { label: 'Instagram', value: '600 → 2100+' },
      { label: 'Facebook', value: '200 → 2100+' },
      { label: 'YouTube', value: '80 → 900+' }
    ],
    bullets: [
      'Increased average reel performance from ~100 to 10k+ views',
      'Executed giveaway generating 250+ unique store footfalls',
      'Managed 1000+ customer responses and voucher distributions',
      'Unlocked organic growth through community strategies'
    ],
    icon: <Smartphone className="w-10 h-10 text-purple-400 mb-6" />
  },
  {
    id: 'content',
    layout: 'split',
    title: '5. Content Production',
    subtitle: 'In-House Scalable Content Creation',
    image: '/Hero Content .png',
    bullets: [
      'Shot and edited influencer videos personally',
      'Produced ad creatives for Meta Ads campaigns',
      'Created store-based engagement and video content',
      'Reduced dependency on external production teams',
      'Decreased turnaround time and ensured higher quality control'
    ],
    icon: <Video className="w-10 h-10 text-red-400 mb-6" />
  },
  {
    id: 'bots',
    layout: 'split',
    title: '6. WhatsApp Automation',
    subtitle: 'In-House Chatbots & Automation Systems',
    image: '/Hero Whatsapp .png',
    metrics: [
      { label: 'Agency Pricing', value: '₹5k/flow' },
      { label: 'My Execution', value: '₹0 (Built In-House)' }
    ],
    bullets: [
      'Learn and built multiple chatbot flows independently',
      'Managed WhatsApp lead handling, responding to missed calls',
      'Executed bulk WhatsApp messaging campaigns',
      'Increased lead handling efficiency and saved operational costs'
    ],
    icon: <MessageSquare className="w-10 h-10 text-teal-400 mb-6" />
  },
  {
    id: 'poc',
    layout: 'split',
    title: '7. Operational Coordination',
    subtitle: 'The Central Point of Communication (POC)',
    image: '/Hero POC .png',
    bullets: [
      'Central POC for technical, campaign, and event operations',
      'Coordinated Abhishek Dutta, iPhone 17 Launch, OnePlus Pop-Ups',
      'Created and managed 20+ store QR codes for social execution',
      'Executed Bulk SMS Campaign'
    ],
    icon: <CheckCircle className="w-10 h-10 text-yellow-400 mb-6" />
  },
  {
    id: 'impact',
    layout: 'centered',
    title: 'Core Strengths & Impact',
    subtitle: 'Driving Measurable Business Value',
    bullets: [
      'Transforming digital channels into direct real-world sales drivers.',
      'Slashing operational and agency costs through full-stack in-house capabilities.',
      'Performance Marketing, Community Building, Automation, and Event Execution.',
      'Establishing long-term sustainable digital growth systems for RG Cellulars.'
    ],
    icon: <Zap className="w-16 h-16 mb-6 text-amber-500" />
  }
];

const ImagePlaceholder = ({ label, src }: { label?: string; src?: string }) => {
  if (src) {
    return (
      <div className="w-full h-full min-h-[200px] sm:min-h-[250px] flex items-center justify-center rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 bg-black/20 group">
        <img src={src} alt={label || 'Image'} className="w-full h-full object-contain p-2 md:p-4 transition-transform duration-700 group-hover:scale-105" />
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[200px] sm:min-h-[250px] md:min-h-[400px] flex items-center justify-center bg-gray-900/50 rounded-2xl md:rounded-3xl border border-dashed border-gray-700/50 overflow-hidden relative group shadow-2xl backdrop-blur-sm">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className="flex flex-col items-center text-gray-500 transition-transform duration-500 group-hover:scale-105 p-6 text-center">
      <ImageIcon className="w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-4 opacity-40 group-hover:opacity-60 transition-opacity" />
      <span className="text-xs md:text-sm font-semibold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">{label || 'Image Placeholder'}</span>
    </div>
    
    {/* Optional: Add decorative corner markers */}
    <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-gray-700/50 rounded-tl-lg"></div>
    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-gray-700/50 rounded-tr-lg"></div>
    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-gray-700/50 rounded-bl-lg"></div>
    <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-gray-700/50 rounded-br-lg"></div>
  </div>
  );
};

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slideData.length);
  };
  
  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slideData.length) % slideData.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input (though there are none right now)
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slide = slideData[current];

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <div className="h-[100dvh] bg-[#0a0a0c] text-slate-200 flex flex-col font-sans overflow-hidden selection:bg-indigo-500/30">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-50 w-full p-4 sm:p-6 md:p-8 flex justify-between items-center shrink-0 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-900/20 shrink-0">
            <CircleUserRound className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="font-bold text-base sm:text-lg leading-tight tracking-tight text-white truncate">Yashvardhan Dassani</h1>
            <p className="text-[10px] sm:text-xs font-medium text-slate-500 tracking-wider uppercase">Portfolio 2025-2026</p>
          </div>
        </div>
        <div className="text-xs sm:text-sm font-mono font-medium text-slate-400 bg-white/5 py-1.5 px-3 sm:py-2 sm:px-4 rounded-full border border-white/10 backdrop-blur-md shrink-0 ml-2">
          {current + 1} <span className="opacity-50">/</span> {slideData.length}
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-1 relative z-10 w-full">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute inset-0 overflow-y-auto overflow-x-hidden transition-all flex flex-col"
          >
            <div className="w-full max-w-7xl mx-auto flex flex-col my-auto py-10 md:py-16 px-4 sm:px-8 shrink-0">
              
              {/* Centered Layout Support */}
              {slide.layout === 'centered' && (
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 0.1 }}
                  >
                    {slide.icon}
                  </motion.div>
                  <motion.h2 
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white tracking-tight leading-tight"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl lg:text-2xl text-indigo-400 mb-6 font-medium"
                  >
                    {slide.subtitle}
                  </motion.h3>
                  {slide.content && (
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.4 }}
                      className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed px-4"
                    >
                      {slide.content}
                    </motion.p>
                  )}
                  {slide.bullets && (
                    <motion.ul 
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.4 }}
                      className="text-left mt-6 md:mt-8 space-y-3 w-full bg-white/5 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10"
                    >
                      {slide.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3 md:gap-4 items-start select-text">
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 mt-2 md:mt-2.5 rounded-full bg-indigo-500 shrink-0" />
                          <span className="text-base md:text-lg text-slate-200 leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                  
                  {/* Provide Image Placeholder in centered layout if requested, usually at bottom */}
                  {slide.id === 'intro' && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.5 }}
                      className="mt-10 md:mt-16 w-full max-w-3xl shrink-0 h-48 sm:h-64 md:h-80 lg:h-96"
                    >
                         <ImagePlaceholder label="Hero / Showcase Image" src="/Hero 1.png" />
                    </motion.div>
                  )}
                </div>
              )}

              {/* Split Layout Support */}
              {slide.layout === 'split' && (
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center w-full h-full pb-4">
                  <div className="flex-1 w-full flex flex-col justify-center">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                      {slide.icon}
                    </motion.div>
                    <motion.h2 
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.2 }}
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white tracking-tight"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.3 }}
                      className="text-base sm:text-lg lg:text-xl text-indigo-400 mb-6 lg:mb-8 font-medium"
                    >
                      {slide.subtitle}
                    </motion.h3>
                    
                    {slide.metrics && (
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8"
                      >
                        {slide.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 backdrop-blur-md">
                            <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-medium tracking-wide uppercase mb-0.5 md:mb-1">{metric.label}</div>
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-none">{metric.value}</div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {slide.bullets && (
                      <motion.ul 
                        initial={{ y: 20, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.5 }}
                        className="space-y-3 lg:space-y-4"
                      >
                        {slide.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-3 md:gap-4 items-start select-text group">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 mt-2 md:mt-2.5 rounded-full bg-indigo-500 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <span className="text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                  
                  {/* Image Column */}
                  {(slide as any).image && (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }} 
                      animate={{ scale: 1, opacity: 1 }} 
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="flex-1 w-full min-h-[200px] sm:min-h-[250px] md:min-h-[400px] shrink-0 py-4 flex items-center justify-center relative"
                    >
                      <ImagePlaceholder label={`${slide.title.replace(/[0-9.]/g, '').trim()} Visual`} src={(slide as any).image} />
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Controls */}
      <footer className="relative z-50 w-full p-4 sm:p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 shrink-0 bg-[#0a0a0c]/80 backdrop-blur-md border-t border-white/5">
        
        {/* Progress Bar */}
        <div className="w-full md:w-1/3 flex items-center gap-4 order-2 md:order-1">
          <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-indigo-500 rounded-full"
              initial={false}
              animate={{ width: `${((current + 1) / slideData.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Navigation Info */}
        <div className="text-sm font-medium text-slate-500 hidden md:flex items-center gap-2 order-2">
           Use <kbd className="font-mono bg-white/10 px-2 py-1 rounded text-slate-300 text-xs">Left</kbd> and <kbd className="font-mono bg-white/10 px-2 py-1 rounded text-slate-300 text-xs">Right</kbd> arrow keys to navigate
        </div>

        {/* Buttons */}
        <div className="flex gap-3 order-1 md:order-3 w-full md:w-auto justify-between md:justify-end">
          <button
            onClick={prev}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-white/5 hover:border-white/20 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="md:hidden">Prev</span>
          </button>
          <button
            onClick={next}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-900/40 active:scale-95"
          >
            <span className="md:hidden">Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}

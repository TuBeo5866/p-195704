import React, { useRef, useEffect, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Youtube, 
  Music, 
  X, 
  Disc, 
  Gamepad2, 
  MessageSquare, 
  Cloud, 
  Facebook, 
  Instagram, 
  ExternalLink 
} from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elementsToAnimate = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elementsToAnimate.forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-10');
        el.classList.add('transition-all', 'duration-700', 'ease-out');
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      label: "GitHub", 
      href: "https://github.com/tubeo5866" 
    },
    { 
      icon: <MessageSquare size={20} />, 
      label: "Discord", 
      href: "https://discordapp.com/users/698715849434988608" 
    },
    { 
      icon: <Youtube size={20} />, 
      label: "YouTube", 
      href: "https://youtube.com/TuBeo5866" 
    },
    { 
      icon: <Music size={20} />, 
      label: "TikTok", 
      href: "https://tiktok.com/@tubeo5866" 
    },
    { 
      icon: <X size={20} />, 
      label: "X", 
      href: "https://x.com/tubeo5866" 
    },
    { 
      icon: <Cloud size={20} />, 
      label: "Bluesky", 
      href: "https://bsky.app/profile/tubeo5866.bsky.app" 
    },
    { 
      icon: <Facebook size={20} />, 
      label: "Facebook 1", 
      href: "https://facebook.com/TuBeo5866" 
    },
    { 
      icon: <Facebook size={20} />, 
      label: "Facebook 2", 
      href: "https://facebook.com/TuBeo58666" 
    },
    { 
      icon: <ExternalLink size={20} />, 
      label: "Reddit", 
      href: "https://www.reddit.com/user/Infinite-Science96" 
    },
    { 
      icon: <Instagram size={20} />, 
      label: "Instagram", 
      href: "https://www.instagram.com/tubeo5866" 
    },
    { 
      icon: <Gamepad2 size={20} />, 
      label: "Steam", 
      href: "https://steamcommunity.com/id/tubeo5866" 
    },
    { 
      icon: <Cloud size={20} />, 
      label: "SoundCloud", 
      href: "https://soundcloud.com/tubeo5866" 
    },
    { 
      icon: <Disc size={20} />, 
      label: "Spotify", 
      href: "https://open.spotify.com/user/316petzrdvrteasaneyw4hq2g3se" 
    },
    { 
      icon: <ExternalLink size={20} />, 
      label: "Threads", 
      href: "https://www.threads.net/@tubeo5866" 
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 md:py-32"
    >
      <div className="section-container">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="section-title mx-auto animate-on-scroll">Contact</h2>
          <h3 className="heading-lg mb-6 animate-on-scroll">
            Get In Touch
          </h3>
          <p className="body-lg text-muted-foreground animate-on-scroll">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto glass rounded-2xl overflow-hidden shadow-elevation">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-primary/5 p-8 lg:p-12">
              <h4 className="heading-md mb-6 animate-on-scroll">Contact Information</h4>
              <div className="space-y-6 animate-on-scroll">
                <div className="flex items-start space-x-4">
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:phungdangtuantu@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      phungdangtuantu@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+84387970710" className="text-muted-foreground hover:text-primary transition-colors">
                      +84 387 970 710
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      Ha Noi, Viet Nam
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 animate-on-scroll">
                <h4 className="font-medium mb-4">Connect on Social Media</h4>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label={link.label}
                      title={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 p-8 lg:p-12 animate-on-scroll">
              <h4 className="heading-md mb-6">Send a Message</h4>
              
              {isSubmitted ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-lg animate-fade-in">
                  <h5 className="text-lg font-medium mb-2">Message Sent!</h5>
                  <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

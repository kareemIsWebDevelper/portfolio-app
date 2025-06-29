import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap, Award, Users, Coffee } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Code, title: 'Clean Code', desc: 'Writing maintainable, scalable solutions', color: 'blue' },
    { icon: Palette, title: 'UI/UX Focus', desc: 'Crafting beautiful user experiences', color: 'purple' },
    { icon: Zap, title: 'Performance', desc: 'Optimizing for speed and efficiency', color: 'yellow' },
    { icon: Award, title: 'Quality First', desc: 'Delivering excellence in every project', color: 'green' },
    { icon: Users, title: 'Team Player', desc: 'Collaborating effectively with teams', color: 'pink' },
    { icon: Coffee, title: 'Passionate', desc: 'Loving what I do every single day', color: 'orange' }
  ];

  const colorMap = {
    blue: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30',
    purple: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30',
    yellow: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/30',
    green: 'text-green-600 bg-green-50 dark:bg-green-900/20 group-hover:bg-green-100 dark:group-hover:bg-green-900/30',
    pink: 'text-pink-600 bg-pink-50 dark:bg-pink-900/20 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30',
    orange: 'text-orange-600 bg-orange-50 dark:bg-orange-900/20 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30'
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30 dark:from-slate-800/50 dark:to-blue-900/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Passionate frontend engineer with a keen eye for design and a love for creating 
            seamless user experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-4">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                With over 5 years of experience in frontend development, I specialize in building 
                modern, responsive web applications using cutting-edge technologies. I'm passionate 
                about writing clean, maintainable code and creating intuitive user interfaces.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                tech talks and mentoring.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group text-center p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer ${
                    colorMap[feature.color as keyof typeof colorMap]
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="h-8 w-8 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`lg:pl-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
                <img
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Kareem Khaled"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
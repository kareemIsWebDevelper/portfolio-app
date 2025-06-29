import { Heart, Code, Coffee, Star } from 'lucide-react';

const Footer = () => {
  const svgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white py-12 relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundImage: `url("${svgPattern}")` }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 group">
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Kareem Khaled
            </h3>
            <p className="text-slate-400 dark:text-slate-500 text-lg">Frontend Engineer</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
              <span className="text-slate-400 dark:text-slate-500 text-sm">Crafting digital experiences</span>
              <Star className="h-4 w-4 text-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-3 text-slate-400 dark:text-slate-500 mb-8">
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 dark:bg-slate-900/50 rounded-full backdrop-blur-sm border border-slate-700/50 dark:border-slate-800/50">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>and</span>
              <Coffee className="h-4 w-4 text-amber-500 animate-bounce" style={{ animationDuration: '2s' }} />
            </span>
          </div>

          <div className="flex justify-center items-center space-x-2 text-slate-400 dark:text-slate-500 mb-8">
            <Code className="h-4 w-4 text-blue-400" />
            <span className="text-sm">React • TypeScript • Tailwind CSS</span>
            <Code className="h-4 w-4 text-purple-400" />
          </div>
          
          <div className="pt-6 border-t border-slate-700/50 dark:border-slate-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 dark:text-slate-500 text-sm">
                © {new Date().getFullYear()} Kareem Khaled. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400 dark:text-slate-500">
                <a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors duration-300 hover:underline">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors duration-300 hover:underline">
                  Terms of Service
                </a>
                <span>•</span>
                <a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors duration-300 hover:underline">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
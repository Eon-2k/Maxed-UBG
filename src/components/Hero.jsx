import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import gamesData from "../data/games.json";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-32 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-3 lg:row-span-2 bento-card bento-featured flex flex-col justify-between min-h-[400px]"
        >
          <div className="absolute inset-0 z-0">
             <img src="https://picsum.photos/seed/slime-rancher/1200/800" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent"></div>
          </div>
          <div className="relative z-10">
            <div className="pill inline-block mb-6 uppercase tracking-widest text-[10px]">Portal Exclusive</div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 leading-none">
              Slime Rancher <br />
              <span className="text-brand">(PORT)</span>
            </h1>
            <p className="text-text-dim text-lg max-w-sm leading-snug">
              The full slime-wrangling experience, now unblocked and fully optimized for browser play.
            </p>
          </div>
          
          <div className="flex gap-4 mt-8 relative z-10">
            <Link to="/game/1" className="cta-button">Play Now</Link>
            <Link to="/game/1" className="bg-white/5 text-white font-bold px-6 py-3 rounded-[12px] text-sm hover:bg-white/10 transition-all">
              Details
            </Link>
          </div>
        </motion.div>

        {/* Recent Card - Now taking full width of the bottom row */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
           className="lg:col-span-4 bento-card h-full"
         >
           <h3 className="font-bold text-lg mb-4">Recently Added</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
             {gamesData.map(game => (
               <Link to={`/game/${game.id}`} key={game.id} className="bg-border/30 rounded-xl p-3 flex items-center gap-3 hover:bg-border/50 transition-colors group">
                 <div className="w-12 h-12 bg-card rounded-lg overflow-hidden flex-shrink-0">
                    <img src={game.thumbnail} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                 </div>
                 <div>
                   <div className="font-bold text-sm truncate group-hover:text-brand transition-colors">{game.title}</div>
                   <div className="text-[10px] text-text-dim uppercase tracking-wider font-bold">{game.category}</div>
                 </div>
               </Link>
             ))}
             {gamesData.length === 0 && (
               <div className="col-span-full py-4 text-center text-text-dim text-sm italic">
                 New games coming soon...
               </div>
             )}
           </div>
         </motion.div>
      </div>
    </div>
  );
};

export default Hero;

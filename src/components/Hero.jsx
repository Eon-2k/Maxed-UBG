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
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-zinc-900/50 to-bg border border-white/5 rounded-2xl overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none select-none">
                <span className="font-display font-black text-7xl md:text-9xl uppercase italic tracking-tighter text-white">Slime Rancher</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent"></div>
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
            <Link to="/lesson/1" className="cta-button">Play Now</Link>
            <Link to="/lesson/1" className="bg-white/5 text-white font-bold px-6 py-3 rounded-[12px] text-sm hover:bg-white/10 transition-all">
              Details
            </Link>
          </div>
        </motion.div>

        {/* Recent Card - Now taking full width of the bottom row */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
           className="lg:col-span-4"
         >
           <h3 className="font-bold text-xl mb-4 tracking-tight flex items-center gap-2">
             <TrendingUp size={20} className="text-brand" />
             Recently Added
           </h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {gamesData.map(game => (
               <Link to={`/lesson/${game.id}`} key={game.id} className="group">
                  <div className="aspect-[16/9] bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-2xl overflow-hidden relative mb-2 shadow-xl border border-white/5 group-hover:border-brand/30 transition-all duration-300 flex items-center justify-center p-4 text-center">
                    <span className="font-black text-sm uppercase italic tracking-widest text-white group-hover:text-brand transition-colors leading-none relative z-20">
                      {game.title}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <div className="font-bold text-xs truncate leading-tight group-hover:text-brand transition-colors">{game.title}</div>
                      <div className="text-[9px] text-text-dim uppercase tracking-widest font-extrabold mt-1">{game.category}</div>
                    </div>
                  </div>
               </Link>
             ))}
           </div>
         </motion.div>
      </div>
    </div>
  );
};

export default Hero;

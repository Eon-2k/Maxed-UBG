import { Link } from "react-router-dom";
import { AppWindow } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import appsData from "../data/apps.json";

const AppsGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight mb-2">Apps Hub</h2>
          <p className="text-text-dim">Essential utilities and proxied tools</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {appsData.map((app) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={app.id}
              className="group"
            >
              <div className="bento-card border-border hover:border-brand h-full cursor-pointer overflow-hidden p-3 flex flex-col">
                <Link to={`/app/${app.id}`}>
                  <div className="aspect-[16/10] bg-zinc-800 overflow-hidden relative rounded-xl mb-4">
                    <img
                      src={app.thumbnail}
                      alt={app.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-brand/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-tighter text-bg">
                      {app.category}
                    </div>
                  </div>
                </Link>
                <div className="flex-grow">
                  <Link to={`/app/${app.id}`}>
                    <h3 className="font-extrabold text-lg group-hover:text-brand transition-colors tracking-tight">{app.title}</h3>
                  </Link>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Instant Launch</span>
                    <div className="flex items-center gap-1">
                      <span className="text-brand text-xs">★</span>
                      <span className="text-[10px] font-bold text-white">{app.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link 
                    to={`/app/${app.id}`}
                    className="w-full py-2 bg-white/5 hover:bg-brand hover:text-bg transition-all rounded-lg text-center font-bold text-xs flex items-center justify-center gap-2"
                  >
                    Launch App
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AppsGrid;

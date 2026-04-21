import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Gamepad, Filter, Search, ArrowUpDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import gamesData from "../data/games.json";

const GamesGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Recommended");

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(gamesData.map(game => game.category))];
    return cats;
  }, []);

  const processedGames = useMemo(() => {
    let result = [...gamesData];

    // Filter by Category
    if (activeCategory !== "All") {
      result = result.filter(game => game.category === activeCategory);
    }

    // Filter by Search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(game => 
        game.title.toLowerCase().includes(query) || 
        game.category.toLowerCase().includes(query)
      );
    }

    // Sort
    if (sortBy === "Alphabetical") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "Rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "Newest") {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen">
      <div className="flex flex-col gap-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight mb-2 uppercase italic">Lesson Library</h2>
            <p className="text-text-dim max-w-md">Browse our collection of unblocked titles. Search, sort, and play instantly.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim group-focus-within:text-brand transition-colors" size={16} />
              <input
                type="text"
                placeholder="Search lessons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-card border border-border rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-brand transition-all w-full md:w-64"
              />
            </div>
            
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-card border border-border rounded-xl pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-brand cursor-pointer transition-all"
              >
                <option>Recommended</option>
                <option>Rating</option>
                <option>Alphabetical</option>
                <option>Newest</option>
              </select>
              <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 text-text-dim pointer-events-none" size={14} />
            </div>
          </div>
        </div>

        {/* Filter UI */}
        <div className="flex flex-wrap gap-2 items-center border-b border-border/50 pb-6">
          <div className="flex items-center gap-2 mr-4 text-text-dim">
            <Filter size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Categories</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${
                activeCategory === cat
                  ? "bg-brand text-bg border-brand shadow-lg shadow-brand/20"
                  : "bg-transparent border-border/50 text-text-dim hover:border-brand hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {processedGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {processedGames.map((game) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={game.id}
                className="group"
              >
                <div className="bento-card border-border/50 hover:border-brand/50 h-full cursor-pointer overflow-hidden p-3 flex flex-col group transition-all hover:bg-white/[0.02]">
                  <Link to={`/lesson/${game.id}`}>
                    <div className="aspect-[16/10] bg-gradient-to-br from-zinc-800 to-zinc-950 overflow-hidden relative rounded-xl mb-4 border border-white/5 flex items-center justify-center p-6 text-center">
                      <span className="font-black text-lg sm:text-xl uppercase italic tracking-tighter text-white group-hover:text-brand transition-colors relative z-10">
                        {game.title}
                      </span>
                      <div className="absolute top-2 left-2 bg-text px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter text-bg z-20">
                        {game.category}
                      </div>
                    </div>
                  </Link>
                  <div className="flex-grow">
                    <Link to={`/lesson/${game.id}`}>
                      <h3 className="font-extrabold text-lg group-hover:text-brand transition-colors tracking-tight leading-tight">{game.title}</h3>
                    </Link>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></div>
                        <span className="text-[10px] font-black text-text-dim uppercase tracking-widest">Active Server</span>
                      </div>
                      <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full">
                        <span className="text-brand text-xs">★</span>
                        <span className="text-[10px] font-bold text-white">{game.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <Link 
                      to={`/lesson/${game.id}`}
                      className="w-full py-2.5 bg-white text-bg hover:bg-brand transition-all rounded-lg text-center font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      Initialize Play
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-32 px-4 bento-card border-dashed">
          <Gamepad className="mx-auto text-text-dim/20 mb-6" size={80} />
          <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">System Search Failure</h3>
          <p className="text-text-dim mb-8 max-w-sm mx-auto text-sm">No results matched your parameters. Try a different query or reset filters.</p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-3 bg-white/5 rounded-xl font-bold text-xs hover:bg-white/10 transition-all uppercase tracking-widest"
            >
              Reset All
            </button>
            <Link to="/request" className="cta-button inline-block">Request Lesson</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesGrid;

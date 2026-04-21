import { useParams, Link } from "react-router-dom";
import gamesData from "../data/games.json";
import { ChevronLeft, Maximize2 } from "lucide-react";

const GameView = () => {
  const { id } = useParams();
  const game = gamesData.find(g => g.id === parseInt(id));

  const isPort = game?.isPort || game?.title?.toLowerCase().includes("(port)");

  if (!game) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center text-white">
        <h2 className="text-2xl font-bold">Game not found</h2>
        <Link to="/games" className="text-brand mt-4 inline-block underline">Back to library</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-32 pb-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/games" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-text-dim hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white leading-none">{game.title}</h1>
            <p className="text-text-dim text-sm mt-1 uppercase tracking-widest font-bold">Category: {game.category}</p>
          </div>
        </div>
        
        {!isPort && (
          <button 
            onClick={() => window.open(game.iframeUrl, '_blank')}
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-xl text-xs font-bold text-text-dim hover:text-white transition-colors"
          >
            <Maximize2 size={16} />
            Open Fullscreen
          </button>
        )}
      </div>

      <div className="bento-card p-2 aspect-video w-full bg-black overflow-hidden relative shadow-2xl">
        <iframe
          src={game.iframeUrl}
          className="w-full h-full rounded-2xl"
          title={game.title}
          allowFullScreen
          frameBorder="0"
        />
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bento-card md:col-span-2">
          <h3 className="font-bold text-xl mb-4">Description</h3>
          <p className="text-text-dim leading-relaxed">
            Experience {game.title} directly in your browser. This unblocked version is optimized for performance and works seamlessly in any environment. 
            Enjoy smooth gameplay, instant loading, and no-restrictions access.
          </p>
        </div>
        
        <div className="bento-card">
          <h3 className="font-bold text-xl mb-4">Rating</h3>
          <div className="flex items-center gap-2">
            <span className="text-brand text-3xl font-extrabold tracking-tighter">{game.rating}</span>
            <div className="flex text-brand">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-xl">★</span>
              ))}
            </div>
          </div>
          <p className="text-text-dim text-xs mt-2 uppercase tracking-tight font-bold">Community Choice</p>
        </div>
      </div>
    </div>
  );
};

export default GameView;

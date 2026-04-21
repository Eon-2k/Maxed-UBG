import { useParams, Link } from "react-router-dom";
import appsData from "../data/apps.json";
import { ChevronLeft, Maximize2 } from "lucide-react";

const AppView = () => {
  const { id } = useParams();
  const app = appsData.find(a => a.id === parseInt(id));

  if (!app) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center text-white">
        <h2 className="text-2xl font-bold">App not found</h2>
        <Link to="/apps" className="text-brand mt-4 inline-block underline">Back to Apps</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-32 pb-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/apps" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-text-dim hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white leading-none">{app.title}</h1>
            <p className="text-text-dim text-sm mt-1 uppercase tracking-widest font-bold">Category: {app.category}</p>
          </div>
        </div>
        
        <button 
          onClick={() => window.open(app.iframeUrl, '_blank')}
          className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-xl text-xs font-bold text-text-dim hover:text-white transition-colors"
        >
          <Maximize2 size={16} />
          Open Fullscreen
        </button>
      </div>

      <div className="bento-card p-2 aspect-video w-full bg-black overflow-hidden relative shadow-2xl">
        <iframe
          src={app.iframeUrl}
          className="w-full h-full rounded-2xl"
          title={app.title}
          allowFullScreen
          frameBorder="0"
        />
      </div>
      
      <div className="mt-8">
        <div className="bento-card">
          <h3 className="font-bold text-xl mb-4">About {app.title}</h3>
          <p className="text-text-dim leading-relaxed">
            Launch {app.title} instantly. This tool is provided via the Maxed-UBG network to ensure high availability and unblocked access in any environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppView;

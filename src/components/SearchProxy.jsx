import { ExternalLink } from "lucide-react";

const SearchProxy = () => {
  return (
    <div className="pt-20 h-screen flex flex-col">
      <div className="bg-zinc-900 border-b border-border px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-xs font-mono text-text-dim uppercase tracking-widest">Secure Search Proxy Pipeline</span>
        </div>
        <a 
          href="https://55gms.com/!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-bold text-brand hover:underline flex items-center gap-1.5"
        >
          External Access <ExternalLink size={12} />
        </a>
      </div>
      <div className="flex-grow bg-black relative">
        <iframe
          src="https://55gms.com/!"
          className="absolute inset-0 w-full h-full border-none"
          title="Search Proxy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SearchProxy;

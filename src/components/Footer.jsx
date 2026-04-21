import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-bg pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand w-6 h-6 rounded-md"></div>
              <span className="font-display font-extrabold text-xl tracking-tighter">
                MAXED<span className="text-brand">-UBG</span>
              </span>
            </div>
            <p className="text-text-dim text-sm leading-relaxed mb-6">
              The premier destination for high-quality unblocked games. Play anywhere, anytime.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/games" className="text-text-dim hover:text-brand transition-colors">Games Library</Link></li>
              <li><Link to="/request" className="text-text-dim hover:text-brand transition-colors">Request a Game</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy" className="text-text-dim hover:text-brand transition-colors">Privacy policy</Link></li>
              <li><Link to="/contact" className="text-text-dim hover:text-brand transition-colors">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-card border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-brand/50 flex-1"
              />
              <button className="bg-brand text-bg px-4 py-2 rounded-lg text-sm font-bold transition-opacity hover:opacity-90">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-dim text-xs">
            © {new Date().getFullYear()} Maxed-UBG unblocked games.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

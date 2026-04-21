import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Games", path: "/games" },
    { name: "Apps", path: "/apps" },
    { name: "Search", path: "/search" },
    { name: "Request", path: "/request" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand w-8 h-8 rounded-lg group-hover:rotate-12 transition-transform duration-300">
          </div>
          <span className="font-display font-extrabold text-xl tracking-tighter text-[#f8fafc]">
            MAXED<span className="text-brand">-UBG</span>
          </span>
        </Link>

        {/* nav items */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-colors ${
                  isActive ? "text-[#f8fafc]" : "text-text-dim hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

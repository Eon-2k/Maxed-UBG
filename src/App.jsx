import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import GamesGrid from "./components/GamesGrid.jsx";
import AppsGrid from "./components/AppsGrid.jsx";
import RequestGameForm from "./components/RequestGameForm.jsx";
import GameView from "./components/GameView.jsx";
import AppView from "./components/AppView.jsx";
import SearchProxy from "./components/SearchProxy.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/lessons" element={<GamesGrid />} />
            <Route path="/apps" element={<AppsGrid />} />
            <Route path="/search" element={<SearchProxy />} />
            <Route path="/lesson/:id" element={<GameView />} />
            <Route path="/app/:id" element={<AppView />} />
            <Route path="/request" element={<RequestGameForm />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

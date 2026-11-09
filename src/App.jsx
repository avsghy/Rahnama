import { useState, useEffect } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import useProgress from "./hooks/useProgress";
import useTheme from "./hooks/useTheme";
import ThemeToggle from "./components/ThemeToggle";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import NotFound from "./pages/NotFound";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useProgress();
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [pathname]);
  return (
    <div className={menuOpen ? "side" : ""}>
      <div id="side-bar">
        <button
          id="menu"
          aria-label="باز کردن منو"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg viewBox="0 0 24 24">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <span className="logo">رهنما</span>
        <ThemeToggle theme={theme} onToggle={toggle} />
      </div>
      <div id="scrim" onClick={() => setMenuOpen(false)} />
      <Sidebar progress={progress} theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home progress={progress} />} />
          <Route
            path="/roadmap/:id"
            element={<Roadmap progress={progress} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

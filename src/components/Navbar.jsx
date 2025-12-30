import { useTheme } from '../contexts/ThemeContext';
import './Navbar.css';

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <div className="theme-toggle-container" onClick={toggleTheme} aria-label="Toggle theme">
        <div className={`theme-toggle-slider ${isDarkMode ? 'dark' : 'light'}`}>
          <span className="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
        </div>
      </div>
      <div className="nav-container">
        <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>
          Home
        </a>
        <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>
          About
        </a>
        <a href="#work" className="nav-link" onClick={(e) => handleNavClick(e, 'work')}>
          Work
        </a>
      </div>
    </nav>
  );
}

export default Navbar;


function Navbar() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
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


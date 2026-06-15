import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      <button
        className={`hamburger${isOpen ? ' open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className="bar bar1" />
        <span className="bar bar2" />
        <span className="bar bar3" />
      </button>

      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)} />
      )}

      <nav className={`menu${isOpen ? ' menu-open' : ''}`}>
        <ul>
          <li><button onClick={() => handleNavigate('/')}>Home</button></li>
          <li><button onClick={() => handleNavigate('/about')}>About Me</button></li>
          <li><button onClick={() => handleNavigate('/projects')}>Projects</button></li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;

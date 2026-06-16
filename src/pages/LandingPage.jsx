import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import './LandingPage.css';

const BASE = import.meta.env.BASE_URL;
const IMAGES = [
  `${BASE}landing-1.jpg`,
  `${BASE}landing-2.jpg`,
  `${BASE}landing-3.jpg`,
  `${BASE}landing-4.jpg`,
  `${BASE}landing-5.jpg`,
];

function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTapEnd = () => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 80);
  };

  return (
    <div className="landing-page">
      <Navigation />
      <div className="landing-content">
        <motion.div
          className="landing-image-wrapper"
          whileTap={{ rotate: 20 }}
          transition={{ duration: 0.15 }}
          onTapCancel={handleTapEnd}
          onTap={handleTapEnd}
          style={{ cursor: 'pointer' }}
        >
          <img
            src={IMAGES[currentIndex]}
            alt={`Landing image ${currentIndex + 1}`}
            className="landing-image"
            draggable={false}
          />
        </motion.div>
        <p className="landing-hint">Click me! Or check out the other pages...</p>
      </div>
    </div>
  );
}

export default LandingPage;

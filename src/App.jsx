import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router basename="/personal-website">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<><Navigation /><AboutMe /></>} />
        <Route path="/projects" element={<><Navigation /><Projects /></>} />
      </Routes>
    </Router>
  );
}

export default App;

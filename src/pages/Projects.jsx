import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const SAMPLE_PROJECTS = [
  {
    name: 'Accountability Bot',
    description: 'A Telegram Bot linked to Claude that keeps you accountable on your tasks for the day',
    codeLink: 'https://github.com/jaylocks7/accountability-bot',
    writeupLink: 'https://docs.google.com/document/d/17B3Z3SAH23Xhk0OQro4uNtT3blvqxdqAQUJTl5Nz_HM/edit?usp=sharing',
    gifSrc: '',
    isCurrentlyWorking: true,
  },
  {
    name: 'Contributor Ranking Dashboard',
    description: 'A dashboard that scrapes commit data from the PostHog repo daily and ranks contributors based on a formula over a 90-day window',
    codeLink: 'https://github.com/jaylocks7/posthog-pet-proj',
    writeupLink: 'https://github.com/jaylocks7/posthog-pet-proj/blob/main/README.md',
    gifSrc: '',
    isCurrentlyWorking: false,
  },
  {
    name: 'Invoice Data Extractor',
    description: 'A web app that takes Freight Forwarder Invoice PDFs and extracts key info using OCR, then labels that data on the document',
    codeLink: 'https://github.com/jaylocks7/ff-invoice-extractor-project',
    writeupLink: 'https://github.com/jaylocks7/ff-invoice-extractor-project/blob/main/README.md',
    gifSrc: '',
    isCurrentlyWorking: false,
  }
];

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <svg className="paper-effect" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 80">
          <path
            d="M 10 15 Q 30 5, 50 10 T 90 8 T 130 12 T 170 8 T 210 15 L 230 20 Q 235 35, 230 50 L 220 60 Q 200 65, 180 60 T 140 65 T 100 62 T 60 65 T 20 60 Q 5 50, 10 35 Z"
            fill="white"
            fillOpacity="0.6"
          />
        </svg>
        <h1>Projects</h1>
      </div>
      <div className="projects-grid">
        {SAMPLE_PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

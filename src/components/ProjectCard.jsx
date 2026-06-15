import './ProjectCard.css';

function ProjectCard({ name, description, codeLink, writeupLink, gifSrc, isCurrentlyWorking }) {
  return (
    <div className="project-card">
      {isCurrentlyWorking && (
        <span className="badge">Currently Working On</span>
      )}
      {gifSrc && (
        <img src={gifSrc} alt={`${name} demo`} className="project-gif" />
      )}
      <h2 className="project-name">{name}</h2>
      <p className="project-description">{description}</p>
      <div className="project-links">
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
            Code
          </a>
        )}
        {writeupLink && (
          <a href={writeupLink} target="_blank" rel="noopener noreferrer" className="project-link">
            Write-up
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

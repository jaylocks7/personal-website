import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-page">
      <div className="about-header">
        <svg className="paper-effect" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 80">
          <path
            d="M 10 15 Q 30 5, 50 10 T 90 8 T 130 12 T 170 8 T 210 15 L 230 20 Q 235 35, 230 50 L 220 60 Q 200 65, 180 60 T 140 65 T 100 62 T 60 65 T 20 60 Q 5 50, 10 35 Z"
            fill="white"
            fillOpacity="0.6"
          />
        </svg>
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <p>
          Malo! (Tongan for "Hello") Hi! I’m Jimmy. I’m a Pasifika Technologist currently living in the Bay Area, 
          previously at Microsoft, Citadel, and Tesla. I went to Stanford where I studied Computer Science and Ethics. 
          I’m at a point in life where I want to work somewhere for reasons that don’t include pay or prestige. I want to converge towards public interest in my 
          line of work. I want to use my skills to positively impact the everyday person, not abstract stakeholders or 
          billion dollar corporations. While I’m a software engineer by experience, I’m open to my career taking a 
          different direction (or two) down the road.
        </p>
        <p>
          I grew up a military brat, moving every 3 years or so all over the United States (with a stint in Japan). 
          I’ve been exposed to communities of all sorts of creeds, cultures, and lived experience. As a result,
          I’m deeply curious in the stories of others – we’re all walking universes with depth that goes as far as we dig.
        </p>
        <p>
          In my work I'm interested in pre/post-analysis data lifecycle (extraction, modeling, normalization, delivery, 
          privacy, security, storage), building with the user and their feedback at the forefront, and automating 
          repeatable workflows. Outside of work, I’m interested in mentoring youth (bonus points if it is outdoors), 
          exploring spiritual communities, and chances to work with my hands.
        </p>
        <p>
          I believe in kindness, minimizing screentime, and breakfast for dinner. I don’t believe in forever wars, 
          acting on emotions without processing them first, and car-centric infrastructure. I could be better at sleeping, 
          decorating my space, and not splitting my attention across many things. I like to think I’m a good listener, 
          open-minded, and a decent dancer.
        </p>
        <p>
          Reach me at jameslaux7 (at) gmail (dot) com or on{' '}
          <a
            href="https://www.linkedin.com/in/laux-james"
            onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/laux-james', '_blank'); }}
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;

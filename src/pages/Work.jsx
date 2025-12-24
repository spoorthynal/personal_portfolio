import cloudImage from "../assets/cloud.png";
import "./Work.css";

function Work() {
  const projects = [
    {
      id: 1,
      title: "Project Description",
      tags: ["React", "Node.js", "MongoDB"],
      side: "right"
    },
    {
      id: 2,
      title: "Project Description",
      tags: ["Python", "Django", "PostgreSQL"],
      side: "left"
    },
    {
      id: 3,
      title: "Project Description",
      tags: ["Vue.js", "Express", "MySQL"],
      side: "right"
    },
    {
      id: 4,
      title: "Project Description",
      tags: ["TypeScript", "Next.js", "Firebase"],
      side: "left"
    }
  ];

  return (
    <main className="work-container">
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          {projects.map((project, index) => (
            <div key={project.id} className={`timeline-item ${project.side}`}>
              <div className="timeline-node"></div>
              <div className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`tag tag-${tagIndex % 3}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Background clouds */}
        <div className="background-clouds">
          <img src={cloudImage} alt="Cloud" className="bg-cloud cloud-1" />
          <img src={cloudImage} alt="Cloud" className="bg-cloud cloud-2" />
          <img src={cloudImage} alt="Cloud" className="bg-cloud cloud-3" />
          <img src={cloudImage} alt="Cloud" className="bg-cloud cloud-4" />
          <img src={cloudImage} alt="Cloud" className="bg-cloud cloud-5" />
          <img src={cloudImage} alt="Cloud" className="bg-cloud cloud-6" />
        </div>
      </main>
  );
}

export default Work;

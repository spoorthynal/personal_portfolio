import cloudImage from "../assets/cloud.png";
import birdsImage from "../assets/birds.png";
import "./Work.css";

function Work() {
  const projects = [
    {
      id: 1,
      title: "Stash",
      description: "Designed and built a centralized web application enabling users to store notes and files in a single, searchable workspace. Implemented AI-powered tagging and keyword extraction using Google Gemini to improve content organization and discovery. Integrated user authentication, file uploads, and calendar functionality to support personalized workflows.",
      tags: ["React", "Node.js", "Express.js", "SQLite", "Supabase", "Google Gemini API"],
      side: "right"
    },
    {
      id: 2,
      title: "Product Manager Intern",
      description: "Partnered with the Middle East Children’s Alliance (MECA) to develop a community-driven app amplifying Palestinian voices and supporting grassroots relief efforts. Led a cross-functional team of 7, implemented Trello workflows, and structured documentation, improving task tracking efficiency by 30% and ensuring on-time delivery of 8 key milestones. Maintained alignment and transparency across teams by creating bi-weekly Excel progress reports and stakeholder updates. Documented technical decisions and blockers, led the final review presentation, and prepared a comprehensive handoff document.",
      tags: ["Trello", "Microsoft Excel", "Documentation"],
      side: "left"
    },
    {
      id: 3,
      title: "Tech Fellow @ UCLA ACM",
      description: "Built a React Native mobile app enabling UCLA students to explore over 2,000 campus clubs. Designed an intuitive, user-friendly interface in Figma and implemented real-time search functionality with Firebase. Prototyped an AI-powered recommendation system using LLMs to personalize club suggestions based on student interests.",
      tags: ["React Native", "Firebase", "Git", "Figma"],
      side: "right"
    },
    {
      id: 4,
      title: "Soufflé",
      description: "Developed a full-stack web application that curates personalized recipes based on user-provided ingredients. Implemented dynamic search, filtering, and responsive UI components to streamline meal planning. Optimized user experience by designing the interface in Figma, focusing on intuitive navigation and accessible interaction flows.",
      tags: ["React", "Node.js", "MongoDB", "Figma", "MealDB API"],
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
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
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
        
        {/* Birds - only visible in light mode */}
        <div className="background-birds">
          <img src={birdsImage} alt="Birds" className="bird bird-1" />
          <img src={birdsImage} alt="Birds" className="bird bird-2" />
          <img src={birdsImage} alt="Birds" className="bird bird-3" />
        </div>
      </main>
  );
}

export default Work;

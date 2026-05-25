import cloudImage from "../assets/cloud.png";
import birdsImage from "../assets/birds.png";
import { useTheme } from "../contexts/ThemeContext";
import { useTypewriter } from "../hooks/useTypewriter";
import "./Work.css";

const TAG_COLORS_LIGHT = [
  "#bae1ff",
  "#b9fbc0",
  "#ffd6e0",
  "#ffeaa7",
  "#c3b1e1",
  "#ffd3b6",
];

const TAG_COLORS_DARK = [
  "#2a6496",
  "#276b3a",
  "#8b3a52",
  "#7a6000",
  "#5a3e8a",
  "#8a4a20",
];

function Work() {
  const { isDarkMode } = useTheme();
  const TAG_COLORS = isDarkMode ? TAG_COLORS_DARK : TAG_COLORS_LIGHT;
  const { displayed, ref } = useTypewriter("Work & Projects");
  const projects = [
    {
      id: 1,
      title: "Data Science Intern",
      description: "Trained a convolutional neural network to classify American Sign Language gestures with 99.4% accuracy on 7,000+ unseen images. Built and optimized a multi-class image classification pipeline using Python, TensorFlow, and computer vision techniques. Applied preprocessing and data augmentation techniques to improve model generalization and reduce overfitting.",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Jupyter Notebooks"],
    },
    {
      id: 2,
      title: "Stash",
      description: "Designed and built a centralized web application enabling users to store notes and files in a single, searchable workspace. Implemented AI-powered tagging and keyword extraction using Google Gemini to improve content organization and discovery. Integrated user authentication, file uploads, and calendar functionality to support personalized workflows.",
      tags: ["React", "Node.js", "Express.js", "SQLite", "Supabase", "Gemini API"],
    },
    {
      id: 3,
      title: "Product Manager Intern",
      description: "Partnered with the Middle East Children's Alliance (MECA) to develop a community-driven app amplifying Palestinian voices and supporting grassroots relief efforts. Led a cross-functional team of 7, implemented Trello workflows, and structured documentation. Built Tableau dashboards and bi-weekly Excel reports to visualize project progress and support stakeholder decision-making.",
      tags: ["Trello", "Microsoft Excel", "Documentation", "Tableau"],
    },
    {
      id: 4,
      title: "ClubHub",
      description: "Built a React Native mobile app enabling UCLA students to explore over 2,000 campus clubs. Designed an intuitive, user-friendly interface in Figma and implemented real-time search functionality with Firebase. Prototyped an AI-powered recommendation system using LLMs to personalize club suggestions based on student interests.",
      tags: ["React Native", "Firebase", "Node.js", "Gemini API", "Figma"],
    }
  ];

  return (
    <main className="work-container">
      <h2 className="work-title" ref={ref}>
        {displayed}<span className="cursor-blink">|</span>
      </h2>
      <div className="cards-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="tag"
                  style={{ backgroundColor: TAG_COLORS[tagIndex % TAG_COLORS.length] }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="background-clouds">
        <img src={cloudImage} alt="Cloud" className="bg-cloud cloud-1" />
        <img src={cloudImage} alt="Cloud" className="bg-cloud cloud-2" />
        <img src={cloudImage} alt="Cloud" className="bg-cloud cloud-3" />
        <img src={cloudImage} alt="Cloud" className="bg-cloud cloud-4" />
        <img src={cloudImage} alt="Cloud" className="bg-cloud cloud-5" />
        <img src={cloudImage} alt="Cloud" className="bg-cloud cloud-6" />
      </div>

      <div className="background-birds">
        <img src={birdsImage} alt="Birds" className="bird bird-1" />
        <img src={birdsImage} alt="Birds" className="bird bird-2" />
        <img src={birdsImage} alt="Birds" className="bird bird-3" />
      </div>
    </main>
  );
}

export default Work;

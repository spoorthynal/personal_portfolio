import cloudImage from "../assets/cloud.png";
import "./About.css";

function About() {
  return (
    <main className="about-container">
        <div className="content-panels">
          <div className="panel panel-left"></div>
          <div className="panel panel-right"></div>
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

export default About;


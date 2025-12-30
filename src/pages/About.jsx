import cloudImage from "../assets/cloud.png";
import birdsImage from "../assets/birds.png";
import headshot from "../assets/headshot.JPG";
import "./About.css";

function About() {
  return (
    <main className="about-container">
        <div className="content-panels">
          <div className="panel panel-left">
            <img src={headshot} alt="Spoorthy" className="headshot-image" />
          </div>
          <div className="panel panel-right">
            <div className="about-description">
              <p>
                Hi! I'm Spoorthy Nalumachu, a Computer Science student at UCLA, passionate about building products that make a social impact. 
                I enjoy working at the intersection of technology and design to develop user-centered solutions that 
                solve real-world problems. I have experience working on several technical projects and I am currently interested in the application of AI in product management and software development.
              </p>
            </div>
          </div>
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

export default About;


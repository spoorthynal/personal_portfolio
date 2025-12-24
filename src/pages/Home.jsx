import cloudImage from "../assets/cloud.png";
import "./Home.css";

function Home() {
  return (
    <main className="home-container">
        <div className="title-cloud-wrapper">
          <h1 className="main-title">Spoorthy's Cloud</h1>
          <div className="cloud-wrapper">
            <img src={cloudImage} alt="Cloud" className="main-cloud" />
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
      </main>
  );
}

export default Home;

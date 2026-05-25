import { useState, useEffect } from "react";
import cloudImage from "../assets/cloud.png";
import birdsImage from "../assets/birds.png";
import "./Home.css";

const FULL_TEXT = "Spoorthy's Cloud";

function Home() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_TEXT.slice(0, i));
      if (i === FULL_TEXT.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home-container">
        <div className="title-cloud-wrapper">
          <h1 className="main-title">
            {displayed}
            <span className="cursor-blink">|</span>
          </h1>
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

        {/* Birds - only visible in light mode */}
        <div className="background-birds">
          <img src={birdsImage} alt="Birds" className="bird bird-1" />
          <img src={birdsImage} alt="Birds" className="bird bird-2" />
          <img src={birdsImage} alt="Birds" className="bird bird-3" />
        </div>

        <div className="scroll-hint">
          <span className="scroll-arrow">↓</span>
        </div>
      </main>
  );
}

export default Home;

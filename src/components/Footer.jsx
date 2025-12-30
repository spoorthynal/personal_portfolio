import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import resumeIcon from "../assets/resume.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-buttons">
        <a 
          href="mailto:spoorthynal@g.ucla.edu" 
          className="footer-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <img src={emailIcon} alt="Email" />
        </a>
        <a 
          href="https://www.linkedin.com/in/spoorthy-nalumachu" 
          className="footer-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a 
          href="https://github.com/spoorthynal" 
          className="footer-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a 
          href="https://drive.google.com/file/d/1P6dns7-CzoRNaL2RkxqY6udzlU6cdmQ_/view?usp=sharing" 
          className="footer-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <img src={resumeIcon} alt="Resume" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;


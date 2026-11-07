import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaTwitter, FaDownload } from 'react-icons/fa'
import './About.css'
import danuImage from '../assets/danu001.jpeg'
import { useEffect, useState } from 'react'

function About() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const roles = [
    'Health Promotion Specialist',
    'Community Health Advocate',
    'Public Health Researcher',
    'Child Protection Ambassador',
    'Wellness & Advocacy Consultant',
    'Social Impact Strategist',
    'Public Health Program Evaluator',
    'Community Development Expert'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Start hiding animation
      setIsVisible(false);
      
      // After hiding animation completes, change role and show
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 300); // Faster transition
    }, 2500); // Shorter display time

    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    // BASE_URL includes GitHub Pages path (e.g. /personal_porfolio/)
    link.href = `${import.meta.env.BASE_URL}Danukshi_Danastran_CV.pdf`;
    link.download = 'Danukshi_Danastran_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <div className="about-content">
              <h1 className="display-4 mb-4 fw-bold gradient-title">Hi, I am Danukshi Danastran</h1>
              <div className="role-container mb-4">
                <span className="fixed-role">I act as...</span>
                <div className="dynamic-role-wrapper">
                  <span className={`dynamic-role ${isVisible ? 'visible' : 'hidden'}`}>
                    {roles[currentRole]}
                  </span>
                </div>
              </div>
              <p className="lead mb-4">
                Motivated Health Promotion professional with experience in project coordination, programme
                implementation, community engagement, training facilitation and stakeholder coordination.
                Committed to organisational goals and community wellbeing.
              </p>
              <div className="social-links mb-4">
                <a href="https://linkedin.com/in/danukshi-danastran-048110320" className="me-3" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="me-3">
                  <FaGithub size={24} />
                </a>
                <a href="#" className="me-3">
                  <FaTwitter size={24} />
                </a>
              </div>
              <button className="btn btn-custom" onClick={handleDownloadCV}>
                <FaDownload className="me-2" /> Download CV
              </button>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="about-image text-center">
              <img 
                src={danuImage}
                alt="Danukshi Danastran" 
                className="img-fluid rounded-circle shadow"
                style={{ maxWidth: '350px' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
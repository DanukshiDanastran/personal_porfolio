import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-4">
          <Col md={3}>
            <h5 className="footer-title">Profile Summary</h5>
            <p className="footer-summary">
              Passionate Health Promotion professional with expertise in community engagement, program evaluation, and advocacy for child protection. Skilled in research, public health campaigns, and digital content creation.
            </p>
          </Col>
          <Col md={3}>
            <h5 className="footer-title">Important Links</h5>
            <ul className="footer-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">My Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="footer-title">Connect With Me</h5>
            <div className="social-links">
              <a href="https://linkedin.com/in/danukshi-danastran-048110320" className="d-block mb-2" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="me-2" /> 
              </a>
              <a href="https://facebook.com/your-facebook-profile" className="d-block mb-2" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="me-2" /> 
              </a>
              <a href="https://twitter.com/your-twitter-profile" className="d-block mb-2" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="me-2" /> 
              </a>
            </div>
            <div className="mt-3">
              <Link to="/terms" className="d-block mb-2">Terms & Conditions</Link>
              <Link to="/privacy" className="d-block mb-2">Privacy Policy</Link>
            </div>
          </Col>

          <Col md={3}>

            <h5 className="footer-title">Contact Information</h5>
            <div className="footer-contact">
              <h6 className="mb-3">Danukshi Danastran</h6>
              <p><FaPhone className="me-2" />+94 766 863 242</p>
              <p><FaEnvelope className="me-2" />ddanukshi26@gmail.com</p>
              <p><FaMapMarkerAlt className="me-2" />Rasalingam St, Iruthayapuram, Mutur, Trincomalee</p>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="text-center py-3">
            <p className="mb-0">
              Made with <FaHeart className="text-danger mx-1" /> by Danukshi Danastran © {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
import { Container, Row, Col } from 'react-bootstrap'
import { FaProjectDiagram, FaGlobe, FaUsers, FaHeartbeat, FaShieldAlt, FaChalkboardTeacher } from 'react-icons/fa'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <div className="projects-header">
          <h2 className="projects-title">
            <span className="projects-icon">
              <FaProjectDiagram />
            </span>
            Projects & Initiatives
          </h2>
          <div className="projects-divider"></div>
        </div>

        <Row className="projects-grid">
  <Col lg={12} md={6} sm={12} className="projects-col">
    <div className="projects-card">
      <div className="projects-card-content">
        <div className="projects-card-header">
          <div className="projects-card-icon">
            <FaGlobe />
          </div>
          <h3 className="projects-card-title">Sustainable Development Goals (SDG) Project</h3>
        </div>
        <div className="projects-card-body">
          <ul className="projects-list">
            <li>
              <span className="projects-list-icon"><FaUsers /></span>
              <span className="projects-list-text">SkillUp Sri Lanka initiatives</span>
            </li>
            <li>
              <span className="projects-list-icon"><FaGlobe /></span>
              <span className="projects-list-text">SDG awareness programs</span>
            </li>
            <li>
              <span className="projects-list-icon"><FaUsers /></span>
              <span className="projects-list-text">Youth leadership development</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Col>

  <Col lg={12} md={6} sm={12} className="projects-col">
    <div className="projects-card">
      <div className="projects-card-content">
        <div className="projects-card-header">
          <div className="projects-card-icon">
            <FaHeartbeat />
          </div>
          <h3 className="projects-card-title">Health Promotion Initiatives</h3>
        </div>
        <div className="projects-card-body">
          <ul className="projects-list">
            <li>
              <span className="projects-list-icon"><FaHeartbeat /></span>
              <span className="projects-list-text">Diabetes Awareness Campaign</span>
            </li>
            <li>
              <span className="projects-list-icon"><FaShieldAlt /></span>
              <span className="projects-list-text">Child Protection Education Programs</span>
            </li>
            <li>
              <span className="projects-list-icon"><FaChalkboardTeacher /></span>
              <span className="projects-list-text">Community Health Workshops</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Col>
</Row>

      </Container>
    </section>
  )
}

export default Projects

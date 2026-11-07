import { Container, Row, Col } from 'react-bootstrap'
import { FaProjectDiagram, FaGlobe, FaUsers, FaHeartbeat, FaShieldAlt, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa'
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
                  <h3 className="projects-card-title">Safe Food Empowerment Project</h3>
                </div>
                <div className="projects-card-body">
                  <ul className="projects-list">
                    <li>
                      <span className="projects-list-icon"><FaChalkboardTeacher /></span>
                      <span className="projects-list-text">Master Trainer under SUN PF & FAO BESPA</span>
                    </li>
                    <li>
                      <span className="projects-list-icon"><FaUsers /></span>
                      <span className="projects-list-text">Training of Trainers for CSOs and youth groups</span>
                    </li>
                    <li>
                      <span className="projects-list-icon"><FaGlobe /></span>
                      <span className="projects-list-text">Capacity-building and community awareness activities</span>
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
                  <h3 className="projects-card-title">Health Promotion & Child Protection</h3>
                </div>
                <div className="projects-card-body">
                  <ul className="projects-list">
                    <li>
                      <span className="projects-list-icon"><FaShieldAlt /></span>
                      <span className="projects-list-text">Child protection awareness programmes with NCPA</span>
                    </li>
                    <li>
                      <span className="projects-list-icon"><FaHeartbeat /></span>
                      <span className="projects-list-text">Community interventions on NCDs, ECCD and tobacco/alcohol reduction</span>
                    </li>
                    <li>
                      <span className="projects-list-icon"><FaGraduationCap /></span>
                      <span className="projects-list-text">University student wellbeing initiative – “Variety of Interests”</span>
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

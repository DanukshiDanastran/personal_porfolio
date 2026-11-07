import { Container, Row, Col } from 'react-bootstrap'
import { FaBriefcase, FaHeartbeat, FaChalkboardTeacher, FaUsers, FaHandHoldingHeart } from 'react-icons/fa'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: "Health Promotion Officer (Volunteer)",
      company: "Regional Directorate of Health Services, Batticaloa",
      period: "May 2025 – Present",
      icon: FaHeartbeat,
      points: [
        "Designed and edited health promotion posters, digital awareness materials and social media advocacy content",
        "Developed presentations and visual educational materials for training sessions and community programmes",
        "Participated in field visits, health awareness programmes, community activities and training sessions"
      ]
    },
    {
      title: "Master Trainer – Safe Food Empowerment Project",
      company: "SUN PF & FAO BESPA Project",
      period: "September 2025 – Present",
      icon: FaChalkboardTeacher,
      points: [
        "Selected and trained as a Master Trainer under the SUN PF & FAO BESPA Safe Food Empowerment Project",
        "Facilitated Training of Trainers (ToT) sessions for civil society organisations and youth groups",
        "Supported capacity-building, community awareness, monitoring and progress reporting"
      ]
    },
    {
      title: "Field Coordinator",
      company: "Family Wellbeing Centre – Trincomalee District",
      period: "January 2025 – Present",
      icon: FaUsers,
      points: [
        "Coordinate and supervise district-level field activities to improve community wellbeing",
        "Work with families, community leaders and organisations to support programme implementation",
        "Support planning, monitoring, evaluation and reporting of project activities"
      ]
    },
    {
      title: "Intern – Child Protection",
      company: "National Child Protection Authority (NCPA)",
      period: "2024 – 2025",
      icon: FaHandHoldingHeart,
      points: [
        "Led child protection awareness programmes in schools and communities",
        "Coordinated educational sessions with district-level institutions",
        "Completed certified child protection training and supported safeguarding initiatives"
      ]
    }
  ];

  return (
    <section id="experience" className="py-5">
      <Container>
        <h2 className="section-title text-center" data-aos="fade-up">
          <FaBriefcase className="section-icon" />
          Professional Experience
        </h2>
        <Row className="g-4">
          {experiences.map((exp, index) => (
            <Col lg={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="experience-card">
                <div className="experience-icon">
                  <exp.icon />
                </div>
                <div className="experience-content">
                  <h3>{exp.title}</h3>
                  <div className="experience-header">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  <ul className="experience-points">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="experience-timeline">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Experience

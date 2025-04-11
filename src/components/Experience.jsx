import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaBriefcase, FaUniversity, FaHandshake, FaUsers, FaChartLine, FaBook, FaHandHoldingHeart, FaLaptopCode, FaHeartbeat, FaGraduationCap, FaBaby, FaSmokingBan } from 'react-icons/fa'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: "Field Work Experience",
      company: "Mahakanadarawa Yaya 2 Village",
      period: "2023-2024",
      icon: FaHeartbeat,
      color: "#4CAF50",
      points: [
        "Led health promotion initiatives in rural community",
        "Engaged with diverse community groups (mothers, students, teachers, women's groups)",
        "Identified and addressed key health issues",
        "Implemented community-based health interventions"
      ]
    },
    {
      title: "Health Issues Addressed",
      company: "Community Health Projects",
      period: "2023-2024",
      icon: FaHandHoldingHeart,
      color: "#2196F3",
      points: [
        "Reduced risks of non-communicable diseases (NCDs)",
        "Improved academic performance of school students",
        "Promoted better early childhood care and development (ECCD)",
        "Reduced alcohol and tobacco consumption"
      ]
    },
    {
      title: "University Student Well-being",
      company: "Rajarata University",
      period: "2022-2024",
      icon: FaGraduationCap,
      color: "#9C27B0",
      points: [
        "Collaborated with student groups to promote well-being",
        "Developed and implemented health awareness programs",
        "Organized wellness workshops and activities",
        "Created supportive environment for student health"
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
            <Col lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
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
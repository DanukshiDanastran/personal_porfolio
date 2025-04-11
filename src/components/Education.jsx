import { Container, Row, Col } from 'react-bootstrap'
import { FaGraduationCap, FaSchool, FaUniversity, FaAward, FaCertificate, FaBookReader, FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import './Education.css'

function Education() {
  const [activeDiploma, setActiveDiploma] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const alResults = [
    { subject: 'Biology', grade: 'C' },
    { subject: 'Chemistry', grade: 'C' },
    { subject: 'Physics', grade: 'S' },
    { subject: 'General English', grade: 'B' },
    { subject: 'GIT', grade: 'B' }
  ];

  const olResults = [
    { subject: 'Mathematics', grade: 'A' },
    { subject: 'Tamil', grade: 'A' },
    { subject: 'Science', grade: 'A' },
    { subject: 'Commerce', grade: 'A' },
    { subject: 'Health', grade: 'A' },
    { subject: 'Tamil Literature', grade: 'A' },
    { subject: 'History', grade: 'A' },
    { subject: 'Religion', grade: 'A' },
    { subject: 'English', grade: 'B' },
    { subject: 'Sinhala', grade: 'B' }
  ];

  const certifications = [
    {
      title: 'John Keels Foundation Programme',
      details: 'English Language (Merit)',
      icon: FaBookReader
    },
    {
      title: 'General English Course',
      details: 'Distinction & Merit at Jesuit English Academy & Computer Training Centre',
      icon: FaBookReader
    }
  ];

  const toggleDiploma = (index) => {
    setActiveDiploma(activeDiploma === index ? null : index);
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="education" className="py-5">
      <Container>
        <h2 className="section-title text-center" data-aos="fade-up">
          <FaGraduationCap className="education-icon" />
          Education Journey
        </h2>

        <div className="education-timeline">
          {/* Academic Qualifications - Flip Card */}
          <div className="timeline-section" data-aos="fade-up">
            <div className="timeline-header">
              <FaSchool className="section-icon" />
              <h3>Academic Qualifications</h3>
            </div>
            
            <div className="flip-card-container">
              <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h4>Advanced Level</h4>
                    <div className="results-grid">
                      {alResults.map((result, index) => (
                        <div key={index} className="result-item" style={{ animationDelay: `${index * 0.1}s` }}>
                          <span className="subject">{result.subject}</span>
                          <span className={`grade grade-${result.grade.toLowerCase()}`}>{result.grade}</span>
                        </div>
                      ))}
                    </div>
                    <button className="flip-button" onClick={toggleFlip}>
                      Click to view O/L Results
                    </button>
                  </div>
                  <div className="flip-card-back">
                    <h4>Ordinary Level</h4>
                    <div className="results-grid">
                      {olResults.map((result, index) => (
                        <div key={index} className="result-item" style={{ animationDelay: `${index * 0.1}s` }}>
                          <span className="subject">{result.subject}</span>
                          <span className={`grade grade-${result.grade.toLowerCase()}`}>{result.grade}</span>
                        </div>
                      ))}
                    </div>
                    <button className="flip-button" onClick={toggleFlip}>
                      Click to view A/L Results
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* University Education - Timeline */}
          <div className="timeline-section" data-aos="fade-up" data-aos-delay="100">
            <div className="timeline-header">
              <FaUniversity className="section-icon" />
              <h3>University Education</h3>
            </div>
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">2020 - 2024</div>
                  <h4>BSc in Health Promotion</h4>
                  <p>Rajarata University of Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Diplomas - Accordion */}
          <div className="timeline-section" data-aos="fade-up" data-aos-delay="200">
            <div className="timeline-header">
              <FaAward className="section-icon" />
              <h3>Professional Diplomas</h3>
            </div>
            <div className="accordion-container">
              {[
                {
                  title: 'Child and Educational Psychology',
                  institution: 'Professional Certification',
                  year: '2023'
                },
                {
                  title: 'Counselling Psychology',
                  institution: 'Transmind Institute of Training and Development (Pvt) Ltd',
                  year: '2023'
                },
                {
                  title: 'Human Resource Management',
                  institution: 'CASED Institute',
                  year: '2023'
                }
              ].map((diploma, index) => (
                <div 
                  key={index}
                  className={`accordion-item ${activeDiploma === index ? 'active' : ''}`}
                  onClick={() => toggleDiploma(index)}
                >
                  <div className="accordion-header">
                    <h4>{diploma.title}</h4>
                    <FaChevronRight className={`accordion-icon ${activeDiploma === index ? 'rotated' : ''}`} />
                  </div>
                  <div className="accordion-content">
                    <div className="diploma-details">
                      <span className="institution">{diploma.institution}</span>
                      <span className="year">{diploma.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Certifications - Grid Layout */}
          <div className="timeline-section" data-aos="fade-up" data-aos-delay="300">
            <div className="timeline-header">
              <FaCertificate className="section-icon" />
              <h3>Additional Certifications</h3>
            </div>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="certification-content">
                    <cert.icon className="cert-icon" />
                    <div className="cert-details">
                      <h4>{cert.title}</h4>
                      <p>{cert.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Education
import { Container } from 'react-bootstrap'
import { FaTools, FaLaptopCode, FaUsers, FaBrain, FaChartLine, FaCalendarAlt, FaFileAlt, FaVideo, FaUserTie, FaHandshake, FaMicrophone, FaClipboardList, FaLightbulb, FaHeartbeat, FaBaby, FaBookMedical, FaHandHoldingHeart, FaLanguage } from 'react-icons/fa'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="section-title text-center" data-aos="fade-up">
          <FaTools className="section-icon skill-icon" />
          Skills & Competencies
        </h2>
        <div className="skills-container">
          <div className="skill-category" data-aos="fade-up">
            <h3><FaLaptopCode className="category-icon" /> Project & Programme</h3>
            <ul>
              <li><FaClipboardList className="skill-icon" /> Project Coordination & Field Implementation</li>
              <li><FaCalendarAlt className="skill-icon" /> Activity Planning & Stakeholder Coordination</li>
              <li><FaChartLine className="skill-icon" /> Monitoring, Evaluation & Reporting</li>
              <li><FaFileAlt className="skill-icon" /> Data Collection & Documentation</li>
              <li><FaFileAlt className="skill-icon" /> Microsoft Word, Excel & PowerPoint</li>
            </ul>
          </div>
          <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
            <h3><FaUsers className="category-icon" /> Community & Soft Skills</h3>
            <ul>
              <li><FaHandHoldingHeart className="skill-icon" /> Community Engagement</li>
              <li><FaMicrophone className="skill-icon" /> Health Education & Training Facilitation</li>
              <li><FaVideo className="skill-icon" /> Educational & Digital Content Development</li>
              <li><FaUserTie className="skill-icon" /> Leadership & Teamwork</li>
              <li><FaLightbulb className="skill-icon" /> Problem Solving & Adaptability</li>
            </ul>
          </div>
          <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
            <h3><FaBrain className="category-icon" /> Specialized Knowledge</h3>
            <ul>
              <li><FaHeartbeat className="skill-icon" /> NCD Prevention</li>
              <li><FaBaby className="skill-icon" /> Early Childhood Care & Development</li>
              <li><FaBookMedical className="skill-icon" /> Child Protection & Safeguarding</li>
              <li><FaHandshake className="skill-icon" /> Safe Food & Nutrition Awareness</li>
              <li><FaLanguage className="skill-icon" /> Tamil & English (Fluent), Sinhala (Intermediate)</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills

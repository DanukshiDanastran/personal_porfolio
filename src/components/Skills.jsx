import { Container } from 'react-bootstrap'
import { FaTools, FaLaptopCode, FaUsers, FaBrain, FaChartLine, FaCalendarAlt, FaFileAlt, FaVideo, FaUserTie, FaHandshake, FaMicrophone, FaClock, FaLightbulb, FaHeartbeat, FaBaby, FaBookMedical, FaHandHoldingHeart } from 'react-icons/fa'
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
            <h3><FaLaptopCode className="category-icon" /> Technical Skills</h3>
            <ul>
              <li><FaChartLine className="skill-icon" /> Health Promotion</li>
              <li><FaFileAlt className="skill-icon" /> Research & Data Collection</li>
              <li><FaCalendarAlt className="skill-icon" /> Event Planning</li>
              <li><FaFileAlt className="skill-icon" /> Microsoft Office</li>
              <li><FaVideo className="skill-icon" /> Canva (Video Editing & Flyers)</li>
            </ul>
          </div>
          <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
            <h3><FaUsers className="category-icon" /> Soft Skills</h3>
            <ul>
              <li><FaUserTie className="skill-icon" /> Leadership</li>
              <li><FaHandshake className="skill-icon" /> Teamwork</li>
              <li><FaMicrophone className="skill-icon" /> Public Speaking (Tamil)</li>
              <li><FaClock className="skill-icon" /> Time Management</li>
              <li><FaLightbulb className="skill-icon" /> Decision Making</li>
            </ul>
          </div>
          <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
            <h3><FaBrain className="category-icon" /> Specialized Knowledge</h3>
            <ul>
              <li><FaHeartbeat className="skill-icon" /> NCD Prevention</li>
              <li><FaBaby className="skill-icon" /> Early Childhood Care & Development</li>
              <li><FaBookMedical className="skill-icon" /> Sexual Health Education</li>
              <li><FaHandHoldingHeart className="skill-icon" /> Community Engagement</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
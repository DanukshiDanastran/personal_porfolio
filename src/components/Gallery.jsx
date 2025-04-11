import { Container, Row, Col } from 'react-bootstrap'
import { FaImages, FaUsers, FaChalkboardTeacher, FaUserTie, FaMicrophone, FaHandshake, FaHeartbeat, FaBaby } from 'react-icons/fa'
import './Gallery.css'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'
import image6 from '../assets/6.png'

function Gallery() {
  const galleryItems = [
    { 
      title: 'Community Events', 
      url: image1,
      icon: <FaUsers className="gallery-item-icon" />
    },
    { 
      title: 'Health Workshops', 
      url: image2,
      icon: <FaChalkboardTeacher className="gallery-item-icon" />
    },
    { 
      title: 'Team Leadership', 
      url: image3,
      icon: <FaUserTie className="gallery-item-icon" />
    },
    { 
      title: 'Public Speaking', 
      url: image4,
      icon: <FaMicrophone className="gallery-item-icon" />
    },
    { 
      title: 'Health Promotion', 
      url: image5,
      icon: <FaHeartbeat className="gallery-item-icon" />
    },
    { 
      title: 'Community Engagement', 
      url: image6,
      icon: <FaHandshake className="gallery-item-icon" />
    }
  ]

  return (
    <section id="gallery" className="py-5">
      <Container>
        <h2 className="section-title text-center" data-aos="fade-up">
          <FaImages className="section-icon gallery-icon" />
          Gallery
        </h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={item.url} alt={item.title} />
                  <div className="gallery-item-overlay">
                    <div className="gallery-item-icon-wrapper">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <div className="gallery-item-title">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Gallery
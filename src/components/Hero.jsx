import { Container, Row, Col } from 'react-bootstrap'

function Hero() {
  return (
    <section
      className="min-vh-100 d-flex align-items-center"
      style={{ backgroundColor: 'var(--color-light-lavender)' }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <h1
              className="display-4 mb-4"
              style={{ color: 'var(--color-deep-purple)' }}
              data-aos="fade-up"
            >
              Health Promotion Professional
            </h1>
            <p
              className="lead mb-5"
              style={{ color: 'var(--color-dark-plum)' }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Passionate about community health, child protection, and creating positive social impact
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <a
                href="#about"
                className="btn btn-custom btn-lg"
                style={{ backgroundColor: 'var(--color-lavender)' }}
              >
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Navigation.css'

function Navigation() {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#" className="brand-name">
          Danukshi Danastran
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
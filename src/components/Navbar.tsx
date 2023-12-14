import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Navbar.css";
import { useEffect, useState } from 'react';

function Navigator() {

    const [stick, setStick] = useState("sticky");

    
    function scrollLock() {
        if (window.scrollY <= 200) {
            if (stick !== "sticky") {
                setStick("sticky");
            }
            
        } else {
            setStick("null");
        }
      }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", scrollLock);
    }
    watchScroll();})




  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" id={stick}>
      <Container>
        <Navbar.Brand href="/">Kaan Sun</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">About</Nav.Link>
            <NavDropdown title="Cool Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/this-website">This Website</NavDropdown.Item>
              <NavDropdown.Item href="/nlp-hackathon">NLP Hackathon</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigator;
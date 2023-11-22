import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/navbar.css";
import { useEffect, useState } from 'react';

function Navigator() {

    const [stick, setStick] = useState("sticky");

    
    function scrollLock() {
        console.log(window.scrollY);
        if (window.scrollY <= 200) {
            if (stick !== "sticky") {
                setStick("sticky");
            console.log("something");
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigator;
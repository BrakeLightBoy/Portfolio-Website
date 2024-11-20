import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <Navbar expand="lg" id="navbar">
            <Container>
                <Navbar.Brand id="navbar-title" href="#home"><h1>Michael Larsson</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto"> 
                    <Nav.Link id="navbar-option" href="#Projects">Projects</Nav.Link>
                    <Nav.Link id="navbar-option" href="#About Me">About Me</Nav.Link>
                    <Nav.Link id="navbar-option" href="#Contact Me">Contact Me</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

export default NavigationBar;
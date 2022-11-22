import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import LogoNav from "../assets/imageslogo/logo/logo4.png";


const Footer = () => {
  return (
    <div>
      <Container>
        {/* <h2 className="text-light" >MUDDLEFOOT</h2> */}
        <Navbar.Brand className="footerMuddlefoot" href="/" style={{ color: "white" }}> <img
              src={LogoNav}
              width="400"
              height="150"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Nav className="isiFooter">
            <Nav.Link href="/home" style={{ color: "white" }}>Home</Nav.Link>
            <Nav.Link href="/merch" style={{ color: "white" }}>Merch</Nav.Link>
            <Nav.Link href="/contact" style={{ color: "white" }}>Contact</Nav.Link>
          </Nav>
          <Nav className="footerMedsos">
            <Nav.Link className="medsos" href="https://www.instagram.com/muddlefoot/" target="blank" style={{ color: "white" }}><FontAwesomeIcon icon={faInstagram}/></Nav.Link>
            <Nav.Link className="medsos" href="#features" style={{ color: "white" }}><FontAwesomeIcon icon={faFacebook}/></Nav.Link>
            <Nav.Link className="medsos" href="#pricing" style={{ color: "white" }}><FontAwesomeIcon icon={faTwitter}/></Nav.Link>  
            <Nav.Link className="medsos" href="#features" style={{ color: "white" }}><FontAwesomeIcon icon={faYoutube}/></Nav.Link>     
          </Nav>
      </Container>
    </div>
  );
};


export default Footer;
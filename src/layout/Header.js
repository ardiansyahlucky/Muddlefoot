import { Navbar, Container, Nav} from "react-bootstrap";
import LogoNav from "../assets/imageslogo/logo/logo4.png";


const Header = () => {
const myHeader = [
		{
			// image: LogoNav,
			home : "Home",
			kontak: "Contact",
			merch: "Merch"
		},
	]
	console.log(myHeader)
	
	return (
		<div>
			<Navbar>
				{myHeader.map((data,x) => (
					<Container key={x}>
						<Navbar.Brand className="muddlefoot" style={{ color: "white" }}> <img
              src={LogoNav}
              width="400"
              height="150"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
						<Nav>
							<Nav.Link className="home" href="/home" style={{ color: "white" }}>{data.home}</Nav.Link>
							<Nav.Link className="merch" href="/merch" style={{ color: "white" }}>{data.merch}</Nav.Link>
							<Nav.Link className="kontak" href="/contact" style={{ color: "white" }}>{data.kontak}</Nav.Link>
						</Nav>
					</Container>
				))}
			</Navbar>
		</div>
	);
};



export default Header;
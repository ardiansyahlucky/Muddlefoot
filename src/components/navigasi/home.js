import { Navbar, Container, Nav} from "react-bootstrap";
import LogoNav from "../../assets/imageslogo/logo/logo4.png";

const Home = () => {
const myHome = [
		{
			// image: LogoNav,
			home : "Home",
			musik: "Music",
			profil : "Profil",
			kontak: "Contact",
			merch: "Merch"
		},
	]
	console.log(myHome);

	return (
		<div>
			<Navbar>
				{myHome.map((data) => (
					<Container>
						<Navbar.Brand className="muddlefoot" style={{ color: "white" }}> <img
              src={LogoNav}
              width="400"
              height="150"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
						<Nav>
							<Nav.Link className="home" to="" style={{ color: "white" }}>{data.home}</Nav.Link>
							<Nav.Link className="musik" style={{ color: "white" }}>{data.musik}</Nav.Link>
							<Nav.Link className="profil" style={{ color: "white" }}>{data.profil}</Nav.Link>
							<Nav.Link className="kontak" style={{ color: "white" }}>{data.kontak}</Nav.Link>
							<Nav.Link className="merch" style={{ color: "white" }}>{data.merch}</Nav.Link>
						</Nav>
					</Container>
				))}
			</Navbar>
		</div>
	);
};



export default Home;
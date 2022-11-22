import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/imageslogo/foto/raul.jpeg";
import Image2 from "../../assets/imageslogo/foto/jikun.jpeg";
import Image3 from "../../assets/imageslogo/foto/beges.jpeg";
import Image4 from "../../assets/imageslogo/foto/alza.jpeg";
import Image5 from "../../assets/imageslogo/foto/yoni.jpeg";



const Profil = () => {
    const bandData = {
      vocal: "Vocal",
      guitar: "Guitar",
      bass: "Bassist",
      drum: "Drummer"
  };
  console.log(bandData);

  return (
    <Container className="profil">
      <Row className="gambar">
        <Col className="personil"><img src={Image1} alt="" /><p>{bandData.vocal}</p></Col>
        <Col className="personil"><img src={Image2} alt="" /><p>{bandData.guitar}</p></Col>
        <Col className="personil"><img src={Image3} alt="" /><p>{bandData.guitar}</p></Col>
        <Col className="personil"><img src={Image4} alt="" /><p>{bandData.bass}</p></Col>
        <Col className="personil"><img src={Image5} alt="" /><p>{bandData.drum}</p></Col>
      </Row>
    </Container>
  );
};


export default Profil;
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
        <Col><img src={Image1}/><p>{bandData.vocal}</p></Col>
        <Col><img src={Image2}/><p>{bandData.guitar}</p></Col>
        <Col><img src={Image3}/><p>{bandData.guitar}</p></Col>
        <Col><img src={Image4}/><p>{bandData.bass}</p></Col>
        <Col><img src={Image5}/><p>{bandData.drum}</p></Col>
      </Row>
    </Container>
  );
};


export default Profil;
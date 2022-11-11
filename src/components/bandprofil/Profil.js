import { Container,Row, Col} from "react-bootstrap";
import Image1 from "../../assets/imageslogo/foto/raul.jpeg";
import Image2 from "../../assets/imageslogo/foto/jikun.jpeg";
import Image3 from "../../assets/imageslogo/foto/beges.jpeg";
import Image4 from "../../assets/imageslogo/foto/alza.jpeg";
import Image5 from "../../assets/imageslogo/foto/yoni.jpeg";



const Profil = () => {
  return (
    // <div>
    //   <Row className="">
    //     <Col>test</Col>
    //     <Col>test</Col>
    //     <Col>test</Col>
    //     <Col>test</Col>
    //   </Row>
    // </div>
    <Container className="profil">
    <Row className="gambar">
      <Col><img src={Image1}></img><p>Vocal</p></Col>
      <Col><img src={Image2}></img><p>Guitar</p></Col>
      <Col><img src={Image3}></img><p>Guitar</p></Col>
      <Col><img src={Image4}></img><p>Bassist</p></Col>
      <Col><img src={Image5}></img><p>Drummer</p></Col>     
    </Row>
  </Container>
  );
};


export default Profil;
import { Container, Row, Col } from "react-bootstrap";
import Cover1 from "../../assets/imageslogo/anomic copy.JPG";


const Music = () => {
  return (
    <Container>
      <Row>
        <Col className="judulMusic"><h2>MUSIC</h2></Col>
      </Row>
      <Row>
        <Col className="imageMusic"><img src={Cover1}></img></Col>
      </Row>
      <div>
        <iframe className="videoMusic" width="50%" height="350" src="https://www.youtube.com/embed/FkY4CW0t2Eo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      {/* </Row> */}
    </Container>
  );
};


export default Music;
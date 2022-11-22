import { Container, Row, Col } from "react-bootstrap";

const Intro = () => {
  return (
    <div>
      <Container>
        <Row>
          <h2 className="judulPage">About The Band</h2>
          <Col className="introPage">
            <p>We are an Alternative Rock band from Indonesia, this band was formed in 2020 with the initial name of the band named Sounder which later changed to Muddlefoot, with musical references such as Punk, Grunge, Hardcore, Metal, Stoner. the formation of this band all started from our hobby which likes to practice fun, until finally we tried to make our own music, this band consists of five young people with one vocalist, two guitarists, one bassist and one drummer who come from a small town in the region West Java.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
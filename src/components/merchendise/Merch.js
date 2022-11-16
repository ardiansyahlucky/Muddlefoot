import { Card, Container, Row, Col } from "react-bootstrap";
import capImage from "../../assets/imageslogo/store/cap.jpeg";
import hoodie1 from "../../assets/imageslogo/store/hoodie 1.jpeg";
import hoodie2 from "../../assets/imageslogo/store/hoodie 2.jpeg";
import hoodie3 from "../../assets/imageslogo/store/hoodie 3.jpeg";
import tshirt1 from "../../assets/imageslogo/store/tshirt 1.jpeg";
import tshirt2 from "../../assets/imageslogo/store/baju2.jpeg";

const Merch = () => {
  const listMerchants = [
    {
      id: '1',
      image: capImage,
      name: 'Muddlefoot Cap',
      desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      id: '2',
      image: hoodie1,
      name: 'Muddlefoot Hoodie',
      desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      id: '3',
      image: hoodie2,
      name: 'Fallen Angel Hoodie',
      desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      id: '4',
      image: hoodie3,
      name: 'Fireball Hoodie',
      desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      id: '5',
      image: tshirt1,
      name: 'Muddlefoot Tshirt',
      desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      id: '6',
      image: tshirt2,
      name: 'Fallen Angel Tshirt',
      desc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
  ]
  console.log(listMerchants);

  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-light">BAND MERCHENDISE</h1>
        <Row className="isianMerch">
          {listMerchants.map((data,x) => (
            <Col key={x} className="bandMerch">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>{data.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col> 
          ))}
        </Row>
      </Container>
      <br/>
    </div>
  );
};

export default Merch;

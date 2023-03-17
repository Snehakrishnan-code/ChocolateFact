import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Quote.css'

function Quote() {
  return (
    <div className=" mt-5 p-2 bg-light text-center square border border-danger">
      <h1 className="text-center">FLAVOURS</h1>
      <Container className=" mt-4 bg-light text-center" style={{ display:'flex', justifyContent:'center' }}>
        <Row className="eachCard">
          <Col>
            
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Img width={90} height={200} variant="top" src="https://i.postimg.cc/DwrGq8FY/dark.jpg" />
              <Card.Body>
                <Card.Title>Dark Chocolate</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Img width={90} height={200} variant="top" src="https://i.postimg.cc/hv0FLLyt/white.jpg" />
              <Card.Body>
                <Card.Title>White Chocolate</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Img width={90} height={200} variant="top" src="https://i.postimg.cc/GtT89pqK/milk.jpg" />
              <Card.Body>
                <Card.Title>Milk Chocolate</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quote;

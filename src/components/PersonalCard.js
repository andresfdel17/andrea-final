import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { data } from "../utils/data";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Comments } from "./Comments";

export const PersonalCard = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  useEffect(() => {
    const personL = data.filter((val) => val.id === parseInt(id));
    setPerson(personL?.shift());
    // eslint-disable-next-line
  }, []);
  return person && (
    <Container fluid className="mt-4">
      <Card className="mx-auto" style={{ width: "50%" }}>
        <Card.Header>Personal presentation</Card.Header>
        <Card.Body>
          <Card.Img src={person?.image} style={{ width: "200px" }} /> <hr />
          <Card.Title>{person?.name}</Card.Title>
          <Card.Text>{person?.desc}</Card.Text>
          <hr />
          <Card.Title>Movie Review</Card.Title>
          <Row>
            <Col sm="auto">
              <Card.Img src={person?.movie_image} style={{ width: "200px" }} />
            </Col>
            <Col sm>
              <Row>
                <Col>
                  <ReactStars
                    count={5}
                    value={person?.stars}
                    size={40}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </Col>
              </Row>
              <Row>
                <Col>{person?.movie_review}</Col>
              </Row>
            </Col>
          </Row>
          <hr/>
          <Card.Title>Comments</Card.Title>
          <Comments id={person?.id} />
        </Card.Body>
      </Card>
    </Container>
  );
};

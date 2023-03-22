import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Cards } from "./Cards";
import { data } from "../utils/data";

export const Home = () => {
  useEffect(() => {
    document.title = "Página principal";
  }, []);
  return (
    <Container fluid className="mt-4">
      <h3>Students</h3>
      <Row>
        {data.map((value, index) => (
          <Col sm="auto" key={index}>
            <Cards data={value} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

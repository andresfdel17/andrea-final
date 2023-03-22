import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cards = (props) => {
  const { data } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.image} style={{ height: "275px" }} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.age}</Card.Text>
        <Link to={`/student/${data.id}`}>
          <Button size="sm" variant="primary">
            Read about me
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

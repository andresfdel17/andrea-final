import React, { useEffect, useState } from "react";
import {
  Spinner,
  Row,
  Col,
  FormControl,
  FloatingLabel,
  Form,
  Button,
} from "react-bootstrap";

export const Comments = (props) => {
  const { id } = props;
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    initialize();
    getComments();
    return () => {
      setComments([]);
    };
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
    getComments();
    // eslint-disable-next-line
  }, [comments]);
  const initialize = () => {
    const saved = localStorage.getItem("comments");
    if (!saved) {
      localStorage.setItem("comments", JSON.stringify(comments));
      return;
    }
    localStorage.setItem("comments", saved);
    setComments(JSON.parse(saved));
  };
  const getComments = () => {
    const filter = comments?.filter((value) => value.id === id);
    setFiltered(filter);
    setLoading(false);
  };
  const handleComment = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = {};
    for (let [key, value] of data) {
      formData[key] = value;
    }
    formData.id = id;
    const c = [...comments];
    c.push(formData);
    e.target.reset();
    setComments(c);
  };
  return loading ? (
    <Spinner animation="grow" variant="primary" />
  ) : (
    <>
      <form onSubmit={handleComment}>
        <Row>
          <Col sm={4}>
            <label>Name:</label>
            <FormControl size="sm" type="text" name="name" required />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col sm>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                name="comment"
                placeholder="Leave a comment here"
              />
            </FloatingLabel>
          </Col>
          <Col sm="auto">
            <Button type="submit" size="sm">
              Submit
            </Button>
          </Col>
        </Row>
      </form>
      {filtered.length > 0 && filtered.map((val, index) => (
        <Row key={index}>
          <Col>
            <Row>
              <Col sm={4}>
                <label>Name:</label>
                <FormControl size="sm" type="text" name="name" disabled defaultValue={val.name} />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Comments"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    name="comment"
                    placeholder="Leave a comment here"
                    defaultValue={val.comment}
                    disabled
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </>
  );
};

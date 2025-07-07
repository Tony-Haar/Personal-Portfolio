import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

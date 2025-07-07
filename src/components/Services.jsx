import { Container, Row, Col, Card } from "react-bootstrap";

function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Custom responsive websites built with React.",
    },
    {
      title: "Data Analysis",
      desc: "Turn raw data into insights with dashboards and reports.",
    },
    {
      title: "UI/UX Design",
      desc: "Modern interface design using Figma & Adobe tools.",
    },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">My Services</h2>
        <Row>
          {services.map((service, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import projectImg from "../assets/project1.jpg"; 

function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Site",
      img: projectImg,
      desc: "React & Firebase-based shopping platform.",
    },
    {
      title: "Data Dashboard",
      img: projectImg,
      desc: "Interactive dashboard using Power BI.",
    },
    {
      title: "Portfolio Website",
      img: projectImg,
      desc: "Personal site with animations and smooth UI.",
    },
  ];

  return (
    <section id="portfolio" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4">Portfolio</h2>
        <Row>
          {projects.map((project, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card className="shadow-sm h-100">
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                  <Button variant="primary" href="#">
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;

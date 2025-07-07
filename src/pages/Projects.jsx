import Navbar from "../components/CustomNavbar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import projectImg from "../assets/project1.jpg";

function Projects() {
  const projects = [
    {
      title: "Dashboard Project",
      description:
        "A powerful business dashboard built with Python, Pandas, and Power BI.",
      image: projectImg,
      link: "#",
    },
    {
      title: "Web Portfolio",
      description:
        "My own portfolio website built using React, Bootstrap, and CSS animations.",
      image: projectImg,
      link: "#",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4">All Projects</h2>
          <Row>
            {projects.map((project, idx) => (
              <Col md={6} className="mb-4" key={idx}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button
                      href={project.link}
                      target="_blank"
                      variant="primary"
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Projects;

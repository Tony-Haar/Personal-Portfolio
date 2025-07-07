import { Container, Row, Col, Image } from "react-bootstrap";
import profile from "../assets/Chuan.png"; 

function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <Row className="align-items-center">
          <Col md={5}>
            <Image src={profile} fluid className="w-50 h-50" />
          </Col>
          <Col md={7}>
            <p>
              I am a creative and detail-oriented professional skilled in
              design, data analysis, and web development. I turn ideas and data
              into user-friendly digital solutions, blending creativity with
              technical expertise to deliver real results.
            </p>
            <p>
              Tools I use: React, Python, Figma, Adobe Suite, SQL, Power BI,
              and more.
            </p>
            <a
              className="btn btn-outline-primary mt-2"
              href="/resume.pdf"
              download
            >
              Download Resume
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

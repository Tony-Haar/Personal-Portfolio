import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center vh-100 bg-light">
      <Container className="text-center">
        <h1>
          Hello, I'm <span className="text-primary">Chuan Haar</span>
        </h1>
        <h3>Web Developer & Data Analyst</h3>
        <p>Turning ideas into impactful digital experiences.</p>
        <Button variant="primary" className="m-2">
          See My Work
        </Button>
        <Button variant="outline-dark" className="m-2">
          Hire Me
        </Button>
      </Container>
    </section>
  );
}

export default Hero;

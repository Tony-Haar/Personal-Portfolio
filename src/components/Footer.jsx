import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <Container className="text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Chuan Haar Ajach. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;

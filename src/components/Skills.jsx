import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Python / Data Analysis", level: 85 },
    { name: "Figma / UI Design", level: 80 },
    { name: "SQL / Power BI", level: 75 },
    { name: "Adobe Illustrator / Photoshop", level: 70 },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">My Skills</h2>
        <Row>
          {skills.map((skill, idx) => (
            <Col md={6} key={idx} className="mb-3">
              <h6>{skill.name}</h6>
              <ProgressBar now={skill.level} label={`${skill.level}%`} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;

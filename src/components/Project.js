import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Project({projects}) {
  return (
    <Row xs={1} md={2} className="g-5">
      {projects.map((project, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={project.image}/>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Project;
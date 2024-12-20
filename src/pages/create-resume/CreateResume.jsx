import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col, ListGroup, Button, Card } from "react-bootstrap";
import BuilderAccordion from "../../components/builder-accordian/BuilderAccordion";
import CareerCatalyst from "../../resume/careerCatalyst/CareerCatalyst";

const CreateResume = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white py-3">
        <Container>
          <h1 className="text-center">Resume</h1>
        </Container>
      </header>

      <Container fluid className="my-4 m-auto">
        <Row>
          <BuilderAccordion />

          <Col md={5}>
            <CareerCatalyst />
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-light py-3 text-center">
        <Container>
          <small>
            Terms & Conditions | Privacy Policy | Accessibility | Contact Us
          </small>
        </Container>
      </footer>
    </div>
  );
};

export default CreateResume;

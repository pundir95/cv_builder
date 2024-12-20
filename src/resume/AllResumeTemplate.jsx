import { Card, Col, Container, Row } from "react-bootstrap";
import CareerCatalyst from "./careerCatalyst/CareerCatalyst";
import ProfessionalPathway from "./professionalPathway/ProfessionalPathway";

const AllResumeTemplate = () => {
  let templateList = [
    {
      id: 1, // Added ID to ensure unique keys
      name: "Career Catalyst",
      templateComp: <CareerCatalyst />,
    },
    {
      id: 2,
      name: "Professional Pathway",
      templateComp: <ProfessionalPathway />,
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Resume Templates</h2>
      <Row>
        {templateList.map((template) => (
          <Col key={template.id} xs={12} sm={6} md={4} className="mb-4">
          
                <div className="template-preview">{template.templateComp}</div>
              
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllResumeTemplate;


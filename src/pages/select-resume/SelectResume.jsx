import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaCloudUploadAlt } from "react-icons/fa";

const SelectResume = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="text-center shadow border-primary">
            <Badge
              bg="danger"
              text="light"
              style={{
                position: "absolute",
                top: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
                fontSize: "14px",
              }}
            >
              Recommended option to save you time
            </Badge>
            <Card.Body>
             <FaCloudUploadAlt fontSize="34px"/>
              <Card.Title>Yes, upload from my resume</Card.Title>
              <Card.Text>
                We’ll give you expert guidance to fill out your info and enhance
                your resume, from start to finish
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="text-center shadow">
            <Card.Body>
            <FaCloudUploadAlt fontSize="34px"/>
              <Card.Title>No, start from scratch</Card.Title>
              <Card.Text>
                We’ll guide you through the whole process so your skills can
                shine
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SelectResume;

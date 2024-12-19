import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Resume = () => {
  return (
    <Container className="my-4 catalyst-container">
      <Card className="shadow">
        <Card.Body>
          <Row className="text-white bg-dark py-4">
            <Col md={2} className="text-center">
              <div className="catalyst-logo">
                <span className="catalyst-inner-logo">DB</span>
              </div>
            </Col>
            <Col md={10} className="d-flex align-items-center">
              <h2 className="text-uppercase">Debra Brambila</h2>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={8}>
              <h5>Professional Summary</h5>
              <p>
                Accomplished Education Coordinator oversees lesson planning, testing, and educational
                activities. Quickly learns and applies principles to develop a comprehensive education
                continuum. Dedicated to meeting expectations and requirements of parents and students.
              </p>
            </Col>
            <Col md={4}>
              <h5>Contact</h5>
              <p>
                lora.email@gmail.com <br />
                (123) 456-789 <br />
                New York City, NY 00926
              </p>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
              <h5>Work History</h5>
              <div>
                <h6>Professional Driving School Of The Americas Inc: Education Coordinator</h6>
                <p className="text-muted">San Francisco, TX | 12/2018 - 06/2020</p>
                <ul>
                  <li>Developed community education programming events and other activities designed to increase and improve educational outcomes.</li>
                  <li>Planned, formulated, and assessed goals, policies, and activities designed to implement educational objectives and performance standards.</li>
                  <li>Leveraged knowledge of budget and educational designs to facilitate development of cost-effective educational programs.</li>
                  <li>Conducted conferences with parents and students to review progress, adjust academic plans, and renew enrollments.</li>
                </ul>
              </div>
              <div>
                <h6>Professional Driving Academy: Training Education Coordinator</h6>
                <p className="text-muted">San Francisco, TX | 10/2018 - 06/2020</p>
                <ul>
                  <li>Evaluated success of training programs and recommended improvements to upper management to enhance effectiveness.</li>
                  <li>Reviewed and edited all training materials for accuracy and company policy compliance.</li>
                  <li>Coordinated ongoing technical training and personal development classes for staff members.</li>
                </ul>
              </div>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col md={6}>
              <h5>Skills</h5>
              <ul>
                <li>Program Management</li>
                <li>Classroom Administration</li>
                <li>Hiring Coordination</li>
                <li>Learning Management System Proficiency</li>
                <li>Curriculum Coordination</li>
                <li>Teacher Training</li>
                <li>Observation Reports</li>
                <li>Activity Planning</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5>Education</h5>
              <p>
                <strong>Texas A&M University - Central Texas</strong> <br />
                Killeen, TX <br />
                Bachelor of Arts, Education Administration (06/2017)
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Resume;

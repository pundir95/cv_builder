import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const ProfessionalPathway = ({}) => {
  return (
    <Col md={6} lg={4}>
    <div
      className="shadow bg-white rounded"
      style={{ width: "100%" , transform:"scale(0.86)" }}
    >
      <Row>
        <Col xs={4} className="bg-info text-white p-1 d-flex flex-column align-items-center">
          <h1 style={{ fontSize: "10px", textAlign: "center" }}>Saanvi Patel</h1>
          <Image
            src="https://via.placeholder.com/40"
            roundedCircle
            alt="Profile Picture"
            className="my-1"
          />
          <div className="text-center" style={{ fontSize: "8px" }}>
            <p>Phone: +123456789</p>
            <p>Email: saanvi.patel@example.com</p>
            <p>Location: New York, USA</p>
          </div>
          <div className="text-start w-100 mt-1">
            <h5 style={{ fontSize: "8px" }}>Skills</h5>
            <ul className="list-unstyled" style={{ fontSize: "8px", paddingLeft: "10px" }}>
              <li>Customer Service</li>
              <li>Teamwork</li>
              <li>Time Management</li>
            </ul>
          </div>
          <div className="text-start w-100 mt-1">
            <h5 style={{ fontSize: "8px" }}>Languages</h5>
            <ul className="list-unstyled" style={{ fontSize: "8px", paddingLeft: "10px" }}>
              <li>English</li>
              <li>Spanish</li>
            </ul>
          </div>
        </Col>
        <Col xs={8} className="p-1">
          <h2 style={{ fontSize: "10px", borderBottom: "1px solid #ccc" }}>Work History</h2>
          <div className="mt-1">
            <h5 style={{ fontSize: "8px" }}>Retail Sales Associate</h5>
            <p className="mb-0" style={{ fontSize: "7px" }}>Company XYZ | 2021 - Present</p>
            <ul style={{ fontSize: "7px", paddingLeft: "10px" }}>
              <li>Assisting customers with purchases.</li>
              <li>Handling cash register transactions.</li>
            </ul>
          </div>
          <div className="mt-1">
            <h5 style={{ fontSize: "8px" }}>Intern</h5>
            <p className="mb-0" style={{ fontSize: "7px" }}>Company ABC | 2019 - 2021</p>
            <ul style={{ fontSize: "7px", paddingLeft: "10px" }}>
              <li>Gained hands-on experience in accounting tasks.</li>
              <li>Assisted in monthly reporting.</li>
            </ul>
          </div>

          <h2 className="mt-2" style={{ fontSize: "10px", borderBottom: "1px solid #ccc" }}>Education</h2>
          <div className="mt-1">
            <h5 style={{ fontSize: "8px" }}>Diploma in Financial Accounting</h5>
            <p className="mb-0" style={{ fontSize: "7px" }}>XYZ Institute | 2018</p>
          </div>

          <div className="text-center mt-2">
            <Button
              variant="primary"
              className="text-uppercase"
              style={{ fontSize: "8px", padding: "2px 5px" }}
            >
              Recommended
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  </Col>
  );
};

export default ProfessionalPathway;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ProfessionalPathway = () => {
  return (
    <Container className="my-4" style={{ maxWidth: "900px" }}>
      <Card className="shadow">
        <Card.Body>
          {/* Header Section */}
          <Row className="bg-dark text-white py-4">
            <Col>
              <h1 className="text-uppercase mb-0" style={{ fontWeight: "bold" }}>
                Caroline Cox
              </h1>
            </Col>
          </Row>

          {/* Contact & Summary Section */}
          <Row className="mt-4">
            <Col md={4}>
              <h5 className="mb-3">Contact</h5>
              <p>
                <i className="bi bi-geo-alt-fill"></i> 36043, Montgomery, Alabama <br />
                <i className="bi bi-telephone-fill"></i> 555-555-555 <br />
                <i className="bi bi-envelope-fill"></i> example@example.com
              </p>
              <h5 className="mt-4">Skills</h5>
              <ul>
                <li>Inventory and supply management</li>
                <li>Medical billing and coding</li>
                <li>Strong communication</li>
                <li>HIPAA compliance</li>
                <li>Proper sterilization techniques</li>
                <li>Advanced anatomy knowledge</li>
                <li>Monitoring patient progress</li>
                <li>Case management</li>
              </ul>
              <h5 className="mt-4">Education</h5>
              <p>
                <strong>Bachelor of Science, Biology</strong> <br />
                Alabama State University, Alabama <br />
                12/2013
              </p>
            </Col>

            <Col md={8}>
              <h5 className="mb-3">Summary</h5>
              <p>
                Highly motivated and committed Medical Assistant with proven history of superior
                performance at individual, team, and organizational levels. Strong ability to multitask
                and prioritize workloads with little or no supervision. Detail-oriented professional
                looking to bring medical background and team-building skills to deadline-driven
                environments.
              </p>

              <h5 className="mt-4">Relevant Skills</h5>
              <ul>
                <li>Professional manner with an emphasis on hospitality and guest service.</li>
                <li>Strong ability to analyze information and provide solutions to problems.</li>
                <li>Implemented processes that reduce costs while improving efficiency.</li>
              </ul>

              <h5 className="mt-4">Work History</h5>
              <div className="mb-4">
                <h6>Medical Assistant</h6>
                <p className="text-muted">
                  Capital City Gastroenterology, Montgomery, Alabama | January 2018 - Current
                </p>
                <ul>
                  <li>
                    Conduct 15 preliminary evaluations daily, including measuring weight, blood pressure,
                    and documented results with accuracy.
                  </li>
                  <li>
                    Manage monthly, and quarterly inventory of supplies using facility cost reporting
                    records.
                  </li>
                  <li>
                    Lead patients to exam rooms, answer general questions, and prepare patients for
                    physicians by explaining the process.
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h6>Office Assistant</h6>
                <p className="text-muted">
                  Baptist Health, Montgomery, Alabama | February 2018 - January 2018
                </p>
                <ul>
                  <li>Collected payments, issued receipts, and updated accounts to reflect new balances.</li>
                  <li>Answered approximately 35+ phone calls daily and pleasantly welcomed visitors to the office.</li>
                  <li>Tracked inventory and ordered office supplies encouraging cost-effective solutions.</li>
                </ul>
              </div>
              <div>
                <h6>Front Desk Clerk</h6>
                <p className="text-muted">
                  American Family Care, Montgomery, Alabama | February 2014 - January 2016
                </p>
                <ul>
                  <li>Welcomed guests and facilitated a smooth check-in process.</li>
                  <li>Supervised activities of housekeeping and maintenance staff.</li>
                  <li>
                    Managed 160+ reservations monthly, including bookings, cancellations, and amendments.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfessionalPathway;

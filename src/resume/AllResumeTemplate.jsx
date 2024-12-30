import { Col, Container, Row } from "react-bootstrap";
import CareerCatalyst from "./careerCatalyst/CareerCatalyst";
import ProfessionalPathway from "./professionalPathway/ProfessionalPathway";
import { RESUME_TEMPLATES } from "./constant";

const AllResumeTemplate = () => {

  return (
    <Container className="mt-4">
      <Row>
        {RESUME_TEMPLATES?.map((item, index) => {
          return (
            <>
              <div className="resume_container"  style={{ width: "35%"}}>
                <div className="left">
                  {item[index]
                    .filter((section) => section.side === "left")
                    .map((section, index) => (
                      <div
                        key={index}
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    ))}
                </div>
                <div className="right">
                  {item[index]
                    .filter((section) => section.side === "right")
                    .map((section, index) => (
                      <div
                        key={index}
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    ))}
                </div>
              </div>
            </>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllResumeTemplate;

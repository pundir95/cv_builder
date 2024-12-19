import { Col, Row } from "react-bootstrap";
import BuilderHeading from "./BuilderHeading";
import { BUILDER_HEADING } from "../../builderConstant/constant";

const BuilderBox = ({ data, handleClick, headingValue }) => {

  return (
    <>
      <BuilderHeading headingValue={headingValue} />
      <Row className="justify-content-center">
        <Col md={5}>
          <div className="mt-md-5 mt-4">
            <div className="selection-wrapper">
              {data?.map((item, index) => {
                return (
                  <>
                    <span
                      key={index}
                      className={`education-selection`}
                      onClick={() => handleClick(item)}
                    >
                      {item.label}
                    </span>
                  </>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BuilderBox;

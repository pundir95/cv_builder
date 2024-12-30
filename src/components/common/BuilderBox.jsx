import { Col, Row } from "react-bootstrap";
import BuilderHeading from "./BuilderHeading";
import { BUILDER_HEADING } from "../../builderConstant/constant";
import { useState } from "react";

const BuilderBox = ({ data, handleClick, headingValue,selectedIndex }) => {
 

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
                      className={`education-selection ${
                        selectedIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleClick(item, index)}
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

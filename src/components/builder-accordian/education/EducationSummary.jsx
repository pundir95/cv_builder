import { Col, OverlayTrigger, Row } from "react-bootstrap";
import { FaLightbulb } from "react-icons/fa6";
import { TbFileDescription } from "react-icons/tb";
import BuilderButton from "../../common/atomic/BuilderButton";
import { TiEdit } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";

const EducationSummary = () => {
  return (
    <div>
         <Row>
        <Col md={12}>
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
           
              <div>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                >
                  <span className="text-green d-flex align-items-center gap-2 cursor-pointer">
                    <FaLightbulb />
                    Tips
                  </span>
                </OverlayTrigger>
              </div>
            </div>
          </div>
          {['','']?.map((item, index) => {
            return (
              <>
                <div className="work-summary-wrapper mb-3 position-relative">
                  <div className="w-100">
                    <h4 className="summary-heading mb-2 fw-semibold">
                    knjksd
                    </h4>
                    <p className="font-14">lanks</p>
                    <ul>
                      <div className="d-flex align-items-center gap-1">
                        <li><TbFileDescription /></li>
                      
                      </div>
                      <li className="mt-2">Address: {item?.address}</li>
                      <li className="mt-3">2023-2024</li>
                    </ul>
                  
                  </div>
                  <div className="education-action">
                    <BuilderButton
                      variant="transparent"
                      className="arrow-btn info-arrow shadow-none"
                    >
                      <TiEdit />
                    </BuilderButton>
                    <BuilderButton
                    //   onClick={() => handleDeleteModal(item?.id)}
                      variant="transparent"
                      className="arrow-btn danger-arrow shadow-none"
                    >
                      <IoCloseOutline />
                    </BuilderButton>
                  </div>
                </div>
              </>
            );
          })}

          <div className="">
            <BuilderButton
              variant="transparent"
              className="position-btn mb-3"
            >
              + Add another position
            </BuilderButton>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default EducationSummary
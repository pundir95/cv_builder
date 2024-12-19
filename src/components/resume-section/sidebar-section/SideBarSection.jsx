import { FaCheck } from "react-icons/fa6";

const SideBarSection = ({
  activeStep,
  stepperSideBarItems,
  handleSetActiveStep,
  sideBarPercentage,
}) => {
  const getPercentage = () => {
    return sideBarPercentage[activeStep];
  };

  return (
    <div className="resume-sidebar">
      <div className="resume-sidelogo mb-4">
        <a
          href="https://www.rexett.com/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
      <div>
        <ul>
          {stepperSideBarItems?.map(({ stepNumber, label }, index) => (
            <li
              key={index}
              className={stepNumber < activeStep && "active-step"}
              onClick={() => {
                handleSetActiveStep(stepNumber);
              }}
              style={{ cursor: "pointer" }}
            >
              <span className="resume-count">
                <span className="resume-step">{stepNumber}</span>
                <span className="resume-check">
                  <FaCheck />
                </span>
              </span>
              <span className="step-label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none comp-wrapper">
        <h4 className="resume-sideheading mt-3">Completeness:</h4>
        <div className="resume-progress-wrapper">
          <div className="resume-progressbx">
            <div style={{ width: `${getPercentage()}%` }}></div>
          </div>
          <span className="resume-progress-status font-12 fw-medium">
            {getPercentage()}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBarSection;

import { useState } from "react";
import BuilderButton from "../../common/atomic/BuilderButton";
import ProfessionalStep1 from "./ProfessionalStep1";
import RelevantExperience from "./RelevantExperience";
import AboutYourExperience from "./AboutYourExperience";
import ExperienceDescription from "./ExperienceDescription";
import ExperienceSummary from "./ExperienceSummary";

const ProfessionalExperience = () => {
  const [activeStep, setActiveStep] = useState(4);
  const [selectedExperience, setSelectedExperience] = useState([]);

  const renderActiveStepForm = () => {
    switch (activeStep) {
      case 1:
        return (
          <ProfessionalStep1
            setSelectedExperience={setSelectedExperience}
            selectedExperience={selectedExperience}
          />
        );
      case 2:
        return <RelevantExperience 
        selectedExperience={selectedExperience}
        />;
      case 3:
        return <AboutYourExperience
        activeStep={activeStep}
        />;
       case 4: return <ExperienceDescription/> 
       case 5: return <ExperienceSummary/>
    }
  };

  const handleClick = () => {
    setActiveStep((prev) => prev + 1);
  };

  return (
    <div>
      {renderActiveStepForm()}
      <BuilderButton text="Skip Now" />
      <BuilderButton text="Next" onClick={handleClick} />
    </div>
  );
};

export default ProfessionalExperience;

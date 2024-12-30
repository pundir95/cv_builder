import React, { useState } from 'react'
import BuilderButton from '../../common/atomic/BuilderButton';
import EducationLevel from './EducationLevel';
import YourEducation from './YourEducation';
import EducationDescription from './EducationDescription';
import EducationSummary from './EducationSummary';

const EducationSteps = () => {
  const [activeStep, setActiveStep] = useState(1);

  
  const renderActiveStepForm = () => {
    switch (activeStep) {
      case 1:
        return (
         <EducationLevel/>
        );
        case 2: 
        return (
          <YourEducation/>
        );
        case 3: 
        return (
          <EducationDescription/>
        );
        case 4: 
        return (
          <EducationSummary/>
        )
      
    }
  };
  const handleClick=()=>{
    setActiveStep(activeStep+1)
  }
  return (
    <div>
    {renderActiveStepForm()}
    <BuilderButton text="Skip Now" />
    <BuilderButton text="Next" onClick={handleClick} />
  </div>
  )
}

export default EducationSteps
import { BUILDER_STEP_1_FIELDS } from "./constant";


export const getResumeActiveStepFields = (activeStep) => {
    return BUILDER_STEP_1_FIELDS[activeStep] || null;
};
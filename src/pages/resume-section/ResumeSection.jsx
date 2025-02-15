import {
  BUILDER_STEP_1_FIELDS,
} from "../../components/resume-section/constant";
import { useState } from "react";
import ResumeForm from "../../components/common/ResumeForm";
import { useForm } from "react-hook-form";
import { getResumeActiveStepFields } from "../../components/resume-section/utils";
import { Col, Container, Row } from "react-bootstrap";
import BuilderButton from "../../components/common/atomic/BuilderButton";

const ResumeSection = () => {
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
    watch,
    setError,
    setValue,
    clearErrors,
  } = useForm();

  const [activeStep, setActiveStep] = useState(1);

  const activeResumeFields = getResumeActiveStepFields(activeStep);
  console.log(BUILDER_STEP_1_FIELDS, "activeResumeFields");
  const handleSetActiveStep = () => {};

  const renderActiveForm = () => {
    switch (activeStep) {
      case 1:
        return (
          <ResumeForm
            register={register}
            control={control}
            errors={errors}
            activeStep={activeStep}
            setError={setError}
            clearErrors={clearErrors}
            watch={watch}
            setValue={setValue}
            isProfileSectionRequired={true}
            stepFields={BUILDER_STEP_1_FIELDS}
            // stepData={BUILDER_STEP_1_FIELDS
          />
        );

      default:
        return;
    }
  };
  return (
    <section className="resume-section-wrapper d-flex">
      <div className="resume-main-wrapper">
        <form className="position-relative z-3">
          <Container>
            <Row>
              <Col md={8}>{renderActiveForm()}</Col>
            </Row>
            <div className="d-flex justify-content-end align-items-center mt-md-0 mt-4">
              <div className="me-3">
                <BuilderButton
                  type="submit"
                  text={"Next"}
                  className="outline-main-btn px-4 font-14 mr-2"
                />
              </div>
              <div>
                <BuilderButton
                  type="submit"
                  text={"Submit"}
                  className="main-btn px-4 font-14 mr-2"
                />
              </div>
            </div>
          </Container>
        </form>
      </div>
    </section>
  );
};

export default ResumeSection;

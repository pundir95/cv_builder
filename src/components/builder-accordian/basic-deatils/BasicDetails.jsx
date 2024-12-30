
  import { useState } from "react";
  import { useForm } from "react-hook-form";
  import { Col, Container, Row } from "react-bootstrap";
import BuilderButton from "../../common/atomic/BuilderButton";
import ResumeForm from "../../common/ResumeForm";
import { getResumeActiveStepFields } from "../../resume-section/utils";
import { BUILDER_STEP_1_FIELDS, BUILDER_STEP_2_FIELDS } from "../../resume-section/constant";
  
  
  const BasicDetails = () => {
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
            />
          );
          case 2: 

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
              isProfileSectionRequired={false}
              stepFields={BUILDER_STEP_2_FIELDS}
            />
          );

  
        default:
          return;
      }
    };

    const handleActiveStep=()=>{
        setActiveStep(prev=>prev+1)
    }

    const onSubmit=()=>{

    }

    const getActiveStepText = (values) => {
        switch (activeStep) {
          case 1:
            return "Next : Professional Experience";
          case 2:
            return "Next : Job Description";
          case 3:
            return "Next: Screening Info";
          case 4:
            return "Submit";
        }
      };
    return (
      <section className="resume-section-wrapper d-flex">
        <div className="resume-main-wrapper">
          <form className="position-relative z-3" onSubmit={handleSubmit(onSubmit)}>
            <Container>
              <Row>
                <Col md={8}>{renderActiveForm()}</Col>
              </Row>
              <div className="d-flex justify-content-end align-items-center mt-md-0 mt-4">
                <div className="me-3">
                  <BuilderButton
                    type="submit"
                    text="Skip for Now"
                    onClick={handleActiveStep}
                    className="outline-main-btn px-4 font-14 mr-2"
                  />
                </div>
                <div>
                  <BuilderButton
                    type="submit"
                    text={getActiveStepText()}
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
  
  export default BasicDetails;
  
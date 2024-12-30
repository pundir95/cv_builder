import React from 'react'
import ResumeForm from '../../common/ResumeForm'
import { useForm } from 'react-hook-form';
import { BUILDER_STEP_1_FIELDS, EXPERIENCE_FIELDS } from '../../resume-section/constant';

const AboutYourExperience = ({activeStep}) => {
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
  return (
    <div>
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
            stepFields={EXPERIENCE_FIELDS}
            // stepData={BUILDER_STEP_1_FIELDS
          />
    </div>
  )
}

export default AboutYourExperience
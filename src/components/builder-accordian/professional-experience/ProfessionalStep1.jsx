import React, { useEffect, useState } from "react";
import BuilderBox from "../../common/BuilderBox";
import { RESUME_EXPERIENCE } from "../constant";
import AddYourOwn from "./AddYourOwn";
import { useForm } from "react-hook-form";

const ProfessionalStep1 = ({ selectedExperience, setSelectedExperience }) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useForm();
  const [resumeData, setResumeData] = useState(RESUME_EXPERIENCE);

  console.log(resumeData, "resumeData");
  let data = watch("experience");

  useEffect(() => {
    if (data) {
      console.log(data, "dt");
      let payload = {
        label: data?.label,
        value: data?.value,
      };
      setResumeData([...resumeData, payload]);
    }
  }, [data]);

  const handleClick = (item) => {
    setSelectedExperience([...selectedExperience, { value: item }]);
  };

  console.log(selectedExperience, "selectedExperience");
  return (
    <>
      <BuilderBox
        data={resumeData}
        handleClick={handleClick}
        headingValue="experience_level"
      />

      <AddYourOwn watch={watch} control={control} />
    </>
  );
};

export default ProfessionalStep1;

import React from "react";
import RecommendationAI from "../../common/RecommendationAI";
import BuilderEditor from "../../common/atomic/BuilderEditor";
import { useForm } from "react-hook-form";

const EducationDescription = () => {
  const { control, watch } = useForm();

  const handleChange = () => {};
  return (
    <>
      <div>
        <RecommendationAI />
      </div>
      <div className="mt-4 p-3">
        <BuilderEditor
          label="Job Description"
          name="description"
          control={control}
          rules={{
            required: "Description is required",
          }}
          handleChange={handleChange}
          watch={watch}
          isRequired={true}
        />
      </div>
    </>
  );
};

export default EducationDescription;

import React from "react";
import RecommendationAI from "../../common/RecommendationAI";
import BuilderEditor from "../../common/atomic/BuilderEditor";
import { useForm } from "react-hook-form";
import SkillWithRating from "./SkillWithRating";

const Skills = () => {
 

  const handleChange = () => {};
  return (
    <>
      <div>
        <RecommendationAI />
      </div>
      <div className="mt-4 p-3">
        <SkillWithRating />
      </div>
    </>
  );
};

export default Skills;

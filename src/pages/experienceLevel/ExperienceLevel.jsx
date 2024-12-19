import BuilderBox from "../../components/common/BuilderBox";
import {
  EDUCATION_LEVEL,
  EXPERIENCE_TIME,
  IS_STUDENT,
} from "../../builderConstant/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExperienceLevel = () => {
    const navigate=useNavigate()
  const [isCheck, setIsCheck] = useState({
    isStudent: false,
    isTime: false,
  });
  const handleClick = (item) => {
    let { isOpenNext,type } = item;
    if(isOpenNext){
        setIsCheck({
            ...isCheck,
            [type]:isOpenNext
        });
    }else{
        navigate("/resume/choose-template")
    }
   
  };

  console.log(isCheck,"isCheck")
  return (
    <div>
      <BuilderBox
        data={EXPERIENCE_TIME}
        handleClick={handleClick}
        headingValue="experience_time"
      />
      {isCheck.isStudent ? (
        <BuilderBox
          data={IS_STUDENT}
          handleClick={handleClick}
          headingValue="is_student"
        />
      ) : (
        ""
      )}
      {isCheck.isTime ? (
        <BuilderBox
          data={EDUCATION_LEVEL}
          handleClick={handleClick}
          headingValue="experience_level"
        />
      ) : (
        " "
      )}
    </div>
  );
};

export default ExperienceLevel;

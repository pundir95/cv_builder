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
    const [selectedIndex, setSelectedIndex] = useState(null);
  const [isCheck, setIsCheck] = useState({
    isStudent: false,
    isTime: false,
  });

  const handleClick = (item,index) => {
    setSelectedIndex(index); 
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

  return (
    <div>
      <BuilderBox
        data={EXPERIENCE_TIME}
        handleClick={handleClick}
        headingValue="experience_time"
        selectedIndex={selectedIndex}
      />
      {isCheck.isStudent ? (
        <BuilderBox
          data={IS_STUDENT}
          handleClick={handleClick}
          headingValue="is_student"
          selectedIndex={selectedIndex}
        />
      ) : (
        ""
      )}
      {isCheck.isTime ? (
        <BuilderBox
          data={EDUCATION_LEVEL}
          handleClick={handleClick}
          headingValue="experience_level"
          selectedIndex={selectedIndex}
        />
      ) : (
        " "
      )}
    </div>
  );
};

export default ExperienceLevel;

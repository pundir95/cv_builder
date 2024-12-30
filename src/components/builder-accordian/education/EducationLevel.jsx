import React from 'react'
import BuilderBox from '../../common/BuilderBox'
import { LEVEL_OF_EDUCATION } from './constant'

const EducationLevel = () => {
const handleClick=()=>{
    
}
  return (
    <div>
        <BuilderBox
        data={LEVEL_OF_EDUCATION}
        handleClick={handleClick}
        headingValue="experience_level"
      />
    </div>
  )
}

export default EducationLevel
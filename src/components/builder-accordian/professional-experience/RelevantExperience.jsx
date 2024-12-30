import React from 'react'

const RelevantExperience = ({selectedExperience}) => {
  return (
    <div>{
        selectedExperience?.map((item,index)=>{
            return(
                <>
                <div key={index}>{item?.value?.label}</div>
                </>
            )
        })
        
        }</div>
  )
}

export default RelevantExperience
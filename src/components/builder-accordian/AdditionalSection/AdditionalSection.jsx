import React, { useState } from "react";
import { ADDITIONAL_SECTION } from "./constant";
import CommonInput from "../../common/CommonInput";
import { useForm } from "react-hook-form";

const AdditionalSection = () => {
  const { control, watch,reset } = useForm();
  const [additionalList, setAdditionalList] = useState(ADDITIONAL_SECTION);
  const handleClick = () => {
    let section= watch("section")
    setAdditionalList([...additionalList,{label:section,key:section}])
  };
  return (
    <div>
      {additionalList?.map((item, index) => {
        return (
          <>
            <div className="d-flex align-items-center">
              <input type="checkbox" />
              <p className="">{item.label}</p>
            </div>
          </>
        );
      })}
      <div>
        <CommonInput
          name={`section`} // Dynamically name the field
          control={control}
          invalidFieldRequired={true}
          type="text"
          watch={watch}
        />
        <p  onClick={handleClick}>+Add Your Own</p>
      </div>
    </div>
  );
};

export default AdditionalSection;

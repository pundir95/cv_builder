import React, { useState } from "react";
import CommonInput from "../../common/CommonInput";
import { RESUME_EXPERIENCE_LEVEL } from "../constant";
import { MdDeleteForever } from "react-icons/md";

const AddYourOwn = ({ watch, control }) => {
  const handleClick = () => {};

  const handleAdd = () => {};

  const handleDelete = (idx) => {};

  return (
    <div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CommonInput
            name={`experience`} // Dynamically name the field
            control={control}
            selectOptions={RESUME_EXPERIENCE_LEVEL}
            invalidFieldRequired={true}
            type={"select2"}
            watch={watch}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            {/* <IoMdAddCircle
                  style={{ cursor: "pointer", marginRight: "10px" }}
                  onClick={handleAdd}
                  title="Add New"
                /> */}
            <MdDeleteForever
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => handleDelete}
              title="Delete"
            />
          </div>
        </div>

        <div onClick={handleClick}>
          <h4>+ Add Your Own</h4>
        </div>
      </div>
    </div>
  );
};

export default AddYourOwn;

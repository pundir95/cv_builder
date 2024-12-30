import React from "react";
import CommonInput from "../../common/CommonInput";
import { RESUME_EXPERIENCE_LEVEL } from "../constant";
import { MdDeleteForever } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useFieldArray, useForm } from "react-hook-form";

const SkillWithRating = () => {
  const { control, watch, setValue } = useForm();
  const { fields, remove, append } = useFieldArray({
    control,
    name: "skills",
  });

  const handleAdd = () => {
    // Add a new skill with default values
    append({ experience: "", rating: 0 });
  };

  const handleDelete = (idx) => {
    // Remove a skill at the given index
    remove(idx);
  };

  return (
    <div>
      <div>
        <div>
          {fields?.map((field, idx) => (
            <div
              key={field.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <MdDeleteForever
                style={{ cursor: "pointer", color: "red", marginRight: "10px" }}
                onClick={() => handleDelete(idx)}
                title="Delete"
              />
              <CommonInput
                name={`skills[${idx}].experience`} // Dynamically name the field
                control={control}
                selectOptions={RESUME_EXPERIENCE_LEVEL}
                invalidFieldRequired={true}
                type="select2"
                watch={watch}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <div className="mx-2">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      {index < (watch(`skills[${idx}].rating`) || 0) ? (
                        <FaStar
                          style={{
                            color: "blue",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            setValue(`skills[${idx}].rating`, index + 1)
                          }
                        />
                      ) : (
                        <FaRegStar
                          style={{
                            color: "gray",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            setValue(`skills[${idx}].rating`, index + 1)
                          }
                        />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Skill Button */}
        <div onClick={handleAdd} style={{ cursor: "pointer", marginTop: "10px" }}>
          <p style={{ color: "#007bff" }}>+ Add Your Own</p>
        </div>
      </div>
    </div>
  );
};

export default SkillWithRating;

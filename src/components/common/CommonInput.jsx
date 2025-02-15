import React, { useState,useEffect } from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import "react-phone-number-input/style.css";
import { IoCloseCircle } from "react-icons/io5";
const CommonInput = ({
  watch,
  label,
  name,
  type = "text",
  value,
  control,
  rules,
  readOnly = false,
  placeholder = "",
  error,
  autoComplete = "off",
  isPassword = false,
  onTogglePassword,
  icon,
  onChange,
  accept,
  options, // For radio inputs or select options
  selectOptions, // For react-select options
  isMulti = false,
  isMinRequired,
  isMaxRequired,
  invalidFieldRequired = false,
  defaultOption = "",
  disabled,
  className,
  selectedRecommend,
  isInputMode,
  handleSwitchToInput,
  handleCreateOption
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
 

    // useEffect(()=>{
    //   if (!projectTypeList.length) {
    //   dispatch(getProjectTypes());
    //   }
    //   if (!degreeList.length) {
    //   dispatch(getDegreeList());
    //   }
    //   if (!skillOptions.length) {
    //   dispatch(getSkillOptions());
    //   }
    // },[dispatch,projectTypeList,degreeList,skillOptions])
  
  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
    if (onTogglePassword) {
      onTogglePassword();
    }
  };




  const showCloseIcon = () => {
    if (invalidFieldRequired && error?.message) {
      return <IoCloseCircle />;
    }
  };


  return (
    <Form.Group className="mb-3">
      <Form.Label className="font-14 fw-medium form-label">{label}</Form.Label>
      <div className="position-relative">
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => {
            if (type === "radio") {
              <Form.Check
                {...field}
                label={label}
                type="radio"
                id="radio1"
                className={className}
                checked={field.value}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                }}
              />;
            }
            if (type === "checkbox") {
              return (
                <Form.Check
                  {...field}
                  type="checkbox"
                  id="radio1"
                  checked={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.checked);
                  }}
                />
              );
            } else if (type === "phone") {
              return (
                <>
                  <PhoneInput
                    defaultCountry="SE"
                    placeholder={placeholder}
                    value={field.value ? String(field.value) : ""}
                    onChange={field.onChange}
                    className="common-field"
                    inputProps={{
                      name: name,
                      readOnly: readOnly,
                      autoComplete: autoComplete,
                      className: `common-field ${
                        invalidFieldRequired &&
                        error?.message &&
                        "invalid-field"
                      }`,
                    }}
                  />
                  {showCloseIcon()}
                </>
              );
            } else if (type === "select2") {
              return (
                <>
                  <Select
                    {...field}
                    options={selectOptions}
                    className={`common-field ${
                      invalidFieldRequired && error?.message && "invalid-field"
                    } `}
                    isDisabled={readOnly}
                    onChange={(selectedOption) => 
                     { console.log('Selected value:', selectedOption)
                      field.onChange(selectedOption)
                    }
                    }
                    // value={selectOptions?.find(
                    //   (option) => option.value === field.value
                    // )}
                    // value={field.value ? field.value : selectedRecommend ? selectedRecommend : ''}
                    placeholder={placeholder}
                    isMulti={isMulti}
                  />
                  {showCloseIcon()}
                </>
              );
            } else if (type === "select") {
              return (
                <>
                  <Select
                    {...field}
                    options={selectOptions}
                    className={`common-field ${
                      invalidFieldRequired && error?.message && "invalid-field"
                    }`}
                    isDisabled={readOnly}
                    onChange={(selectedOption) =>
                      field.onChange(selectedOption)
                    }
                    value={selectOptions?.find(
                      (option) => option.value === field.value
                    )}
                    placeholder={placeholder}
                    isMulti={isMulti}
                  />
                  {showCloseIcon()}
                </>
              );
            } else if (type === "normal-select" && !isInputMode) {
              return (
                <>
                  <Form.Select
                    {...field}
                    className={`common-field ${
                      invalidFieldRequired && error?.message && "invalid-field"
                    }`}
                    // value={value}
                    // onChange={onChange}
                    onChange={(e) => {
                      if (e.target.value === "custom-input") {
                        handleSwitchToInput();
                      } else {
                        field.onChange(e.target.value);
                      }
                    }}
                    // value={field.value || ""}
                  >
                    
                  </Form.Select>
                  {showCloseIcon()}
                </>
              );
            } else if (type === "normal-select-size") {
              return (
                <>
                <Form.Select
                  {...field}
                  className={`common-field ${
                    invalidFieldRequired && error?.message && "invalid-field"
                  }`}
                  // value={value}
                  // onChange={onChange}
                >
                  <option disabled selected value="">
                    {defaultOption}
                  </option>
                  {options?.map(({ label, value }, idx) => (
                    <option key={idx} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
                {showCloseIcon()}
              </>
              );
            }
            
            else if (type === "normal-select" && isInputMode) {
              return (
                <>
                  <Form.Control
                    {...field}
                    type="text"
                    className={`common-field ${
                      invalidFieldRequired && error?.message && "invalid-field"
                    }`}
                  />
                  {showCloseIcon()}
                </>
              );
            }
            
            else if (type === "grouped-select") {
              return (
                <>
                  <Select
                    {...field}
                    className={`common-field ${
                      invalidFieldRequired && error?.message && "invalid-field"
                    }`}
                    // value={value}
                    // onChange={onChange}
                    options={options}
                  >
                    {/* <option disabled selected value="">
                      {defaultOption}
                    </option>
                    {options?.map(({ label, value }, idx) => (
                      <option key={idx} value={value}>
                        {label}
                      </option>
                    ))} */}
                  </Select>
                  {showCloseIcon()}
                </>
              );
            } else if (type === "multi-select" && name !== "tech_stacks_used") {
              return (
                <>
                  <Select
                    {...field}
                    options={options}
                    className={`common-field font-14 ${invalidFieldRequired && error?.message && "invalid-field"
                      }`}
                    // isDisabled={readOnly}
                    onChange={(selectedOption) => field.onChange(selectedOption)}
                    // value={options?.find(option => option.value === field.value)}
                    placeholder={placeholder}
                    isMulti={true}
                  />
                  {showCloseIcon()}
                </>
              );
            } else if (type === "multi-select" && name === "tech_stacks_used") {
              return (
                <>
                  <>
                  </>
                </>
              );
            }
            else if (type === "date") {
              return (
                <>
                  <Form.Control
                    {...field}
                    type="date"
                    className={`common-field ${
                      invalidFieldRequired && error?.message && "invalid-field"
                    }`}
                    // value={responseDate || ""}
                    // value={new Date(watch("response_date")).toISOString().split("T")[0]}
                    // if date should not be less than current date
                    min={
                      isMinRequired && new Date().toISOString().split("T")[0]
                    }
                    // if date should not be less than current date
                    max={
                      isMaxRequired && new Date().toISOString().split("T")[0]
                    }
                    disabled={disabled && name == "end_date"}
                  />
                  {showCloseIcon()}
                </>
              );
            } else if (type === "onlyNumber") {
              return (
                <>
                  <Form.Control
                    {...field}
                    type="text"
                    className={`common-field ${
                      invalidFieldRequired && error?.message && "invalid-field"
                    }`}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(
                        /[^0-9]/g,
                        ""
                      );
                      field.onChange(numericValue);
                    }}
                  />
                  {showCloseIcon()}
                </>
              );
            } else if (type === "time") {
              return (
                <Form.Control {...field} type="time" className="common-field" />
              );
            } else if (type === "textarea") {
              return (
                <>
                  <Form.Control
                    {...field}
                    as={type}
                    className={`common-field ${
                      invalidFieldRequired && error?.message && "invalid-field"
                    }`}
                    rows={3}
                  />
                  {showCloseIcon()}
                </>
              );
            } else if (type === "year-picker") {
              console.log(field.value, "this is field.value");
              return (
                <>
                </>
              );
            } else {
              return (
                <>
                  <Form.Control
                    {...field}
                    type={
                      isPassword
                        ? isPasswordVisible
                          ? "text"
                          : "password"
                        : type
                    }
                    className={`common-field ${
                      invalidFieldRequired && error?.message && "invalid-field"
                    }`}
                    // id='developer-image'
                    placeholder={placeholder}
                    readOnly={readOnly}
                    autoComplete={autoComplete}
                    onChange={
                      onChange ? (e) => onChange(e, field) : field.onChange
                    }
                    accept={accept}
                  />
                  {showCloseIcon()}
                </>
              );
            }
          }}
        />
        {isPassword && (
          <span
            className="eye-btn"
            onClick={handleTogglePassword}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          >
            {icon}
          </span>
        )}
      </div>
      {error && (
        <p
          className={`${
            invalidFieldRequired ? "field-error" : "error-message"
          }`}
        >
          {error.message}
        </p>
      )}
    </Form.Group>
  );
};

export default CommonInput;

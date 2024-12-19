import React from "react";
import { Col,Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import BuilderHeading from "./BuilderHeading";
import PasswordSection from "../resume-section/PasswordSection";
import CommonInput from "./CommonInput";
import ProfilePictureSection from "./ProfilePictureSection";
import LocationSection from "../resume-section/LocationSection";

const ResumeForm = ({
  register,
  control,
  errors,
  activeStep,
  setError,
  clearErrors,
  watch,
  setValue,
  isProfileSectionRequired,
  stepFields,
  stepData,
  setImageFile,

}) => {
  const { t } = useTranslation();

  let isStillWorking = watch("is_still_working");

  return (
    <>
      <Row>
        <Col md={12} className="px-md-3 px-0">
          {
            <BuilderHeading/>
          }
          <p className="font-12 req-text fw-medium" style={{ color: "#fff" }}>
            * includes a required field
          </p>
          <div className="d-md-flex align-items-start gap-3">
            {isProfileSectionRequired && (
              <>
              <ProfilePictureSection
               register={register}
               control={control}
               watch={watch}
               setValue={setValue}
               clearErrors={clearErrors}
               setImageFile={setImageFile}
            //    setPreviewImage={setPreviewImage}
            //    previewImage={previewImage}
               setError={setError}
            //    imageFile={imageFile}
               fieldName={"profile_picture"}
               errors={errors}
              />
              </>
            )}
            <Row className="w-100 mt-md-0 mt-4">
              {stepFields?.map(
                ({
                  label,
                  fieldName,
                  type,
                  rules,
                  placeholder,
                  columnWidth,
                  isRequired,
                  isPasswordSection,
                  isAutocomplete,
                  options,
                  isLocation,
                  defaultOption,
                  isMinRequired,
                  isMaxRequired,
                  readOnly,
                }) =>
                  isPasswordSection ? (
                    <></>
                  ) : isLocation ? (
                    <LocationSection
                      control={control}
                      errors={errors}
                      watch={watch}
                      setValue={setValue}
                      setError={setError}
                      invalidFieldRequired={true}
                      clearErrors={clearErrors}
                      isTimeZoneRequired={true}
                      isRegistrationStep={true}
                    />
                  ) : (
                    <Col md={columnWidth} className="pe-md-3 pe-0">
                      {isAutocomplete && <></>}
                      {!isAutocomplete && (
                        <div className="mb-3">
                          {isPasswordSection && (
                            <PasswordSection
                              control={control}
                              errors={errors}
                              setError={setError}
                              clearErrors={clearErrors}
                              watch={watch}
                              isColSixRequired={true}
                            />
                          )}

                          {!isPasswordSection && type !== "upload" ? (
                            <CommonInput
                              label={
                                t(`${label}`) + `${isRequired ? " *" : ""}`
                              }
                              name={fieldName}
                              control={control}
                              invalidFieldRequired={true}
                              rules={{ ...rules }}
                              error={errors?.[fieldName]}
                              type={type}
                              //get options
                              defaultOption={defaultOption}
                              placeholder={placeholder}
                              isMaxRequired={isMaxRequired}
                              disabled={isStillWorking}
                              isMinRequired={isMinRequired}
                              readOnly={readOnly ? true : false}
                              watch={watch}
                            />
                          ) : (
                            <></>
                          )}
                        </div>
                      )}
                    </Col>
                  )
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ResumeForm;

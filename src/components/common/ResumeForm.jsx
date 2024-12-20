import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import BuilderHeading from "./BuilderHeading";
import PasswordSection from "../resume-section/PasswordSection";
import CommonInput from "./CommonInput";
import ProfilePictureSection from "./ProfilePictureSection";
import LocationSection from "../resume-section/LocationSection";
import CommonAutocomplete from "./atomic/CommonAutoComplete";

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
  let GOOGLE_MAP_API_KEY=import.meta.env.VITE_APP_GOOGLE_MAP_API

  let isStillWorking = watch("is_still_working");

  return (
    <>
      <Row>
        <Col md={12} className="px-md-3 px-0">
          {<BuilderHeading />}
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
                      {isAutocomplete && (
                        <CommonAutocomplete
                          label={t(`${label}`) + `${isRequired && " *"}`}
                          name={fieldName}
                          control={control}
                          rules={{ ...rules }}
                          invalidFieldRequired={true}
                          error={errors?.[fieldName]}
                          apiKey={GOOGLE_MAP_API_KEY}
                          onPlaceSelected={async (place) => {
                            setValue(fieldName, place?.formatted_address);
                            // Extract ZIP code from address components

                            const addressComponents = place?.address_components;
                            const zipCodeObj = addressComponents?.find(
                              (component) =>
                                component.types.includes("postal_code")
                            );

                            const countryObj = addressComponents?.find(
                              (component) => component.types.includes("country")
                            );
                            const country = countryObj
                              ? countryObj.long_name
                              : null;
                            setValue(`country_code`, country);
                            const zipCode = zipCodeObj
                              ? zipCodeObj.long_name
                              : null;
                            setValue("passcode", zipCode);

                            console.log(zipCodeObj, "zipCodeObj");
                            console.log(place, "place");

                            const { lat, lng } = place.geometry.location;

                            // Call Google Timezone API to get the timezone
                            try {
                              const response = await fetch(
                                `https://maps.googleapis.com/maps/api/timezone/json?location=${lat()},${lng()}&timestamp=${Math.floor(
                                  Date.now() / 1000
                                )}&key=${GOOGLE_MAP_API_KEY}`
                              );
                              const data = await response.json();
                              if (data.status === "OK") {
                                const rawOffset = data.rawOffset; // Raw offset from the response (in seconds)
                                const dstOffset = data.dstOffset; // DST offset (in seconds)
                                const totalOffset = rawOffset + dstOffset; // Total offset (considering DST)

                                // Convert total offset from seconds to hours and minutes
                                const hours = Math.floor(totalOffset / 3600);
                                const minutes = Math.abs(
                                  (totalOffset % 3600) / 60
                                );

                                // Determine the UTC offset sign
                                const sign = hours >= 0 ? "+" : "-";

                                // Construct the formatted string
                                const utcOffsetString = `UTC ${sign}${Math.abs(
                                  hours
                                )}:${minutes === 0 ? "00" : minutes}`;

                                // Use the timeZoneId from the response (Asia/Calcutta) and combine it with the UTC offse
                                const timezone = data.timeZoneId;
                                const formattedResponse = `${timezone} ${utcOffsetString}`;
                                setValue("time_zone", formattedResponse);
                              } else {
                                console.error(
                                  "Error fetching timezone data: ",
                                  data.status
                                );
                              }
                            } catch (error) {
                              console.error(
                                "Error calling Google Timezone API: ",
                                error
                              );
                            }
                          }}
                          onChange={(e) => {
                            console.log(e.target.value, "vall");
                            setValue(fieldName, e.target.value);
                          }}
                          options={{
                            types: ["establishment", "geocode"],
                          }}
                        />
                      )}
                      
                      {!isAutocomplete && (
                        <div className="mb-3">
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

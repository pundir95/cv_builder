import { Col, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import CommonInput from "../common/CommonInput";

const LocationSection = ({
  isVendorStep1,
  setValue,
  watch,
  errors,
  control,
  clearErrors,
  isTimeZoneRequired = false,
  isRegistrationStep = false,
  countryCode
}) => {
  const { t } = useTranslation();
 
  return (
    <>
      {isRegistrationStep ? (
        <>
          <Col md={4} className="pe-md-3 pe-0">
            <div className="mb-3">
              {/* <CommonReactSelect
                name="country_code"
                errors={errors}
                invalidFieldRequired={true}
                handleChange={handleDropDownChange}
                watch={watch}
                control={control}
                required="Country is required"
                label="Country"
                type="country"
                options={countriesList}
              /> */}

               <CommonInput
                label={`County *`}
                name={"country_code"}
                invalidFieldRequired={true}
                control={control}
                rules={{ required: "Country is required"}}
                error={errors?.["country_code"]}
                placeholder={"e.g. USA"}
              />
            </div>
          </Col>
          {/* <Col md={4} className="pe-md-3 pe-0">
            <div className="mb-3">
              <CommonReactSelect
                name="state_iso_code"
                errors={errors}
                invalidFieldRequired={true}
                handleChange={handleDropDownChange}
                watch={watch}
                control={control}
                required="State is required"
                label="State"
                type="state"
                options={statesList}
              />
            </div>
          </Col> */}
          {/* <Col md={4} className="pe-md-3 pe-0">
            <div className="mb-3">
              <CommonReactSelect
                name="city"
                invalidFieldRequired={true}
                errors={errors}
                handleChange={handleDropDownChange}
                control={control}
                // required="City is required"
                label="City"
                type="city"
                watch={watch}
                options={citiesList}
              />
            </div>
          </Col> */}
          <Col md={4} className="pe-md-3 pe-0">
            <div className="mb-3">
              <CommonInput
                label={t(`pincode`) + ` *`}
                name={"passcode"}
                // name={isVendorStep1==="true" ? "post_code" : "passcode"}
                invalidFieldRequired={true}
                control={control}
                rules={{ required: "Pin code is required" }}
                error={errors?.["passcode"]}
                type={"onlyNumber"}
                placeholder={"e.g. 143001"}
              />
            </div>
          </Col>
          <Col md={4} className="pe-md-3 pe-0">
            {/* <CommonReactSelect
              name="time_zone"
              errors={errors}
              invalidFieldRequired={true}
              handleChange={handleDropDownChange}
              control={control}
              // required="City is required"
              value={suggestedTime}
              label="Timezone"
              type="timezones"
              required="Timezone is required"
              watch={watch}
              options={timeZoneState}
            /> */}

<CommonInput
                label={t(`TimeZone`) + ` *`}
                name={"time_zone"}
                // name={isVendorStep1==="true" ? "post_code" : "passcode"}
                invalidFieldRequired={true}
                control={control}
                rules={{ required: "Time Zone is required" }}
                error={errors?.["time_zone"]}
                placeholder={"Eg:Asia/Calcutta +5:30"}
              />
          </Col>
        </>
      ) : (
        <>
          

          
        </>
      )}
    </>
  );
};

export default LocationSection;

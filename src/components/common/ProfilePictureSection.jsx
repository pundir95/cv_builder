import React, { useEffect } from "react";
import { Col, Form } from "react-bootstrap";
import { IoCameraOutline, IoClose } from "react-icons/io5";
import demoImg from "../../assets/images/demo-img.jpg";
import { IMAGE_ALLOWED_EXTENSIONS } from "../../helper/utils";

const ProfilePictureSection = ({
  register,
  fieldName,
  previewImage,
  setPreviewImage,
  imageFile,
  watch,
  setImageFile,
  setValue,
  clearErrors,
  control,
  errors,
  setError,
}) => {
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (IMAGE_ALLOWED_EXTENSIONS.includes(file.type)) {
        const url = URL.createObjectURL(file);
        setPreviewImage({ ...previewImage, profile_picture: url });
        setImageFile({ ...imageFile, profile_picture: file });
        clearErrors(fieldName);
        setValue(fieldName,url)
      } else {
        setValue(fieldName, null);
        setError(fieldName, {
          type: "manual",
          message: "Please enter a valid image i.e png || jpeg || jpg || svg",
        });
        setPreviewImage(null);
      }
    }
  };

  return (
    <>
      <div className="profile-upload-preview position-relative mx-md-0 mx-auto">
        <div className="profile-img-preview w-100 h-100">
          <img
            src={
              
                demoImg
            }
          />
        </div>
        <Form.Group>
          <Form.Label className="font-14 fw-medium"></Form.Label>
          <Form.Control
              {...register("profile_picture", {
                required: previewImage?.profile_picture ? false : "Picture is required",
                onChange: (e) => handleImageChange(e),
              })}
              type="file"
              id="logo_file"
              // name={fieldName}
              placeholder="Company Name"
              className="common-field d-none"
            />
          <Form.Label htmlFor="logo_file" className="profile-img-label">
            <IoCameraOutline />
          </Form.Label>
          {errors[fieldName] && (
            <p className="field-error">{errors[fieldName]?.message}</p>
          )}
        </Form.Group>
      </div>
    </>
  );
};

export default ProfilePictureSection;
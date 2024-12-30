import React, { useRef } from 'react';
import { Controller } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Form } from 'react-bootstrap';
import { getPlainText, validateCharacterCount } from '../../../helper/utils';

const BuilderEditor = ({
  name,
  label,
  control,
  rules,
  handleChange,
  watch,
  errors,
  isRequired,
  ...props
}) => {
  const quillRef = useRef(null);
  return (
    <>
      <Form.Label>
        {label} {isRequired && <span className="text-red">*</span>}{' '}
      </Form.Label>
      <div id="custom-ck">
        <Controller
          name={name}
          control={control}
          rules={{
            ...rules,
            validate: value =>
              rules?.validate
                ? rules.validate(value)
                : validateCharacterCount(value, 200, 10000),
          }}
          render={({ field }) => (
            <ReactQuill
              {...field}
              ref={quillRef}
              value={watch(name)}
              theme="snow"
              onChange={html => {
                handleChange(html, field);
              }}
              {...props}
            />
          )}
        />
        <p className="text-end text-muted font-14">{`${
          getPlainText(watch(name))?.length
            ? getPlainText(watch(name)).length
            : 0
        }/10,000`}</p>
      </div>
      {errors && <p className={'error-message'}>{errors.message}</p>}
    </>
  );
};

export default BuilderEditor;

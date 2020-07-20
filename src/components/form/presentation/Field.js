import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const Field = ({
  label,
  placeHolder,
  inputType,
  icon,
  validity,
  onChange,
  onBlur,
  name,
  value,
}) => {

  return (
    <div className="field">
      <label className="label">
        {label}
      </label>
      <div
        className={`control has-icons-right ${icon && 'has-icons-left'}`}
      >
        <input
          data-name={name}
          className={`input ${validity.error && 'is-danger'}`}
          value={value}
          placeholder={placeHolder}
          type={inputType}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span className="icon is-left">
          {icon}
        </span>
        <span className="icon is-right">
          {validity.error && <FontAwesomeIcon icon={faExclamationTriangle} />}
        </span>
      </div>
      <p className="help is-danger">
        {validity.errorMsg || <>&nbsp;</>}
      </p>
    </div>
  );
};

export default Field;

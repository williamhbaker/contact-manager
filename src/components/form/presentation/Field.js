import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const renderRightErrorIcon = () => {
  return (
    <span className="icon is-small is-right">
      <FontAwesomeIcon icon={faExclamationTriangle} />
    </span>
  );
};

const renderLeftInputIcon = (icon) => { 
  return (
    <span className="icon is-small is-left">
      {true && icon}
    </span>
  );
};

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
      <label className="label">{label}</label>
      <div className={`control has-icons-right ${icon && 'has-icons-left'}`}>
        <input
          data-name={name}
          className={`input ${validity && validity.error && 'is-danger'}`}
          value={value}
          placeholder={placeHolder}
          type={inputType}
          onChange={onChange}
          onBlur={onBlur}
        />
        {icon && renderLeftInputIcon(icon)}
        {(validity && validity.error) && renderRightErrorIcon()}
      </div>
      <p className="help is-danger"></p>
    </div>
  );
};

export default Field;
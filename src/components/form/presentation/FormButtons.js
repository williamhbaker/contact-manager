import React from 'react';

const FormButtons = ({ onCancel, inProgress }) => (
  <div className="field is-grouped">
    <p className="control is-expanded">
      <button
        className={`button is-primary ${inProgress && 'is-loading'}`}
        style={{ width: '100%' }}
        type="submit"
      >
        Submit
      </button>
    </p>
    <p className="control is-expanded">
      <button
        type="button"
        className="button is-light"
        style={{ width: '100%' }}
        onClick={onCancel}
        disabled={inProgress}
      >
        Cancel
      </button>
    </p>
  </div>
);

export default FormButtons;

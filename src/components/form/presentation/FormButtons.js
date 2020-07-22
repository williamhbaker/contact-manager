import React from 'react';

const FormButtons = ({ onCancel }) => (
  <div className="field is-grouped">
    <p className="control is-expanded">
      <input
        className="button is-primary"
        style={{ width: '100%' }}
        type="submit"
      />
    </p>
    <p className="control is-expanded">
      <button
        type="button"
        className="button is-light"
        style={{ width: '100%' }}
        onClick={onCancel}
      >
        Cancel
      </button>
    </p>
  </div>
);

export default FormButtons;

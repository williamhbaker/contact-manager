import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const ContactCard = ({
  id,
  firstName,
  lastName,
  email,
  phone, 
}) => (
  <div className="card">
    <div className="card-content">
      <div className="content">
        <ul>
          <li><strong>First Name:</strong> {firstName}</li>
          <li><strong>Last Name:</strong> {lastName}</li>
          <li><strong>Email:</strong> {email}</li>
          <li><strong>Phone:</strong> {phone}</li>
        </ul>
      </div>
    </div>
    <footer className="card-footer">
      <button className="card-footer-item button is-info is-light">
        <span className="icon">
          <FontAwesomeIcon icon={faEdit} />
        </span>
        <span>Edit</span>
      </button>
      <button className="card-footer-item button is-danger is-light">
        <span className="icon">
          <FontAwesomeIcon icon={faTrash} />
        </span>
        <span>Delete</span>
      </button>
    </footer>
  </div>
);

export default ContactCard;
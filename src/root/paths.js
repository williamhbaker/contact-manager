import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye, faCog } from '@fortawesome/free-solid-svg-icons';

export default [
  {
    path: '/settings',
    text: 'App Settings',
    icon: <FontAwesomeIcon icon={faCog} />
  },
  {
    path: '/add',
    text: 'Add Contact',
    icon: <FontAwesomeIcon icon={faPlus} />
  },
  {
    path: '/contacts',
    text: 'View / Edit Contacts',
    icon: <FontAwesomeIcon icon={faEye} />
  }
];

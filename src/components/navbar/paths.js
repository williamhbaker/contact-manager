import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    path: '/add',
    text: 'Add Contact',
    icon: <FontAwesomeIcon icon={faPlus} />,
  },
  {
    path: '/contacts',
    text: 'View / Edit Contacts',
    icon: <FontAwesomeIcon icon={faEye} />,
  },
];

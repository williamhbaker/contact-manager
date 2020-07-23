import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default [
  {
    name: 'delay',
    placeHolder: '1500',
    inputType: 'text',
    label: 'Server Response Delay',
    icon: <FontAwesomeIcon icon={faClock} />,
    formatter: input => input.replace(/\D/g, '')
  }
];

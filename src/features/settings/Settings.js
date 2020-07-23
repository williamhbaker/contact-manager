import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  resetInitialLoadState,
  fetchContacts
} from 'features/contactManager/contactManagerSlice';
import * as api from 'api';

import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import FieldList from 'components/form/FieldList';
import settingsFields from './settingsFields';

const getFieldByName = (fields, name) => {
  const thisField = fields.find(f => f.name === name);
  return { ...thisField };
};

const Settings = () => {
  const dispatch = useDispatch();

  const initialFields = settingsFields.map(field => ({
    ...field,
    value: api.getCurrentDelay()
  }));
  const [fields, setFields] = useState(initialFields);

  const handleInputChange = event => {
    const thisName = event.target.dataset.name;
    const thisField = getFieldByName(settingsFields, thisName);
    const newVal = thisField.formatter
      ? thisField.formatter(event.target.value)
      : event.target.value;
    const newFields = fields.map(field =>
      Object.assign({}, field, { value: newVal })
    );
    setFields(newFields);
    api.setDelay(Number(newVal));
  };

  const handleResetClick = () => {
    const originalDelay = api.getCurrentDelay();
    api.setDelay(0);
    api.resetContacts();
    dispatch(resetInitialLoadState());
    dispatch(fetchContacts());
    api.setDelay(originalDelay);
  };

  return (
    <Section>
      <Container>
        <Header>Settings</Header>
        <FieldList fields={fields} onChange={handleInputChange} />
        <button className="button is-danger" onClick={handleResetClick}>
          Reset Contacts Data
        </button>
      </Container>
    </Section>
  );
};

export default Settings;

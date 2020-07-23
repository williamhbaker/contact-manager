import { createStore } from 'redux'

import contactManagerReducer, {
  addContact,
  receiveContacts,
  removeContact,
  updateContact,
} from './contactManagerSlice';
import { v4 as uuidv4 } from 'uuid';

const contactSorter = (a, b) => a.firstName.localeCompare(b.firstName);

const demoContacts = [
  {
    id: uuidv4(),
    firstName: 'Frank',
    lastName: 'Zappa'
  },
  {
    id: uuidv4(),
    firstName: 'Bob',
    lastName: 'Dole'
  }
].sort(contactSorter);

describe('contactManagerReducer', () => {
  let store;

  beforeEach(() => {
    store = createStore(contactManagerReducer);
  });

  test('should handle initial empty state', () => {
    const storedContacts = Object.values(store.getState().entities)
    expect(
      storedContacts
    ).toEqual([]);
  });

  test('should handle receiveContacts', () => {
    store.dispatch(receiveContacts(demoContacts));
    const storedContacts = Object.values(store.getState().entities)

    expect(
      storedContacts
    ).toEqual(demoContacts);
  });

  test('should handle addContact', () => {
    store.dispatch(addContact(demoContacts[0]));
    let storedContacts = Object.values(store.getState().entities)

    expect(
      storedContacts
    ).toEqual([demoContacts[0]]);

    // all another contact and there should now be two
    store.dispatch(addContact(demoContacts[1]));
    storedContacts = Object.values(store.getState().entities)

    expect(
      storedContacts
    ).toEqual([demoContacts[0], demoContacts[1]]);
  });

  describe('test for populated reducer', () => {
    beforeEach(() => {
      store.dispatch(receiveContacts(demoContacts));
    });

    test('should handle removeContact', () => {
      let storedContacts = Object.values(store.getState().entities)

      expect(
        storedContacts
      ).toContain(demoContacts[0]);

      store.dispatch(removeContact(demoContacts[0].id));
      storedContacts = Object.values(store.getState().entities)

      expect(
        storedContacts
      ).not.toContain(demoContacts[0]);
    });

    test('should handle updateContact', () => {
      const changes = { firstName: 'Changed' };
      const updatedContact = Object.assign({}, demoContacts[0], changes);

      const payload = {
        id: updatedContact.id,
        changes,
      };

      store.dispatch(updateContact(payload));

      const storedContacts = Object.values(store.getState().entities)

      expect(
        storedContacts
      ).toContainEqual(updatedContact);
    });

  });
});

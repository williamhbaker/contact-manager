import contacts, {
  addContact,
  deleteContact,
  modifyContact
} from './contactsSlice';
import { v4 as uuidv4 } from 'uuid';

describe('contacts reducer', () => {
  const contact1 = {
    id: uuidv4(),
    firstName: 'Bob',
    lastName: 'Dole'
  };

  const contact2 = {
    id: uuidv4(),
    firstName: 'Bill',
    lastName: 'Clinton'
  };

  test('should handle initial empty state', () => {
    expect(contacts(undefined, {})).toEqual([]);
  });

  test('should handle contacts/addContact', () => {
    expect(contacts([], addContact(contact1))).toEqual([contact1]);

    expect(contacts([contact1], addContact(contact2))).toEqual([
      contact1,
      contact2
    ]);
  });

  describe('test for populated reducer', () => {
    const initialState = [contact1, contact2];

    test('should handle contacts/deleteContact', () => {
      expect(
        contacts(initialState, deleteContact({ id: initialState[0].id }))
      ).toEqual(initialState.slice(1));
    });

    test('should handle contacts/modifyContact', () => {
      const newContactData = { ...initialState[0], firstName: 'Changed' };

      expect(contacts(initialState, modifyContact(newContactData))).toEqual([
        newContactData,
        contact2
      ]);
    });
  });
});

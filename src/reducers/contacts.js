const contact = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        phone: action.phone,
      };
    case 'MODIFY_CONTACT':
      return {
        ...state,
        ...action.newData,
      };
    default:
      return state;
  }
};

const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, contact(undefined, action)];
    case 'DELETE_CONTACT':
      return state.filter(c => c.id !== action.id);
    case 'MODIFY_CONTACT':
      return state.map(c => action.id === c.id ? contact(c, action) : c);
    default:
      return state;
  }
};

export default contacts;
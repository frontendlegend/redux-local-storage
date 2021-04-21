const formCollected = (state = {}, action) => {
  switch (action.type) {
    case 'COLLECT_FORM':
      return {
        ...state,
        name: action.name,
        surname: action.surname,
        city: action.city,
        phone: action.phone,
        email: action.email
      }
    default:
      return state;
  }
};

export default formCollected;
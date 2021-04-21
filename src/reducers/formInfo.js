const formCollected = (state = {}, action) => {
  switch (action.type) {
    case 'COLLECT_FORM':
      return {
        ...state,
        email: action.email
      }
    default:
      return state;
  }
};

export default formCollected;
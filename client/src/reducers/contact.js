import { SEND_CONTACT_FORM } from '../constants/actionTypes';

const contactReducer = (state = { authData: null }, action) => {
  switch (action.type) {

    case SEND_CONTACT_FORM:
      return { ...state, formData: action.data, loading: false, errors: null };

    default:
      return state;
  };
};

export default contactReducer;
import { SEND_CONTACT_FORM } from '../constants/actionTypes';

const contactReducer = (state = { notification : "" }, action) => {
  switch (action.type) {

    case SEND_CONTACT_FORM:
      return { ...state, notification: action.data, loading: false, errors: null };

    default:
      return state;
  };
};

export default contactReducer;
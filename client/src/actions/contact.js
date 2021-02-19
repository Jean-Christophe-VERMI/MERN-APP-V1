import { SEND_CONTACT_FORM } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const sendContactForm = (formData) => async (dispatch) => {
  try {
    const { data } = await api.sendContactForm(formData);
    dispatch({ type: SEND_CONTACT_FORM, data });

  } catch (error) {
    console.log(error);
  }
};
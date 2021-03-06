import { FETCH_ARTICLE, CREATE_ARTICLE, DELETE_ARTICLE } from '../constants/actionTypes';
import * as api from '../api';

export const getArticles = () => async (dispatch) => {
  try {
    const { data } = await api.fetchArticles();
    dispatch({type: FETCH_ARTICLE, payload: data});

  } catch (error) {
    console.log(error.message);
  }
}

export const createArticle = (url) => async (dispatch) => {
  try {
    console.log(url);
    const { data } = await api.createArticle(url);
    dispatch({type: CREATE_ARTICLE, payload: data});

  } catch (error) {
    console.log(error.message);
  }
}

export const deleteArticle = (id) => async (dispatch) => {
  try {
    await api.deleteArticle(id);
    dispatch({ type: DELETE_ARTICLE, payload: id });

  } catch (error) {
    console.log(error.message);
  }
};
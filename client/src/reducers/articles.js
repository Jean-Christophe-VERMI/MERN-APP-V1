/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ARTICLE, CREATE_ARTICLE, DELETE_ARTICLE } from '../constants/actionTypes';

export default (articles = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLE:
      return action.payload;
    case CREATE_ARTICLE:
      return [...articles, action.payload];
    case DELETE_ARTICLE:
      return articles.filter((article) => article._id !== action.payload);
    default:
      return articles;
  }
};
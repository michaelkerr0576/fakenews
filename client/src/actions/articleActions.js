import {
  GET_ARTICLES,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
  ARTICLES_LOADING,
} from "./actionTypes";

export const getArticles = () => {
  return {
    type: GET_ARTICLES,
  };
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    payload: article,
  };
};

export const updateArticle = (index, article) => {
  return {
    type: UPDATE_ARTICLE,
    payload: { index, article },
  };
};

export const deleteArticle = (id) => {
  return {
    type: DELETE_ARTICLE,
    payload: id,
  };
};

export const setArticlesLoading = () => {
  return {
    type: ARTICLES_LOADING,
  };
};

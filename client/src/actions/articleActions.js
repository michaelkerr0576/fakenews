import axios from "axios";
import {
  GET_ARTICLES,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
  ARTICLES_LOADING,
  RESET_HEADLINES,
} from "./actionTypes";

export const getArticles = () => (dispatch) => {
  dispatch(setArticlesLoading());
  axios.get(process.env.REACT_APP_URL + "/articles").then((res) =>
    dispatch({
      type: GET_ARTICLES,
      payload: res.data.Articles,
    })
  );
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

export const resetHeadlines = (type) => {
  return {
    type: RESET_HEADLINES,
    payload: type,
  };
};

export const setArticlesLoading = () => {
  return {
    type: ARTICLES_LOADING,
  };
};

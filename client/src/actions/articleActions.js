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
      payload: res.data,
    })
  );
};

export const addArticle = (article) => (dispatch) => {
  axios.post(process.env.REACT_APP_URL + "/articles", article).then((res) =>
    dispatch({
      type: ADD_ARTICLE,
      payload: res.data,
    })
  );
};

export const updateArticle = (index, article) => {
  return {
    type: UPDATE_ARTICLE,
    payload: { index, article },
  };
};

export const deleteArticle = (id) => (dispatch) => {
  axios.delete(process.env.REACT_APP_URL + "/articles/" + id).then((res) =>
    dispatch({
      type: DELETE_ARTICLE,
      payload: id,
    })
  );
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

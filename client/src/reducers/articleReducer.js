import {
  GET_ARTICLES,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
  RESET_ARTICLES,
  RESET_HEADLINES,
  ARTICLES_LOADING,
} from "../actions/actionTypes";

const initialState = {
  articles: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload.Articles,
        loading: false,
      };
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [action.payload.newArticle, ...state.articles],
      };
    case UPDATE_ARTICLE:
      return {
        ...state,
        articles: state.articles.map((article, i) =>
          i !== action.payload.index ? article : action.payload.article
        ),
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article._id !== action.payload
        ),
      };
    case RESET_ARTICLES:
      return {
        ...state,
        articles: action.payload.Articles,
        loading: false,
      };
    case RESET_HEADLINES:
      // checking which headline reset to false
      switch (action.payload) {
        case "isHeadline1":
          return {
            ...state,
            articles: state.articles.map((article, i) =>
              article.isHeadline1 === true
                ? { ...article, isHeadline1: false }
                : article
            ),
          };
        case "isHeadline2":
          return {
            ...state,
            articles: state.articles.map((article, i) =>
              article.isHeadline2 === true
                ? { ...article, isHeadline2: false }
                : article
            ),
          };
        case "isHeadline3":
          return {
            ...state,
            articles: state.articles.map((article, i) =>
              article.isHeadline3 === true
                ? { ...article, isHeadline3: false }
                : article
            ),
          };
        default:
          return state;
      }
    case ARTICLES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

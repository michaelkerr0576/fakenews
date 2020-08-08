import {
  GET_ARTICLES,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
  RESET_HEADLINES,
  ARTICLES_LOADING,
  SORT_BY_LATEST,
  SORT_BY_OLDEST,
  REMOVE_FILTERS,
  FILTER_BY_SEARCH,
  FILTER_BY_SECTION,
} from "../actions/actionTypes";

const initialState = {
  articles: [],
  mutableArticles: [],
  appliedFilters: [],
  searchValue: "",
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      let getArticlesState = action.payload.Articles;
      return {
        ...state,
        articles: getArticlesState,
        mutableArticles: getArticlesState,
        loading: false,
      };
    case ADD_ARTICLE:
      let addArticleState = [action.payload.newArticle, ...state.articles];
      return {
        ...state,
        articles: addArticleState,
        mutableArticles: addArticleState,
      };
    case UPDATE_ARTICLE:
      let updateArticleState = state.articles.map((article, i) =>
        i !== action.payload.index ? article : action.payload.article
      );
      return {
        ...state,
        articles: updateArticleState,
        mutableArticles: updateArticleState,
      };
    case DELETE_ARTICLE:
      let deleteArticleState = state.articles.filter(
        (article) => article._id !== action.payload
      );
      return {
        ...state,
        articles: deleteArticleState,
        mutableArticles: deleteArticleState,
      };
    case RESET_HEADLINES:
      let headline1State = state.articles.map((article, i) =>
        article.isHeadline1 === true
          ? { ...article, isHeadline1: false }
          : article
      );
      let headline2State = state.articles.map((article, i) =>
        article.isHeadline2 === true
          ? { ...article, isHeadline2: false }
          : article
      );
      let headline3State = state.articles.map((article, i) =>
        article.isHeadline3 === true
          ? { ...article, isHeadline3: false }
          : article
      );
      // checking which headline reset to false
      switch (action.payload) {
        case "isHeadline1":
          return {
            ...state,
            articles: headline1State,
            mutableArticles: headline1State,
          };
        case "isHeadline2":
          return {
            ...state,
            articles: headline2State,
            mutableArticles: headline2State,
          };
        case "isHeadline3":
          return {
            ...state,
            articles: headline3State,
            mutableArticles: headline3State,
          };
        default:
          return state;
      }
    case ARTICLES_LOADING:
      return {
        ...state,
      };
    case SORT_BY_LATEST:
      let sortLatestState = state.articles.sort((a, b) => {
        let dateA = new Date(a.datetime);
        let dateB = new Date(b.datetime);
        if (dateA < dateB) {
          return 1;
        } else if (dateA > dateB) {
          return -1;
        } else {
          return 0;
        }
      });
      console.log("sortByLatest:", [...state.articles]);
      return {
        ...state,
        articles: sortLatestState,
        mutableArticles: sortLatestState,
      };
    case SORT_BY_OLDEST:
      let sortOldestState = state.articles.sort((a, b) => {
        let dateA = new Date(a.datetime);
        let dateB = new Date(b.datetime);
        if (dateA < dateB) {
          return -1;
        } else if (dateA > dateB) {
          return 1;
        } else {
          return 0;
        }
      });
      console.log("sortByOldest:", [...state.articles]);
      return {
        ...state,
        articles: sortOldestState,
        mutableArticles: sortOldestState,
      };
    case REMOVE_FILTERS:
      return {
        ...state,
      };
    case FILTER_BY_SEARCH:
      console.log("FilterArticlesBy: " + action.payload);
      //clone the state
      let newState = Object.assign({}, state);
      let value = action.payload;
      let appliedFilters = state.appliedFilters;
      let filteredValues = state.articles.filter((article) => {
        return (
          article.title.toLowerCase().includes(value.toLowerCase()) ||
          article.subtitle.toLowerCase().includes(value.toLowerCase()) ||
          article.body.toLowerCase().includes(value.toLowerCase()) ||
          article.author.toLowerCase().includes(value.toLowerCase()) ||
          article.section.toLowerCase().includes(value.toLowerCase()) ||
          article.datetime.toLowerCase().includes(value.toLowerCase())
        );
      });
      if (value) {
        //check if the filter already exists in the tracking array. if it doesn’t, add it.
        let index = appliedFilters.indexOf(FILTER_BY_SEARCH);
        if (index === -1) appliedFilters.push(FILTER_BY_SEARCH);
        //change the filtered articles and value to reflect the change
        newState.mutableArticles = filteredValues;
        newState.searchValue = value;
      } else {
        //if the value is empty, we can assume everything has been erased and remove current filter
        let index = appliedFilters.indexOf(FILTER_BY_SEARCH);
        appliedFilters.splice(index, 1);
        if (appliedFilters.length === 0) {
          //if there are no filters applied, reset the articles to normal.
          newState.mutableArticles = newState.articles;
          newState.searchValue = value;
        }
      }
      return newState;
    case FILTER_BY_SECTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}

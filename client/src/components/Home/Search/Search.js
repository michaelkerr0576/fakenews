import React, { Component } from "react";
import { Input } from "reactstrap";
import { connect } from "react-redux";
import { filterBySearch } from "../../../actions/articleActions";
import PropTypes from "prop-types";

class ArticleSearch extends Component {
  onFilterBySearch = (value) => {
    this.props.filterBySearch(value);
  };

  onChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    this.onFilterBySearch(value);
  };

  render() {
    const { searchValue } = this.props.article;

    return (
      <Input
        placeholder="SEARCH..."
        onChange={this.onChange}
        value={searchValue}
        className="c-button c-select bg-white"
      />
    );
  }
}

ArticleSearch.propTypes = {
  filterBySearch: PropTypes.func.isRequired,
};

const mapSateToProps = (state) => ({
  article: state.article,
});

const mapDispatchToProps = {
  filterBySearch,
};

export default connect(mapSateToProps, mapDispatchToProps)(ArticleSearch);

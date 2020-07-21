import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { resetArticles } from "../../../actions/articleActions";
import PropTypes from "prop-types";

class AdminResetArticles extends Component {
  onResetArticles = () => {
    this.props.resetArticles();
  };

  render() {
    return (
      <div>
        <Button
          className="c-button c-select c-buttonDarkGray"
          onClick={() => {
            this.onResetArticles();
          }}
        >
          <i className="fas fa-redo-alt mr-2"></i>RESET ARTICLES
        </Button>
      </div>
    );
  }
}

AdminResetArticles.propTypes = {
  resetArticles: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  resetArticles,
};

export default connect(null, mapDispatchToProps)(AdminResetArticles);

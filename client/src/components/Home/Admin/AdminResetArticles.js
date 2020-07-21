import React, { Component } from "react";
import { Button } from "reactstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
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
            confirmAlert({
              customUI: ({ onClose }) => {
                return (
                  <div className="c-confirmAlert">
                    <h2>
                      <u>CONFIRM</u>
                    </h2>
                    <h5>
                      <b>For Demo Purposes: </b>Are you sure you want to reset
                      articles? Articles you have added will be lost.
                    </h5>
                    <Button
                      className="c-button c-select c-buttonDarkGray mt-3"
                      block
                      onClick={() => {
                        this.onResetArticles();
                        onClose();
                      }}
                    >
                      Yes<i className="far fa-check-circle fa-lg ml-1"></i>
                    </Button>
                    <Button
                      className="c-button c-select c-buttonDarkGray"
                      block
                      onClick={onClose}
                    >
                      No<i className="far fa-times-circle fa-lg ml-1"></i>
                    </Button>
                  </div>
                );
              },
            });
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

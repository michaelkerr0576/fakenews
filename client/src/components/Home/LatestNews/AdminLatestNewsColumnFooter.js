import React, { Component, useState } from "react";
import { Row, Col, Button, CardFooter, Tooltip } from "reactstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { connect } from "react-redux";
import {
  updateArticle,
  deleteArticle,
  resetHeadlines,
} from "../../../actions/articleActions";
import PropTypes from "prop-types";
import uuid from "react-uuid";

//Importiong Components
import AdminUpdateArticleModal from "../Modals/AdminUpdateArticleModal";

class AdminLatestNewsColumnFooter extends Component {
  state = {
    modal: false,
    isHeadline1: this.props.article.isHeadline1,
    isHeadline2: this.props.article.isHeadline2,
    isHeadline3: this.props.article.isHeadline3,
    headlineName: "",
  };

  onSetHeadline = (name) => {
    switch (name) {
      case "isHeadline1":
        return this.setState({
          isHeadline1: !this.state.isHeadline1,
          isHeadline2: false,
          isHeadline3: false,
          headlineName: "isHeadline1",
        });
      case "isHeadline2":
        return this.setState({
          isHeadline1: false,
          isHeadline2: !this.state.isHeadline2,
          isHeadline3: false,
          headlineName: "isHeadline2",
        });
      case "isHeadline3":
        return this.setState({
          isHeadline1: false,
          isHeadline2: false,
          isHeadline3: !this.state.isHeadline3,
          headlineName: "isHeadline3",
        });
      default:
        return false;
    }
  };

  onSubmitHeadline = () => {
    const newArticle = {
      _id: this.props.article._id,
      title: this.props.article.title,
      subtitle: this.props.article.subtitle,
      body: this.props.article.body,
      author: this.props.article.author,
      section: this.props.article.section,
      datetime: this.props.article.datetime,
      isHeadline1: this.state.isHeadline1,
      isHeadline2: this.state.isHeadline2,
      isHeadline3: this.state.isHeadline3,
    };
    // console.log(newArticle);
    this.props.updateArticle(this.props.articleIndex, newArticle);
  };

  onResetHeadline = () => {
    this.props.resetHeadlines(this.state.headlineName);
  };

  onUpdateArticle = () => {
    return this.setState({
      modal: !this.state.modal,
    });
  };

  onDeleteArticle = () => {
    this.props.deleteArticle(this.props.article._id);
  };

  render() {
    const { articleIndex, article } = this.props;
    const { modal } = this.state;

    return (
      <div>
        {/* ADMIN - Rendered if user is logged in - Conditional rendering of Update Modal */}
        {modal ? (
          <AdminUpdateArticleModal
            modal={modal}
            articleIndex={articleIndex}
            article={article}
            onUpdateArticle={this.onUpdateArticle}
            onSetHeadline={this.onSetHeadline}
          />
        ) : (
          false
        )}

        {/* ADMIN - Rendered if user is logged in */}
        <CardFooter className="c-crosshatch">
          <Row>
            <Col xs="auto mr-auto">
              <>
                {[
                  {
                    id: uuid(),
                    placement: "top",
                    text: "H1",
                    tooltip: "Make Headline 1",
                    name: "isHeadline1",
                    title: "Headline 1",
                    group: "headlineGroup",
                    margin: "mr-sm-1",
                  },
                  {
                    id: uuid(),
                    placement: "top",
                    text: "H2",
                    tooltip: "Make Headline 2",
                    name: "isHeadline2",
                    title: "Headline 2",
                    group: "headlineGroup",
                    margin: "mr-sm-1",
                  },
                  {
                    id: uuid(),
                    placement: "top",
                    text: "H3",
                    tooltip: "Make Headline 3",
                    name: "isHeadline3",
                    title: "Headline 3",
                    group: "headlineGroup",
                    margin: "mr-sm-0",
                  },
                ].map((button, i) => {
                  return (
                    <FooterAdminButton
                      key={i}
                      id={i.id}
                      button={button}
                      article={article}
                      onSetHeadline={this.onSetHeadline}
                      onResetHeadline={this.onResetHeadline}
                      onSubmitHeadline={this.onSubmitHeadline}
                    />
                  );
                })}
              </>
            </Col>
            <Col xs="auto">
              <>
                {[
                  {
                    id: uuid(),
                    placement: "top",
                    text: "",
                    tooltip: "Update Article",
                    name: "updateArticle",
                    group: "editGroup",
                    margin: "ml-sm-0",
                  },
                  {
                    id: uuid(),
                    placement: "top",
                    text: "",
                    tooltip: "Delete Article",
                    name: "deleteArticle",
                    group: "editGroup",
                    margin: "ml-sm-1",
                  },
                ].map((button, i) => {
                  return (
                    <FooterAdminButton
                      key={i}
                      id={i}
                      button={button}
                      article={article}
                      onUpdateArticle={this.onUpdateArticle}
                      onDeleteArticle={this.onDeleteArticle}
                    />
                  );
                })}
              </>
            </Col>
          </Row>
        </CardFooter>
      </div>
    );
  }
}

const FooterAdminButton = (props) => {
  const {
    button,
    article,
    onSetHeadline,
    onResetHeadline,
    onSubmitHeadline,
    onUpdateArticle,
    onDeleteArticle,
  } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const onToggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <span>
      <Button
        id={"Tooltip-" + button.id}
        className={
          button.button +
          " c-button c-select c-buttonDarkGray my-1 my-lg-0 mx-0 " +
          button.margin +
          " p-1 p-sm-2"
        }
        onClick={() => {
          switch (button.name) {
            case "isHeadline1":
            case "isHeadline2":
            case "isHeadline3":
              return confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <div className="c-confirmAlert">
                      <h2>
                        <u>CONFIRM</u>
                      </h2>
                      <h5>Toggle {button.title}?</h5>
                      <Button
                        className="c-button c-select c-buttonDarkGray mt-3"
                        block
                        onClick={() => {
                          // async await to execute efectively execute functions one after the other
                          const onConfirm = async () => {
                            let data = await onSetHeadline(button.name);
                            data = await onResetHeadline();
                            data = await onSubmitHeadline();
                            data = await onClose();
                            return data;
                          };
                          return onConfirm();
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
            case "updateArticle":
              return onUpdateArticle();
            case "deleteArticle":
              return confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <div className="c-confirmAlert">
                      <h2>
                        <u>CONFIRM</u>
                      </h2>
                      <h5>Are you sure you want to delete this article?</h5>
                      <Button
                        className="c-button c-select c-buttonDarkGray mt-3"
                        block
                        onClick={() => {
                          // async await to execute efectively execute functions one after the other
                          const onConfirm = async () => {
                            let data = await onDeleteArticle();
                            data = await onClose();
                            return data;
                          };
                          return onConfirm();
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
            default:
              return false;
          }
        }}
      >
        {button.text}
        {(() => {
          switch (button.group) {
            // HEADLINE GROUP - 1, 2 & 3
            case "headlineGroup":
              switch (button.name) {
                case "isHeadline1":
                  return (
                    <span>
                      {article.isHeadline1 === true && (
                        <i className="fas fa-star fa-lg p-0 pl-sm-1"></i>
                      )}
                      {article.isHeadline1 === false && (
                        <i className="far fa-star fa-lg p-0 pl-sm-1"></i>
                      )}
                    </span>
                  );
                case "isHeadline2":
                  return (
                    <span>
                      {article.isHeadline2 === true && (
                        <i className="fas fa-star fa-lg p-0 pl-sm-1"></i>
                      )}
                      {article.isHeadline2 === false && (
                        <i className="far fa-star fa-lg p-0 pl-sm-1"></i>
                      )}
                    </span>
                  );
                case "isHeadline3":
                  return (
                    <span>
                      {article.isHeadline3 === true && (
                        <i className="fas fa-star fa-lg p-0 pl-sm-1"></i>
                      )}
                      {article.isHeadline3 === false && (
                        <i className="far fa-star fa-lg p-0 pl-sm-1"></i>
                      )}
                    </span>
                  );
                default:
                  return null;
              }
            // EDIT GROUP - Update & Delete
            case "editGroup":
              switch (button.name) {
                case "updateArticle":
                  return (
                    <span>
                      <i className="far fa-edit fa-lg p-0 px-1"></i>
                    </span>
                  );
                case "deleteArticle":
                  return (
                    <span>
                      <i className="far fa-trash-alt fa-lg p-0 px-1"></i>
                    </span>
                  );
                default:
                  return null;
              }
            default:
              return null;
          }
        }).call(this)}
      </Button>
      <Tooltip
        placement={button.placement}
        isOpen={tooltipOpen}
        target={"Tooltip-" + button.id}
        toggle={onToggle}
      >
        {button.tooltip}
      </Tooltip>
    </span>
  );
};

AdminLatestNewsColumnFooter.propTypes = {
  updateArticle: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  resetHeadlines: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  updateArticle,
  deleteArticle,
  resetHeadlines,
};

export default connect(null, mapDispatchToProps)(AdminLatestNewsColumnFooter);

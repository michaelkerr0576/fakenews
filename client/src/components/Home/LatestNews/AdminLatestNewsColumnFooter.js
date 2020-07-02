import React, { Component, useState } from "react";
import { Row, Col, Button, CardFooter, Tooltip } from "reactstrap";
import { connect } from "react-redux";
import { deleteArticle } from "../../../actions/articleActions";
import PropTypes from "prop-types";
import uuid from "react-uuid";

//Importiong Components
import AdminUpdateArticleModal from "../Modals/AdminUpdateArticleModal";

class AdminLatestNewsColumnFooter extends Component {
  state = {
    modal: false,
    id: this.props.article.id,
    isHeadline1: this.props.article.isHeadline1,
    isHeadline2: this.props.article.isHeadline2,
    isHeadline3: this.props.article.isHeadline3,
  };

  onSetHeadline = (name) => {
    switch (name) {
      case "isHeadline1":
        return this.setState({
          isHeadline1: !this.state.isHeadline1,
          isHeadline2: false,
          isHeadline3: false,
        });
      case "isHeadline2":
        return this.setState({
          isHeadline1: false,
          isHeadline2: !this.state.isHeadline2,
          isHeadline3: false,
        });
      case "isHeadline3":
        return this.setState({
          isHeadline1: false,
          isHeadline2: false,
          isHeadline3: !this.state.isHeadline3,
        });
      default:
        return false;
    }
  };

  onUpdateArticle = () => {
    return this.setState({
      modal: !this.state.modal,
    });
  };

  onDeleteArticle = () => {
    this.props.deleteArticle(this.state.id);
  };

  render() {
    const { articleIndex, article } = this.props;
    const isUpdateActive = this.state.modal;

    return (
      <div>
        {/* ADMIN - Rendered if user is logged in - Conditional rendering of Update Modal */}
        {isUpdateActive ? (
          <AdminUpdateArticleModal
            modal={this.state.modal}
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
                    group: "headlineGroup",
                    margin: "mr-sm-1",
                  },
                  {
                    id: uuid(),
                    placement: "top",
                    text: "H2",
                    tooltip: "Make Headline 2",
                    name: "isHeadline2",
                    group: "headlineGroup",
                    margin: "mr-sm-1",
                  },
                  {
                    id: uuid(),
                    placement: "top",
                    text: "H3",
                    tooltip: "Make Headline 3",
                    name: "isHeadline3",
                    group: "headlineGroup",
                    margin: "mr-sm-0",
                  },
                ].map((button, i) => {
                  return (
                    <FooterAdminButton
                      key={i}
                      id={i.id}
                      button={button}
                      state={this.state}
                      onSetHeadline={this.onSetHeadline}
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
                      state={this.state}
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
    state,
    onSetHeadline,
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
              return onSetHeadline(button.name);
            case "updateArticle":
              return onUpdateArticle();
            case "deleteArticle":
              return onDeleteArticle();
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
                      {state.isHeadline1 === true && (
                        <i className="fas fa-star fa-lg p-0 pl-sm-1"></i>
                      )}
                      {state.isHeadline1 === false && (
                        <i className="far fa-star fa-lg p-0 pl-sm-1"></i>
                      )}
                    </span>
                  );
                case "isHeadline2":
                  return (
                    <span>
                      {state.isHeadline2 === true && (
                        <i className="fas fa-star fa-lg p-0 pl-sm-1"></i>
                      )}
                      {state.isHeadline2 === false && (
                        <i className="far fa-star fa-lg p-0 pl-sm-1"></i>
                      )}
                    </span>
                  );
                case "isHeadline3":
                  return (
                    <span>
                      {state.isHeadline3 === true && (
                        <i className="fas fa-star fa-lg p-0 pl-sm-1"></i>
                      )}
                      {state.isHeadline3 === false && (
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
  deleteArticle: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  deleteArticle,
};

export default connect(null, mapDispatchToProps)(AdminLatestNewsColumnFooter);

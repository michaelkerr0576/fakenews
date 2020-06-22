import React, { Component, useState } from "react";
import {
  Col,
  Button,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Tooltip,
} from "reactstrap";
import { connect } from "react-redux";
import { addArticle, updateArticle } from "../../../actions/articleActions";
import PropTypes from "prop-types";
import uuid from "react-uuid";

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

class AdminModalForm extends Component {
  state = {
    type: this.props.type,
    modal: this.props.modal,
    articleIndex: this.props.articleIndex,
    id: this.props.article.id,
    title: this.props.article.title,
    subtitle: this.props.article.subtitle,
    body: this.props.article.body,
    author: this.props.article.author,
    section: this.props.article.section,
    datetime: this.props.article.datetime,
    isHeadline1: this.props.article.isHeadline1,
    isHeadline2: this.props.article.isHeadline2,
    isHeadline3: this.props.article.isHeadline3,
    headlineName: "",
    errors: this.props.errors,
    onToggleParent: this.props.onToggleParent,
    onSetHeadlineParent: this.props.onSetHeadlineParent,
  };

  onToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
    this.state.onToggleParent();
  };

  onSetHeadline = (name) => {
    switch (name) {
      case "isHeadline1":
        this.setState({
          isHeadline1: !this.state.isHeadline1,
          isHeadline2: false,
          isHeadline3: false,
          headlineName: "isHeadline1",
        });
        break;
      case "isHeadline2":
        this.setState({
          isHeadline1: false,
          isHeadline2: !this.state.isHeadline2,
          isHeadline3: false,
          headlineName: "isHeadline2",
        });
        break;
      case "isHeadline3":
        this.setState({
          isHeadline1: false,
          isHeadline2: false,
          isHeadline3: !this.state.isHeadline3,
          headlineName: "isHeadline3",
        });
        break;
      default:
        return false;
    }
  };

  onChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "title":
        errors.title = value.length < 1 ? "Article title is required!" : "";
        break;
      case "subtitle":
        errors.subtitle =
          value.length < 1 ? "Article subtitle is required!" : "";
        break;
      case "body":
        errors.body = value.length < 1 ? "Article body is required!" : "";
        break;
      case "author":
        errors.author = value.length < 1 ? "Article author is required!" : "";
        break;
      case "section":
        errors.section = value.length < 1 ? "Article section is required!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const newArticle = {
      // if in add article modal create new id, else take existing id for update article modal
      id: this.state.type === "addArticle" ? uuid() : this.state.id,
      title: this.state.title,
      subtitle: this.state.subtitle,
      body: this.state.body,
      author: this.state.author,
      section: this.state.section,
      // if in update article modal take existing datetime, else create new datetime
      datetime:
        this.state.type === "updateArticle"
          ? this.state.datetime
          : new Date().toLocaleString(),
      isHeadline1: this.state.isHeadline1,
      isHeadline2: this.state.isHeadline2,
      isHeadline3: this.state.isHeadline3,
    };
    if (validateForm(this.state.errors)) {
      console.info("Valid " + this.state.type + " Form");
      console.log(newArticle);
      // Add or update article via actions
      const isType = this.state.type;
      const headlineName = this.state.headlineName;
      if (isType === "addArticle") {
        this.props.addArticle(newArticle);
      } else if (isType === "updateArticle") {
        this.props.updateArticle(this.state.articleIndex, newArticle);
        // Set Footer Headlines
        this.state.onSetHeadlineParent(headlineName);
      } else {
        return null;
      }
      // Close modal
      this.onToggle();
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const isType = this.state.type;
    let submitBtnType;
    if (isType === "addArticle") {
      submitBtnType = (
        <span>
          <i className="fas fa-plus mr-2"></i>ADD ARTICLE
        </span>
      );
    } else if (isType === "updateArticle") {
      submitBtnType = (
        <span>
          <i className="far fa-edit mr-2"></i>UPDATE ARTICLE
        </span>
      );
    } else {
      submitBtnType = <span>SUBMIT</span>;
    }
    const { errors } = this.state;

    return (
      <div>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            {/* Author and Section Input */}
            <FormGroup row>
              <Col sm={6}>
                <Label for="articleAuthor">Author:</Label>
                <Input
                  type="text"
                  name="author"
                  id="articleAuthor"
                  placeholder="..."
                  onChange={this.onChange}
                  value={this.state.author}
                  className="c-select c-selectBorder"
                  required
                ></Input>
              </Col>
              <Col sm={6}>
                <Label for="articleSection">Section:</Label>
                <Input
                  type="select"
                  name="section"
                  id="articleSection"
                  onChange={this.onChange}
                  value={this.state.section}
                  className="c-select c-selectBorder"
                  required
                >
                  <option value="">...</option>
                  <option value="Sport">SPORT</option>
                  <option value="Business">BUSINESS</option>
                  <option value="Opinion">OPINION</option>
                  <option value="Lifestyle">LIFESTYLE</option>
                  <option value="Culture">CULTURE</option>
                </Input>
              </Col>
            </FormGroup>
            {/* Make Headline Buttons */}
            <FormGroup row className="my-4">
              <Col xs="auto mx-auto">
                <>
                  {[
                    {
                      id: 1,
                      placement: "top",
                      text: "Headline 1",
                      tooltip: "Make Headline 1",
                      name: "isHeadline1",
                    },
                    {
                      id: 2,
                      placement: "top",
                      text: "Headline 2",
                      tooltip: "Make Headline 2",
                      name: "isHeadline2",
                    },
                    {
                      id: 3,
                      placement: "top",
                      text: "Headline 3",
                      tooltip: "Make Headline 3",
                      name: "isHeadline3",
                    },
                  ].map((button, i) => {
                    return (
                      <MakeHeadlineButton
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
            </FormGroup>
            <div className="c-crosshatch m-4 pb-1"></div>
            {/* Title Input */}
            <FormGroup>
              <Label for="articleTitle">Title:</Label>
              <Input
                type="textarea"
                name="title"
                id="articleTitle"
                placeholder="..."
                onChange={this.onChange}
                value={this.state.title}
                autoComplete="off"
                className="c-select c-selectBorder"
                required
              ></Input>
            </FormGroup>
            {/* Subtitle Input */}
            <FormGroup>
              <Label for="articleSubtitle">Subtitle:</Label>
              <Input
                type="textarea"
                rows="4"
                name="subtitle"
                id="articleSubtitle"
                placeholder="..."
                onChange={this.onChange}
                value={this.state.subtitle}
                autoComplete="off"
                className="c-select c-selectBorder"
                required
              />
            </FormGroup>
            {/* Body Input */}
            <FormGroup>
              <Label for="articleBody">Body:</Label>
              <Input
                type="textarea"
                rows="15"
                name="body"
                id="articleBody"
                placeholder="..."
                onChange={this.onChange}
                value={this.state.body}
                autoComplete="off"
                className="c-select c-selectBorder"
                required
              />
            </FormGroup>
            {/* Submit Button */}
            <FormGroup className="my-1">
              <div className="c-crosshatch border pb-1"></div>
              <Button block className="c-button c-select c-buttonDarkGray">
                {submitBtnType}
              </Button>
              <div className="c-crosshatch border pb-1"></div>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <ul className="text-secondary">
            {errors.author.length > 0 && <li>{errors.author}</li>}
            {errors.section.length > 0 && <li>{errors.section}</li>}
            {errors.title.length > 0 && <li>{errors.title}</li>}
            {errors.subtitle.length > 0 && <li>{errors.subtitle}</li>}
            {errors.body.length > 0 && <li>{errors.body}</li>}
          </ul>
        </ModalFooter>
      </div>
    );
  }
}

const MakeHeadlineButton = (props) => {
  const { button, state, onSetHeadline } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const onToggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <span>
      <Button
        name={button.name}
        id={"Tooltip-" + button.id}
        className={"c-button c-select c-buttonDarkGray m-1"}
        onClick={() => {
          onSetHeadline(button.name);
        }}
      >
        {button.text}
        {(() => {
          switch (button.name) {
            case "isHeadline1":
              return (
                <span>
                  {state.isHeadline1 === true && (
                    <i className="fas fa-star fa-lg pl-1"></i>
                  )}
                  {state.isHeadline1 === false && (
                    <i className="far fa-star fa-lg pl-1"></i>
                  )}
                </span>
              );
            case "isHeadline2":
              return (
                <span>
                  {state.isHeadline2 === true && (
                    <i className="fas fa-star fa-lg pl-1"></i>
                  )}
                  {state.isHeadline2 === false && (
                    <i className="far fa-star fa-lg pl-1"></i>
                  )}
                </span>
              );
            case "isHeadline3":
              return (
                <span>
                  {state.isHeadline3 === true && (
                    <i className="fas fa-star fa-lg pl-1"></i>
                  )}
                  {state.isHeadline3 === false && (
                    <i className="far fa-star fa-lg pl-1"></i>
                  )}
                </span>
              );
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

AdminModalForm.propTypes = {
  addArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addArticle,
  updateArticle,
};

export default connect(null, mapDispatchToProps)(AdminModalForm);

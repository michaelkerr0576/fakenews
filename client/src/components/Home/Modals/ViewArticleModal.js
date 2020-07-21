import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

//Importiong Components
import HeadlineDetails from "../Headlines/HeadlineDetails";

class ViewArticleModal extends Component {
  state = {
    modal: this.props.modal,
  };

  onToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
    this.props.onToggleParent();
  };

  render() {
    const { article } = this.props;
    const { modal } = this.state;

    return (
      <div>
        <Modal
          isOpen={modal}
          toggle={this.onToggle}
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <ModalHeader toggle={this.onToggle}>
            <div className="mt-3">
              <div className="c-headlineBlockBorder"></div>
              <div className="c-headlineBlock mb-2"></div>
              <h2>{article.title}</h2>
            </div>
          </ModalHeader>
          <div className="c-crosshatch border pb-1"></div>
          <ModalBody>
            <div className="mt-2">
              <h3 className="mb-3 pb-3 border-bottom">{article.subtitle}</h3>
              <p>
                {article.body.split("\n").map(function (paragraph, idx) {
                  return (
                    <span key={idx}>
                      {paragraph}
                      <br />
                      <br />
                    </span>
                  );
                })}
              </p>
              <HeadlineDetails
                author={article.author}
                section={article.section}
                datetime={article.datetime}
              />
            </div>
          </ModalBody>
          <div className="c-crosshatch border pb-1"></div>
        </Modal>
      </div>
    );
  }
}

export default ViewArticleModal;

import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

//Importiong Components
import HeadlineDetails from "../Headlines/HeadlineDetails";

class ViewArticleModal extends Component {
  state = {
    modal: false,
  };

  onToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    const { headline } = this.props;
    
    return (
      <div className="text-center">
        <Button className="c-button c-select" onClick={this.onToggle}>
          READ MORE ...
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.onToggle}
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <ModalHeader toggle={this.onToggle}>
            <div className="mt-3">
              <div className="c-headlineBlockBorder"></div>
              <div className="c-headlineBlock mb-2"></div>
              <h2>{headline.title}</h2>
            </div>
          </ModalHeader>
          <div className="c-crosshatch border pb-1"></div>
          <ModalBody>
            <div className="mt-2">
              <h3 className="mb-3 pb-3 border-bottom">{headline.subtitle}</h3>
              <p>
                {headline.body.split("\n").map(function (paragraph, idx) {
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
                author={headline.author}
                section={headline.section}
                datetime={headline.datetime}
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

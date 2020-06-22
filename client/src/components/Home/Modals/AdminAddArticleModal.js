import React, { Component } from "react";
import { Button, Modal, ModalHeader } from "reactstrap";

//Importiong Components
import AdminModalForm from "./AdminModalForm";

class AdminAddArticleModal extends Component {
  state = {
    modal: false,
    title: "",
    subtitle: "",
    body: "",
    author: "",
    section: "",
    datetime: "",
    isHeadline1: false,
    isHeadline2: false,
    isHeadline3: false,
    errors: {
      title: "Article title is required!",
      subtitle: "Article subtitle is required!",
      body: "Article body is required!",
      author: "Article author is required!",
      section: "Article section is required!",
    },
  };

  onToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div>
        <Button
          className="c-button c-select c-buttonDarkGray"
          onClick={this.onToggle}
        >
          <i className="fas fa-plus mr-2"></i>ADD ARTICLE
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.onToggle}
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <ModalHeader toggle={this.onToggle}>
            <span className="lead">ADD ARTICLE</span>
          </ModalHeader>
          <div className="c-crosshatch border pb-1"></div>
          <AdminModalForm
            type="addArticle"
            modal={this.state.modal}
            errors={this.state.errors}
            article={this.state}
            onToggleParent={this.onToggle}
          />
        </Modal>
      </div>
    );
  }
}

export default AdminAddArticleModal;

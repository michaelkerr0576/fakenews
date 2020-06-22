import React, { Component } from "react";
import { Modal, ModalHeader } from "reactstrap";

//Importiong Components
import AdminModalForm from "./AdminModalForm";

class AdminUpdateArticleModal extends Component {
  state = {
    modal: this.props.modal,
    errors: {
      title: "",
      subtitle: "",
      body: "",
      author: "",
      section: "",
    },
    onUpdateArticle: this.props.onUpdateArticle,
  };

  onToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
    this.state.onUpdateArticle();
  };

  render() {
    const { articleIndex, article, onSetHeadline } = this.props;

    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.onToggle}
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <ModalHeader toggle={this.onToggle}>
            <span className="lead">UPDATE ARTICLE</span>
          </ModalHeader>
          <div className="c-crosshatch border pb-1"></div>
          <AdminModalForm
            type="updateArticle"
            modal={this.state.modal}
            errors={this.state.errors}
            articleIndex={articleIndex}
            article={article}
            onToggleParent={this.onToggle}
            onSetHeadlineParent={onSetHeadline}
          />
        </Modal>
      </div>
    );
  }
}

export default AdminUpdateArticleModal;

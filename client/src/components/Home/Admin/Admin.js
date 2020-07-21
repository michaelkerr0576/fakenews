import React from "react";
import { Row, Col } from "reactstrap";

//Importiong Components
import AdminAddArticleModal from "../Modals/AdminAddArticleModal";
import AdminResetArticles from "./AdminResetArticles";

const Admin = (props) => {
  return (
    <div>
      <Row className="c-crosshatch border px-2 py-2">
        <Col xs="auto" className="pr-1">
          <AdminAddArticleModal />
        </Col>
        <Col xs="auto" className="pl-1">
          <AdminResetArticles />
        </Col>
      </Row>
    </div>
  );
};

export default Admin;

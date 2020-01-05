import React, { useState } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col
} from "reactstrap";

function TopValueBtn(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const btnStyle = {
    paddingLeft: "30px",
    paddingRight: "30px"
  };

  return (
    <div>
      <Col>
        <Button size="sm" color={props.color} onClick={toggle} style={btnStyle}>
          {props.value}
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{props.value}</ModalHeader>
          <ModalBody>{props.description}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Edit
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Col>
    </div>
  );
}

export default TopValueBtn;

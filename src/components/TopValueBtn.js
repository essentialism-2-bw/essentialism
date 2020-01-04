import React, { useState } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function TopValueBtn(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        color={props.color}
        onClick={toggle}
        style={{ marginRight: "35px" }}
      >
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
    </div>
  );
}

export default TopValueBtn;

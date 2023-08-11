import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";

const ModalComponent = ({ modalTitle, modalContent, modalWidth }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <span
        type="button"
        className="custom-tooltip-btn2 green-2 text-white rounded-2 ms-2"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Create"
        onClick={handleOpenModal}
      >
        <AiOutlinePlus />
      </span>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        id="customModal"
        tabIndex="-1"
        aria-labelledby="customModalLabel"
        aria-hidden="true"
        dialogClassName={`custom-modal-dialog ${modalWidth}`}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="customModalLabel"
            className="fs-6 p-1"
            style={{ fontWeight: "600" }}
          >
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn bg-light-gray"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button type="submit" className="btn green-2 text-white mx-2">
            Create
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;

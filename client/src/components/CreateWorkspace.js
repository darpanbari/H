import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlinePlusCircle } from "react-icons/ai";

const TopHeaderModal = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <Button
        className="btn green-1 h-100 top-btn-hw text-black shadow-sm custom-radius d-flex align-items-center"
        variant=""
        onClick={handleShow}
      >
        <AiOutlinePlusCircle className="me-2 green-1" />
        <span className="custom-title font-size-15">Create Workspace</span>
      </Button>

      <Modal className="custom-shadow" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">Create New Workspace</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Workspace Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button" 
            className="btn bg-light-gray border-0 text-black"
            onClick={handleClose} 
          >
            Cancel
          </Button>
          <Button
            type="submit" 
            className="btn green-2 text-white mx-2 border-0"
            onClick={handleSubmit}  
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TopHeaderModal;

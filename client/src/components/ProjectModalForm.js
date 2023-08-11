import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { HiPlus } from "react-icons/hi";
import {GiArtificialIntelligence} from "react-icons/gi";

const MyVerticallyCenteredModal = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Description:", description);
    console.log("User:", user);

    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className=""
    >
      <Modal.Header closeButton className="">
        <Modal.Title id="contained-modal-title-vcenter" style={{fontSize:"20px"}}>
          Create New Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="">
          <button
            className="btn btn-success d-flex align-items-center ms-auto border-0 fw-bold"
            style={{ backgroundColor: "#6FD943" }}
            type="submit"
            onClick={handleSubmit}
          >
            <GiArtificialIntelligence className="fw-bold me-1 fs-5 text-white" />
            Generate With AI
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Project Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              placeholder="Add Description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="user" className="form-label">
              Users
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Select Users"
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="text-end">
            <button type="submit" className="btn bg-light-gray">
              Cancel
            </button>
            <button type="submit" className="btn green-2 text-white mx-2">
              Create
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const ProjectModalForm = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className="fs-5 custom-radius"
        variant="success"
        onClick={() => setModalShow(true)}
      >
        <HiPlus />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ProjectModalForm;

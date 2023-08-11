import React, { useState, useEffect } from "react";
import SideNavbar from "../components/SideNavbar";
import AdminProfileLogout from "../components/AdminProfileLogout";
import HeaderMessageBox from "../components/HeaderMessageBox";
import LanguageBtn from "../components/LanguageBtn";
import TopHeaderModal from "../components/CreateWorkspace";
import AdminSelectBtn from "../components/AdminInfotechBtn";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import UseTooltip from "../components/useTooltip";
import { Col, Row, Table } from "react-bootstrap";
import axios from "axios";

const DepartAndDesign = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  UseTooltip();

  // department
  const [department, setDepartment] = useState([]);
  const [departName, setDepartName] = useState("");

  const handleAddDepartment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3030/department/add-department",
        {
          departName,
        }
      );

      if (response.data.success) {
        alert(response.data.message);
      } else {
        alert("Department Creation Failed");
      }
      setDepartName("");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const getDepartment = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/department/get-department"
      );
      if (data) {
        setDepartment(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDepartment();
  }, []);

   // designation
   const [designation, setDesignation] = useState([]);
   const [designName, setDesignName] = useState("");
 
   const handleAddDesignation = async (e) => {
     e.preventDefault();
     try {
       const response = await axios.post(
         "http://localhost:3030/designation/add-designation",
         {
           designName,
         }
       );
 
       if (response.data.success) {
         alert(response.data.message);
       } else {
         alert("Designation Creation Failed");
       }
       setDesignName("");
       window.location.reload();
     } catch (error) {
       console.error(error);
       alert("Something went wrong");
     }
   };
 
   const getDesignation = async () => {
     try {
       const { data } = await axios.get(
         "http://localhost:3030/designation/get-designation"
       );
       if (data) {
         setDesignation(data.data);
       }
     } catch (error) {
       console.log(error);
     }
   };

  useEffect(() => {
    getDesignation();
  }, []);

  return (
    <>
      <div className="display-side d-flex">
        <div style={{ width: "0px" }}>
          <SideNavbar />
        </div>

        <div className="d-flex flex-column flex-grow-1 right-container">
          {/* Top Header Start */}
          <div className="d-flex justify-content-between">
            <div className=" my-auto ms-4 p-1 d-flex ">
              <AdminProfileLogout />
            </div>
            <div className="my-3 me-4 d-flex header-4btn-width">
              <div>
                <HeaderMessageBox />
              </div>
              <div className="ms-3">
                <TopHeaderModal />
              </div>
              <div className="mx-3">
                <AdminSelectBtn />
              </div>
              <div className=" my-auto bg-white shadow-sm custom-radius d-flex">
                <LanguageBtn />
              </div>
            </div>
          </div>
          {/* Top Header End*/}

          <div className="d-flex justify-content-between flex-col2">
            <div className="mt-4 mb-2 ms-4">
              <h5 className="mb-0">All Department / Designation</h5>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a
                      href="/dashboard/sales-dashboard"
                      className="text-decoration-none green-1"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-secondary"
                    aria-current="page"
                  >
                    Depart/Design
                  </li>
                </ol>
              </nav>
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white ms-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Add Department"
                onClick={handleShow}
              >
                <AiOutlinePlus />
              </span>
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white ms-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Add Designation"
                onClick={handleShow2}
              >
                <AiOutlinePlus />
              </span>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="fs-5 fw-600">Department</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="department">
                    <Form.Label>Add Department</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add New Department"
                      value={departName}
                      onChange={(e) => setDepartName(e.target.value)}
                      autoFocus
                    />
                  </Form.Group>
                  <Button
                    onClick={handleAddDepartment}
                    className="btn green-2 d-flex align-items-center mx-auto border-0"
                  >
                    <span className="d-flex align-items-center me-1">
                      <BsBoxArrowInRight />
                    </span>
                    <span>Submit</span>
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
              <Modal.Header closeButton>
                <Modal.Title className="fs-5 fw-600">Designation</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="department">
                    <Form.Label>Add Designation</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add New Designation"
                      value={designName}
                      onChange={(e) => setDesignName(e.target.value)}
                      autoFocus
                    />
                  </Form.Group>
                  <Button onClick={handleAddDesignation} className="btn green-2 d-flex align-items-center mx-auto border-0">
                    <span className="d-flex align-items-center me-1">
                      <BsBoxArrowInRight />
                    </span>
                    <span>Submit</span>
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </div>

          <div>
            <div className="border-4 py-4 mx-4 mb-4 bg-custom-white custom-border-radius custom-shadow scroller-div">
              <Row>
                <Col md={6} className="px-5">
                  <Table bordered hover className="depart-design-table ps-5">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>DEPARTMENT NAME</th>
                      </tr>
                    </thead>
                    <tbody>
                      {department.map((depart, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{depart.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
                <Col md={6} className="px-5">
                  <Table bordered hover className="depart-design-table ">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>DESIGNATION NAME</th>
                      </tr>
                    </thead>
                    <tbody>
                      {designation.map((design, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{design.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartAndDesign;

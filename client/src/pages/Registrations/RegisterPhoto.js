import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import TopHeaderModal from "../../components/CreateWorkspace";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import { HiArrowSmRight } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";

const RegisterPhoto = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedType2, setSelectedType2] = useState("");
  const [id, setId] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showId, setShowId] = useState(false);

  const handleGetDetailsClick = () => {
    setShowId(true);
  };

  return (
    <>
      <div className="display-side d-flex">
        <div style={{ width: "0px" }}>
          <SideNavbar />
        </div>

        <div className="d-flex flex-column flex-grow-1 right-container">
          {/* Top Header Start */}
          <div className="d-flex justify-content-between">
            <div className="my-auto ms-4 p-1 d-flex">
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

          <div className="mt-4 ms-4 support-breadcrumb-margin">
            <h5 className="mb-0">Resister Photo</h5>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <a href="/dashboard" className="text-decoration-none green-1">
                    Home
                  </a>
                </li>

                <li
                  className="breadcrumb-item text-secondary"
                  aria-current="page"
                >
                  Register Photo
                </li>
              </ol>
            </nav>
          </div>
          <Form className="my-form p-5 mx-4 form-input-width custom-border-radius mt-3 custom-shadow bg-custom-white">
            <h6>Add Employee Photo</h6>
            <p className="text-secondary font-size-12">
              Fill the form below to Add Employee Photo
            </p>
            <Row>
              <Col md={6}>
                <div className="d-flex">
                  <div className="mb-3 w-50 me-4">
                    <Form.Control
                      type="number"
                      placeholder="Enter Id"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
                  <Button
                    onClick={handleGetDetailsClick}
                    className="btn green-2 shadow-sm d-flex justify-content-center py-0 mb-3 w-50 px-4 d-flex font-size-14 align-items-center border-0"
                  >
                    <span className="d-flex align-items-center me-2">
                      <HiArrowSmRight />
                    </span>
                    <span>Get Details</span>
                  </Button>
                </div>
                <div className="d-flex">
                  <div className="mb-3 w-50 me-4">
                    <Form.Label>Select Face Type</Form.Label>
                    <Form.Select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <option value="Front">Front</option>
                      <option value="Left">Left</option>
                      <option value="Right">Right</option>
                      <option value="Up">Up</option>
                      <option value="Down">Down</option>
                    </Form.Select>
                  </div>

                  <div className="mb-3 w-50">
                    <Form.Label>Select Image Type*</Form.Label>
                    <Form.Select
                      value={selectedType2}
                      onChange={(e) => setSelectedType2(e.target.value)}
                    >
                      
                      <option value="Png">Png</option>
                      <option value="Jpg">Jpg</option>
                      <option value="Jpeg">Jpeg</option>
                    </Form.Select>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <Card className="w-100 green-2 h-100 border-0 me-4">
                  <Card.Body className="p-4 text-white">
                    <div className="mx-2">
                      <h6 className="my-2">DEVELOPER DEVELOPER</h6>
                      <p className="mt-2 font-size-14 text-light-gray2">
                        ADMIN/ ADMIN
                      </p>
                    </div>
                    <div className="d-flex">
                      <div className="mx-2">
                        {showId ? (
                          <div className="me-2">
                            <h6>{id}</h6>
                          </div>
                        ):("----")}
                        <p className="mt-2 font-size-14 text-light-gray2">
                          Employee ID
                        </p>
                      </div>
                      <div className="mx-2">
                        <h6>De-Activate</h6>
                        <p className="mt-2 font-size-14 text-light-gray2">
                          Geo-Fencing
                        </p>
                      </div>
                      <div className="mx-2">
                        <h6>REGULAR</h6>
                        <p className="mt-2 font-size-14 text-light-gray2">
                          Status
                        </p>
                      </div>
                      <div className="mx-2">
                        <h6>1234567890</h6>
                        <p className="mt-2 font-size-14 text-light-gray2">
                          Aadhar Card Number
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <h6 className="text-danger">
                  PLEASE ONLY SELECT FACE IMAGE [ONLY FACE] !!
                </h6>
                <div className="d-flex">
                  <div className="my-4">
                    <p className="font-size-14 mb-1">Add Down Side Photo*</p>
                    <input
                      type="file"
                      onChange={(e) => setSelectedImage(e.target.files[0])}
                    />
                  </div>
                  <div className="text-center">
                    <img alt="img"
                      src={selectedType === "Front"
                      ? "/front.png"
                      : selectedType === "Left"
                      ? "/left.png"
                      : selectedType === "Right"
                      ? "/right.png"
                      : selectedType === "Up"
                      ? "/up.png"
                      : selectedType === "Down"
                      ? "/down.png"
                      : "/front.png"
                    
                    }
                      className="p-3 border border-1"
                      style={{ height: "130px", width: "130px" }}
                    />
                  </div>
                </div>
              </Col>
              <Col className="d-flex align-items-end justify-content-center">
                <div>
                  {selectedImage ? (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      className="p-1 border border-1"
                      style={{ height: "130px", width: "130px" }}
                      alt="img"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </Col>
              <Col className="d-flex align-items-end justify-content-center">
                <Button className="btn green-2  shadow-sm my-4 w-100 py-2 px-4 d-flex font-size-14 align-items-center justify-content-center border-0">
                  <span className="d-flex align-items-center me-2">
                    <AiFillPlusCircle />
                  </span>
                  <span>Down</span>
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterPhoto;

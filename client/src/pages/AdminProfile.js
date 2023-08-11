import React, { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import { Form } from "react-bootstrap";
import AdminProfileLogout from "../components/AdminProfileLogout";
import HeaderMessageBox from "../components/HeaderMessageBox";
import LanguageBtn from "../components/LanguageBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopHeaderModal from "../components/CreateWorkspace";
import AdminSelectBtn from "../components/AdminInfotechBtn";

const AdminProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAttachment("");
    console.log(name, email, attachment);
  };

  return (
    <>
      <div className="display-side d-flex">
      <div style={{width:"0px"}}>
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
                <TopHeaderModal/>
              </div>
              <div className="mx-3">
                <AdminSelectBtn/>
              </div>
              <div className=" my-auto bg-white shadow-sm custom-radius d-flex">
                <LanguageBtn />
              </div>
            </div>
          </div>
          {/* Top Header End*/}

          <div className="mt-4 ms-4 support-breadcrumb-margin">
            <h5 className="mb-0">Edit Profile (Admin)</h5>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-1">
                  <li className="breadcrumb-item">
                    <a
                      href="/dashboard"
                      className="text-decoration-none green-1"
                    >
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item  green-1" aria-current="page">
                    <a href="/users" className="text-decoration-none green-1">
                      Users
                    </a>
                  </li>
                  <li className="breadcrumb-item text-secondary" aria-current="page">
                    Edit
                  </li>
                </ol>
              </nav>
          </div>
          <Form className="my-form p-5 mx-4 form-input-width custom-border-radius mt-3 custom-shadow bg-custom-white">
            <div className="d-flex">
              <div className="mb-3 w-50 me-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3 w-50">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="d-flex">
              <div className="mb-3 w-50 me-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Set an account password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3 w-50">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm account password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Row>
                <Col md={4} sm={12}>
                  <div>
                    <Form.Label>Picture</Form.Label>
                    <p>
                      Please upload a valid image file. Size of image should not
                      be more than 2MB.
                    </p>
                  </div>
                  <div className="mb-3 w-75">
                    <Form.Label>Choose File Hear</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) => setAttachment(e.target.files[0])}
                    />
                  </div>
                </Col>
                <Col md={4} sm={12}>
                  <img
                    src="/user1.png"
                    style={{ height: "150px", width: "150px" }}
                  />
                </Col>
                <Col md={4} sm={12}>
                
                </Col>
              </Row>
              <Row className="my-4">
                <button className="btn green-2 py-2 text-white ms-auto" style={{width:"110px"}}>Update</button>
              </Row>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;

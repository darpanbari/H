import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(email, password);
  };

  return (
    <>
      <div className=" position-relative">
        <div className="d-flex justify-content-center align-items-center">
          <Navbar
            collapseOnSelect
            expand="lg"
            className="bg-white w-75 mx-auto position-absolute custom-border-radius custom-shadow py-1 px-2"
            style={{
              top: "3.5%",
            }}
          >
            <Navbar.Brand
              href="#home"
              className="green-1 fw-bold fs-3 pe-2 pb-0 mb-2"
            >
              H A A J R I
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav2" className="navbar-toggler2"/>
            <Navbar.Collapse id="responsive-navbar-nav2">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="/tickets/create" className="my-auto fw-bold text-center">
                  Create Ticket
                </Nav.Link>
                <Nav.Link href="/faq" className="my-auto green-1 text-center">
                  FAQ
                </Nav.Link>
                <Nav.Link href="#" className="my-auto green-1 text-center">
                  Knowledge
                </Nav.Link>
                <Nav.Link href="#" className="my-auto green-1 text-center">
                  Search Ticket
                </Nav.Link>
                {/* <NavDropdown
                  title="English"
                  className="m-0 green-2 flex-column px-5 text-white py-1 text-center login-lang-btn"
                  id="collasible-nav-dropdown"
                  style={{ color: "white !important" }}
                >
                  <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Marathi
                  </NavDropdown.Item>
                </NavDropdown> */}
                <label className="text-center login-lang-btn">
                <select className="green-2 ms-2 px-5 rounded-2 text-white text-center py-2 me-1 rounded-2 border border-1">
                  <option value="english">English</option>
                  <option value="marathi">Marathi</option>
                  <option value="hindi">Hindi</option>
                  <option value="gujrati">Gujrati</option>
                </select>
              </label>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div style={{ overflow: "hidden" }}>
          <Row className="p-0 m-0" style={{ background: "#F9FBFA" }}>
            {/* left container */}
            <Col
              className="d-flex flex-column justify-content-center p-0"
              lg={{ span: 6 }}
              md={{ span: 12 }}
              style={{ height: "100vh", overflowY: "auto" }}
            >
              <Form
                className="mx-auto loginForm-margin"
                style={{ width: "320px" }}
                onSubmit={handleLogin}
              >
                <h3 className="">Login</h3>
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="mb-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Text className="text-muted font-size-12">
                    Forgot password?
                  </Form.Text>
                </Form.Group>

                <Button href="/dashboard/sales-dashboard" variant="primary mb-2 py-2 green-2 w-100 border-0" type="submit">
                  Login
                </Button>
                <div className="d-flex my-3">
                  <Button
                    className="me-2 font-size-12"
                    style={{padding:"10px 0px"}}
                    variant="primary green-2 w-50 border-0"
                    type="submit"
                  >
                    Admin Login
                  </Button>
                  <Button
                    className="ms-2 font-size-12"
                    style={{padding:"10px 0px"}}
                    variant="primary green-2 w-50 border-0"
                    type="submit"
                  >
                    Agent Login
                  </Button>
                </div>
              </Form>
              
            </Col>
            

            {/* right container*/}
            <Col
              className="d-flex login-right-container justify-content-center align-items-center mx-auto my-3"
              lg={{ span: 6 }}
              md={{ span: 12 }}
            >
              <div className="green-2 h-100 w-100 rounded-4 d-flex flex-column justify-content-center align-items-center">
                <div>
                  <img
                    src="back.png"
                    alt="img"
                  />
                </div>
                <div className="text-center w-75">
                  <h3 className="text-white">
                    "Attention is the new currency"
                  </h3>
                  <p className="text-white">
                    The more effortless the writing looks, the more effort the
                    writer actually put into the process.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <p className="mx-auto copyright text-secondary position-absolute" style={{bottom:"40px", left:"270px"}}>@Copyright HAAJRI 2023</p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

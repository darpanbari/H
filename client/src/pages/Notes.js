import React from "react";
import SideNavbar from "../components/SideNavbar";
import { AiOutlinePlus } from "react-icons/ai";
import AdminProfileLogout from "../components/AdminProfileLogout";
import HeaderMessageBox from "../components/HeaderMessageBox";
import LanguageBtn from "../components/LanguageBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SalesCardMenuBar from "../components/SalesCardMenuBar";
import TopHeaderModal from "../components/CreateWorkspace";
import AdminSelectBtn from "../components/AdminInfotechBtn";
import UseTooltip from "../components/useTooltip";

const Notes = () => {
  UseTooltip();
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

          <div className="d-flex flex-col2 justify-content-between">
            <div className="mt-4 mb-2 ms-4">
              <h5 className="mb-0">Notes</h5>
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
                    Notes
                  </li>
                </ol>
              </nav>
            </div>

            <div className="breadcrumb-rightside-btn me-5">
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white rounded-2 ms-2 "
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Create"
              >
                <AiOutlinePlus />
              </span>
            </div>
          </div>

          <div className="mx-4">
            <Row>
              <h5 className="mb-2">Personal Notes</h5>
              <>
                <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
                  <Card
                    className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Header className="px-3 py-4 notes-card-radius position-relative border-bottom bg-custom-white">
                      <div className="d-flex align-items-center">
                        <div className="notes-circle bg-success"></div>
                        <h6 className="mb-0 mx-2">Website Redesign</h6>
                        <div
                          className="position-absolute"
                          style={{ right: "0", top: "15px" }}
                        >
                          <SalesCardMenuBar />
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className=" pe-3 text-secondary font-size-15">
                        The project involves redesigning the company website to
                        improve the user experience and enhance its visual
                        appeal. The current website has outdated design elements
                        and lacks responsiveness across different devices. The
                        primary goal is to create a modern and user-friendly
                        website that effectively represents the company's brand
                        and engages visitors.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
                  <Card
                    className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Header className="px-3 py-4 notes-card-radius position-relative bg-custom-white">
                      <div className="d-flex align-items-center">
                        <div className="notes-circle bg-info"></div>
                        <h6 className="mb-0 mx-2">Development Phase</h6>
                        <div
                          className="position-absolute"
                          style={{ right: "0", top: "15px" }}
                        >
                          <SalesCardMenuBar />
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className=" pe-3 text-secondary font-size-15">
                        Development lead started implementing the new design
                        using HTML, CSS, and JavaScript. Prioritized mobile
                        responsiveness and optimized page load times. Conducted
                        regular code reviews and addressed any technical issues
                        or bugs.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
                  <Card
                    className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Header className="px-3 py-4 notes-card-radius position-relative bg-custom-white">
                      <div className="d-flex align-items-center">
                        <div className="notes-circle bg-danger"></div>
                        <h6 className="mb-0 mx-2">Hello</h6>
                        <div
                          className="position-absolute"
                          style={{ right: "0", top: "15px" }}
                        >
                          <SalesCardMenuBar />
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className=" pe-3 text-secondary font-size-15">hello</p>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            </Row>

            <Row>
              <h5 className="mb-2">Shared Notes</h5>
              <>
                <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
                  <Card
                    className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Header className="px-3 py-4 notes-card-radius position-relative bg-custom-white">
                      <div className="d-flex align-items-center">
                        <div className="notes-circle bg-secondary"></div>
                        <h6 className="mb-0 mx-2">Project Kick-off Meeting</h6>
                        <div
                          className="position-absolute"
                          style={{ right: "0", top: "15px" }}
                        >
                          <SalesCardMenuBar />
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className=" pe-3 text-secondary font-size-15">
                        Discussed project objectives, scope, and timeline with
                        stakeholders. Agreed to focus on improving user
                        experience, visual appeal, and mobile responsiveness.
                        Assigned roles and responsibilities to team members:
                        design lead, development lead, content writer.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
                  <Card
                    className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Header className="px-3 py-4 notes-card-radius position-relative bg-custom-white">
                      <div className="d-flex align-items-center">
                        <div className="notes-circle bg-warning"></div>
                        <h6 className="mb-0 mx-2">Launch Preparation</h6>
                        <div
                          className="position-absolute"
                          style={{ right: "0", top: "15px" }}
                        >
                          <SalesCardMenuBar />
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className=" pe-3 text-secondary font-size-15">
                        Conducted final rounds of quality assurance and testing
                        across different devices and browsers. Created a
                        detailed launch plan, including backup and rollback
                        procedures. Communicated with the marketing team to
                        coordinate promotional efforts for the website launch.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            </Row>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;

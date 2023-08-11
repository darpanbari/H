import React from "react";
import SideNavbar from "../../components/SideNavbar";
import { MdOutlineViewList } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import {
  TbBuilding,
  TbCurrencyDollarSingapore,
  TbFileInvoice,
} from "react-icons/tb";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SalesAreaChart from "../../components/SalesAreaChart";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import TopHeaderModal from "../../components/CreateWorkspace";

const SalesDashboard = () => {
  return (
    <>
      <div className="display-side d-flex">
        <div style={{width:"0px"}}>
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

          <div className="mt-4 mb-2 ms-4 support-breadcrumb-margin">
            <h5 className="mb-0">Dashboard</h5>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-decoration-none text-secondary">
                      Home
                    </a>
                  </li>
                </ol>
              </nav>
          </div>
          <div className="mx-4 ">
            <Row>
              <Col
                xxl={7}
                xl={12}
                lg={12}
                md={12}
                className="d-flex flex-column support-dash-card"
              >
                {/* 1st Row */}
                <Row className="">
                  <Col lg={4} md={4} sm={6} className="mb-4">
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                      style={{ width: "100%" }}
                    >
                      <Card.Body className="p-4">
                        <div>
                          <BiUser className="bg-warning rounded-4 white-icon mb-2" />
                        </div>
                        <h6 className="my-2">Total User</h6>
                        <h3 className="mt-2">17</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={4} md={4} sm={6} className="mb-4">
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                      style={{ width: "100%" }}
                    >
                      <Card.Body className="p-4">
                        <div>
                          <TbBuilding className="green-2 rounded-4 white-icon mb-2" />
                        </div>
                        <h6 className="my-2">Total Account</h6>
                        <h3 className="mt-2">6</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={4} md={4} sm={6} className="mb-4">
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                      style={{ width: "100%" }}
                    >
                      <Card.Body className="p-4">
                        <div>
                          <MdOutlineViewList className="red-icon rounded-4 white-icon mb-2" />
                        </div>
                        <h6 className="my-2">Total Contact</h6>
                        <h3 className="mt-2">6</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* 2nd Row */}
                  <Col lg={4} md={4} sm={6} className="mb-4">
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                      style={{ width: "100%" }}
                    >
                      <Card.Body className="p-4">
                        <div>
                          <TbCurrencyDollarSingapore className="bg-info rounded-4 white-icon mb-2" />
                        </div>
                        <h6 className="my-2">Total Opportunities</h6>
                        <h3 className="mt-2">5</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={4} md={4} sm={6} className="mb-4">
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                      style={{ width: "100%" }}
                    >
                      <Card.Body className="p-4">
                        <div>
                          <TbFileInvoice className="bg-success rounded-4 white-icon mb-2" />
                        </div>
                        <h6 className="my-2">Total Invoices</h6>
                        <h3 className="mt-2">3</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={4} md={4} sm={6} className="mb-4">
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                      style={{ width: "100%" }}
                    >
                      <Card.Body className="p-4">
                        <div>
                          <TbFileInvoice className="bg-secondary rounded-4 white-icon mb-2" />
                        </div>
                        <h6 className="my-2">Total Salesorder</h6>
                        <h3 className="mt-2">3</h3>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col xxl={5} xl={12} lg={12} md={12} className="mb-4">
                <Card
                  className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Card.Body className="p-0">
                    <h6 className="border-bottom p-4">
                      Invoice & Quote & Sales Order
                    </h6>
                    <div className="p-3 text-center">
                      
                      <SalesAreaChart />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* row 2 */}
            <Row className="sales-row-2">
              <Col sm={12} md={4} className="mb-4">
                <Card
                  className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                  style={{ width: "100%" }}
                >
                  <Card.Body className="p-0">
                    <h6 className="border-bottom p-4">
                      Invoice Overview
                    </h6>
                    <div className="px-4 pt-4 d-flex mb-0">
                      <div className="progress-bar green-3 w-50 shadow"></div>
                      <div className="progress-bar red-2 w-50 shadow"></div>
                      <div className="progress-bar bg-warning w-50 shadow"></div>
                    </div>
                    <Row className="ms-1 me-5 mt-4">
                      <Col className="pe-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-success fs-3" />
                          <span className="font-size-12">2 Open (40.00%)</span>
                        </div>
                      </Col>
                      <Col className="ps-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-danger fs-3" />
                          <span className="font-size-12">
                            1 Not Paid (20.00%)
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <Row className="ms-1 me-5">
                      <Col className="pe-0">
                        <div className="d-flex align-items-center ">
                          <BsDot className="text-warning fs-3" />
                          <span className="font-size-12 w-100">
                            2 Partialy Paid (40.00%)
                          </span>
                        </div>
                      </Col>
                      <Col className="ps-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="green-1 fs-3" />
                          <span className="font-size-12">0 Paid (0.00%)</span>
                        </div>
                      </Col>
                    </Row>
                    <Row className="ms-1 me-5 mb-3">
                      <Col className="pe-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-info fs-3" />
                          <span className="font-size-12">
                            0 Cancelled (0.00%)
                          </span>
                        </div>
                      </Col>
                      <Col className="ps-0"></Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={4} className="mb-4">
                <Card
                  className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Card.Body className="p-0">
                    <h6 className="border-bottom p-4">
                      Quote Overview
                    </h6>
                    <div className="pt-4 px-4 mb-0 d-flex">
                      <div className="progress-bar green-3 w-25 shadow"></div>
                      <div className="progress-bar bg-info w-75 shadow"></div>
                    </div>
                    <Row className="ms-1 me-5 mt-4">
                      <Col className="pe-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-success fs-3" />
                          <span className="font-size-12">2 Open (40.00%)</span>
                        </div>
                      </Col>
                      <Col className="ps-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-info fs-3" />
                          <span className="font-size-12">
                            3 Cancelled (60.00%)
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={4} className="mb-4">
                <Card
                  className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Card.Body className="p-0">
                    <h6 className="border-bottom p-4">
                      Sales Order Overview
                    </h6>
                    <div className="pt-4 px-4 mb-0 d-flex">
                      <div className="progress-bar green-3 w-50 shadow"></div>
                      <div className="progress-bar bg-info w-50 shadow"></div>
                    </div>
                    <Row className="ms-1 me-5 mt-4">
                      <Col className="pe-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-success fs-3" />
                          <span className="font-size-12">2 Open (60.00%)</span>
                        </div>
                      </Col>
                      <Col className="ps-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-info fs-3" />
                          <span className="font-size-12">
                            3 Cancelled (60.00%)
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* row 3 */}
            <Row className="mb-4">
              <Col>
                <Card
                  className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                  style={{ width: "100%" }}
                >
                  <Card.Body className="p-0">
                    <h6 className="border-bottom p-4">
                      Meeting Schedule
                    </h6>
                    <div className="p-3 text-center">
                      Meeting schedule not found
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesDashboard;

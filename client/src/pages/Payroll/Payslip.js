import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import SearchBtn from "../../components/SearchBtn";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import UseTooltip from "../../components/useTooltip";
import TopHeaderModal from "../../components/CreateWorkspace";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import EntriesPerPage from "../../components/EntriesPerPage";
import PayslipModal from "../../components/PayslipModal";
import { Button } from "react-bootstrap";

const Payslip = () => {
  const [data] = useState([
    {
      employeeId: "#EMP00001",
      name: "Richard Atkinson",
      payrollType: "Hourly Payslip",
      salary: "12000.0",
      netSalary: "127500.0",
      status: "Paid",
    },
    {
      employeeId: "#EMP00002",
      name: "Adria Blake",
      payrollType: "Yearly Payslip",
      salary: "110000.0",
      netSalary: "79377500.0",
      status: "UnPaid",
    },
    {
      employeeId: "#EMP00003",
      name: "Dale Gill",
      payrollType: "Monthly Payslip",
      salary: "43000.0",
      netSalary: "11754208.0",
      status: "UnPaid",
    },
    {
      employeeId: "#EMP00004",
      name: "Rebecca Shaffer",
      payrollType: "Weekly Payslip",
      salary: "10000.0",
      netSalary: "11336500.0",
      status: "UnPaid",
    },
    {
      employeeId: "#EMP00005",
      name: "Juli Shepherd",
      payrollType: "Hourly Payslip",
      salary: "500.0",
      netSalary: "4511858.0",
      status: "UnPaid",
    },
    {
      employeeId: "#EMP00006",
      name: "Clark Burton",
      payrollType: "Yearly Payslip",
      salary: "500000.0",
      netSalary: "1720596.0",
      status: "UnPaid",
    },
  ]);

  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [filteredData, setFilteredData] = useState(data);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");

    const sortedData = [...filteredData].sort((a, b) => {
      if (isAsc) {
        if (typeof a[property] === "string") {
          return a[property].localeCompare(b[property]);
        } else {
          return a[property] - b[property];
        }
      } else {
        if (typeof a[property] === "string") {
          return b[property].localeCompare(a[property]);
        } else {
          return b[property] - a[property];
        }
      }
    });

    setFilteredData(sortedData);
  };

  const handleEntriesPerPage = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
  };

  // search
  const handleSearchData = (searchedData) => {
    setFilteredData(searchedData);
  };

  UseTooltip();

  const [selectedPayslip, setSelectedPayslip] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (payslip) => {
    setSelectedPayslip(payslip);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPayslip(null);
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

          <div className="d-flex flex-col2 justify-content-between">
            <div className="mt-4 mb-2 ms-4">
              <h5 className="mb-0">Manage Payslip</h5>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a
                      href="/dashboard"
                      className="text-decoration-none green-1"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-secondary"
                    aria-current="page"
                  >
                    Payslip
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div>
            <div className="border-4 py-4 mx-4 custom-border-radius custom-shadow bg-custom-white">
              <div className="d-flex payslip-top-container justify-content-end mx-4">
                <Row className="row justify-content-end ms-auto">
                  <Col
                    xxl={3}
                    lg={3}
                    md={12}
                    sm={12}
                    style={{ width: "300px" }}
                  >
                    <Form.Label>Select Month</Form.Label>
                    <Form.Select className="p-2">
                      <option value="jan">JAN</option>
                      <option value="feb">FEB</option>
                      <option value="mar">MAR</option>
                      <option value="apr">APR</option>
                      <option value="may">MAY</option>
                      <option value="jun">JUN</option>
                      <option value="jul">JUL</option>
                      <option value="aug">AUG</option>
                      <option value="sep">SEP</option>
                      <option value="oct">OCT</option>
                      <option value="nov">NOV</option>
                      <option value="dec">DEC</option>
                    </Form.Select>
                  </Col>
                  <Col
                    xxl={3}
                    lg={3}
                    md={12}
                    sm={12}
                    style={{ width: "300px" }}
                  >
                    <Form.Label>Select Year</Form.Label>
                    <Form.Select className="p-2">
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <div className="me-4 mt-4 pt-1 d-flex align-items-center text-end justify-content-end">
                    <button className="btn green-2 text-white">
                      Generate Payslip
                    </button>
                  </div>
                </Row>
              </div>
            </div>
          </div>

          <div>
            <div className="py-4 m-4 custom-border-radius bg-custom-white custom-shadow">
              <Row className="d-flex justify-content-between m-0 px-2 pt-0 pb-4 flex-row border-bottom">
                <Col>
                  <h6>Find Employee Payslip</h6>
                </Col>
                <Col xxl={3} lg={3} md={6} sm={12} style={{ width: "300px" }}>
                  <Form.Label>Select Month</Form.Label>
                  <Form.Select className="p-2">
                    <option value="jan">JAN</option>
                    <option value="feb">FEB</option>
                    <option value="mar">MAR</option>
                    <option value="apr">APR</option>
                    <option value="may">MAY</option>
                    <option value="jun">JUN</option>
                    <option value="jul">JUL</option>
                    <option value="aug">AUG</option>
                    <option value="sep">SEP</option>
                    <option value="oct">OCT</option>
                    <option value="nov">NOV</option>
                    <option value="dec">DEC</option>
                  </Form.Select>
                </Col>
                <Col xxl={3} lg={3} md={6} sm={12} style={{ width: "300px" }}>
                  <Form.Label>Select Year</Form.Label>
                  <Form.Select className="p-2">
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </Form.Select>
                </Col>
              </Row>

              <div className="scroller-div mt-4">
                <div className="table-responsive1">
                  <div className="d-flex justify-content-between pb-4 px-4">
                    <EntriesPerPage
                      value={entriesPerPage}
                      onChange={handleEntriesPerPage}
                    />
                    <div>
                    <SearchBtn data={data} onDataSearch={handleSearchData} />
                    </div>
                  </div>

                  <Table hover>
                    <thead className="table-head">
                      <tr>
                        <th onClick={() => handleSort("employeeId")}>
                          <div className="d-flex justify-content-between ms-3 align-items-center">
                            EMPLOYEE ID
                            {orderBy === "employeeId" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "employeeId" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th className="" onClick={() => handleSort("name")}>
                          <div className="d-flex justify-content-between align-items-center">
                            NAME
                            {orderBy === "name" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "name" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("payrollType")}>
                          <div className="d-flex justify-content-between align-items-center">
                            PAYROLL TYPE
                            {orderBy === "payrollType" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "payrollType" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("salary")}>
                          <div className="d-flex justify-content-between align-items-center">
                            SALARY
                            {orderBy === "salary" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "salary" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("netSalary")}>
                          <div className="d-flex justify-content-between align-items-center">
                            NET SALARY
                            {orderBy === "netSalary" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "netSalary" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("status")}>
                          <div className="d-flex justify-content-between align-items-center">
                            STATUS
                            {orderBy === "status" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "status" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th className="" onClick={() => handleSort("action")}>
                          <div className="d-flex justify-content-between align-items-center">
                            ACTION
                            {orderBy === "action" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "action" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="y-center">
                      {filteredData.slice(0, entriesPerPage).map((payslip, i) => (
                        <tr key={i}>
                          <td className="ps-4 fw-bold">
                            <button
                              type="button"
                              className="btn btn-outline-success font-size-14 py-2"
                            >
                              {payslip.employeeId}
                            </button>
                          </td>
                          <td>{payslip.name}</td>
                          <td>{payslip.payrollType}</td>
                          <td>{payslip.salary}</td>
                          <td>{payslip.netSalary}</td>

                          <td>
                            <button
                              className={`btn my-2 btn-success border-0 btn-width1 ${
                                payslip.status === "Paid"
                                  ? "green-2"
                                  : payslip.status === "UnPaid"
                                  ? "red-icon"
                                  : "green-2"
                              }`}
                            >
                              {payslip.status}
                            </button>
                          </td>

                          <td style={{ width: "33%" }}>
                            <div className=" d-flex">
                              <Button
                                variant="primary"
                                className="btn orange-2 border-0 rounded-1 font-size-14 py-1 text-white me-1"
                                onClick={() => handleButtonClick(payslip)}
                              >
                                Payslip
                              </Button>
                              <PayslipModal
                                showModal={showModal}
                                onClose={handleCloseModal}
                                selectedPayslip={selectedPayslip}
                              />
                              {payslip.status === "UnPaid" ? (
                                <>
                                  <button className="btn green-3 rounded-1 font-size-14 py-1 text-white me-1">
                                    Click To Paid
                                  </button>
                                  <button className="btn sky-2 rounded-1 font-size-14 py-1 text-white me-1">
                                    Edit
                                  </button>
                                </>
                              ) : (
                                ""
                              )}

                              <button className="btn red-icon rounded-1 font-size-14 py-1 text-white">
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                  <p className="p-4">
                    Showing 1 to {Math.min(entriesPerPage, data.length)} of{" "}
                    {data.length} entries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payslip;

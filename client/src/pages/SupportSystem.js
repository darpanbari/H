import React, { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import Table from "react-bootstrap/Table";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiArrowBendUpLeftBold, PiCirclesFourBold, PiCubeFocusDuotone, PiDownloadSimpleBold } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import SearchBtn from "../components/SearchBtn";
import AdminProfileLogout from "../components/AdminProfileLogout";
import HeaderMessageBox from "../components/HeaderMessageBox";
import LanguageBtn from "../components/LanguageBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import UseTooltip from "../components/useTooltip";
import TopHeaderModal from "../components/CreateWorkspace";
import AdminSelectBtn from "../components/AdminInfotechBtn";
import EntriesPerPage from "../components/EntriesPerPage";
import { Card } from "react-bootstrap";
import { CgCast } from "react-icons/cg";
import { BiPencil } from "react-icons/bi";

const SupportSystem = () => {
  const [data, setData] = useState([
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Rerum molestiae volu",
        sts: "Low",
      },
      code: "090117",
      attachment: "",
      assignUser: "Richard Atkinson",
      status: "Open",
      createdAt: "10-01-2022",    
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Rerum molestiae volu",
        sts: "Low",
      },
      code: "090141",
      attachment: "",
      assignUser: "Mick Aston",
      status: "Close",
      createdAt: "10-01-2022"
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Rerum molestiae volu",
        sts: "Low",
      },
      code: "090124",
      attachment: "",
      assignUser: "Mick Aston",
      status: "On Hold",
      createdAt: "10-01-2022",   
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Suscipit ratione dol",
        sts: "High",
      },
      code: "100122",
      attachment: "",
      assignUser: "Mick Aston",
      status: "Open",
      createdAt: "10-01-2022",     
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Rerum molestiae volu",
        sts: "Low",
      },
      code: "090836",
      attachment: "",
      assignUser: "Mick Aston",
      status: "Open",
      createdAt: "15-08-2022",    
    },
    {
      createdBy: {
        image: "/mick.jpg",
        name: "Mick Aston",
      },
      ticket: {
        desc: "test purpes",
        sts: "Medium",
      },
      code: "120405",
      attachment: "",
      assignUser: "Buffy Walter",
      status: "On Hold",
      createdAt: "10-04-2023",
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Test Demo",
        sts: "High",
      },
      code: "090417",
      attachment: "-",
      assignUser: "Larson LLC",
      status: "Open",
      createdAt: "25-04-2023",      
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Rerum molestiae volu",
        sts: "High",
      },
      code: "100535",
      attachment: "-",
      assignUser: "Larson LLC",
      status: "Open",
      createdAt: "03-05-2023",
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Officia deserunt est",
        sts: "Critical",
      },
      code: "060516",
      attachment: "-",
      assignUser: "Emilia Fox",
      status: "Open",
      createdAt: "04-05-2023", 
    },
    {
      createdBy: {
        image: "/walter.jpg",
        name: "Buffy Walter",
      },
      ticket: {
        desc: "gdf",
        sts: "Medium",
      },
      code: "030619",
      attachment: "-",
      assignUser: "Abel Callahan",
      status: "Open",
      createdAt: "16-06-2023",
    },
  ]);

  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");

    const sortedData = [...data].sort((a, b) => {
      if (isAsc) {
        return a[property] < b[property] ? -1 : 1;
      } else {
        return a[property] > b[property] ? -1 : 1;
      }
    });

    setData(sortedData);
  };

  const handleEntriesPerPage = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
  };

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
              <h5 className="mb-0">Support</h5>
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
                    Support
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
                title="Grid View"
              >
                <PiCirclesFourBold />
              </span>
                <span
                  type="button"
                  className="custom-tooltip-btn2 green-2 text-white ms-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Create"
                >
                  <AiOutlinePlus />
                </span>
            </div>
          </div>

          <div>
            <Row>
              <Col className="d-flex flex-column support-dash-card">
                {/* 1st Row */}
                <Row className="" style={{margin:"auto 12px"}}>
                  <Col xl={3} lg={4} md={4} sm={6} className="mb-4">
                    <Card className="custom-shadow custom-border-radius bg-custom-white border-0 me-4 w-100">
                      <Card.Body className="p-4 d-flex flex-row align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <CgCast className="green-2 rounded-4 white-icon " />
                          </div>
                          <div className="mx-3">
                            <p className="font-size-12 mb-0">Total</p>
                            <h6 className="mb-0">Ticket</h6>
                          </div>
                        </div>
                        <h3 className="mb-0">17</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xl={3} lg={4} md={4} sm={6} className="mb-4">
                    <Card className="custom-shadow custom-border-radius bg-custom-white border-0 me-4 w-100">
                      <Card.Body className="p-4 d-flex flex-row align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <CgCast className="sky-2 rounded-4 white-icon " />
                          </div>
                          <div className="mx-3">
                            <p className="font-size-12 mb-0">Open</p>
                            <h6 className="mb-0">Ticket</h6>
                          </div>
                        </div>
                        <h3 className="mb-0">7</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xl={3} lg={4} md={4} sm={6} className="mb-4">
                    <Card className="custom-shadow custom-border-radius bg-custom-white border-0 me-4 w-100">
                      <Card.Body className="p-4 d-flex flex-row align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <CgCast className="orange-2 rounded-4 white-icon " />
                          </div>
                          <div className="mx-3">
                            <p className="font-size-12 mb-0">On Hold</p>
                            <h6 className="mb-0">Ticket</h6>
                          </div>
                        </div>
                        <h3 className="mb-0">2</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xl={3} lg={4} md={4} sm={6} className="mb-4">
                    <Card className="custom-shadow custom-border-radius bg-custom-white border-0 me-4 w-100">
                      <Card.Body className="p-4 d-flex flex-row align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <CgCast className="red-icon rounded-4 white-icon " />
                          </div>
                          <div className="mx-3">
                            <p className="font-size-12 mb-0">Total</p>
                            <h6 className="mb-0">Close</h6>
                          </div>
                        </div>
                        <h3 className="mb-0">1</h3>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <div>
            <div className="">
              <div className="border-4 py-4 m-4 mt-0 custom-border-radius bg-custom-white custom-shadow scroller-div">
                <div className="table-responsive1">
                  <div className="d-flex justify-content-between pb-4 px-4">
                    <EntriesPerPage
                      value={entriesPerPage}
                      onChange={handleEntriesPerPage}
                    />
                    <div>
                      <SearchBtn />
                    </div>
                  </div>

                  <Table hover>
                    <thead className="table-head">
                      <tr>
                        <th onClick={() => handleSort("name")}>
                          <div className="d-flex justify-content-between ms-3 align-items-center">
                            CREATED BY
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

                        <th className="" onClick={() => handleSort("desc")}>
                          <div className="d-flex justify-content-between align-items-center">
                            TICKET
                            {orderBy === "desc" && (
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
                            {orderBy !== "desc" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("code")}>
                          <div className="d-flex justify-content-between align-items-center">
                            CODE
                            {orderBy === "code" && (
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
                            {orderBy !== "code" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("attachment")}>
                          <div className="d-flex justify-content-between align-items-center">
                            ATTACHMENT
                            {orderBy === "attachment" && (
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
                            {orderBy !== "attachment" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("assignUser")}>
                          <div className="d-flex justify-content-between align-items-center">
                            ASSIGN USER
                            {orderBy === "assignUser" && (
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
                            {orderBy !== "assignUser" && (
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

                        <th onClick={() => handleSort("createdAt")}>
                          <div className="d-flex justify-content-between align-items-center">
                            CREATED AT
                            {orderBy === "createdAt" && (
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
                            {orderBy !== "createdAt" && (
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
                      {data.slice(0, entriesPerPage).map((ss, i) => (
                        <tr key={i}>
                          <td >
                            <div className="d-flex align-items-center ps-3 py-1">
                            <img src={`${ss.createdBy.image}`} style={{height:"38px", width:"38px", borderRadius:"100%"}}/>             
                             <div className="fw-normal">{ss.createdBy.name}</div> 
                             </div>
                          </td>
                          <td>
                            <div>
                            <p className="mb-0 font-size-12 fw-bold">{ss.ticket.desc}</p>
                            <button
                              className={`btn btn-success border-0 btn-width1 ${
                                ss.ticket.sts === "Low"
                                  ? "green-2"
                                  : ss.ticket.sts === "High"
                                  ? "orange-2"
                                  : ss.ticket.sts === "Medium"
                                  ? "sky-2"
                                  : ss.ticket.sts === "Critical"
                                  ? "red-icon"
                                  : "green-2"
                              }`}
                            >
                                {ss.ticket.sts}
                            </button>
                            </div>
                            
                            </td>
                          <td>{ss.code}</td>
                          <td>
                            <div className="mx-2 d-flex justify-content-start">
                              <span
                                type="button"
                                className="custom-tooltip-btn green-2 text-white custom-border-radius me-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Download"
                              >
                                < PiDownloadSimpleBold/>
                              </span>
                              <span
                                type="button"
                                className="custom-tooltip-btn custom-border-radius text-white bg-secondary"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Preview"
                              >
                                < PiCubeFocusDuotone/>
                              </span>
                            </div>
                          </td>
                          
                          <td>
                            {ss.assignUser}
                          </td>
                          <td>
                            <button
                              className={`btn btn-success border-0 btn-width w-75 ${
                                ss.status === "Open"
                                  ? "green-2"
                                  : ss.status === "Close"
                                  ? "red-icon"
                                  : ss.status === "On Hold"
                                  ? "orange-2"
                                  : "green-2"
                              }`}
                            >
                              {ss.status}
                            </button>
                          </td>
                          <td >{ss.createdAt}</td>
                          <td
                            className="text-center"
                          >
                            <div className="mx-2 d-flex">
                              <span
                                type="button"
                                className="custom-tooltip-btn orange-2 text-white custom-border-radius2 me-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Reply"
                              >
                                <PiArrowBendUpLeftBold />
                              </span>
                              <span
                                type="button"
                                className="custom-tooltip-btn green-2 text-white custom-border-radius2 me-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                              >
                                <BiPencil />
                              </span>
                              
                              <span
                                type="button"
                                className="custom-tooltip-btn custom-border-radius text-white red-icon"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <RiDeleteBin5Line />
                              </span>
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

export default SupportSystem;

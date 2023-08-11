import React, { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import Table from "react-bootstrap/Table";
import { RiDeleteBin2Line, RiDeleteBin5Line } from "react-icons/ri";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { ImSearch } from "react-icons/im";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Form from "react-bootstrap/Form";
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

const Tickets = () => {
  const [data] = useState([
    {
      id: 1234567890,
      name: "aaa",
      email: "sanjay.dahal90@gmail.com",
      category: "Bug",
      status: "New Ticket",
      priority: "Urgent",
      timing: "Response time: 43 seconds after Resolve In: 2 Hour",
      created: "2 hours ago",
    },
    {
      id: 1234567891,
      name: "John",
      email: "john@example.com",
      category: "Questions",
      status: "In Progress",
      priority: "High",
      timing: "Response time: 2 minutes after Resolve In: 2 Hour",
      created: "1 week ago",
    },
    {
      id: 1234567892,
      name: "pearl smith",
      email: "xoxigif@mailinator.com",
      category: "New Installation",
      status: "In Progress",
      priority: "Low",
      timing: "Response Overdue: 2 weeks after Resolve In: 4 Day",
      created: "1 month ago",
    },
    {
      id: 1234567893,
      name: "Nell Macdonald",
      email: "kuwexi@mailinator.com",
      category: "New Installation",
      status: "On Hold",
      priority: "Low",
      timing: "Response In: 4 Day Resolve In: 4 Day",
      created: "1 month ago",
    },
    {
      id: 1234567894,
      name: "Stuart Fitzpatrick",
      email: "jejitajar@mailinator.com",
      category: "Questions",
      status: "In Progress",
      priority: "Medium",
      timing: "Response In: 3 Hour Resolve In: 3 Hour",
      created: "1 month ago",
    },
    {
      id: 1234567895,
      name: "Emerald Colon",
      email: "fityfapimy@mailinator.com",
      category: "Bug",
      status: "On Hold",
      priority: "High",
      timing: "Response In: 2 Hour Resolve In: 2 Hour",
      created: "1 month ago",
    },
    {
      id: 1234567896,
      name: "abc",
      email: "yoxigif@mailinator.com",
      category: "Bug",
      status: "In Progress",
      priority: "Urgent",
      timing: "Response time: 43 seconds after Resolve In: 2 months",
      created: "2 months ago",
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
              <h5 className="mb-0">Manage Tickets</h5>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a
                      href="/dashboard"
                      className="text-decoration-none green-1"
                    >
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-secondary"
                    aria-current="page"
                  >
                    Tickets
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
                title="Export Tickets CSV File"
              >
                <BsFileEarmarkPlus />
              </span>
              <a href="/tickets/create">
                <span
                  type="button"
                  className="custom-tooltip-btn2 green-2 text-white ms-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Create Ticket"
                >
                  <AiOutlinePlus />
                </span>
              </a>
            </div>
          </div>

          <div>
            <div className="border-4 py-4 mx-4 custom-border-radius custom-shadow bg-custom-white">
              <div className="d-flex ticket-top-container justify-content-end mx-4">
                <Row
                  className="row justify-content-end ms-auto"
                  style={{ width: "60%" }}
                >
                  <Col xxl={3} lg={3} md={6} sm={12}>
                    <Form.Label>Category</Form.Label>
                    <Form.Select className="p-2">
                      <option value="">Select category</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                      <option value="category3">Category 3</option>
                    </Form.Select>
                  </Col>
                  <Col xxl={3} lg={3} md={6} sm={12}>
                    <Form.Label>Status</Form.Label>
                    <Form.Select className="p-2">
                      <option value="">Select Status</option>
                      <option value="Status1">Status 1</option>
                      <option value="Status2">Status 2</option>
                      <option value="Status3">Status 3</option>
                    </Form.Select>
                  </Col>
                  <Col xxl={3} lg={3} md={6} sm={12}>
                    <Form.Label>Priority</Form.Label>
                    <Form.Select className="p-2">
                      <option value="">Select Priority</option>
                      <option value="Priority1">Priority 1</option>
                      <option value="Priority2">Priority 2</option>
                      <option value="Priority3">Priority 3</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <div className="mx-1 mt-4 pt-1 d-flex align-items-center text-end justify-content-end">
                    <span
                      type="button"
                      className="custom-tooltip-btn2 green-2 text-white custom-border-radius ms-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Apply"
                    >
                      <ImSearch />
                    </span>
                    <span
                      type="button"
                      className="custom-tooltip-btn2 red-icon custom-border-radius text-white ms-1 me-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Reset"
                    >
                      <RiDeleteBin2Line />
                    </span>
                  </div>
                </Row>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <div className="border-4 py-4 m-4 custom-border-radius bg-custom-white custom-shadow scroller-div">
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
                        <th onClick={() => handleSort("id")}>
                          <div className="d-flex justify-content-around align-items-center">
                            TICKET ID
                            {orderBy === "id" && (
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
                            {orderBy !== "id" && (
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
                        <th onClick={() => handleSort("email")}>
                          <div className="d-flex justify-content-between align-items-center">
                            EMAIL
                            {orderBy === "email" && (
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
                            {orderBy !== "email" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("category")}>
                          <div className="d-flex justify-content-between align-items-center">
                            CATEGORY
                            {orderBy === "category" && (
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
                            {orderBy !== "category" && (
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

                        <th onClick={() => handleSort("priority")}>
                          <div className="d-flex justify-content-between align-items-center">
                            PRIORITY
                            {orderBy === "priority" && (
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
                            {orderBy !== "priority" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("timing")}>
                          <div className="d-flex justify-content-between align-items-center">
                            TIMING
                            {orderBy === "timing" && (
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
                            {orderBy !== "timing" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("created")}>
                          <div className="d-flex justify-content-between align-items-center">
                            CREATED
                            {orderBy === "created" && (
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
                            {orderBy !== "created" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th className="" onClick={() => handleSort("action")}>
                          <div className="d-flex justify-content-around align-items-center">
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
                      {filteredData.slice(0, entriesPerPage).map((ticket) => (
                        <tr key={ticket.id}>
                          <td
                            className="text-center fw-bold"
                            style={{ maxWidth: "80px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-outline-success font-size-14 py-2"
                            >
                              {ticket.id}
                            </button>
                          </td>
                          <td style={{ maxWidth: "80px" }}>{ticket.name}</td>
                          <td style={{ maxWidth: "110px" }}>{ticket.email}</td>
                          <td style={{ maxWidth: "80px" }}>
                            <button
                              className={`btn btn-success red-2 border-0 btn-width ${
                                ticket.category === "Questions"
                                  ? "navy-2"
                                  : ticket.category === "Bug"
                                  ? "red-2"
                                  : ticket.category === "Support"
                                  ? "black-2"
                                  : ticket.category === "New Installation"
                                  ? "green-3"
                                  : "green-2"
                              }`}
                            >
                              {ticket.category}
                            </button>
                          </td>
                          <td style={{ maxWidth: "80px" }}>
                            <button
                              className={`btn btn-success border-0 btn-width ${
                                ticket.status === "New Ticket"
                                  ? "bg-secondary"
                                  : ticket.status === "In Progress"
                                  ? "sky-2"
                                  : ticket.status === "On Hold"
                                  ? "orange-2"
                                  : "green-2"
                              }`}
                            >
                              {ticket.status}
                            </button>
                          </td>
                          <td style={{ maxWidth: "80px" }}>
                            <button
                              className={`btn btn-success border-0 btn-width ${
                                ticket.priority === "Urgent"
                                  ? "black-2"
                                  : ticket.priority === "High"
                                  ? "red-2"
                                  : ticket.priority === "Low"
                                  ? "yellow-2"
                                  : ticket.priority === "Medium"
                                  ? "green-3"
                                  : "green-2"
                              }`}
                            >
                              {ticket.priority}
                            </button>
                          </td>
                          <td style={{ maxWidth: "120px" }}>{ticket.timing}</td>
                          <td style={{ maxWidth: "0px" }}>{ticket.created}</td>
                          <td
                            className="text-center"
                            style={{ maxWidth: "0px" }}
                          >
                            <div className="mx-2 d-flex">
                              <span
                                type="button"
                                className="custom-tooltip-btn  bg-sky-2 text-white custom-border-radius2 me-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Reply"
                              >
                                <PiArrowBendUpLeftBold />
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

export default Tickets;

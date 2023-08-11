import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import Table from "react-bootstrap/Table";
import { PiCirclesFourBold } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import SearchBtn from "../../components/SearchBtn";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import TopHeaderModal from "../../components/CreateWorkspace";
import UseTooltip from "../../components/useTooltip";
import { TbEye } from "react-icons/tb";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import EntriesPerPage from "../../components/EntriesPerPage";

const Tickets1 = () => {
  const [data] = useState([
    {
      no: 1,
      ticketId: 1684475201,
      name: "Emerald Colon",
      email: "fityfapimy@mailinator.com",
      subject: "Corporis repudiandae",
      category: "Bug",
      status: "In Progress",
      created: "2 months ago",
    },
    {
      no: 2,
      ticketId: 2684475201,
      name: "Eliana Joyce",
      email: "rehamysyzy@mailinator.com",
      subject: "Occaecat fugiat volu",
      category: "Support",
      status: "On Hold",
      created: "2 months ago",
    },
    {
      no: 3,
      ticketId: 3684475201,
      name: "Kasimir Perry",
      email: "xasubesama@mailinator.com",
      subject: "Expedita ea enim ali",
      category: "Bug",
      status: "Closed",
      created: "2 months ago",
    },
    {
      no: 4,
      ticketId: 4684475201,
      name: "Derek Henson",
      email: "myloduco@mailinator.com",
      subject: "Cupiditate ex molest",
      category: "Support",
      status: "On Hold",
      created: "2 months ago",
    },
    {
      no: 5,
      ticketId: 5684475201,
      name: "Abdul Gay",
      email: "vusanuli@mailinator.com",
      subject: "Corporis iure animi",
      category: "New Installation",
      status: "On Hold",
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
              <h5 className="mb-0">Manage Tickets</h5>
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
                  <li className="breadcrumb-item">Support Ticket</li>
                  <li
                    className="breadcrumb-item text-secondary"
                    aria-current="page"
                  >
                    Tickets
                  </li>
                </ol>
              </nav>
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex align-items-center">
              <label>
                <select className="dataTable-selector ms-2 px-3 py-2 me-1 rounded-2 border border-1">
                  <option value=" ">All Tickets</option>
                  <option value="10">10</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="25">25</option>
                </select>
              </label>
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white rounded-2 ms-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Grid View"
              >
                <PiCirclesFourBold />
              </span>
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white rounded-2 ms-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Create"
              >
                <AiOutlinePlus />
              </span>
            </div>
          </div>

          <div>
            <div className="">
              <div
                className="border-4 py-4 mx-4 mb-4 custom-border-radius custom-shadow scroller-div"
                style={{
                  background: "#ffffff",
                }}
              >
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
                        <th onClick={() => handleSort("no")}>
                          <div className="d-flex justify-content-between px-3 align-items-center">
                            #
                            {orderBy === "no" && (
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
                            {orderBy !== "no" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("id")}>
                          <div className="d-flex justify-content-between px-3 align-items-center">
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

                        <th onClick={() => handleSort("subject")}>
                          <div className="d-flex justify-content-between align-items-center">
                            SUBJECT
                            {orderBy === "subject" && (
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
                            {orderBy !== "subject" && (
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
                        <tr key={ticket.ticketId}>
                          <td className="ps-4" style={{ width: "10px" }}>
                            {ticket.no}
                          </td>
                          <td
                            className="text-start ps-4 fw-bold"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-success font-size-14 py-2"
                            >
                              {ticket.ticketId}
                            </button>
                          </td>
                          <td >{ticket.name}</td>
                          <td >{ticket.email}</td>

                          <td >{ticket.subject}</td>
                          <td >
                            <button
                              className={`btn btn-success red-2 border-0 btn-width1 ${
                                ticket.category === "Bug"
                                  ? "navy-2"
                                  : ticket.category === "Support"
                                  ? "red-icon"
                                  : ticket.category === "New Installation"
                                  ? "green-3"
                                  : "green-2"
                              }`}
                            >
                              {ticket.category}
                            </button>
                          </td>
                          <td >
                            <button
                              className={`btn btn-success border-0 btn-width1 ${
                                ticket.status === "Closed"
                                  ? "green-2"
                                  : ticket.status === "In Progress"
                                  ? "orange-2"
                                  : ticket.status === "On Hold"
                                  ? "red-icon"
                                  : "green-2"
                              }`}
                            >
                              {ticket.status}
                            </button>
                          </td>
                          <td >{ticket.created}</td>
                          <td
                            className="text-center"
                            
                          >
                            <div className="mx-2 d-flex justify-content-center">
                              <span
                                type="button"
                                className="custom-tooltip-btn orange-2 text-white custom-border-radius me-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View"
                              >
                                <TbEye />
                              </span>
                              <span
                                type="button"
                                className="custom-tooltip-btn bg-sky-2 text-white custom-border-radius me-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                              >
                                <BiSolidEdit />
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

                  <h6 className="p-4 fw-normal">
                    Showing 1 to {Math.min(entriesPerPage, data.length)} of{" "}
                    {data.length} entries
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets1;

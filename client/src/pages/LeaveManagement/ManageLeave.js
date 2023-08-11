import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import Table from "react-bootstrap/Table";
import SearchBtn from "../../components/SearchBtn";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import TopHeaderModal from "../../components/CreateWorkspace";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import UseTooltip from "../../components/useTooltip";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import EntriesPerPage from "../../components/EntriesPerPage";
import { BsPlay } from "react-icons/bs";
import ModalComponent from "../../components/ModalComponent";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";

const ManageLeave = () => {
  const [data] = useState([
    {
      employee: "Juli Shepherd",
      leavetype: "Casual Leave",
      appliedon: "19-05-2023",
      startdate: "23-08-2023",
      enddate: "26-08-2023",
      totaldays: "4",
      leavereason: "Optio eiusmod in cu",
      status: "Reject",
    },
    {
      employee: "Chloe Humphrey",
      leavetype: "Casual Leave",
      appliedon: "19-05-2023",
      startdate: "20-06-2023",
      enddate: "24-06-2023",
      totaldays: "5",
      leavereason: "Laboriosam perspici",
      status: "Approved",
    },
    {
      employee: "August Mclaughlin",
      leavetype: "Casual Leave",
      appliedon: "19-05-2023",
      startdate: "01-06-2023",
      enddate: "03-06-2023",
      totaldays: "3",
      leavereason: "Sit laboriosam eaq",
      status: "Pending",
    },
    {
      employee: "Joseph Fiennes",
      leavetype: "Medical Leave",
      appliedon: "19-05-2023",
      startdate: "23-05-2023",
      enddate: "26-05-2023",
      totaldays: "4",
      leavereason: "Emergency medical procedure",
      status: "Approved",
    },
    {
      employee: "Richard Atkinson",
      leavetype: "Casual Leave",
      appliedon: "19-05-2023",
      startdate: "20-05-2023",
      enddate: "26-05-2023",
      totaldays: "7",
      leavereason: "Emergency medical procedure",
      status: "Pending",
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

          <div className="d-flex justify-content-between flex-col2">
            <div className="mt-4 mb-2 ms-4">
              <h5 className="mb-0">Manage Leave</h5>
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
                    Leave
                  </li>
                </ol>
              </nav>
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
                <ModalComponent
                  modalTitle="Create New Company Policy"
                  modalContent={
                    <>
                      <div>
                        <GenerateWithAiBtn/>
                      </div>
                      <form className="mt-3">
                      <div className="mb-3 w-100 px-2">
                        <label htmlFor="awardType" className="form-label">
                        Employee
                          </label>
                          <select id="awardType" className="form-select">
                            <option value="">Select Employee</option>
                            <option value="richard">Richard</option>
                            <option value="employee2">Employee2</option>
                          </select>
                        </div>
                        <div className="mb-3 w-100 px-2">
                        <label htmlFor="awardType" className="form-label">
                        Leave Type
                          </label>
                          <select id="awardType" className="form-select">
                            <option value="">Select Leave Type</option>
                            <option value="Casual Leave (7)">Casual Leave (7)</option>
                            <option value="Medical Leave (5)">Medical Leave (5)</option>
                          </select>
                        </div>

                        <div className="d-flex">
                          <div className="mb-3 w-50 mx-2">
                            <label htmlFor="date" className="form-label">
                              Start Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="date"
                            />
                          </div>
                          <div className="mb-3 w-50 mx-2">
                            <label htmlFor="date" className="form-label">
                              End Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="date"
                            />
                          </div>
                        </div>
                        
                        <div className="mb-3 mx-2">
                        <label htmlFor="description" className="form-label">
                          Leave Reason
                        </label>
                        <textarea
                          className="form-control"
                          id="description"
                          rows="4"
                          placeholder="Leave Reason"
                        />
                        </div>

                       
                        <div className="mb-3 mx-2">
                        <label htmlFor="description" className="form-label">
                          Remark
                        </label>
                        <textarea
                          className="form-control"
                          id="description"
                          rows="4"
                          placeholder="Leave Remark"
                        />
                        </div>
                       
                        
                      </form>
                    </>
                  }
                />
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
                        <th onClick={() => handleSort("employee")}>
                          <div className="d-flex justify-content-between px-3 align-items-center">
                            EMPLOYEE
                            {orderBy === "employee" && (
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
                            {orderBy !== "employee" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th
                          className=""
                          onClick={() => handleSort("leavetype")}
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            LEAVE TYPE
                            {orderBy === "leavetype" && (
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
                            {orderBy !== "leavetype" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("appliedon")}>
                          <div className="d-flex justify-content-between align-items-center">
                            APPLIED ON
                            {orderBy === "appliedon" && (
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
                            {orderBy !== "appliedon" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("startdate")}>
                          <div className="d-flex justify-content-between align-items-center">
                            START DATE
                            {orderBy === "startdate" && (
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
                            {orderBy !== "startdate" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("enddate")}>
                          <div className="d-flex justify-content-between align-items-center">
                            END DATE
                            {orderBy === "enddate" && (
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
                            {orderBy !== "enddate" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("totaldays")}>
                          <div className="d-flex justify-content-between align-items-center">
                            TOTAL DAYS
                            {orderBy === "totaldays" && (
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
                            {orderBy !== "totaldays" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("leavereason")}>
                          <div className="d-flex justify-content-between align-items-center">
                            LEAVE REASON
                            {orderBy === "leavereason" && (
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
                            {orderBy !== "leavereason" && (
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
                          <div className="d-flex justify-content-between pe-3 align-items-center">
                            <span className="mx-2">ACTION</span>
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
                      {filteredData.slice(0, entriesPerPage).map((m, i) => (
                        <tr key={i}>
                          <td className="ps-4">{m.employee}</td>
                          <td>{m.leavetype}</td>
                          <td>{m.appliedon}</td>
                          <td>{m.startdate}</td>
                          <td>{m.enddate}</td>
                          <td>{m.totaldays}</td>
                          <td className="pb-4">{m.leavereason}</td>
                          <td>
                            <button
                              className={`btn btn-success border-0 btn-width1 ${
                                m.status === "Reject"
                                  ? "red-icon"
                                  : m.status === "Approved"
                                  ? "green-2"
                                  : m.status === "Pending"
                                  ? "orange-2"
                                  : "green-2"
                              }`}
                            >
                              {m.status}
                            </button>
                          </td>
                          <td>
                            <div className="mx-2 d-flex justify-content-start">
                              <span
                                type="button"
                                className="custom-tooltip-btn green-3 text-white custom-border-radius me-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Leave Action"
                              >
                                <BsPlay />
                              </span>
                              {m.status === "Pending" ? (
                                <>
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
                                </>
                              ) : (
                                ""
                              )}
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

export default ManageLeave;

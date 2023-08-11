import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import Table from "react-bootstrap/Table";
import SearchBtn from "../../components/SearchBtn";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import TopHeaderModal from "../../components/CreateWorkspace";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import UseTooltip from "../../components/useTooltip";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import EntriesPerPage from "../../components/EntriesPerPage";
import ModalComponent from "../../components/ModalComponent";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";

const Announcement = () => {
  const [data] = useState([
    {
      title: "WE WANT TO EARN YOUR DEEPEST TRUST.",
      startdate: "15-06-2023",
      enddate: "17-06-2023",
      description: "WE WANT TO EARN YOUR DEEPEST TRUST.",
    },
    {
      title: "Sports Scream",
      startdate: "21-07-2023",
      enddate: "28-07-2023",
      description: "Sports Scream",
    },
    {
      title: "Meeting Related",
      startdate: "17-08-2023",
      enddate: "23-08-2023",
      description:
        'I want the name "Doe Product" to be synonymous in your mind with quality.',
    },
    {
      title: "Live new site",
      startdate: "01-10-2023",
      enddate: "19-10-2023",
      description:
        'I want the name "Doe Product" to be synonymous in your mind with quality.',
    },
    {
      title: "Event Related",
      startdate: "01-01-2024",
      enddate: "10-01-2024",
      description: "Event Related",
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
              <h5 className="mb-0">Manage Announcement</h5>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a
                      href="/dashboard/sales-dashboard"
                      className="text-decoration-none green-1"
                    >
                      Announcement
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-secondary"
                    aria-current="page"
                  >
                    Complaints
                  </li>
                </ol>
              </nav>
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <ModalComponent
                modalTitle="Create New Announcement"
                modalContent={
                  <>
                    <div>
                      <GenerateWithAiBtn />
                    </div>
                    <form className="mt-3">
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="employee" className="form-label">
                            Announcement Title
                          </label>
                          <input id="employee" className="form-control" placeholder="Enter Announcement Title"/>
                        </div>

                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="awardType" className="form-label">
                           Branch
                          </label>
                          <select id="awardType" className="form-select">
                            <option value="">All</option>
                            <option value="india">India</option>
                            <option value="gujarat">Gujarat</option>
                          </select>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                        <label htmlFor="awardType" className="form-label">
                        Department
                          </label>
                          <select id="awardType" className="form-control">
                            <option value="">Select Department</option>
                            <option value="india">India</option>
                            <option value="gujarat">Gujarat</option>
                          </select>
                        </div>
                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="employee" className="form-label">
                            Employee
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="employee"
                            placeholder=""
                          />
                        </div>
                        </div>

                        <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="date" className="form-label">
                            Complaint Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                          />
                        </div>
                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="date" className="form-label">
                            Complaint Date
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
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="description"
                          rows="4"
                          placeholder="Enter Description"
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
                        <th onClick={() => handleSort("title")}>
                          <div className="d-flex justify-content-between px-3 align-items-center">
                            TITLE
                            {orderBy === "title" && (
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
                            {orderBy !== "title" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th
                          className=""
                          onClick={() => handleSort("startdate")}
                        >
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

                        <th onClick={() => handleSort("description")}>
                          <div className="d-flex justify-content-between align-items-center">
                            DESCRIPTION
                            {orderBy === "description" && (
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
                            {orderBy !== "description" && (
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
                      {filteredData.slice(0, entriesPerPage).map((complaints, i) => (
                        <tr key={i}>
                          <td className="ps-4" style={{ width: "600px" }}>
                            {complaints.title}
                          </td>
                          <td>{complaints.startdate}</td>
                          <td>{complaints.enddate}</td>

                          <td
                            className="text-truncate"
                            style={{ maxWidth: "0px", paddingRight: "200px" }}
                          >
                            {complaints.description}
                          </td>
                          <td className="">
                            <div className="mx-2 d-flex justify-content-start">
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

export default Announcement;

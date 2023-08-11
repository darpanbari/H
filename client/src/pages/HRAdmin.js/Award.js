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

const Award = () => {
  const [data] = useState([
    {
      employee: "Richard Atkinson",
      award: "Trophy",
      date: "24-05-2023",
      gift: "Books",
      description: "Classic trophy cups symbolize victory and recognition.",
    },
    {
      employee: "Sonya Sims",
      award: "Medals",
      date: "02-06-2023",
      gift: "Gold",
      description:
        "Recognize employees who have displayed exceptional leadership skills, inspiring and guiding their team members towards success.",
    },
    {
      employee: "Joseph Fiennes",
      award: "Trophy",
      date: "15-07-2023",
      gift: "Trophy",
      description:
        "A versatile option that allows employees to choose something they genuinely want.",
    },
    {
      employee: "Sonya Sims",
      award: "Certificat",
      date: "21-09-2023",
      gift: "Success certificate",
      description:
        "Provide employees with access to subscription services that align with their interests.",
    },
    {
      employee: "Richard Atkinson",
      award: "Medals",
      date: "08-12-2023",
      gift: "Silver Medals",
      description:
        "Thoughtfully chosen books related to professional development, leadership, or personal growth can be valuable gifts.",
    },
    {
      employee: "Joseph Fiennes",
      award: "Trophy",
      date: "21-03-2024",
      gift: "Trophy",
      description:
        "Provide employees with access to subscription services that align with their interests.",
    },
    {
      employee: "Joseph Fiennes",
      award: "Certificat",
      date: "11-05-2024",
      gift: "Certificate",
      description: "Recognize employees who have dis",
    },
  ]);

  // modal
  const [employee, setEmployee] = useState("");
  const [awardType, setAwardType] = useState("");

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
              <h5 className="mb-0">Manage Award</h5>
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
                    Award
                  </li>
                </ol>
              </nav>
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <ModalComponent
                modalTitle="Create Award"
                modalContent={
                  <>
                    <div>
                      <GenerateWithAiBtn/>
                    </div>
                    <form className="mt-3">
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="employee" className="form-label">
                            Employee
                          </label>
                          <select
                            id="employee"
                            className="form-select"
                            value={employee}
                            onChange={(e) => setEmployee(e.target.value)}
                          >
                            <option value="">Select Employee</option>
                            <option value="employee1">Richard Atkinson</option>
                            <option value="employee2">Employee 2</option>
                          </select>
                        </div>

                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="awardType" className="form-label">
                            Award Type
                          </label>
                          <select
                            id="awardType"
                            className="form-select"
                            value={awardType}
                            onChange={(e) => setAwardType(e.target.value)}
                          >
                            <option value="">Select Award Type</option>
                            <option value="award1">Award 1</option>
                            <option value="award2">Award 2</option>
                          </select>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="date" className="form-label">
                            Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                            required
                          />
                        </div>

                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="gift" className="form-label">
                            Gift
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="gift"
                            placeholder="Enter Gift"
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

                        <th className="" onClick={() => handleSort("award")}>
                          <div className="d-flex justify-content-between align-items-center">
                            AWARD TYPE
                            {orderBy === "award" && (
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
                            {orderBy !== "award" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("date")}>
                          <div className="d-flex justify-content-between align-items-center">
                            DATE
                            {orderBy === "date" && (
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
                            {orderBy !== "date" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("gift")}>
                          <div className="d-flex justify-content-between align-items-center">
                            GIFT
                            {orderBy === "gift" && (
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
                            {orderBy !== "gift" && (
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
                      {filteredData.slice(0, entriesPerPage).map((award, i) => (
                        <tr key={i}>
                          <td className="ps-4" style={{ maxWidth: "80px" }}>
                            {award.employee}
                          </td>
                          <td style={{ maxWidth: "80px" }}>{award.award}</td>
                          <td style={{ maxWidth: "80px" }}>{award.date}</td>
                          <td style={{ maxWidth: "110px" }}>{award.gift}</td>

                          <td
                            className="text-truncate"
                            style={{ maxWidth: "0px", paddingRight: "200px" }}
                          >
                            {award.description}
                          </td>
                          <td className="" style={{ width: "200px" }}>
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

export default Award;

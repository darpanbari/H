import React, { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import { Table } from "react-bootstrap";
import { RiDeleteBin5Line, RiKey2Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import SearchBtn from "../components/SearchBtn";
import AdminProfileLogout from "../components/AdminProfileLogout";
import LanguageBtn from "../components/LanguageBtn";
import HeaderMessageBox from "../components/HeaderMessageBox";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { BiSolidEdit } from "react-icons/bi";
import UseTooltip from "../components/useTooltip.js";
import TopHeaderModal from "../components/CreateWorkspace";
import AdminSelectBtn from "../components/AdminInfotechBtn";
import EntriesPerPage from "../components/EntriesPerPage";

const Users = () => {
  const [data] = useState([
    {
      id: 1,
      name: "Agent",
      email: "agent@example.com",
      category: ["Support", "Questions", "Bug"],
      role: "Agent",
    },
    {
      id: 2,
      name: "Virginia Wilkerson",
      email: "xiriqyhy@mailinator.com",
      category: ["Support", "New Installation"],
      role: "Agent",
    },
    {
      id: 3,
      name: "Cyrus Bailey",
      email: "sakinecig@mailinator.com",
      category: ["Support", "Bug"],
      role: "Agent",
    },
    {
      id: 4,
      name: "Jayme Keller",
      email: "tety@mallinator.com",
      category: ["Support", "Questions", "New Installation"],
      role: "Agent",
    },
    {
      id: 5,
      name: "Derek Rollins",
      email: "xiwisero@mallinator.com",
      category: ["Questions"],
      role: "Agent",
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
            <h5 className="mb-0">Manage Users</h5>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard" className="text-decoration-none green-1">
                    Home
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-secondary"
                  aria-current="page"
                >
                  Users
                </li>
              </ol>
            </nav>
          </div>

          <div className=" me-5 breadcrumb-rightside-btn">
            <span
              type="button"
              className="custom-tooltip-btn2 green-2 text-white rounded-2 ms-2"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Create User"
            >
              <AiOutlinePlus />
            </span>
          </div>
        </div>

        <div className="mx-4 mb-4 py-4 custom-border-radius custom-shadow bg-custom-white scroller-div">
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

            <Table responsive>
              <thead>
                <tr className="table-head">
                  <th onClick={() => handleSort("id")}>
                    <div className="d-flex justify-content-between align-items-center mx-3">
                      #
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

                  <th onClick={() => handleSort("picture")}>
                    <div className="d-flex justify-content-between align-items-center mx-3">
                      PICTURE
                      {orderBy === "picture" && (
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
                      {orderBy !== "picture" && (
                        <div className="d-flex flex-column">
                          <TiArrowSortedUp className="text-light-gray" />
                          <TiArrowSortedDown className="text-light-gray" />
                        </div>
                      )}
                    </div>
                  </th>

                  <th onClick={() => handleSort("name")}>
                    <div className="d-flex justify-content-between text-end align-items-center mx-3">
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
                    <div className="d-flex justify-content-between align-items-center mx-3">
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
                    <div className="d-flex justify-content-between align-items-center mx-3">
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
                  <th onClick={() => handleSort("role")}>
                    <div className="d-flex justify-content-between align-items-center mx-3">
                      ROLE
                      {orderBy === "role" && (
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
                      {orderBy !== "role" && (
                        <div className="d-flex flex-column">
                          <TiArrowSortedUp className="text-light-gray" />
                          <TiArrowSortedDown className="text-light-gray" />
                        </div>
                      )}
                    </div>
                  </th>
                  <th onClick={() => handleSort("action")}>
                    <div className="d-flex justify-content-end align-items-center pe-3">
                      <span className="me-3">ACTION</span>
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
                {filteredData.slice(0, entriesPerPage).map((row) => (
                  <tr key={row.id}>
                    <td className="text-center fw-bold">{row.id}</td>
                    <td className="ps-4">
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src="user1.png"
                          alt="img"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>
                      <div className="me-5">
                        {row.category.map((category) => (
                          <button
                            key={category}
                            className={`btn btn-success border-0 btn-width mx-1 ${
                              category === "Questions"
                                ? "navy-2"
                                : category === "Bug"
                                ? "red-2"
                                : category === "Support"
                                ? "black-2"
                                : category === "New Installation"
                                ? "green-3"
                                : "green-2"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn green-2 text-white px-0 border-0 px-3 agent"
                        style={{
                          background: "#6FD943 !important",
                          borderRadius: "13px",
                        }}
                      >
                        {row.role}
                      </button>
                    </td>
                    <td className="text-center">
                      <div className="mx-2 d-flex justify-content-center">
                        <span
                          type="button"
                          className="custom-tooltip-btn orange-2 text-white custom-border-radius me-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Reset Password"
                        >
                          <RiKey2Fill />
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
            <p className="p-4">
              Showing 1 to {Math.min(entriesPerPage, data.length)} of{" "}
              {data.length} entries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

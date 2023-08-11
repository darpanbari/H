import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import Table from "react-bootstrap/Table";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFileEarmarkPlus } from "react-icons/bs";
import SearchBtn from "../../components/SearchBtn";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import TopHeaderModal from "../../components/CreateWorkspace";
import { TbVectorBezier } from "react-icons/tb";
import UseTooltip from "../../components/useTooltip";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import EntriesPerPage from "../../components/EntriesPerPage";

const KnowledgeBase = () => {
  const [data] = useState([
    {
      id: 1,
      title: "How to Create a new Database",
      description:
        "McClintock's 15th century claims:Whether a medieval typesetter chose to garble a well-known.Survived not only four centuries of letter-by-letter resetting.",
      category: "Basic Usage",
    },
    {
      id: 2,
      title: "Best Format for Logo to Upload",
      description:
        "McClintock's 15th century claims:Whether a medieval typesetter chose to garble a well-known.",
      category: "Installation",
    },
    {
      id: 3,
      title: "Users Live System Notifications",
      description:
        "McClintock's 15th century claims: The 1914 Loeb Classical Library Edition ran out of room on page. Survived not only four centuries of letter-by-letter resetting. Survived not only four centuries of letter-by-letter resetting.",
      category: "Basic Usage",
    },
    {
      id: 4,
      title: "Tickets Files Attachment Support",
      description:
        "Whether a medieval typesetter chose to garble a well-known.",
      category: "Google reCaptcha",
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
      <div style={{width:"0px"}}>
          <SideNavbar />
        </div>

        <div className="d-flex flex-column flex-grow-1 right-container">
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

          <div className="d-flex flex-col2 justify-content-between ">
            <div className="mt-4 mb-2 ms-4">
              <h5 className="mb-0">Manage Knowledge</h5>
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
                      Knowledge Base
                    </li>
                  </ol>
                </nav>
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white rounded-2 ms-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Import"
              >
                <BsFileEarmarkPlus />
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
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white rounded-2 ms-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Knowledge Category"
              >
                <TbVectorBezier />
              </span>
            </div>
          </div>
          <div>
            <div className="border-4 py-4 mx-4 custom-shadow custom-border-radius bg-custom-white scroller-div">
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
                  <thead>
                    <tr className="table-head">
                      <th className="" onClick={() => handleSort("id")}>
                        <div className="d-flex justify-content-between ps-3 align-items-center">
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
                      <th className="" onClick={() => handleSort("title")}>
                        <div className="d-flex justify-content-between align-items-center">
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
                        onClick={() => handleSort("description")}
                      >
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
                      <th className="" onClick={() => handleSort("category")}>
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

                      <th className="" onClick={() => handleSort("action")}>
                        <div className="d-flex justify-content-end align-items-center me-5">
                          <span className="me-2">ACTION</span>
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
                    {filteredData.slice(0, entriesPerPage).map((know) => (
                      <tr key={know.id}>
                        <td className="ps-4 fw-bold" style={{ width: "40px" }}>
                          {know.id}
                        </td>
                        <td style={{ maxWidth: "350px" }}>{know.title}</td>
                        <td style={{ maxWidth: "600px" }}>
                          {know.description}
                        </td>
                        <td style={{}}>{know.category}</td>
                        <td className="text-end ">
                          <div className="ms-auto justify-content-center d-flex">
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
                  Showing 1 to {Math.min(filteredData.length, entriesPerPage)} of{" "}
                  {filteredData.length} entries
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowledgeBase;

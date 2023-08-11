import React, { useState, useEffect } from "react";
import SideNavbar from "../components/SideNavbar";
import Table from "react-bootstrap/Table";
import { AiOutlinePlus } from "react-icons/ai";
import SearchBtn from "../components/SearchBtn";
import AdminProfileLogout from "../components/AdminProfileLogout";
import HeaderMessageBox from "../components/HeaderMessageBox";
import LanguageBtn from "../components/LanguageBtn";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import UseTooltip from "../components/useTooltip";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import TopHeaderModal from "../components/CreateWorkspace";
import AdminSelectBtn from "../components/AdminInfotechBtn";
import EntriesPerPage from "../components/EntriesPerPage";

const FAQ = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "What is TicketGo?",
      description:
        "TicketGo helps you to manage the formal request or inquiries submitted by a customer or user to seek assistance or resolution for an issue or problem related to a product or service.",
    },
    {
      id: 2,
      title: "How do I create a support ticket?",
      description:
        "To create a support ticket, navigate to the designated support ticket system or platform and provide essential details such as your name, contact information, a description of the issue, and any relevant attachments or screenshots.",
    },
    {
      id: 3,
      title: "How long does it take to receive a response to a support ticket?",
      description:
        "The response time for support tickets may vary depending on the specific company or service provider. Typically, the goal is to provide a prompt response within a specified timeframe, such as 24 hours or one business day.",
    },
    {
      id: 4,
      title:
        "What information should I include when submitting a support ticket?",
      description:
        "When submitting a support ticket, it's important to include clear and detailed information about the issue you are facing. Be sure to provide any relevant error messages, steps to reproduce the problem, and any additional information that can assist the support team in resolving the issue effectively.",
    },
  ]);

  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  useEffect(() => {
    const storedOrderBy = localStorage.getItem("faqOrderBy");
    const storedOrder = localStorage.getItem("faqOrder");

    if (storedOrderBy && storedOrder) {
      setOrderBy(storedOrderBy);
      setOrder(storedOrder);
    }
  }, []);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");

    localStorage.setItem("faqOrderBy", property);
    localStorage.setItem("faqOrder", isAsc ? "desc" : "asc");

    const sortedData = [...data].sort((a, b) => {
      if (property === "id" || property === "action") {
        // Numeric sorting
        return isAsc ? a[property] - b[property] : b[property] - a[property];
      } else {
        // String sorting
        return isAsc
          ? a[property].localeCompare(b[property])
          : b[property].localeCompare(a[property]);
      }
    });

    setData(sortedData);
  };

  const handleEntriesPerPage = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
  };

  // search
  const [filteredData, setFilteredData] = useState(data);

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
              <h5 className="mb-0">Manage FAQ</h5>
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
                    FAQ
                  </li>
                </ol>
              </nav>
            </div>

            <div className="breadcrumb-rightside-btn me-5">
              <span
                type="button"
                className="custom-tooltip-btn2 text-white green-2 rounded-2 ms-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Create"
              >
                <AiOutlinePlus />
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
                    {filteredData.slice(0, entriesPerPage).map((faq) => (
                      <tr key={faq.id}>
                        <td className="ps-4 fw-bold" style={{ width: "140px" }}>
                          {faq.id}
                        </td>
                        <td style={{ maxWidth: "100px" }}>{faq.title}</td>
                        <td style={{ maxWidth: "180px" }}>{faq.description}</td>
                        <td className="text-end ">
                          <div className="me-5 d-flex justify-content-end">
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
                  Showing 1 to {Math.min(data.length, entriesPerPage)} of{" "}
                  {data.length} entries
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;

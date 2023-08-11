import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import Table from "react-bootstrap/Table";
import { RiDeleteBin2Line, RiDeleteBin5Line } from "react-icons/ri";
import { ImSearch } from "react-icons/im";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
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
import { BiSolidEdit } from "react-icons/bi";
import ModalComponent from "../../components/ModalComponent";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";

const Holidays = () => {
  const [data] = useState([
    {
      occasion: "celebration",
      startdate: "19-05-2023",
      enddate: "20-05-2023",
    },
    {
      occasion: "party",
      startdate: "25-05-2023",
      enddate: "26-05-2023",
    },
    {
      occasion: "good friday",
      startdate: "06-07-2023",
      enddate: "06-07-2023",
    },
    {
      occasion: "event",
      startdate: "24-06-2023",
      enddate: "24-06-2023",
    },
    {
      occasion: "krishna janmashtami",
      startdate: "07-09-2023",
      enddate: "07-09-2023",
    },
    {
      occasion: "indian independence day",
      startdate: "15-08-2023",
      enddate: "15-08-2023",
    },
    {
      occasion: "parsi new year's day",
      startdate: "16-08-2023",
      enddate: "16-08-2023",
    },
    {
      occasion: "raksha bandhan",
      startdate: "30-08-2023",
      enddate: "30-08-2023",
    },
    {
      occasion: "ganesh chaturthi",
      startdate: "19-09-2023",
      enddate: "19-09-2023",
    },
    {
      occasion: "gandhi jayanti",
      startdate: "02-10-2023",
      enddate: "02-10-2023",
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

            <div className="breadcrumb-rightside-btn me-0 d-flex">
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white ms-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Export Tickets CSV File"
              >
                <BsFileEarmarkPlus />
              </span>
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white ms-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Export Tickets CSV File"
              >
                <AiOutlineCalendar />
              </span>
              <div className="breadcrumb-rightside-btn me-5 d-flex">
                <ModalComponent
                  modalTitle="Create New Holiday"
                  modalContent={
                    <>
                      <div>
                        <GenerateWithAiBtn />
                      </div>
                      <form className="mt-3">
                        <div className="mb-3 w-100 px-2">
                          <label htmlFor="Occasion" className="form-label">
                            Occasion
                          </label>
                          <input
                            id="Occasion"
                            className="form-control"
                            placeholder="Enter Occasion"
                          />
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
                          Synchronize in Google Calendar ?
                          </label>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                           
                          </div>
                        </div>
                      </form>
                    </>
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <div className="border-4 py-4 mx-4 custom-border-radius custom-shadow bg-custom-white">
              <div className="d-flex ticket-top-container justify-content-end mx-4">
                <Row
                  className="row justify-content-end ms-auto"
                  style={{ width: "60%" }}
                >
                  <Col xxl={3} lg={3} md={6} sm={12} className="w-50">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" placeholder="dd-mm-yyyy" />
                  </Col>
                  <Col xxl={3} lg={3} md={6} sm={12} className="w-50">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" placeholder="dd-mm-yyyy" />
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
            <div className="mt-4">
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
                        <th className="" onClick={() => handleSort("occasion")}>
                          <div className="d-flex justify-content-between px-3 align-items-center">
                            OCCASION
                            {orderBy === "occasion" && (
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
                            {orderBy !== "occasion" && (
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
                      {filteredData.slice(0, entriesPerPage).map((cpolicy, i) => (
                        <tr key={i}>
                          <td className="ps-4">{cpolicy.occasion}</td>

                          <td>{cpolicy.startdate}</td>

                          <td>{cpolicy.enddate}</td>
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

export default Holidays;

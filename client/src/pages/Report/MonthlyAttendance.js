import React, { useState, useEffect } from "react";
import SideNavbar from "../../components/SideNavbar";
import Table from "react-bootstrap/Table";
import { AiOutlinePlusCircle } from "react-icons/ai";
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

const MonthlyReport = () => {
  const [data, setData] = useState([
    {
      userId: 1234567890,
      name: "aaa",
      department: "App Dev",
      designation: "HR",
      location: "Bangalore",
      date: "02-08-2023",
    },
    {
      userId: 1234567891,
      name: "John",
      department: "Web Dev",
      designation: "Developer",
      location: "Mumbai",
      date: "04-08-2023",
    },
    {
      userId: 1234567892,
      name: "pearl smith",
      department: "Game Dev",
      designation: "Developer",
      location: "Pune",
      date: "05-08-2023",
    },
    {
      userId: 1234567893,
      name: "Nell Macdonald",
      department: "Game Dev",
      designation: "Designer",
      location: "Pune",
      date: "05-08-2023",
    },
    {
      userId: 1234567894,
      name: "Stuart Fitzpatrick",
      department: "Web Dev",
      designation: "Developer",
      location: "Mumbai",
      date: "05-08-2023",
    },
    {
      userId: 1234567895,
      name: "Emerald Colon",
      department: "App Dev",
      designation: "Designer",
      location: "Mumbai",
      date: "06-08-2023",
    },
    {
      userId: 1234567896,
      name: "abc",
      department: "App Dev",
      designation: "Developer",
      location: "Pune",
      date: "07-08-2023",
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

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  
  const handleFilterData = () => {
    const filteredData = data.filter((item) => {
      const itemDate = new Date(item.date.split("-").reverse().join("-")).getTime();
      const fromDateTime = new Date(fromDate).getTime() 
      const toDateTime = new Date(toDate).getTime()

      const dateFilter = (!fromDateTime || itemDate >= fromDateTime) && (!toDateTime || itemDate <= toDateTime);
      const locationFilter = !selectedLocation || item.location === selectedLocation;

      return dateFilter && locationFilter;
    });

    setFilteredData(filteredData);
  };

  useEffect(() => {
    handleFilterData();
    setFilteredData(data);
  }, [fromDate, toDate, selectedLocation]);

  const handleSearchData = (searchedData) => {
    setFilteredData(searchedData);
  };


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
              <h5 className="mb-0">Monthly Attendance</h5>
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
                    Attendance
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div>
            <div className="border-4 py-4 mx-4 custom-border-radius custom-shadow bg-custom-white">
              <div className="d-flex ticket-top-container justify-content-end mx-4">
                <Row
                  className="row justify-content-end ms-auto"
                  style={{ width: "100%" }}
                >
                  <Col xxl={3} lg={3} md={6} sm={12}>
                    <Form.Label>From Date</Form.Label>
                    <Form.Control
                      type="date"
                      className="p-2"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </Col>
                  <Col xxl={3} lg={3} md={6} sm={12}>
                    <Form.Label>To Date</Form.Label>
                    <Form.Control
                      type="date"
                      className="p-2"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </Col>
                  <Col xxl={3} lg={3} md={6} sm={12}>
                    <Form.Label>Location</Form.Label>
                    <Form.Select
                      className="p-2"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                      <option value="">Select Location</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                      <option value="Bangalore">Bangalore</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <div className="mx-1 mt-4 pt-1 d-flex align-items-center text-end justify-content-end">
                    <button
                      type="button"
                      className="custom-tooltip-btn2 shadow-sm green-2 border-0 text-white custom-border-radius ms-3"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Get "
                      onClick={handleFilterData}
                      style={{padding:"19px 90px"}}
                    >
                     <span className="d-flex align-items-center me-2"><AiOutlinePlusCircle/></span> <span>Get</span>
                    </button>
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
                        <th onClick={() => handleSort("userId")}>
                          <div className="d-flex justify-content-between ms-3 align-items-center">
                            USER ID
                            {orderBy === "userId" && (
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
                            {orderBy !== "userId" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th className="" onClick={() => handleSort("name")}>
                          <div className="d-flex justify-content-between align-items-center">
                            FULL NAME
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
                        <th onClick={() => handleSort("department")}>
                          <div className="d-flex justify-content-between align-items-center">
                            DEPARTMENT
                            {orderBy === "department" && (
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
                            {orderBy !== "department" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("designation")}>
                          <div className="d-flex justify-content-between align-items-center">
                            DESIGNATION
                            {orderBy === "designation" && (
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
                            {orderBy !== "designation" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("location")}>
                          <div className="d-flex justify-content-between align-items-center">
                            LOCATION
                            {orderBy === "location" && (
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
                            {orderBy !== "location" && (
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
                      </tr>
                    </thead>
                    <tbody className="y-center">
                      {filteredData.slice(0, entriesPerPage).map((ticket, i) => (
                        <tr key={i}>
                          <td className="ps-4 fw-bold">
                            <button
                              type="button"
                              className="btn btn-outline-success font-size-14 py-2"
                            >
                              {ticket.userId}
                            </button>
                          </td>
                          <td>{ticket.name}</td>
                          <td>{ticket.department}</td>

                          <td>{ticket.designation}</td>
                          <td>{ticket.location}</td>
                          <td>{ticket.date}</td>
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

export default MonthlyReport;

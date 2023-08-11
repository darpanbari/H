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
import { TbEye } from "react-icons/tb";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";
import ModalComponent from "../../components/ModalComponent";
import Rating from "@mui/material/Rating";

const Indicator = () => {
  const [data, setData] = useState([
    {
      branch: "india",
      department: "Bangalore",
      designation: "Financials",
      overallRating: "3.4",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
    {
      branch: "Gujarat",
      department: "Surat",
      designation: "Computer technology",
      overallRating: "2.2",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
    {
      branch: "Japan",
      department: "Tokyo",
      designation: "Industrials",
      overallRating: "2.6",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
    {
      branch: "Gujarat",
      department: "Ahmadabad",
      designation: "Technology",
      overallRating: "3.0",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
    {
      branch: "UK",
      department: "London",
      designation: "Industrials",
      overallRating: "4.0",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
    {
      branch: "France",
      department: "Paris",
      designation: "Financials",
      overallRating: "3.6",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
    {
      branch: "USA",
      department: "New York",
      designation: "IT Hubs",
      overallRating: "3.4",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
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

  // ratings
  const [value, setValue] = useState(0)
  
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
              <h5 className="mb-0">Manage Indicator</h5>
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
                    Indicator
                  </li>
                </ol>
              </nav>
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <ModalComponent
                modalTitle="Create New Company Policy"
                modalWidth="custom-width-2"
                modalContent={
                  <>
                    <div>
                      <GenerateWithAiBtn />
                    </div>
                    <form className="mt-3">
                      <div className="mb-3 w-100 px-2">
                        <label htmlFor="awardType" className="form-label">
                          Branch
                        </label>
                        <select id="awardType" className="form-select">
                          <option value="">Select Branch</option>
                          <option value="India">India</option>
                          <option value="Gujrat">Gujrat</option>
                        </select>
                      </div>
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="awardType" className="form-label">
                            Department
                          </label>
                          <select id="awardType" className="form-select">
                            <option value="">Select Department</option>
                          </select>
                        </div>
                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="awardType" className="form-label">
                            Destination
                          </label>
                          <select id="awardType" className="form-select">
                            <option value="">Select Destination</option>
                          </select>
                        </div>
                      </div>
                      <div className="my-4">
                        <label className="form-label border-bottom pb-2 w-100 ">
                          Behavioural Competencies
                        </label>
                        <div className="d-flex justify-content-between mx-1">
                          <p className="font-size-14">Business Process</p>
                          <Rating
                            name="simple-controlled"
                            className="orange-1"
                            style={{marginRight:"100px"}}
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label border-bottom pb-2 w-100 ">
                        Organizational Competencies
                        </label>
                        <div className="d-flex justify-content-between mx-1">
                          <p className="font-size-14">Leadership</p>
                          <Rating
                            name="simple-controlled"
                            className="orange-1"
                            style={{marginRight:"100px"}}
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label border-bottom pb-2 w-100 ">
                        Technical Competencies
                        </label>
                        <div className="d-flex justify-content-between mx-1">
                          <p className="font-size-14">Oral Communication</p>
                          <Rating
                            name="simple-controlled"
                            className="orange-1"
                            style={{marginRight:"100px"}}
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label border-bottom pb-2 w-100 ">
                        Productivity measures
                        </label>
                        <div className="d-flex justify-content-between mx-1">
                          <p className="font-size-14">Allocating Resources</p>
                          <Rating
                            name="simple-controlled"
                            className="orange-1"
                            style={{marginRight:"100px"}}
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </div>
                        <div className="d-flex justify-content-between mx-1">
                          <p className="font-size-14">Project Management</p>
                          <Rating
                            name="simple-controlled"
                            className="orange-1"
                            style={{marginRight:"100px"}}
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </div>
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
                      <SearchBtn />
                    </div>
                  </div>

                  <Table hover>
                    <thead className="table-head">
                      <tr>
                        <th onClick={() => handleSort("branch")}>
                          <div className="d-flex justify-content-between px-3 align-items-center">
                            BRANCH
                            {orderBy === "branch" && (
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
                            {orderBy !== "branch" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th
                          className=""
                          onClick={() => handleSort("department")}
                        >
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
                        <th onClick={() => handleSort("overallRating")}>
                          <div className="d-flex justify-content-between align-items-center">
                            OVERALL RATING
                            {orderBy === "overallRating" && (
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
                            {orderBy !== "overallRating" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("addedBy")}>
                          <div className="d-flex justify-content-between align-items-center">
                            ADDED BY
                            {orderBy === "addedBy" && (
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
                            {orderBy !== "addedBy" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("createdAt")}>
                          <div className="d-flex justify-content-between align-items-center">
                            CREATED AT
                            {orderBy === "createdAt" && (
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
                            {orderBy !== "createdAt" && (
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
                      {data.slice(0, entriesPerPage).map((award, i) => (
                        <tr key={i}>
                          <td className="ps-4">{award.branch}</td>
                          <td>{award.department}</td>
                          <td>{award.designation}</td>
                          <td className="d-flex">
                            <Rating
                              name="read-only"
                              value={award.overallRating}
                              precision={0.5}
                              className="orange-1"
                              readOnly
                            />
                            <p className="mb-2">{`(${award.overallRating})`}</p>
                          </td>
                          <td>{award.addedBy}</td>
                          <td>{award.createdAt}</td>
                          <td>
                            <div className="ms-2 d-flex justify-content-start">
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

export default Indicator;

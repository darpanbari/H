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
import { PiCubeFocusDuotone, PiDownloadSimpleBold } from "react-icons/pi";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";
import ModalComponent from "../../components/ModalComponent";
import { CgSoftwareUpload } from "react-icons/cg";

const Document = () => {
  const [data] = useState([
    {
      name: "All Users",
      role: "All",
      description: "Follow these step-by-step instructions to start a document in Microsoft Word."
    },
    {
      name: "Employee Document",
      role: "staff",
      description: "Follow these step-by-step instructions to start a document in Microsoft Word."
    },
    {
      name: "HR Document",
      role: "All",
      description: "Follow these step-by-step instructions to start a document in Microsoft Word."
    },
    {
      name: "Contracts and Agreements",
      role: "All",
      description: "Follow these step-by-step instructions to start a document in Microsoft Word."
    },
    {
      name: "Research Papers",
      role: "staff",
      description: "Follow these step-by-step instructions to start a doc"
    }
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

  const handleDownloadImage = () => {
    const imageUrl = "/certificate.jpg";
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.png";
    link.click();
  };

  const handlePreviewImage = () => {
    const imageUrl = "/certificate.jpg";
    window.open(imageUrl);
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
                  modalTitle="Create New Document"
                  modalContent={
                    <>
                      <div>
                        <GenerateWithAiBtn/>
                      </div>
                      <form className="mt-3">
                        <div className="mb-3 w-100 px-2">
                          <label htmlFor="Name" className="form-label">
                            Name
                          </label>
                          <input
                            id="Name"
                            className="form-control"
                            placeholder="Enter Document Name"
                          />
                        </div>

                        <div className="d-flex">
                          <div className="mb-3 w-50 mx-2">
                          <label htmlFor="Name" className="form-label">
                            Document
                          </label>
                          <label
                            htmlFor="fileInput1"
                            className="btn green-2 justify-content-center setting-fcont-btn text-white d-flex align-items-center font-size-12 mb-1 border-0"
                          >
                            <CgSoftwareUpload className="me-1 fs-6 text-white" />
                            Choose file here
                          </label>
                        
                          </div>
                          <div className="mb-3 w-50 mx-2">
                          <label htmlFor="awardType" className="form-label">
                           Role
                          </label>
                          <select id="awardType" className="form-select">
                            <option value="">All</option>
                            <option value="staff">Staff</option>
                          </select>
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
                        <th onClick={() => handleSort("name")}>
                          <div className="d-flex justify-content-between px-3 align-items-center">
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

                        <th onClick={() => handleSort("document")}>
                          <div className="d-flex justify-content-between align-items-center">
                            DOCUMENT
                            {orderBy === "document" && (
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
                            {orderBy !== "document" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th className="" onClick={() => handleSort("role")}>
                          <div className="d-flex justify-content-between align-items-center">
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
                          <td className="ps-4" style={{width:"600px"}}>
                            {complaints.name}
                          </td>
                          <td
                            className=""
                            
                          >
                            <div className="mx-2 d-flex justify-content-start">
                              <span
                                type="button"
                                className="custom-tooltip-btn green-3 text-white custom-border-radius me-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Download"
                                onClick={handleDownloadImage}
                              >
                                < PiDownloadSimpleBold/>
                              </span>
                              <span
                                type="button"
                                className="custom-tooltip-btn custom-border-radius text-white bg-secondary"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Preview"
                                onClick={handlePreviewImage}
                              >
                                < PiCubeFocusDuotone/>
                              </span>
                            </div>
                          </td>
                          <td >{complaints.role}</td>
                          
                          

                          <td className="text-truncate" style={{ maxWidth: "0px", paddingRight:"200px" }}>
                            {complaints.description}
                          </td>
                          <td
                            className=""
                            
                          >
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

export default Document;


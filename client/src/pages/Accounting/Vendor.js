import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import Table from "react-bootstrap/Table";
import { PiCirclesFourBold } from "react-icons/pi";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import SearchBtn from "../../components/SearchBtn";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import TopHeaderModal from "../../components/CreateWorkspace";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import UseTooltip from "../../components/useTooltip";
import { TbEye } from "react-icons/tb";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import EntriesPerPage from "../../components/EntriesPerPage";

const Vendor = () => {
  const [data] = useState([
    {
      id: "#VEND00001",
      name: "Antikstion Grum",
      contact: "04893258663",
      email: "antgrumik30@example.com",
      balance: "$966,549.5",
    },
    {
      id: "#VEND00002",
      name: "Jennifer Ellison",
      contact: "04893212663",
      email: "jennifer@client.com",
      balance: "$-500.0",
    },
    {
      id: "#VEND00003",
      name: "Anne George",
      contact: "04893258663",
      email: "perani1567@3mkz.com",
      balance: "$14,897.5",
    },
    {
      id: "#VEND00004",
      name: "Ira Bradley",
      contact: "04893258663",
      email: "negefuricu@mailinator.com",
      balance: "$79,187.3",
    },
    {
      id: "#VEND00005",
      name: "Maia",
      contact: "04893258663",
      email: "maia@lodores.com",
      balance: "$24,403.0",
    },
    {
      name: "Kirsten Benson",
      email: "xizexamepa@mailinator.com",
      balance: "$0.0",
    },
    {
      name: "Abel Callahan",
      email: "tofagugowa@mailinator.com",
      balance: "$0.0",
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

          <div className="d-flex flex-col2 justify-content-between">
            <div className="mt-4 mb-2 ms-4">
              <h5 className="mb-0">Manage Customers</h5>
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
                  <li
                    className="breadcrumb-item text-secondary"
                    aria-current="page"
                  >
                    Vendor
                  </li>
                </ol>
              </nav>
            </div>

            <div className="me-5 d-flex breadcrumb-rightside-btn">
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
                title="Grid View"
              >
                <PiCirclesFourBold />
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
            </div>
          </div>

          <div>
            <div className="">
              <div className="border-4 py-4 bg-custom-white mx-4 mb-4 custom-border-radius custom-shadow scroller-div">
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
                        <th onClick={() => handleSort("id")}>
                          <div className="d-flex justify-content-between px-3 align-items-center">
                            #
                            {orderBy === "id" && (
                              <span>
                                {order === "asc" ? (
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

                        <th className="" onClick={() => handleSort("name")}>
                          <div className="d-flex justify-content-between align-items-center">
                            NAME
                            {orderBy === "name" && (
                              <span>
                                {order === "asc" ? (
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
                        <th onClick={() => handleSort("contact")}>
                          <div className="d-flex justify-content-between align-items-center">
                            CONTACT
                            {orderBy === "contact" && (
                              <span>
                                {order === "asc" ? (
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
                            {orderBy !== "contact" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("email")}>
                          <div className="d-flex justify-content-between align-items-center">
                            EMAIL
                            {orderBy === "email" && (
                              <span>
                                {order === "asc" ? (
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

                        <th onClick={() => handleSort("balance")}>
                          <div className="d-flex justify-content-between align-items-center">
                            BALANCE
                            {orderBy === "balance" && (
                              <span>
                                {order === "asc" ? (
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
                            {orderBy !== "balance" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th className="" onClick={() => handleSort("action")}>
                          <div className="d-flex justify-content-around align-items-center">
                            ACTION
                            {orderBy === "action" && (
                              <span>
                                {order === "asc" ? (
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
                      {filteredData.slice(0, entriesPerPage).map((ticket, i) => (
                        <tr key={i}>
                          <td
                            className="text-start ps-4 fw-bold"
                            style={{ maxWidth: "80px" }}
                          >
                            {ticket.id ? (
                              <button
                                type="button"
                                className="btn btn-outline-success font-size-14 py-2"
                              >
                                {ticket.id}
                              </button>
                            ) : (
                              `--`
                            )}
                          </td>
                          <td style={{ maxWidth: "80px" }}>{ticket.name}</td>
                          <td style={{ maxWidth: "80px" }}>{ticket.contact}</td>
                          <td style={{ maxWidth: "110px" }}>{ticket.email}</td>

                          <td style={{ maxWidth: "0px" }}>{ticket.balance}</td>
                          <td
                            className="text-center"
                            style={{ maxWidth: "0px" }}
                          >
                            {ticket.id ? (
                              <div className="mx-2 d-flex justify-content-center">
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
                            ) : (
                              <div className="mx-2 d-flex justify-content-center">
                                <span
                                  type="button"
                                  className="custom-tooltip-btn bg-sky-2 text-white custom-border-radius"
                                >
                                  <BiSolidEdit />
                                </span>
                              </div>
                            )}
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

export default Vendor;

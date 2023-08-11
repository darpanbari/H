import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import Table from "react-bootstrap/Table";
import {
  PiArrowLeftBold,
} from "react-icons/pi";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import UseTooltip from "../../components/useTooltip";
import TopHeaderModal from "../../components/CreateWorkspace";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import { LuTable2 } from "react-icons/lu";
import { GrAttachment } from "react-icons/gr";
import { FaRegCommentDots } from "react-icons/fa";

const Bugs = () => {
  const [data] = useState([
    {
      name: {
        desc: "Login page failure",
        sts: "Newsletter Templates",
      },
      bugStatus: "Confirmed",
      priority: "Low",
      endDate: "23 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "3",
        comment: "6",
      },
    },
    {
        name: {
          desc: "Forgot password error",
          sts: "Newsletter Templates",
        },
        bugStatus: "Confirmed",
        priority: "Medium",
        endDate: "21 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/mick.jpg",
        attachment: {
          attach: "1",
          comment: "3",
        },
      },
      {
        name: {
          desc: "Validation remaining",
          sts: "Newsletter Templates",
        },
        bugStatus: "Unconfirmed",
        priority: "High",
        endDate: "23 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/user-3.jpg",
        attachment: {
          attach: "3",
          comment: "6",
        },
      },
      {
        name: {
          desc: "Login page failure",
          sts: "Newsletter Templates",
        },
        bugStatus: "Confirmed",
        priority: "Low",
        endDate: "23 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/user-4.jpg",
        attachment: {
          attach: "2",
          comment: "7",
        },
      },
      {
        name: {
          desc: "Login page failure",
          sts: "Newsletter Templates",
        },
        bugStatus: "Confirmed",
        priority: "Low",
        endDate: "23 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "3",
          comment: "6",
        },
      },
      {
        name: {
          desc: "Login page failure",
          sts: "Newsletter Templates",
        },
        bugStatus: "Confirmed",
        priority: "Medium",
        endDate: "23 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "3",
          comment: "6",
        },
      },
      {
        name: {
          desc: "Login page failure",
          sts: "Newsletter Templates",
        },
        bugStatus: "Confirmed",
        priority: "Low",
        endDate: "23 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "3",
          comment: "6",
        },
      },
      {
        name: {
          desc: "Login page failure",
          sts: "Newsletter Templates",
        },
        bugStatus: "Confirmed",
        priority: "High",
        endDate: "23 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "3",
          comment: "6",
        },
      },
      {
        name: {
          desc: "Login page failure",
          sts: "Newsletter Templates",
        },
        bugStatus: "Confirmed",
        priority: "Low",
        endDate: "23 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "3",
          comment: "6",
        },
      },
      {
        name: {
          desc: "Login page failure",
          sts: "Newsletter Templates",
        },
        bugStatus: "Confirmed",
        priority: "Low",
        endDate: "23 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "3",
          comment: "6",
        },
      },
      {
        name: {
          desc: "Login page failure",
          sts: "Newsletter Templates",
        },
        bugStatus: "Confirmed",
        priority: "Medium",
        endDate: "23 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "3",
          comment: "6",
        },
      },
      {
        name: {
          desc: "Login page failure",
          sts: "Newsletter Templates",
        },
        bugStatus: "Confirmed",
        priority: "Low",
        endDate: "11 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "3",
          comment: "6",
        },
      },
      {
        name: {
          desc: "Forgot password error",
        },
        bugStatus: "Confirmed",
        priority: "High",
        endDate: "08 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "7",
          comment: "2",
        },
      },
      {
        name: {
          desc: "Forgot password error",
        },
        bugStatus: "Confirmed",
        priority: "Medium",
        endDate: "08 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "7",
          comment: "2",
        },
      },
      {
        name: {
          desc: "Forgot password error",
        },
        bugStatus: "Confirmed",
        priority: "Medium",
        endDate: "08 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "7",
          comment: "2",
        },
      },
      {
        name: {
          desc: "Forgot password error",
        },
        bugStatus: "Confirmed",
        priority: "Low",
        endDate: "08 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "7",
          comment: "2",
        },
      },
      {
        name: {
          desc: "Forgot password error",
        },
        bugStatus: "Confirmed",
        priority: "High",
        endDate: "08 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "7",
          comment: "2",
        },
      },
      {
        name: {
          desc: "Forgot password error",
        },
        bugStatus: "Confirmed",
        priority: "Medium",
        endDate: "08 Jul 2024",
        createdBy: "Rajodiya Infotech",
        assignedTo: "/rajodiya.jpg",
        attachment: {
          attach: "7",
          comment: "2",
        },
      },
  ]);


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
              <h5 className="mb-0">Manage Bug Report</h5>
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
                  <li className="breadcrumb-item" aria-current="page">
                    Project
                  </li>
                  <li
                    className="breadcrumb-item text-secondary"
                    aria-current="page"
                  >
                    Bug Report
                  </li>
                </ol>
              </nav>
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white ms-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Card View"
              >
                <LuTable2 />
              </span>
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white ms-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Back"
              >
                <PiArrowLeftBold />
              </span>
            </div>
          </div>

          <div>
            <div className="">
              <div className="border-4 pb-2 m-4 mt-0 custom-border-radius bg-custom-white custom-shadow scroller-div">
                <div className="table-responsive1">
                  <Table hover>
                    <thead className="table-head">
                      <tr>
                        <th className="ps-4"><div>NAME</div></th>
                        <th><div>BUG STATUS</div></th>
                        <th><div>PRIORITY</div></th>
                        <th><div>END DATE</div></th>
                        <th><div>CREATED BY</div></th>
                        <th><div>ASSIGNED TO</div></th>
                        <th><div></div></th>
                        
                      </tr>
                    </thead>
                    <tbody className="y-center">
                      {data.map((ss, i) => (
                        <tr key={i}>
                          <td style={{width:"29%"}}>
                            <div className="d-flex align-items-center justify-content-between ps-3 me-5 py-1">
                              <div>
                                <div className="font-size-12 fw-bold green-1">
                                  {ss.name.desc}
                                </div>
                                <div className="fw-normal text-secondary">
                                  {ss.name.sts}
                                </div>
                              </div>
                              <button className="btn green-2 font-size-12 text-white btn-width1">Owner</button>
                            </div>
                          </td>

                          <td>{ss.bugStatus}</td>
                          <td>
                            <button
                              className={`btn btn-success border-0 btn-width w-75 ${
                                ss.priority === "Low"
                                  ? "sky-2"
                                  : ss.priority === "Medium"
                                  ? "green-2"
                                  : ss.priority === "High"
                                  ? "orange-2"
                                  : "green-2"
                              }`}
                            >
                              {ss.priority}
                            </button>
                          </td>

                          
                          <td className="text-danger">{ss.endDate}</td>
                          <td>{ss.createdBy}</td>
                          <td style={{width:"15%"}}>
                          <img src={`${ss.assignedTo}`} alt="img" style={{height:"38px", width:"38px", borderRadius:"100%"}}/>
                          </td>
                          <td className="text-center">
                              <div>
                                <span className="me-2"><GrAttachment className="me-1"/>{ss.attachment.attach}</span>
                                <span><FaRegCommentDots className="me-1"/>{ss.attachment.comment}</span>
                              </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bugs;

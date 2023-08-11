import React from "react";
import SideNavbar from "../../components/SideNavbar";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { GrUnorderedList } from "react-icons/gr";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Avatar from "@mui/material/Avatar";
import ProjectCardMenuBar from "../../components/ProjectCardMenuBar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ProjectModalForm from "../../components/ProjectModalForm";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import TopHeaderModal from "../../components/CreateWorkspace";
import UseTooltip from "../../components/useTooltip";

const Project = () => {
  const projectData = [
    {
      shortForm: "NT",
      title: "Newsletter Templates",
      status: "OnHold",
      dueDate: "2023-05-19",
      description:
        "The goal of this project is to improve operational efficiency within the organization by implementing process automation.",
      members: [
        {
          image: "/user1.png",
        },
        {
          image: "/user-3.jpg",
        },
      ],
      tasks: 6,
      comments: 4,
    },
    {
      shortForm: "PI",
      title: "Payment Integration",
      status: "Ongoing",
      dueDate: "2023-05-19",
      description:
        "The goal of this project is to improve operational efficiency within the organization by implementing process automation.",
      members: [
        {
          image: "/user-3.jpg",
        },
        {
          image: "/user-4.jpg",
        },
        {
          image: "/user1.png",
        },
      ],
      tasks: 3,
      comments: 1,
    },
    {
      shortForm: "WL",
      title: "Website Launch",
      status: "Finished",
      dueDate: "2023-05-19",
      description:
        "The goal of this project is to improve operational efficiency within the organization by implementing process automation.",
      members: [
        {
          image: "/user1.png",
        },
      ],
      tasks: 3,
      comments: 0,
    },
    {
      shortForm: "WB",
      title: "Website Builder",
      status: "OnHold",
      dueDate: "2023-05-19",
      description:
        "The goal of this project is to improve operational efficiency within the organization by implementing process automation.",
      members: [
        {
          image: "/user-4.jpg",
        },
        {
          image: "/user1.png",
        },
        {
          image: "/user-3.jpg",
        },
      ],
      tasks: 1,
      comments: 0,
    },
    {
      shortForm: "CL",
      title: "Component Library",
      status: "Finished",
      dueDate: "2023-05-19",
      description:
        "Install test and QA servers and prerequisite software. Install test and QA servers and prerequisite....",
      members: [
        {
          image: "/user-3.jpg",
        },
      ],
      tasks: 1,
      comments: 0,
    },
    {
      shortForm: "BF",
      title: "Bootstrap Framework",
      status: "Ongoing",
      dueDate: "2023-05-19",
      description:
        "The goal of this project is to improve operational efficiency within the organization by implementing process automation.",
      members: [
        {
          image: "/user1.png",
        },
      ],
      tasks: 3,
      comments: 0,
    },
    {
      shortForm: "DU",
      title: "Dashboard UI",
      status: "Ongoing",
      dueDate: "2023-05-19",
      description:
        "The goal of this project is to improve operational efficiency within the organization by implementing process automation.",
      members: [
        {
          image: "/user-3.jpg",
        },
        {
          image: "/user1.png",
        },
      ],
      tasks: 1,
      comments: 0,
    },
    {
      shortForm: "L",
      title: "Licensed",
      status: "Ongoing",
      dueDate: "2023-05-18",
      description: "adsa",
      members: [
        {
          image: "/user1.png",
        },
        {
          image: "/user-3.jpg",
        },
        {
          image: "/user-4.jpg",
        },
      ],
      tasks: 1,
      comments: 0,
    },
    {
      shortForm: "TM",
      title: "Test Meme",
      status: "Ongoing",
      dueDate: "2023-05-18",
      description: "test",
      members: [
        {
          image: "/user-3.jpg",
        },
        {
          image: "/user-4.jpg",
        },
      ],
      tasks: 0,
      comments: 0,
    },
    {
      shortForm: "TM",
      title: "Test Meme",
      status: "Ongoing",
      dueDate: "2023-05-19",
      description: "test",
      members: [
        {
          image: "/user1.png",
        },
        {
          image: "/user1.png",
        },
      ],
      tasks: 1,
      comments: 0,
    },
    {
      shortForm: "PB",
      title: "Pemasangan Baru",
      status: "Ongoing",
      dueDate: "2023-05-18",
      description: "Nganu pasang bla bla",
      members: [
        {
          image: "/user-3.jpg",
        },
        {
          image: "/user1.png",
        },
        {
          image: "/user-4.jpg",
        },
      ],
      tasks: 1,
      comments: 0,
    },
  ];

  const colors = ["deepOrange", "blue", "green", "purple", "pink", "teal"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  UseTooltip();

  return (
    <>
      <div className="display-side d-flex">
        <div style={{width:"0px"}}>
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
              <h5 className="mb-0">Projects</h5>
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
                    Manage Project
                  </li>
                </ol>
              </nav>
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white rounded-2 ms-2 "
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Import"
              >
                <BsFileEarmarkPlus />
              </span>
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white rounded-2 ms-2 "
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="List View"
              >
                <GrUnorderedList />
              </span>
              <span
                type="button"
                className="custom-tooltip-btn2 green-2 text-white rounded-2 ms-2 "
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="create"
              >
                <AiOutlinePlus />
              </span>
            </div>
          </div>

          <div className="mx-4">
            <Row>
              <>
                {projectData.map((project, key) => (
                  <Col
                    key={key}
                    xxl={3}
                    xl={4}
                    lg={6}
                    md={6}
                    sm={12}
                    className="mb-4"
                  >
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                      style={{ width: "100%" }}
                    >
                      <Card.Header className="px-4 pt-4 border-0 position-relative rounded-4 bg-custom-white">
                        <div className="d-flex align-items-center">
                          <Avatar
                            sx={{
                              bgcolor: getRandomColor(), // Fetch a random background color
                            }}
                          >
                            {project.shortForm}
                          </Avatar>
                          <h6 className="mb-0 mx-2 text-purple">
                            {project.title}
                          </h6>
                          <div
                            className="position-absolute"
                            style={{ right: "0", top: "15px" }}
                          >
                            <ProjectCardMenuBar />
                          </div>
                        </div>
                      </Card.Header>
                      <Card.Body className="p-4">
                        <div className="d-flex justify-content-between">
                          <p
                            className={`rounded-4 text-center text-white mb-2 ${
                              project.status === "OnHold"
                                ? "bg-warning"
                                : project.status === "Ongoing"
                                ? "bg-secondary"
                                : project.status === "Finished"
                                ? "green-2"
                                : ""
                            }`}
                            style={{ fontSize: "12px", width: "55px" }}
                          >
                            {project.status}
                          </p>
                          <div>
                            <h6 className="project-dueDate-fs">
                              Due Date:{" "}
                              <span className="fw-normal">
                                {project.dueDate}
                              </span>
                            </h6>
                          </div>
                        </div>
                        <p className="my-2 pe-3 text-secondary font-size-12">
                          {project.description}
                        </p>
                        <h6 className="mt-3 text-secondary">MEMBERS</h6>
                        <div className="d-flex justify-content-start">
                          <AvatarGroup max={4}>
                            {project.members.map((member, index) => (
                              <Avatar
                                key={index}
                                alt={`Member ${index + 1}`}
                                src={member.image}
                                style={{ height: "25px", width: "25px" }}
                              />
                            ))}
                          </AvatarGroup>
                        </div>
                        <div className="card-body p-3 mt-3 custom-shadow custom-border-radius">
                          <div className="row">
                            <div className="col-6">
                              <h6 className="mb-0">{project.tasks}</h6>
                              <p className="text-muted text-sm mb-0">Tasks</p>
                            </div>
                            <div className="col-6 text-end">
                              <h6 className="mb-0">{project.comments}</h6>
                              <p className="text-muted text-sm mb-0">
                                Comments
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
                <Col className="my-auto">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <ProjectModalForm /> {/*project modal form */}
                    <h6 className="mt-2">Add Project</h6>
                    <p className="text-secondary">
                      Click here to add new project
                    </p>
                  </div>
                </Col>
              </>
            </Row>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

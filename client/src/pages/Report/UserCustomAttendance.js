import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import {
  Button,
  Card,
  Col,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import TopHeaderModal from "../../components/CreateWorkspace";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import { AiFillPlusCircle } from "react-icons/ai";
import LineChart from "../../components/User-CustomAttendance-Chart";

const UserCustomAttendance = () => {
  const initialData = [
    {
      id: 1,
      employeeId: "1001",
      name: "Darpan",
      Date: "01-08-2023",
      Location: "Mumbai",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 2,
      employeeId: "1005",
      name: "Abhishek",
      Date: "02-08-2023",
      Location: "Mumbai",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 3,
      employeeId: "1001",
      name: "Darpan",
      Date: "03-08-2023",
      Location: "Mumbai",
      InTime: "11:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "7:40:56",
      Status: "FD",
    },
    {
      id: 4,
      employeeId: "1005",
      name: "Abhishek",
      Date: "05-08-2023",
      Location: "Mumbai",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 5,
      employeeId: "1001",
      name: "Darpan",
      Date: "05-08-2023",
      Location: "Pune",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 6,
      employeeId: "1001",
      name: "Darpan",
      Date: "06-08-2023",
      Location: "Mumbai",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 7,
      employeeId: "1001",
      name: "Darpan",
      Date: "07-08-2023",
      Location: "Pune",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 8,
      employeeId: "1005",
      name: "Abhishek",
      Date: "07-08-2023",
      Location: "Mumbai",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 9,
      employeeId: "1001",
      name: "Darpan",
      Date: "10-08-2023",
      Location: "Mumbai",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
  ];

  const [data] = useState(initialData);
  const [filteredData, setFilteredData] = useState([]);
  const [location, setLocation] = useState("");
  const [userName, setUserName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleGetData = () => {
    const formattedData = data.map((item) => ({
      ...item,
      Date: new Date(item.Date.split("-").reverse().join("-")),
    }));

    const newData = formattedData.filter((item) => {
      const itemDate = new Date(item.Date);
      const fromDateObj = new Date(fromDate);
      const toDateObj = new Date(toDate);

      const condition =
        item.Location === location &&
        item.name === userName &&
        itemDate >= fromDateObj &&
        itemDate <= toDateObj;

      return condition;
    });

    setFilteredData(newData);
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

          <div className="mt-4 ms-4 support-breadcrumb-margin">
            <h5 className="mb-0">User Custom Attendance</h5>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <a href="/dashboard" className="text-decoration-none green-1">
                    Home
                  </a>
                </li>

                <li
                  className="breadcrumb-item text-secondary"
                  aria-current="page"
                >
                  Custom Attendance
                </li>
              </ol>
            </nav>
          </div>
          <Form className="my-form mx-4 form-input-width custom-border-radius mt-3 custom-shadow bg-custom-white" style={{padding:"30px"}}>
            <h6>Add Employee Photo</h6>
            <p className="text-secondary font-size-12">
              Fill the form below to Add Employee Photo
            </p>
            <Row>
              <Col md={6} className="mb-3">
                <div className="d-flex">
                  <Form.Group className="w-50 mb-3 me-3">
                    <Form.Select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                      <option value="Bangalore">Bangalore</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="w-50 mb-3">
                    <Form.Select
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    >
                      <option value="Abhishek">Abhishek</option>
                      <option value="Darpan">Darpan</option>
                      <option value="Himesh">Himesh</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="d-flex">
                  <Form.Group className="w-50 mb-3 me-3">
                    <Form.Control
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="w-50 mb-3">
                    <Form.Control
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </Form.Group>
                </div>

                <Button
                  onClick={handleGetData}
                  className="btn green-2 shadow-sm my-0 py-2 ms-auto px-5 d-flex font-size-14 align-items-center border-0"
                >
                  <span className="d-flex align-items-center me-2">
                    <AiFillPlusCircle />
                  </span>
                  <span>Get</span>
                </Button>
              </Col>
              <Col md={6}>
                {filteredData.length > 0 ? (
                  <Card className="w-100 green-2 h-100 border-0 me-4">
                    <Card.Body className="p-4 text-white">
                      <div className="mx-2">
                        <h6 className="my-2">{filteredData[0].name}</h6>
                      </div>
                      <div className="d-flex mt-3">
                        <div className="mx-2">
                          <h6 className="mb-0">{filteredData[0].employeeId}</h6>
                          <p className="mb-0 font-size-14 text-light-gray2">
                            Employee ID
                          </p>
                        </div>
                        <div className="mx-2">
                          <h6 className="mb-0">{filteredData[0].Status}</h6>
                          <p className="mb-0 font-size-14 text-light-gray2">
                            Status
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ) : (
                  <Card className="w-100 green-2 h-100 border-0 me-4">
                    <Card.Body className="p-4 text-white">
                      <div className="mx-2">
                        <h6 className="my-2">_name_</h6>
                      </div>
                      <div className="d-flex mt-3">
                        <div className="mx-2">
                          <h6 className="mb-0">_id_</h6>
                          <p className="mb-0 font-size-14 text-light-gray2">
                            Employee ID
                          </p>
                        </div>
                        <div className="mx-2">
                          <h6 className="mb-0">_status_</h6>
                          <p className="mb-0 font-size-14 text-light-gray2">
                            Status
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                )}
              </Col>
            </Row>

            <Row className="my-4 d-flex flex-nowrap">
              <Col
                md={6}
                className="mb-3"
                style={{ height: "400px" }}
              >
                <div className="custom-shadow bg-custom-white">
                <div className="px-3" style={{ height: "400px", overflowY: "auto" }}>
                  <Table bordered hover className="depart-design-table my-3">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>In-Time</th>
                        <th>In-Location</th>
                        <th>Out-Time</th>
                        <th>Out-Location</th>
                        <th>Hours</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((UC, i) => (
                        <tr key={i}>
                          <td>{UC.id}</td>
                          <td>{UC.Date.toLocaleDateString()}</td>
                          <td>{UC.Location}</td>
                          <td>{UC.InTime}</td>
                          <td>{UC.InLocation}</td>
                          <td>{UC.OutTime}</td>
                          <td>{UC.OutLocation}</td>
                          <td>{UC.Hours}</td>
                          <td>{UC.Status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                </div>
              </Col>
              <Col md={6} className="" style={{ height: "400px" }}>
                <div className="custom-shadow bg-custom-white pt-3 pb-4">
                  <div className=" border bg-light mx-3">
                    <h6 className="p-2">User Date VS Hours Attendance</h6>
                    <LineChart data={filteredData} />
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UserCustomAttendance;

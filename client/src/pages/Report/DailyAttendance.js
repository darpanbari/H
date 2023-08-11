import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import Table from "react-bootstrap/Table";
import { AiFillPlusCircle } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import SearchBtn from "../../components/SearchBtn";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import UseTooltip from "../../components/useTooltip";
import TopHeaderModal from "../../components/CreateWorkspace";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import EntriesPerPage from "../../components/EntriesPerPage";
import { Button } from "react-bootstrap";

const DailyAttendance = () => {
  const [data] = useState([
    {
      id: 1,
      date: "01-08-2023",
      name: "John Doe",
      userId: "JD123",
      shift: "Morning",
      inTime: "08:00",
      outTime: "17:00",
      hours: "9",
      inOut: "IN",
      status: "Present",
      selectLocation: "Mumbai",
    },
    {
      id: 2,
      date: "01-08-2023",
      name: "Jane Smith",
      userId: "JS456",
      shift: "Evening",
      inTime: "15:30",
      outTime: "23:30",
      hours: "8",
      inOut: "OUT",
      status: "Present",
      selectLocation: "Mumbai",
    },
    {
      id: 3,
      date: "01-08-2023",
      name: "Bob Johnson",
      userId: "BJ789",
      shift: "Night",
      inTime: "23:00",
      outTime: "07:00",
      hours: "8",
      inOut: "IN",
      status: "Present",
      selectLocation: "Pune",
    },
    {
      id: 4,
      date: "01-08-2023",
      name: "Alice Brown",
      userId: "AB987",
      shift: "Morning",
      inTime: "08:30",
      outTime: "17:30",
      hours: "9",
      inOut: "IN",
      status: "Present",
      selectLocation: "Mumbai",
    },
    {
      id: 5,
      date: "02-08-2023",
      name: "Michael Lee",
      userId: "ML654",
      shift: "Evening",
      inTime: "16:00",
      outTime: "00:00",
      hours: "8",
      inOut: "OUT",
      status: "Present",
      selectLocation: "Pune",
    },
    {
      id: 6,
      date: "02-08-2023",
      name: "Emily White",
      userId: "EW321",
      shift: "Night",
      inTime: "23:30",
      outTime: "07:30",
      hours: "8",
      inOut: "IN",
      status: "Present",
      selectLocation: "Bangalore",
    },
    {
      id: 7,
      date: "02-08-2023",
      name: "David Clark",
      userId: "DC456",
      shift: "Morning",
      inTime: "08:15",
      outTime: "17:15",
      hours: "9",
      inOut: "IN",
      status: "Present",
      selectLocation: "Mumbai",
    },
    {
      id: 8,
      date: "03-08-2023",
      name: "Jessica Martin",
      userId: "JM789",
      shift: "Evening",
      inTime: "15:45",
      outTime: "23:45",
      hours: "8",
      inOut: "OUT",
      status: "Present",
      selectLocation: "Mumbai",
    },
    {
      id: 9,
      date: "03-08-2023",
      name: "Richard Wilson",
      userId: "RW555",
      shift: "Night",
      inTime: "23:15",
      outTime: "07:15",
      hours: "8",
      inOut: "IN",
      status: "Present",
      selectLocation: "Pune",
    },
    {
      id: 10,
      date: "03-08-2023",
      name: "Laura Hernandez",
      userId: "LH222",
      shift: "Morning",
      inTime: "08:45",
      outTime: "17:45",
      hours: "9",
      inOut: "IN",
      status: "Present",
      selectLocation: "Mumbai",
    },
    {
      id: 11,
      date: "04-08-2023",
      name: "William Turner",
      userId: "WT782",
      shift: "Evening",
      inTime: "15:45",
      outTime: "23:45",
      hours: "8",
      inOut: "OUT",
      status: "Present",
      selectLocation: "Mumbai",
    },
    {
      id: 12,
      date: "04-08-2023",
      name: "Sophia Martinez",
      userId: "SM124",
      shift: "Night",
      inTime: "23:15",
      outTime: "07:15",
      hours: "8",
      inOut: "IN",
      status: "Present",
      selectLocation: "Pune",
    },
    {
      id: 13,
      date: "04-08-2023",
      name: "Ethan Thompson",
      userId: "ET543",
      shift: "Morning",
      inTime: "08:45",
      outTime: "17:45",
      hours: "9",
      inOut: "IN",
      status: "Present",
      selectLocation: "Mumbai",
    },
    {
      id: 14,
      date: "04-08-2023",
      name: "Oliver Davis",
      userId: "OD654",
      shift: "Morning",
      inTime: "08:00",
      outTime: "17:00",
      hours: "9",
      inOut: "IN",
      status: "Present",
      selectLocation: "Mumbai",
    },
    {
      id: 15,
      date: "04-08-2023",
      name: "Ava Wilson",
      userId: "AW987",
      shift: "Evening",
      inTime: "15:30",
      outTime: "23:30",
      hours: "8",
      inOut: "OUT",
      status: "Present",
      selectLocation: "Mumbai",
    },
    {
      id: 16,
      date: "04-08-2023",
      name: "Liam Smith",
      userId: "LS789",
      shift: "Night",
      inTime: "23:00",
      outTime: "07:00",
      hours: "8",
      inOut: "IN",
      status: "Present",
      selectLocation: "Pune",
    },
    {
      id: 17,
      date: "05-08-2023",
      name: "Emma Johnson",
      userId: "EJ555",
      shift: "Morning",
      inTime: "08:30",
      outTime: "17:30",
      hours: "9",
      inOut: "IN",
      status: "Present",
      selectLocation: "Mumbai",
    },
    {
      id: 18,
      date: "05-08-2023",
      name: "Noah Brown",
      userId: "NB654",
      shift: "Evening",
      inTime: "16:00",
      outTime: "00:00",
      hours: "8",
      inOut: "OUT",
      status: "Present",
      selectLocation: "Pune",
    },
    {
      id: 19,
      date: "05-08-2023",
      name: "Olivia White",
      userId: "OW321",
      shift: "Night",
      inTime: "23:30",
      outTime: "07:30",
      hours: "8",
      inOut: "IN",
      status: "Present",
      selectLocation: "Bangalore",
    },
    {
      id: 20,
      date: "05-08-2023",
      name: "Ethan Clark",
      userId: "EC456",
      shift: "Morning",
      inTime: "08:15",
      outTime: "17:15",
      hours: "9",
      inOut: "IN",
      status: "Present",
      selectLocation: "Mumbai",
    },
  ]);

  const [date, setDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [inOut, setInOut] = useState("");
  const [selectMoreFilters, setSelectMoreFilters] = useState("");

  const [entriesPerPage, setEntriesPerPage] = useState(20);

  const handleEntriesPerPage = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
  };

  const [filteredData, setFilteredData] = useState(data);

  const handleSearchData = (searchedData) => {
    setFilteredData(searchedData);
  };

  const handleGetData = () => {
    let formattedDate = date;
    if (date) {
      formattedDate = date.split("-").reverse().join("-");
    }

    let filteredResults = data.filter((item) => {
      let match = true;

      if (formattedDate && item.date !== formattedDate) {
        match = false;
      }
      if (selectedLocation && item.selectLocation !== selectedLocation) {
        match = false;
      }
      if (inOut && item.inOut !== inOut.toUpperCase()) {
        match = false;
      }
      if (selectMoreFilters && item.shift !== selectMoreFilters) {
        match = false;
      }

      return match;
    });

    setFilteredData(filteredResults);
  };

  const handleFilterButtonClick = () => {
    handleGetData();
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
              <h5 className="mb-0">Daily Attendance</h5>
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
                    Daily Attendance
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div>
            <div className="border-4 py-4 mx-4 custom-border-radius custom-shadow bg-custom-white">
              <div className="d-flex justify-content-end">
                <div className="mx-4 w-100">
                  <div className="d-flex div-flex-col justify-content-end mb-3">
                    <div className="w-25 me-3">
                      <Form.Control
                        type="date"
                        className="p-2"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div className="w-25 me-4">
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
                    </div>
                    <div className="w-25 d-hide"></div>
                  </div>
                  <div className="d-flex div-flex-col justify-content-end">
                    <div className="me-3 w-25">
                      <Form.Select
                        className="p-2"
                        value={selectMoreFilters}
                        onChange={(e) => setSelectMoreFilters(e.target.value)}
                      >
                        <option value="">
                          Select More Filters And Get Data
                        </option>
                        <option value="Morning">Morning</option>
                        <option value="Evening">Evening</option>
                        <option value="Night">Night</option>
                      </Form.Select>
                    </div>
                    <div className="w-25">
                      <Form.Select
                        className="p-2"
                        value={inOut}
                        onChange={(e) => setInOut(e.target.value)}
                      >
                        <option value="IN">IN</option>
                        <option value="OUT">OUT</option>
                      </Form.Select>
                    </div>
                    <Button
                      onClick={handleFilterButtonClick}
                      className="btn green-2 text-center shadow-sm py-2 w-25 ms-4 px-4 d-flex font-size-14 align-items-center justify-content-center border-0"
                    >
                      <span className="d-flex align-items-center me-2">
                        <AiFillPlusCircle />
                      </span>
                      <span>Get</span>
                    </Button>
                  </div>
                </div>
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
                        <th className="ps-4">#</th>
                        <th>DATE</th>
                        <th>FULL NAME</th>
                        <th>USER ID</th>
                        <th>SHIFT</th>
                        <th>IN-TIME</th>
                        <th>OUT-TIME</th>
                        <th>HOURS</th>
                        <th>IN-OUT</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody className="y-center">
                      {filteredData.slice(0, entriesPerPage).map((ddata, i) => (
                        <tr key={i}>
                          <td className="ps-4 fw-bold">{ddata.id}</td>
                          <td>{ddata.date.replace(/-/g, "/")}</td>
                          <td>{ddata.name}</td>

                          <td>{ddata.userId}</td>
                          <td>{ddata.shift}</td>
                          <td>{ddata.inTime}</td>
                          <td>{ddata.outTime}</td>
                          <td>{ddata.hours}</td>
                          <td>{ddata.inOut}</td>
                          <td>{ddata.status}</td>
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

export default DailyAttendance;

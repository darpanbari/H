import React, { useState, useEffect } from "react";
import SideNavbar from "../../components/SideNavbar";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import TopHeaderModal from "../../components/CreateWorkspace";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import UseTooltip from "../../components/useTooltip";
import { Table } from "react-bootstrap";
import axios from "axios";

const AllLocations = () => {
  const [AllLocation, setAllLocation] = useState([]);

  const getAllLocation = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/location/get-location"
      );
      if (data) {
        setAllLocation(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllLocation();
  }, []);

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
              <h5 className="mb-0">All Locations</h5>
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
                    Locations
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div>
            <div className="border-4 py-4 mx-4 mb-4 bg-custom-white custom-border-radius px-4 custom-shadow scroller-div">
              <Table bordered hover className="depart-design-table ps-5 mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Location Name</th>
                    <th>Location Type</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>State</th>
                    <th>Active User</th>
                  </tr>
                </thead>
                <tbody>
                  {AllLocation.map((l, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{l.name}</td>
                      <td>{l.type}</td>
                      <td>{l.latitude}</td>
                      <td>{l.longitude}</td>
                      <td>{l.state}</td>
                      <td>456</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllLocations;

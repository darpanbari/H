import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import { Button, Form } from "react-bootstrap";
import AdminProfileLogout from "../../components/AdminProfileLogout";
import HeaderMessageBox from "../../components/HeaderMessageBox";
import LanguageBtn from "../../components/LanguageBtn";
import TopHeaderModal from "../../components/CreateWorkspace";
import AdminSelectBtn from "../../components/AdminInfotechBtn";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios"

const RegisterLocation = () => {
  const [selectedType, setSelectedType] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");


  const handleAddLocation = async (e) => {
    e.preventDefault();
    try {
      const locationData = {
        type: selectedType,
        name,
        city,
        state,
        latitude,
        longitude,
      };
  
      const response = await axios.post(
        "http://localhost:3030/location/add-location",
        locationData
      );
  
      if (response.data.success) {
        alert(response.data.message);
      } else {
        alert("Location Creation Failed");
      }
  
      setSelectedType('');
      setName('');
      setCity('');
      setState('');
      setLatitude('');
      setLongitude('');
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
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
            <h5 className="mb-0">Resister Location</h5>
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
                  All Locations
                </li>
              </ol>
            </nav>
          </div>
          <Form className="my-form p-5 mx-4 form-input-width custom-border-radius mt-3 custom-shadow bg-custom-white">
            <Button className="btn green-2 shadow-sm mb-4 py-2 px-4 d-flex font-size-14 align-items-center border-0">
              <span className="d-flex align-items-center me-2">
                <AiFillPlusCircle />
              </span>
              <span>All Locations</span>
            </Button>
            <h6>Add Locations</h6>
            <p className="text-secondary font-size-12">
              Fill the form below to Add Locations Data
            </p>
            <div className="d-flex">
              <div className="mb-3 w-50 me-3">
                <Form.Label>Select Type</Form.Label>
                <Form.Select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="Plant">Plant</option>
                  <option value="Office">Office</option>
                  <option value="Head Office">Head Office</option>
                </Form.Select>
                <Button className="btn green-2 shadow-sm mt-2 mx-auto d-flex font-size-14 align-items-center border-0">         
                  <span>Select Type</span>
                </Button>
              </div>

              <div className="mb-3 w-50 me-3">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3 w-50">
                <Form.Label>Enter City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>

            <div className="d-flex">
              <div className="mb-3 w-50 me-3">
                <Form.Label>Enter State</Form.Label>
                <Form.Select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Daman">Daman</option>
                  <option value="Dadra">Gujarat</option>
                </Form.Select>
              </div>

              <div className="mb-3 w-50 me-3">
                <Form.Label>Enter Latitude</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="Enter latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </div>

              <div className="mb-3 w-50">
                <Form.Label>Enter Longitude</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="Enter longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>
            </div>
            <Button onClick={handleAddLocation} className="btn green-2 shadow-sm my-3 py-2 mx-auto px-4 d-flex font-size-14 align-items-center border-0">
              <span className="d-flex align-items-center me-2">
                <AiFillPlusCircle />
              </span>
              <span>Add Locations</span>
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterLocation;

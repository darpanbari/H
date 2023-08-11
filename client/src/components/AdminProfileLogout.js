import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const AdminProfileLogout = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          className="d-flex align-items-center admin-dropdown px-1 dropdown-color bg-custom-white"
        >
          <div
            className="my-auto"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "37%",
              overflow: "hidden",
            }}
          >
            <img
              src="/rajodiya.jpg"
              alt="img"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="ps-1 custom-title font-size-14"> Hi, Admin Infotech!</div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-shadow my-2">
          <Dropdown.Item href="/users/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="/">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default AdminProfileLogout;

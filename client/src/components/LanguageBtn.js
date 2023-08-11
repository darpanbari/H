import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { TbWorld } from "react-icons/tb";

const LanguageBtn = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          className="d-flex border-0 top-btn-hw mt-0 bg-custom-white align-items-center dropdown-color"
        
        >
          <span
            type="button"
            className="fs-5  d-flex align-items-center"
            style={{ color: "#CFD8E4" }}
          >
            <TbWorld />
          </span>
          <div className="ps-1 green-1 custom-title font-size-15"> English</div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-shadow my-2">
          <Dropdown.Item href="#Profile">Hindi</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Marathi</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageBtn;

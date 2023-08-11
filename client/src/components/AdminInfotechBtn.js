import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { PiCirclesThreePlus } from "react-icons/pi";
import {BsCheck2All} from "react-icons/bs";
import {BiPencil} from "react-icons/bi";
 
const AdminSelectBtn = () => {
  return (
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          className="d-flex admininfo-padding border-0 top-btn-hw  bg-custom-white align-items-center shadow-sm dropdown-color"
        
        >
          <span
            type="button"
            className="fs-5 d-flex align-items-center green-1"
          >
            <PiCirclesThreePlus />
          </span>
          <div className="ps-1 custom-title font-size-15"> Admin Infotech</div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-shadow my-2">
          <Dropdown.Item href="#Profile" className="d-flex align-items-center"><BsCheck2All className="green-1 me-2"/> Admin Infotech <BiPencil className="green-1 ms-2"/></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );
};

export default AdminSelectBtn;

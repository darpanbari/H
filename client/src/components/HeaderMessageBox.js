import React from "react";
import { MdOutlineTextsms } from "react-icons/md";
import Badge from "react-bootstrap/Badge";

const HeaderMessageBox = () => {
  return (
    <div>
      <span
        type="button"
        className="fs-5 bg-white d-flex header-message-box justify-content-center align-items-center h-100 shadow-sm green-1 custom-radius h-100 ms-2 me position-relative"
        style={{ padding: "10px 12px 10px 12px" }}
      >
        <MdOutlineTextsms />
        <Badge
          className="text-center rounded-5 position-absolute start-100 translate-middle"
          bg="danger"
          style={{ top: "8px", fontSize: "9px",marginLeft:"-12px" }}
        >
          0
        </Badge>
      </span>
    </div>
  );
};

export default HeaderMessageBox;

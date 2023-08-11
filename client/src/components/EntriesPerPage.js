import React from "react";
import Form from "react-bootstrap/Form";

const EntriesPerPage = ({ value, onChange }) => {
  return (
    <div className="d-flex align-items-center p-1 w-25">
      <Form.Select
        aria-label="Default select example"
        className="dataTable-selector form-select-width py-2 border border-1"
        value={value}
        onChange={onChange}
      >
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </Form.Select>
      <p className="my-auto ms-2">entries per page</p>
    </div>
  );
};

export default EntriesPerPage;

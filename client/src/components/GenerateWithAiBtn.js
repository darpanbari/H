import React from "react";
import { GiArtificialIntelligence } from "react-icons/gi";

const GenerateWithAiBtn = () => {
  return (
    <div>
      <button
        className="btn btn-success d-flex align-items-center ms-auto border-0 fw-bold"
        style={{ backgroundColor: "#6FD943" }}
        type="submit"
      >
        <GiArtificialIntelligence className="fw-bold me-1 fs-5 text-white" />
        Generate With AI
      </button>
    </div>
  );
};

export default GenerateWithAiBtn;

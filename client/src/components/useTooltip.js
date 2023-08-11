import { useEffect } from "react";

const UseTooltip = () => {
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl, {
        container: "body", // Change this to your desired container if needed
      });
    });
  }, []);
};

export default UseTooltip;

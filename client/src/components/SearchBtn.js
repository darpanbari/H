import React, { useState } from "react";

const SearchBtn = ({ data, onDataSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setQuery(searchText);
  
    const filteredData = data.filter((item) => {
      const searchTerms = searchText.toLowerCase();
      return (
        (item.userId && item.userId.toString().includes(searchTerms)) ||
        (item.name && item.name.toLowerCase().includes(searchTerms)) ||
        (item.department && item.department.toLowerCase().includes(searchTerms)) ||
        (item.designation && item.designation.toLowerCase().includes(searchTerms)) ||
        (item.location && item.location.toLowerCase().includes(searchTerms)) ||
        (item.date && item.date.toLowerCase().includes(searchTerms)) ||
        (item.shift && item.shift.toLowerCase().includes(searchTerms)) ||
        (item.inOut && item.inOut.toLowerCase().includes(searchTerms)) ||
        (item.status && item.status.toLowerCase().includes(searchTerms)) ||
        (item.title && item.title.toLowerCase().includes(searchTerms)) ||
        (item.occasion && item.occasion.toLowerCase().includes(searchTerms)) ||
        (item.description && item.description.toLowerCase().includes(searchTerms)) ||
        (item.employee && item.employee.toLowerCase().includes(searchTerms)) ||
        (item.email && item.email.toLowerCase().includes(searchTerms))
      );
    });
  
    onDataSearch(filteredData);
  };
  
  return (
    <div className="p-1">
      <input
        type="search"
        placeholder="Search..."
        className="p-2 rounded-3 border border-1"
        onChange={handleSearch}
        value={query}
        spellCheck={false}
      />
    </div>
  );
};

export default SearchBtn;

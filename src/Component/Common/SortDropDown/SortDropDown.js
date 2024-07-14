import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { SortUniversities } from '../../../redux/actions/universities';
const SortingDropdown=({ onChange }) => {
  const dispatch = useDispatch();
  const handleSortChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  const handleSort = (e) => {
    dispatch(SortUniversities(e.target.value))
  };

  return (
    <select
      onChange={handleSort}
      style={{
        width: "90%",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "16px",
        backgroundColor: "#fff",
      }}
    >
      <option value="">Select Sorting Option</option>
      <option value="asc">A to Z</option>
      <option value="desc">Z to A</option>
    </select>
  );
};

export default SortingDropdown;

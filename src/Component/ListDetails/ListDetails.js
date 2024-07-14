import React, { useState, useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './listdetails.css'
const ListDetails = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const redirectBack =()=>{
    navigate('/', {});
  }
  return (
    <div className="listDetails">
        <p className="page-title-details">Detail Page</p>
      <table>
        <tr>
          <th>Name</th>
          <th>State Province</th>
          <th>Country</th>
          <th>Country Code</th>
        </tr>
        <tbody>
          <tr>
            <td>{state.name}</td>
            <td>{state["state-province"]}</td>
            <td>{state.country}</td>
            <td>{state.alpha_two_code}</td>
          </tr>
        </tbody>
      </table>
      <p onClick={redirectBack} class="goback">Go Back</p>
    </div>
  );
};

export default ListDetails;

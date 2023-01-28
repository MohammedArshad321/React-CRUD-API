import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PrimaryInput from "../components/PrimaryInput";
import PrimaryButton from "../components/PrimaryButton";
import "./AddBranch.css";
import axios from "axios";
export default function AddBranch() {
  const history = useNavigate();
  const [formDetails, setFormDetails] = useState({
    branchName: "",
    adminName: "",
    address: "",
    department: "",
    totalEmployees: "",
    totalUsers: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://63d25ab54abff8883408a165.mockapi.io/inventoryapp", {
        branchName: formDetails.branchName,
        adminName: formDetails.adminName,
        address: formDetails.address,
        department: formDetails.department,
        totalEmployees: formDetails.totalEmployees,
        totalUsers: formDetails.totalUsers,
      })
      .then(() => history("/manage-branches"));
  };

  return (
    <>
      <Sidebar />
      <div className="add-branch-main-container">
        <Navbar />
        <h2>Add Branch</h2>
        <div className="form-container">
          <label>Branch Name</label>
          <PrimaryInput
            type="text"
            placeholder="branch name"
            name="branchName"
            onChange={handleChange}
            value={formDetails.branchName}
          />
          <label>Admin Name</label>
          <PrimaryInput
            type="text"
            placeholder="admin name"
            name="adminName"
            onChange={handleChange}
            value={formDetails.adminName}
          />
          <label>Address</label>
          <PrimaryInput
            type="text"
            placeholder="address"
            name="address"
            onChange={handleChange}
            value={formDetails.address}
          />
          <label>Department</label>
          <PrimaryInput
            type="text"
            placeholder="department"
            name="department"
            onChange={handleChange}
            value={formDetails.department}
          />
          <label>Total Employees</label>
          <PrimaryInput
            type="number"
            placeholder="total employees"
            name="totalEmployees"
            onChange={handleChange}
            value={formDetails.totalEmployees}
          />
          <label>Total Users</label>
          <PrimaryInput
            type="number"
            placeholder="total users"
            name="totalUsers"
            onChange={handleChange}
            value={formDetails.totalUsers}
          />
        </div>
        <div className="btn-area">
          <PrimaryButton type="Add Branch" onClick={handleSubmit} />
          <PrimaryButton type="Cancel" />
        </div>
      </div>
    </>
  );
}

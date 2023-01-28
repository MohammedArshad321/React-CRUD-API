import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PrimaryInput from "../components/PrimaryInput";
import PrimaryButton from "../components/PrimaryButton";
import "./AddBranch.css";
import axios from "axios";
export default function UpdateBranch() {
  const navigate= useNavigate();
  const [id, setId] = useState(0);
  const [branchName, setBranchName] = useState();
  const [adminName, setAdminName] = useState();
  const [address, setAddress] = useState();
  const [department, setDepartment] = useState();
  const [totalEmployees, setTotalEmployees] = useState();
  const [totalUsers, setTotalUsers] = useState();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setBranchName(localStorage.getItem("branchName"));
    setAdminName(localStorage.getItem("adminName"));
    setAddress(localStorage.getItem("address"));
    setDepartment(localStorage.getItem("department"));
    setTotalEmployees(localStorage.getItem("totalEmployees"));
    setTotalUsers(localStorage.getItem("totalUsers"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(
      `https://63d25ab54abff8883408a165.mockapi.io/inventoryapp/${id}`,
      {
        branchName: branchName,
        adminName: adminName,
        address: address,
        department: department,
        totalEmployees: totalEmployees,
        totalUsers: totalUsers,
      }
    ).then(()=>{
      navigate("/manage-branches")
    })
  };
  return (
    <>
      <Sidebar />
      <div className="add-branch-main-container">
        <Navbar />
        <h2>Update Branch</h2>
        <div className="form-container">
          <label>Branch Name</label>
          <PrimaryInput
            type="text"
            placeholder="branch name"
            name="branchName"
            onChange={(e) => {
              setBranchName(e.target.value);
            }}
            value={branchName}
          />
          <label>Admin Name</label>
          <PrimaryInput
            type="text"
            placeholder="admin name"
            name="adminName"
            onChange={(e) => {
              setAdminName(e.target.value);
            }}
            value={adminName}
          />
          <label>Address</label>
          <PrimaryInput
            type="text"
            placeholder="address"
            name="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
          <label>Department</label>
          <PrimaryInput
            type="text"
            placeholder="department"
            name="department"
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
            value={department}
          />
          <label>Total Employees</label>
          <PrimaryInput
            type="number"
            placeholder="total employees"
            name="totalEmployees"
            onChange={(e) => {
              setTotalEmployees(e.target.value);
            }}
            value={totalEmployees}
          />
          <label>Total Users</label>
          <PrimaryInput
            type="number"
            placeholder="total users"
            name="totalUsers"
            onChange={(e) => {
              setTotalUsers(e.target.value);
            }}
            value={totalUsers}
          />
        </div>
        <div className="btn-area">
          <PrimaryButton type="Update Branch" onClick={handleUpdate} />
          <PrimaryButton type="Cancel" />
        </div>
      </div>
    </>
  );
}

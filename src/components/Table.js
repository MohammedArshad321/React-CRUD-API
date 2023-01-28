import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Table.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
export default function Table() {
  const [data, setData] = useState([]);
  // getting Data using API axios
  const getData = () => {
    axios
      .get("https://63d25ab54abff8883408a165.mockapi.io/inventoryapp")
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  // Deleting data through API axios
  const handleDelete = (id) => {
    axios
      .delete(`https://63d25ab54abff8883408a165.mockapi.io/inventoryapp/${id}`)
      .then(() => {
        getData();
      });
  };
  const setToLocalStorage = (
    id,
    branchName,
    adminName,
    address,
    department,
    totalEmployees,
    totalUsers
  ) => {
    localStorage.setItem("id", id);
    localStorage.setItem("branchName", branchName);
    localStorage.setItem("adminName", adminName);
    localStorage.setItem("address", address);
    localStorage.setItem("department", department);
    localStorage.setItem("totalEmployees", totalEmployees);
    localStorage.setItem("totalUsers", totalUsers);
  };

  return (
    <>
      <div className="table-main-container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Branch Name</th>
              <th>Admin</th>
              <th>Area</th>
              <th>Department</th>
              <th>Employees</th>
              <th>Users</th>
              <th>Action</th>
            </tr>
          </thead>
          {data.map((val) => (
            <tbody key={val.id}>
              <tr>
                <td>{val.id}</td>
                <td>{val.branchName}</td>
                <td>{val.adminName}</td>
                <td>{val.address}</td>
                <td>{val.department}</td>
                <td>{val.totalEmployees}</td>
                <td>{val.totalUsers}</td>
                <td>
                  <VisibilityIcon
                    fontSize="small"
                    cursor="pointer"
                    onClick={() => alert(val.id)}
                  />
                  <Link to="/update-branch">
                    <EditIcon
                      fontSize="small"
                      onClick={() =>
                        setToLocalStorage(
                          val.id,
                          val.branchName,
                          val.adminName,
                          val.address,
                          val.department,
                          val.totalEmployees,
                          val.totalUsers
                        )
                      }
                    />
                  </Link>
                  <DeleteIcon
                    fontSize="small"
                    cursor="pointer"
                    onClick={() => handleDelete(val.id)}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

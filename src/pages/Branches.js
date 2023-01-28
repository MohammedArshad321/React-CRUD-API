import React from "react";
import "./Branches.css"
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PrimaryButton from "../components/PrimaryButton";
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {Link} from "react-router-dom";
import Table from "../components/Table";
export default function Branches() {
  return (
    <>
      <Sidebar />     
      <div className="Branches-main-container">
      <Navbar />
       <div className="top-nav-container">
        <div className="heading">
            <h2>Manage Branches</h2>
        </div>
        <div className="top-nav-items">
          <Link to="/add-branch">
            <PrimaryButton 
            type="Add Branch"
            icon={ <AddIcon/> }
            />
            </Link>
            <InfoOutlinedIcon cursor="pointer"/>
        </div>
        
       </div>
       <Table />
      </div>
    </>
  );
}

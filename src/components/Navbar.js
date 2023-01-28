import React from "react";
import profile from "../media/profile.jpg"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-item1">
      <SearchIcon className="searchSVG" />
        <input type="search" id="" placeholder="Search Anything!" />
        <FilterAltOutlinedIcon className="filterSVG"/>
      </div>
      <div className="nav-item2">
        <div className="notify-icon">
          <NotificationsNoneIcon cursor="pointer"/>
        </div>
        <div className="profile-img">
          <img src={profile} alt="profile" style={{cursor:"pointer"}} />
        </div>
        <div className="profile-title">
        <label>John Deo</label>
         <label>Admin</label>
        </div>
      </div>
    </div>
  );
}

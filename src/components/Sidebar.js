import React from "react";
import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Logo">
       <Link to="/"> <h3>Inventory App</h3></Link>
      </div>
      <ul className="SidebarList">
        {SidebarData.map((val, key) => (
          <li
            key={key}
            className="row"
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={() => (window.location.pathname = val.link)}
          >
            <div id="icon">{val.icon}</div>
            <div id="title">{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

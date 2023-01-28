import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Table from "../components/BasicTable";
import {data, columns} from "../components/BasicTableData";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="Dashboard">
      <Table data={data} columns={columns} />
      </div>
    </>
  );
}

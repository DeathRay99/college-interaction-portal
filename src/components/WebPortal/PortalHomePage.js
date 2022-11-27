import React from "react";
import "./PortalHomePage.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function PortalHomePage() {
  return (
    <div className="portal-home">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default PortalHomePage;

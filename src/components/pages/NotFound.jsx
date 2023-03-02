import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-header">Page Not Found</h1>
      <span>
        you can go to the main page by <Link to={"/"}>clicking here.</Link>
      </span>
    </div>
  );
};

export default NotFound;

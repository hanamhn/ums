import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="hide-navbar">
      <h1>Page you are looking for does not exist!</h1>
      <br />
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default PageNotFound;

import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

function PageNotFound() {
  return (
    <div className="error-page-container">
      <h3>Oops! Page not found</h3>
      <h1>404</h1>
      <p>We could'nt search for the page you were looking for</p>
      <Link to="/" className="home-link">
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;

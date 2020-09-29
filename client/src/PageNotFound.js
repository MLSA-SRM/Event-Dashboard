import React from "react";
import "./ErrorPage.css";

function PageNotFound() {
  return (
    <div className="error-page-container">
      <h3>Oops! Page not found</h3>
      <h1>404</h1>
      <p>We could'nt search for the page you were looking for</p>
      <a href="/" className="home-link">
        Go Back Home
      </a>
    </div>
  );
}

export default PageNotFound;

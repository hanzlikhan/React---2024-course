// src/components/ErrorPage.js
import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;

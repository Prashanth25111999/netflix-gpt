import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorRoute = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Status - {error.status}</h2>
      <h3>{error.data}</h3>
    </div>
  );
};

export default ErrorRoute;

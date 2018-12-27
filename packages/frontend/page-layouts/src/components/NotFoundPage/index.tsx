import { Authenticated, Unauthenticated } from "domain-model";
import React from "react";
import { Redirect } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Authenticated>
        <Redirect to="/" />
      </Authenticated>
      <Unauthenticated>
        <Redirect to="/login" />
      </Unauthenticated>
    </React.Fragment>
  );
};

export default NotFoundPage;

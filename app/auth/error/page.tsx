import { CardWrapper } from "@/components/auth";
import React from "react";

const ErrorPage = () => {
  return (
    <CardWrapper
      title="Error page"
      description="Check the error on the page"
      backBtnHref="/auth/login"
      backBtnLabel="Back to login"
    >
      <h1>Error on page</h1>
    </CardWrapper>
  );
};

export default ErrorPage;

import { CardWrapper, LoginForm } from "@/components/auth";
import React from "react";

const LoginPage = () => {
  return (
    <CardWrapper
      title="Login Form"
      description="This is the intro of a form component"
      backBtnLabel="Don't have an account ?"
      backBtnHref="/auth/register"
    >
      <LoginForm />
    </CardWrapper>
  );
};
export default LoginPage;

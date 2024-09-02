import { CardWrapper, RegisterForm } from "@/components/auth";
import React from "react";

const RegisterPage = () => {
  return (
    <CardWrapper
      title="Registration Form"
      description="Register to continue"
      backBtnLabel="Have an account continue to login"
      backBtnHref="/auth/login"
    >
      <RegisterForm />
    </CardWrapper>
  );
};
export default RegisterPage;

import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container max-w-2xl mx-auto flex h-full w-full flex-col justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;

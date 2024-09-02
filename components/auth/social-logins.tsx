"use client";

import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const SocialLogins = () => {
  const handleSocial = (provider: "github" | "google") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="mt-4 flex-col flex gap-2">
      <Button
        onClick={() => handleSocial("github")}
        className=""
        variant={"secondary"}
      >
        Github
      </Button>
      <Button
        onClick={() => handleSocial("google")}
        className=""
        variant={"destructive"}
      >
        Google Login
      </Button>
    </div>
  );
};

export { SocialLogins };

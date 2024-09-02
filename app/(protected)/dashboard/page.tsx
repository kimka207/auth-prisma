import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div className="container mx-auto">
      {JSON.stringify(session)}

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button variant={"destructive"} type="submit">
          Sign out
        </Button>
      </form>
    </div>
  );
};

export default DashboardPage;

import React from "react";

type responseProps = { response: { success: string; error: string } };

export const FormResponseDisplay = ({ response }: responseProps) => {
  if (!response) return null;

  if (!response.success) {
    return <div className="bg-destructive rounded p-2">{response.error}</div>;
  }

  return <div className="rounded bg-emerald-400  p-2">{response.success}</div>;
};

import React from "react";

export const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <p style={{ color: "crimson", fontWeight: 600, margin: "8px 0" }}>
      Error: {message}
    </p>
  );
};
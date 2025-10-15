import React from "react";

export const ErrorMessage: React.FC<{ message: string }> = ({ message }) = > (
    <p style={{ color: "crimson", fontWeight: 500 }}>Error: {message}</p>
);
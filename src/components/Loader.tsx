import React from "react";

export const Loader: React.FC<{ text?: string }> = ({ text = "Loading..." }) => (
    <p style={{ opacity: 0.8 }}>{text}</p>
);
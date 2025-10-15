import React from "react";

interface CardProps {
  title?: string;
  variant?: "elevated" | "flat";
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  variant = "flat",
  children,
}) => {
  const style: React.CSSProperties = {
    background: "#fff",
    borderRadius: 12,
    padding: 20,
    margin: "20px auto",
    maxWidth: 600,
    boxShadow: variant === "elevated" ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
  };

  return (
    <div style={style}>
      {title && <h2 style={{ marginBottom: 16 }}>{title}</h2>}
      {children}
    </div>
  );
};

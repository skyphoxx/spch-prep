import React from "react";

export interface TextFieldProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
    label,
    value,
    onChange,
    placeholder,
    disabled,

}) => {
    return (
        <div style={{ marginBottom: 16, textAlign: "left"}}>
            {label && (
                <label
                    style={{
                        display: "block",
                        fontWeight: 500,
                        marginBottom: 6,
                    }}
                    >
                        {label}
                </label>
            )}
            <input 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    border: "50px solid #ccc",
                    fontSize:16,
                }}
                />
        </div>
    );
};
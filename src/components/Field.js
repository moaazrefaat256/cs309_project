import React from "react";

export default function Field({ label, name, error, children, ...props }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {children || <input id={name} name={name} {...props} />}
      {error && <small className="error">{error}</small>}
    </div>
  );
}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Field from "./Field";
import { validateLogin } from "../utils/validators";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validateLogin(form);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      navigate("/profile");
    }
  };

  return (
    <div className="card">
      <h2>Welcome back</h2>
      <p className="muted">Log in to manage your lost and found posts.</p>
      <form onSubmit={onSubmit} noValidate>
        <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} />
        <Field label="Password" name="password" type="password" value={form.password} onChange={onChange} error={errors.password} />
        <button className="btn" type="submit">Log in</button>
      </form>
      <p className="muted">New here? <Link to="/register">Create an account</Link></p>
    </div>
  );
}

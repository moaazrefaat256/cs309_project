import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Field from "./Field";
import { validateRegister } from "../utils/validators";

const initial = {
  name: "", email: "", phone: "", role: "", password: "", confirmPassword: "",
};

export default function Register() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validateRegister(form);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      navigate("/login");
    }
  };

  return (
    <div className="card">
      <h2>Create account</h2>
      <p className="muted">Join Campus Lost &amp; Found to post and find items.</p>
      <form onSubmit={onSubmit} noValidate>
        <Field label="Full name" name="name" value={form.name} onChange={onChange} error={errors.name} />
        <Field label="University email" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} />
        <Field label="Phone" name="phone" value={form.phone} onChange={onChange} error={errors.phone} placeholder="01XXXXXXXXX" />
        <Field label="Role" name="role" error={errors.role}>
          <select id="role" name="role" value={form.role} onChange={onChange}>
            <option value="">Select role</option>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
            <option value="moderator">Moderator</option>
          </select>
        </Field>
        <Field label="Password" name="password" type="password" value={form.password} onChange={onChange} error={errors.password} />
        <Field label="Confirm password" name="confirmPassword" type="password" value={form.confirmPassword} onChange={onChange} error={errors.confirmPassword} />
        <button className="btn" type="submit">Register</button>
      </form>
      <p className="muted">Already have an account? <Link to="/login">Log in</Link></p>
    </div>
  );
}

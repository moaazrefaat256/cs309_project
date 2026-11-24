import React, { useState } from "react";
import Field from "./Field";

const initial = {
  name: "", email: "", phone: "", role: "", password: "", confirmPassword: "",
};

export default function Register() {
  const [form, setForm] = useState(initial);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="card">
      <h2>Create account</h2>
      <p className="muted">Join Campus Lost &amp; Found to post and find items.</p>
      <form noValidate>
        <Field label="Full name" name="name" value={form.name} onChange={onChange} />
        <Field label="University email" name="email" type="email" value={form.email} onChange={onChange} />
        <Field label="Phone" name="phone" value={form.phone} onChange={onChange} placeholder="01XXXXXXXXX" />
      </form>
    </div>
  );
}

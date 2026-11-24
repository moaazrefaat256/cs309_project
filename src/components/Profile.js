import React, { useState } from "react";
import Field from "./Field";
import { validateProfile } from "../utils/validators";


const demoUser = {
  name: "Abdo Mohamed",
  email: "abdo@university.edu",
  phone: "01154535155",
  role: "student",
  bio: "Computer Science student, Level 3.",
};

export default function Profile() {
  const [user, setUser] = useState(demoUser);
  const [form, setForm] = useState(demoUser);
  const [editing, setEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSave = (e) => {
    e.preventDefault();
    const found = validateProfile(form);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setUser(form);
      setEditing(false);
      setSaved(true);
    }
  };

  const onCancel = () => {
    setForm(user);
    setErrors({});
    setEditing(false);
  };

  const initials = user.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

  return (
    <div className="card wide">
      <div className="profile-head">
        <div className="avatar">{initials}</div>
        <div>
          <h2>{user.name}</h2>
          <span className="badge">{user.role}</span>
        </div>
      </div>

      {saved && !editing && <p className="success">Profile updated successfully.</p>}

      {!editing ? (
        <>
          <dl className="details">
            <dt>Email</dt><dd>{user.email}</dd>
            <dt>Phone</dt><dd>{user.phone}</dd>
            <dt>Bio</dt><dd>{user.bio || "—"}</dd>
          </dl>
          <button className="btn" onClick={() => { setSaved(false); setEditing(true); }}>
            Edit profile
          </button>
        </>
      ) : (
        <form onSubmit={onSave} noValidate>
          <Field label="Full name" name="name" value={form.name} onChange={onChange} error={errors.name} />
          <Field label="Email (cannot be changed)" name="email" value={form.email} disabled />
          <Field label="Phone" name="phone" value={form.phone} onChange={onChange} error={errors.phone} />
          <Field label={`Bio (${form.bio.length}/160)`} name="bio" error={errors.bio}>
            <textarea id="bio" name="bio" rows="3" value={form.bio} onChange={onChange} />
          </Field>
          <div className="row">
            <button className="btn" type="submit">Save changes</button>
            <button className="btn secondary" type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}
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

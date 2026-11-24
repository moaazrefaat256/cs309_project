export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
export const isPhone = (v) => /^(\+?20|0)?1[0125]\d{8}$/.test(v.replace(/\s|-/g, ""));

export function validateRegister(f) {
  const e = {};
  if (f.name.trim().length < 3) e.name = "Full name must be at least 3 characters.";
  if (!isEmail(f.email)) e.email = "Enter a valid email address.";
  if (!isPhone(f.phone)) e.phone = "Enter a valid Egyptian mobile number.";
  if (!f.role) e.role = "Choose your role.";
  if (f.password.length < 8) e.password = "Password must be at least 8 characters.";
  else if (!/[A-Za-z]/.test(f.password) || !/\d/.test(f.password))
    e.password = "Password must contain letters and numbers.";
  if (f.confirmPassword !== f.password) e.confirmPassword = "Passwords do not match.";
  return e;
}

export function validateLogin(f) {
  const e = {};
  if (!isEmail(f.email)) e.email = "Enter a valid email address.";
  if (!f.password) e.password = "Password is required.";
  return e;
}

export function validateProfile(f) {
  const e = {};
  if (f.name.trim().length < 3) e.name = "Full name must be at least 3 characters.";
  if (!isPhone(f.phone)) e.phone = "Enter a valid Egyptian mobile number.";
  if (f.bio.length > 160) e.bio = "Bio must be 160 characters or fewer.";
  return e;
}

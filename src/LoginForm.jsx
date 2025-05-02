import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (field, value) => {
    let errorMsg = "";
    if (!value.trim()) {
      errorMsg = "This field is required.";
    } else if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMsg = "Invalid email format.";
    }
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some((msg) => msg);
    const isComplete = Object.values(formData).every((v) => v);
    if (!hasErrors && isComplete) {
      setSubmitted(true);
    } else {
      Object.keys(formData).forEach((key) => validate(key, formData[key]));
    }
  };

  const allValid =
    Object.values(formData).every((v) => v) &&
    Object.values(errors).every((e) => !e);

  return (
    <>
      {submitted ? (
        <p className="success">✅ Login successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>

          <button type="submit" disabled={!allValid}>
            Login
          </button>
        </form>
      )}
    </>
  );
};

export default LoginForm;

import React, { useState, useRef } from "react";
import "./styles.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const nameRef = useRef();

  const validate = (field, value) => {
    let errorMsg = "";
    switch (field) {
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMsg = "Invalid email format.";
        }
        break;
      case "password":
        if (value.length < 6) {
          errorMsg = "Password must be at least 6 characters.";
        }
        checkPasswordStrength(value);
        break;
      case "confirmPassword":
        if (value !== formData.password) {
          errorMsg = "Passwords do not match.";
        }
        break;
      default:
        if (!value.trim()) errorMsg = "This field is required.";
    }
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const checkPasswordStrength = (password) => {
    let strength = "Weak";
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      strength = "Strong";
    } else if (password.length >= 6) {
      strength = "Moderate";
    }
    setPasswordStrength(strength);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      validate(key, formData[key]);
      if (!formData[key]) {
        formErrors[key] = "This field is required.";
      }
    });

    const hasErrors = Object.values(errors).some((msg) => msg);
    if (Object.keys(formErrors).length === 0 && !hasErrors) {
      setSubmitted(true);
    } else {
      setErrors(formErrors);
      nameRef.current.focus(); // Using useRef
    }
  };

  const allValid =
    Object.values(formData).every((v) => v) &&
    Object.values(errors).every((e) => !e);

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      {submitted ? (
        <p className="success">🎉 Successfully registered!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              ref={nameRef}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>

          <div>
            <label>Email</label>
            <input name="email" value={formData.email} onChange={handleChange} />
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
            {formData.password && (
              <small>Password Strength: {passwordStrength}</small>
            )}
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>

          <button type="submit" disabled={!allValid}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default SignupForm;

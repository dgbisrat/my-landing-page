import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    fatherName: "",
    grandName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    location: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await api.post("/auth/signup", {
        firstName: formData.firstName,
        fatherName: formData.fatherName,
        grandName: formData.grandName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        birthDate: formData.birthDate,
        location: formData.location,
      });

      setSuccess(
        "Account created! Check the backend terminal for verification link.",
      );
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Create Account</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "30px" }}>
          Join Iceland Tourism
        </p>

        {error && (
          <div
            style={{
              background: "#fee",
              color: "#c33",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}
        {success && (
          <div
            style={{
              background: "#efe",
              color: "#3c3",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            placeholder="First Name *"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "2px solid #e0e0e0",
              borderRadius: "10px",
            }}
          />

          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <input
              name="fatherName"
              placeholder="Father Name"
              onChange={handleChange}
              style={{
                flex: 1,
                padding: "12px",
                border: "2px solid #e0e0e0",
                borderRadius: "10px",
              }}
            />
            <input
              name="grandName"
              placeholder="Grand Name"
              onChange={handleChange}
              style={{
                flex: 1,
                padding: "12px",
                border: "2px solid #e0e0e0",
                borderRadius: "10px",
              }}
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email *"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "2px solid #e0e0e0",
              borderRadius: "10px",
            }}
          />
          <input
            name="phoneNumber"
            placeholder="Phone Number *"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "2px solid #e0e0e0",
              borderRadius: "10px",
            }}
          />

          <input
            name="password"
            type="password"
            placeholder="Password *"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "2px solid #e0e0e0",
              borderRadius: "10px",
            }}
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password *"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "2px solid #e0e0e0",
              borderRadius: "10px",
            }}
          />

          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <input
              name="birthDate"
              type="date"
              onChange={handleChange}
              required
              style={{
                flex: 1,
                padding: "12px",
                border: "2px solid #e0e0e0",
                borderRadius: "10px",
              }}
            />
            <input
              name="location"
              placeholder="Location"
              onChange={handleChange}
              style={{
                flex: 1,
                padding: "12px",
                border: "2px solid #e0e0e0",
                borderRadius: "10px",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

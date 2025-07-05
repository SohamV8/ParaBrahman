import React, { useState } from "react";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="signup-form">
        <h2 className="form-title">Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-visibility"
            >
              👁️
            </button>
          </div>
          <div className="password-field">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="toggle-visibility"
            >
              👁️
            </button>
          </div>
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
        <div className="divider">
          <span>or</span>
        </div>
        <div className="social-buttons">
          <button className="google-btn">Continue with Google</button>
          <button className="facebook-btn">Continue with Facebook</button>
        </div>
        <p className="signin-link">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>

      <style>{`
        .signup-form {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
          max-width: 400px;
          width: 100%;
          margin: auto;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffb300;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .signup-form input {
          width: 100%;
          padding: 12px 16px;
          margin-bottom: 1rem;
          border: 2px solid #ffcc80;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.25);
          color: #333;
          font-size: 1rem;
          font-weight: 500;
          outline: none;
          transition: border 0.3s ease;
        }

        .signup-form input:focus {
          border-color: #ffb300;
        }

        .password-field {
          position: relative;
        }

        .toggle-visibility {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(to right, #ffb300, #ff9800);
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .submit-btn:hover {
          background: linear-gradient(to right, #ffa000, #ff5722);
        }

        .divider {
          text-align: center;
          margin: 1.5rem 0;
          color: #777;
          font-weight: 500;
        }

        .divider span {
          background: rgba(255, 255, 255, 0.2);
          padding: 0 10px;
          border-radius: 20px;
        }

        .social-buttons button {
          width: 100%;
          padding: 12px;
          margin-bottom: 1rem;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          font-size: 1rem;
          transition: transform 0.2s ease;
        }

        .social-buttons .google-btn {
          background-color: #ffffff;
          color: #333;
          border: 1px solid #ddd;
        }

        .social-buttons .facebook-btn {
          background-color: #4267B2;
          color: white;
        }

        .social-buttons button:hover {
          transform: translateY(-3px);
        }

        .signin-link {
          text-align: center;
          margin-top: 1rem;
          color: #444;
        }

        .signin-link a {
          color: #ff9800;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Login;

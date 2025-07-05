import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // Connect to backend API here (e.g., fetch / axios)
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex-column">
          <label htmlFor="email">Email</label>
        </div>
        <div className="inputForm">
          <input
            id="email"
            type="email"
            className="input"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex-column">
          <label htmlFor="password">Password</label>
        </div>
        <div className="inputForm">
          <input
            id="password"
            type="password"
            className="input"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex-row">
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <span className="span">Forgot password?</span>
        </div>

        <button className="button-submit" type="submit">
          Sign In
        </button>

        <p className="p">
          Don't have an account? <span className="span">Sign Up</span>
        </p>

        <p className="p line">Or With</p>

        <div className="flex-row">
          <button type="button" className="btn google">
            Google
          </button>
          <button type="button" className="btn facebook">
            Facebook
          </button>
          <button type="button" className="btn apple">
            Apple
          </button>
        </div>
      </form>
    </StyledWrapper>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; filter: blur(8px); transform: translateY(-20px); }
  to { opacity: 1; filter: blur(0); transform: translateY(0); }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f6fa;

  .form {
    animation: ${fadeIn} 0.8s ease-out;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: rgba(255, 255, 255, 0.85);
    padding: 35px;
    width: 400px;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    font-family: "Segoe UI", sans-serif;
  }

  .flex-column > label {
    color: #151717;
    font-weight: 600;
    font-size: 14px;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    transition: 0.2s ease-in-out;
  }

  .input {
    border: none;
    width: 100%;
    height: 100%;
    background: transparent;
    font-size: 14px;
  }

  .input:focus {
    outline: none;
  }

  .inputForm:focus-within {
    border-color: #2d79f3;
  }

  .flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex-row label {
    font-size: 14px;
  }

  .span {
    color: #2d79f3;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
  }

  .button-submit {
    background-color: #151717;
    color: #fff;
    border: none;
    border-radius: 10px;
    height: 50px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .button-submit:hover {
    background-color: #2d2e2e;
  }

  .p {
    text-align: center;
    font-size: 14px;
    color: #333;
  }

  .btn {
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: 1px solid #ededef;
    background-color: #fff;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .btn:hover {
    border-color: #2d79f3;
  }

  .google {
    background: #fff;
  }

  .facebook {
    background: #1877f2;
    color: #fff;
  }

  .apple {
    background: #000;
    color: #fff;
  }

  @media (max-width: 500px) {
    .form {
      width: 90%;
      padding: 25px;
    }
  }
`;

export default Login;

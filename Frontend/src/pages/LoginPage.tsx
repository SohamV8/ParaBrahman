import React from "react";
import Login from "../components/Global/Login";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="signup-page">
        <Login />
      </div>

      <style>{`
        /* Divine Background & Layout */
        .signup-page {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle at 40% 40%, rgba(255, 200, 0, 0.2), #fff8e1),
                      linear-gradient(135deg, rgba(255, 210, 0, 0.4), rgba(255, 255, 255, 0.9));
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }

        /* Glowing Orange Rays Effect (Optional, Very Modern) */
        .signup-page::before {
          content: "";
          position: absolute;
          top: -20%;
          left: -20%;
          width: 150%;
          height: 150%;
          background: radial-gradient(circle, rgba(255, 180, 0, 0.15) 0%, transparent 70%);
          filter: blur(120px);
          z-index: 0;
        }

      

        /* Inner Form Elements — You can style inside Login.tsx for detailed controls */
        .form-container input,
        .form-container button {
          font-family: inherit;
        }

        /* Add Glow Animation (Optional) */
        @keyframes glow {
          0% { box-shadow: 0 0 30px rgba(255, 200, 0, 0.3); }
          50% { box-shadow: 0 0 60px rgba(255, 150, 0, 0.6); }
          100% { box-shadow: 0 0 30px rgba(255, 200, 0, 0.3); }
        }
      `}</style>
    </>
  );
};

export default LoginPage;

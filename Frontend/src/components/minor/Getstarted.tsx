import React from "react";
import styled from "styled-components";

const Getstarted = () => {
  return (
    <StyledWrapper>
      <button>
        <div className="text">
          <span>Get</span>
          <span>Started</span>
        </div>
        <div className="clone">
          <span>Login</span>
        </div>
        <svg
          strokeWidth={2}
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    width: 140px;
    height: 56px;
    overflow: hidden;
    border: none;
    color: black;
    background: none;
    position: relative;
    padding-bottom: 2em;
    cursor: pointer;
  }

  button > div,
  button > svg {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
  }

  button:before {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: bottom right;
    background: currentColor;
    transition: transform 0.25s ease-out;
  }

  button:hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  button .clone > *,
  button .text > * {
    opacity: 1;
    font-size: 1.3rem;
    transition: 0.2s;
    margin-left: 4px;
  }

  button .clone > * {
    transform: translateY(60px);
  }

  button:hover .clone > * {
    opacity: 1;
    transform: translateY(0px);
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }

  button:hover .text > * {
    opacity: 1;
    transform: translateY(-60px);
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }

  button:hover .clone > :nth-child(1) {
    transition-delay: 0.15s;
  }

  button:hover .clone > :nth-child(2) {
    transition-delay: 0.2s;
  }

  button:hover .clone > :nth-child(3) {
    transition-delay: 0.25s;
  }

  button:hover .clone > :nth-child(4) {
    transition-delay: 0.3s;
  }
  /* icon style and hover */
  button svg {
    width: 20px;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(-50deg);
    transition: 0.2s ease-out;
  }

  button:hover svg {
    transform: translateY(-50%) rotate(-90deg);
  }
`;

export default Getstarted;

// pages/404.tsx

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const GoToHomeButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #2196f3;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: pink;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NotFoundIllustration = styled.img`
  width: 200px; /* Adjust the size as needed */
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-out;
`;

const Bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const AnimatedText = styled.h1`
  animation: ${Bounce} 1s ease infinite;
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
  
  <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="100"
        height="100"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0" />
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
        <g id="SVGRepo_iconCarrier">
          <circle cx="256" cy="256" r="224" fill="#f0f0f0" />
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                d="M231.4,364.4c4.7-3.5,10.6-5.6,17.2-5.6a36.06,36.06,0,0,1,36,36c0,18.2-14.8,32-32.4,32s-32.4-13.8-32.4-32v-2.4 c0-5.7,1.3-11.2,3.4-16.1-10.6,10.1-19.1,21.3-25,33.6Z"
                fill="#e53935"
              />
              <circle cx="256" cy="328" r="40" fill="#394240" />
              <path
                d="M256,192c-31.8,0-58.2,22.9-63.9,53.2a7.39,7.39,0,0,1-7.5,6.8H69.4a7.41,7.41,0,0,1-6.9-10C78.4,135.3,164.5,80,256,80s177.6,55.3,193.5,162a7.41,7.41,0,0,1-6.9,10H327.4a7.39,7.39,0,0,1-7.5-6.8C314.2,214.9,287.8,192,256,192Z"
                fill="#394240"
              />
            </g>
          </g>
        </g>
      </svg>
      <AnimatedText>404 - Not Found</AnimatedText>
      <p>Sorry, the page you are looking for does not exist.</p>

      <Link href="/">
        <GoToHomeButton>Go to Home</GoToHomeButton>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

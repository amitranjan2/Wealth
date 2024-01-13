import React from "react";

const Loader: React.FC = () => (
   <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <svg
        className="animate-spin h-16 w-16 mx-auto mb-4 text-gray-500"  // Adjusted mb-8 to mb-4
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      <div
      className="sparkling-background"
      style={{
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        minWidth: '200px',
        background: 'linear-gradient(45deg, #f06, #9f6, #06f, #f06)',
        backgroundSize: '400% 400%',
        animation: 'sparkling 5s infinite',
      }}
    >
      <p style={{ margin: 0 }}>
        Loading! Please wait.
      </p>
      <style>
        {`
          @keyframes sparkling {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
    </div>
    </div>
  </div>
);

export default Loader;

import { FaLock, FaUser } from "react-icons/fa";
import React, { useState, FormEvent } from "react";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { middleware } from "../../middleware";
import { useEffect } from "react";

import { useRouter } from "next/router";
import { apiMiddleware } from '../apiMiddleware';
export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  console.log("Response Status: jwtToken", Cookies.get("jwtToken"));

  useEffect(() => {
    // Check if the user has the necessary cookie (e.g., jwtToken)
    const jwtToken = Cookies.get('jwtToken');

    if (jwtToken) {
      toast.success("Successfully redirected!", {
        position: "top-right",
        autoClose: 1000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // If the cookie is present, redirect to the home page
      router.push('/');
    }


  }, []);


  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const expirationInMinutes = 2;
    const expirationDate = new Date(
      new Date().getTime() + expirationInMinutes * 60 * 1000
    );

    // Make a POST request to the login API
    try {

      if (!navigator.onLine) {
        // Handle case where there is no internet connection
        console.error("No internet connection");
        toast.error("No internet connection. Please check your network.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }


      const controller = new AbortController();
      const signal = controller.signal;
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, 5000);
      const response = await fetch(
        "http://localhost:8002/app-auth/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password }),
          signal,
 
        }
      );
      clearTimeout(timeoutId); 

      if (response.ok) {
        // Handle successful login, e.g., redirect to a dashboard page
        // const responseData = await response.json();
        console.log("Login successful:");
        console.log("Response Status:", response.status);

        const jwtToken = await response.text();
        console.log("Response Body:", jwtToken);

        Cookies.set("jwtToken", jwtToken, { expires: 30 });

        toast.success(
          "Login successful! We are redirecting you to home page!",
          { position: toast.POSITION.TOP_RIGHT }
        );

        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        // Handle login failure, e.g., display an error message
        // console.error("Login failed");
        // toast.error("Login failed. Please check your credentials.", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        if (!response.ok) {
          // Handle non-successful HTTP response status
          console.error("HTTP error:", response.status);
          
          if (response.status === 503) {
            // Handle backend service unavailable (503 Service Unavailable)
            toast.error("Backend service is currently unavailable. Please try again later.", {
              position: toast.POSITION.TOP_RIGHT,
            });
          } else {
            // Handle other HTTP errors
            toast.error(`HTTP error: ${response.status}. Please try again.`, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
          return;
        }


      }
    } catch (error: any) {
      console.error("Error during login:", error);

   
    
      // Check if the error is due to an abort (timeout)
      if (error.name === "AbortError") {
        toast.error("Request timed out. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else if (error.message === "Backend service is down") {
        // Handle the custom error indicating that the backend service is down
        toast.error("Backend service is currently down. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Login failed. Please check your credentials.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="bg-gradient-to-r block h-screen items-center justify-center p-4 md:flex">
        <div className="bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-1g shadow-lg text-gray-600 w-full md:flex-row shadow-10xl rounded-2xl">
          <div className="backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2 bg-green-500 shadow-10xl  ">
            <div className="backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Hello, Friend!</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10">
                Fill up personal information and start journey with us.
              </p>
              <a
                href="#"
                className="border-2 border-white text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
              >
                Join us
              </a>
            </div>
          </div>
          <div className="bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2">
            {/* welcome */}
            <div className="flex flex-col items-center">
              <h1 className="font-medium text-green-400 text-xl">
                Welcome back
              </h1>
              <p>Login to your account</p>
            </div>
            {/* inputs */}
            <form
              className="flex flex-col items-center space-y-4"
              onSubmit={handleLogin}
            >
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  <FaUser />
                </span>
                <input
                  className="border border-gray-300 outline-none placeholder-gray-400 p1-9 pr-4 py-1  px-10 rounded-md transition focus:ring-2 focus:ring-green-300"
                  placeholder="mobile..."
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  <FaLock />
                </span>
                <input
                  className="border border-gray-300 outline-none placeholder-gray-400 p1-9 pr-4 py-1  px-10 rounded-md transition focus:ring-2 focus:ring-green-300"
                  placeholder="password..."
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="bg-green-400 font-medium inline-flex items-center  px-3 py-1 rounded-md shadow-md text-white transition hover:bg-white hover:text-green-500"
                type="submit"
              >
                <FaUser className="mr-2" />
                Login now
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

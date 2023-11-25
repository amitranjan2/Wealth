import React from 'react'

export default function login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
   <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
<div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl ">
<div className="w-3/5 p-5">
<p>Sign in Section</p>
</div>
{/* Sign in section */}
<div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
<h2 className="text-2xl font-bold mb-2">Hello, Friend!</h2>
<div className="border-2 w-10 border-white inline-block mb-2"></div>
<p className="mb-10">
Fill up personal information and start journey with us.
</p>
<a
href="#"
className="border-2 border-white text-yellow-300 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">
Sign Up
</a>
</div>
{/* Sign up section */}
</div>
</main>
    </div>
  )




  
}

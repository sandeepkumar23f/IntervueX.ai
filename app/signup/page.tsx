"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SignUp() {
  return (
    <>
      <div className="fixed top-0 w-full h-16 flex items-center px-8 bg-white shadow-sm text-black font-bold text-2xl z-50">
        InterveuX.ai
      </div>
      <div className="min-h-[calc(100vh-64px)] pt-16 flex items-center justify-center bg-linear-to-r from-blue-500 to-gray-500">
        <div className="w-full max-w-md bg-white text-black rounded-lg p-8 shadow-md">
          <h1 className="text-2xl text-center font-bold">SignUp to InterveuX.ai</h1>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full h-10 border-2 border-black rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
            name="email"
            placeholder="Enter your email"
            className="h-10 w-full border-2 border-black text-black rounded-md"
            type="email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input 
            name="password"
            className="h-10 w-full border-2 border-black text-black rounded-md"
            placeholder="Enter Password"
            type="password"
             />
          </div>
          <div className="text-right mb-4">
            <button className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </button>
          </div>
          <button className="w-full h-10 bg-blue-600 rounded-md text-black ">
            SignIn
          </button>
           <p className="text-center text-gray-400 my-4">OR</p>

          <button className="w-full h-10 flex items-center justify-center gap-2 bg-amber-300 rounded-md border mb-3 hover:bg-amber-400 transition">
            <FontAwesomeIcon icon={faGoogle} className="h-4 w-4" />
            Login with Google
          </button>

          <button className="w-full h-10 flex items-center justify-center gap-2 bg-gray-300 rounded-md border hover:bg-gray-400 transition">
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
            Login with GitHub
          </button>

          <div className="flex items-center justify-center mt-4">
            <Link href="/signup" className="text-blue-500 hover:underline">
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

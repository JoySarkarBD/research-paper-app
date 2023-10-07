'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import google from './../../public/google.svg';

export default function Login() {
  return (
    <section className="py-35 h-screen flex items-center justify-center bg-gradient-to-r opacity from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-[400px] min-w-[300] w-full m-auto bg-[linear-gradient(_to_right,#0f1b2b,#101e2f,#112132,#112536,#122839,#112738,#112737,#102636,#0e2131,#0c1d2b,#0a1826,#071321_)] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.37)] backdrop-blur-sm border border-solid border-[rgba(255,255,255,0.18)] p-5 rounded-md">
          <h5 className="my-5 text-xl font-semibold text-white">Sign In</h5>
          <form action="">
            {/* Email or username input */}
            <div className="mb-4">
              <label htmlFor="emailOrUser" className="text-white">
                Email or Username
              </label>
              <input
                id="emailOrUser"
                type="text"
                className="w-full mt-3 py-2 px-3 h-10 bg-transparent bg-slate-900 rounded outline-none border border-gray-800 focus:ring-0 text-white"
                placeholder="Enter your email or username "
              />
            </div>
            {/* Password input */}
            <div className="mb-4">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full mt-3 py-2 px-3 h-10 bg-transparent bg-slate-900 rounded outline-none border border-gray-800 focus:ring-0 text-white"
                placeholder="Enter your password"
              />
            </div>
            {/* Remember me and forget password */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center mb-0">
                <input
                  type="checkbox"
                  value=""
                  id="rememberMe"
                  className="rounded border-gray-800 focus:ring focus:ring-offset-0 focus:ring-opacity-50 mr-2"
                />
                <label htmlFor="rememberMe" className="text-slate-400">
                  Remember Me
                </label>
              </div>
              <p className="text-slate-400 m-0">
                <a href="#" className="text-[16px]">
                  Forgot Password?
                </a>
              </p>
            </div>
            {/* Submit Button or Sign in with google */}
            <div className="row items-center justify-between mb-4">
              <input
                className="grid-cols-12 w-full searchButton bg-[#4C6699] text-white font-semibold py-3 px-6 rounded-lg cursor-pointer"
                type="submit"
                value="Sign In"
              />
              <p className="grid-cols-12 text-center w-full text-xl font-semibold text-white my-3">
                OR
              </p>
              <button
                className="grid-cols-12 w-full searchButton bg-[#fff] text- font-semibold py-[10px] px-6 rounded-lg flex items-center justify-center gap-2"
                onClick={() => signIn('google')}
              >
                <Image width={30} height={30} src={google} alt={google} />
                <p className="m-0 text-[16px] text-slate-700">
                  Sign in with google
                </p>
              </button>
            </div>
            {/* Don't have an account? SignUP */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center mb-0">
                <p className="text-slate-400 m-0">
                  <Link href="/register" className="text-[16px]">
                    Don't have an account? Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

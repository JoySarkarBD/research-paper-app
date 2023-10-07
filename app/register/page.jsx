'use client';

import Image from 'next/image';
import Link from 'next/link';
import google from './../../public/google.svg';

export default function Register() {
  return (
    <section className="py-35 h-full flex items-center justify-center bg-gradient-to-r opacity from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-[400px] min-w-[300] w-full m-auto bg-[linear-gradient(_to_right,#0f1b2b,#101e2f,#112132,#112536,#122839,#112738,#112737,#102636,#0e2131,#0c1d2b,#0a1826,#071321_)] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.37)] backdrop-blur-sm border border-solid border-[rgba(255,255,255,0.18)] p-5 rounded-md">
          <h5 className="my-5 text-xl font-semibold text-white">Sign Up</h5>
          <form action="">
            {/* first row */}
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="w-full">
                {/* First Name input */}
                <div className="mb-4">
                  <label htmlFor="firstName" className="text-white">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full mt-3 py-2 px-3 h-10 bg-transparent bg-slate-900 rounded outline-none border border-gray-800 focus:ring-0 text-white"
                    placeholder="Enter your first name "
                  />
                </div>
              </div>
              <div className="w-full">
                {/* Last Name input */}
                <div className="mb-4">
                  <label htmlFor="lastName" className="text-white">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full mt-3 py-2 px-3 h-10 bg-transparent bg-slate-900 rounded outline-none border border-gray-800 focus:ring-0 text-white"
                    placeholder="Enter your last name "
                  />
                </div>
              </div>
            </div>
            {/* second row */}
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="w-full">
                {/* Email input */}
                <div className="mb-4">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full mt-3 py-2 px-3 h-10 bg-transparent bg-slate-900 rounded outline-none border border-gray-800 focus:ring-0 text-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="w-full">
                {/* User Name input */}
                <div className="mb-4">
                  <label htmlFor="userName" className="text-white">
                    User Name
                  </label>
                  <input
                    id="userName"
                    type="text"
                    className="w-full mt-3 py-2 px-3 h-10 bg-transparent bg-slate-900 rounded outline-none border border-gray-800 focus:ring-0 text-white"
                    placeholder="Enter your username"
                  />
                </div>
              </div>
            </div>
            {/* third row */}
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="w-full">
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
              </div>
              <div className="w-full">
                {/* Confirm Password input */}
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="text-white">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    className="w-full mt-3 py-2 px-3 h-10 bg-transparent bg-slate-900 rounded outline-none border border-gray-800 focus:ring-0 text-white"
                    placeholder="Re-enter your password"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button or Sign in with google */}
            <div className="row items-center justify-between mb-4">
              <input
                className="grid-cols-12 w-full searchButton bg-[#4C6699] text-white font-semibold py-3 px-6 rounded-lg cursor-pointer"
                type="submit"
                value="Sign Up"
              />
              <p className="grid-cols-12 text-center w-full text-xl font-semibold text-white my-3">
                OR
              </p>
              <button className="grid-cols-12 w-full searchButton bg-[#fff] text- font-semibold py-[10px] px-6 rounded-lg flex items-center justify-center gap-2">
                <Image width={30} height={30} src={google} alt={google} />
                <p className="m-0 text-[16px] text-slate-700">
                  Sign Up with google
                </p>
              </button>
            </div>
            {/* Already have an account, then Sign In */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center mb-0">
                <p className="text-slate-400 m-0">
                  <Link href="/login" className="text-[16px]">
                    Already have an account? Sign In
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

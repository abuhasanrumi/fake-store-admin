import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div class="bg-black h-screen flex flex-col justify-center items-center">
      <div class="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
        <h2 class="text-3xl font-semibold mb-6">Login</h2>
        <form class="space-y-4">
          <div>
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="phone"
            >
              Phone Number
            </label>
            <input
              class="w-full border border-gray-300 p-2 rounded-md h-[50px]"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="w-full border border-gray-300 p-2 rounded-md h-[50px]"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <p className="text-red-600">No credentials required, hit login</p>
          <Link
            href="/dashboard"
            class="w-full flex items-center justify-center text-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 h-[50px]"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

Login.noLayout = true;

export default Login;

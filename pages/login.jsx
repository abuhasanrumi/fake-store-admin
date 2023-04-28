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
              class="w-full border border-gray-300 p-2 rounded-md"
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
              class="w-full border border-gray-300 p-2 rounded-md"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <Link
            href="/dashboard"
            class="w-full block text-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900"
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

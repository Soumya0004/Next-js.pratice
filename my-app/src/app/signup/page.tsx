"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onsignUp = async () => {};
  return (
    <div className="flex flex-col items-center justify-center h-screen text-amber-100 bg-zinc-600">
      <hr />
      <div className="py-5 w-1/2 flex flex-col items-center justify-center  bg-zinc-400">
      <h1 className="text-2xl font-bold text-amber-100 text-center ">Signup</h1>
        <label
          htmlFor="name"
          className=" block mb-2 text-sm font-medium text-amber-100 "
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="mb-4 p-2 rounded bg-gray-800 text-amber-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Name"
        />
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-amber-100"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="mb-4 p-2 rounded bg-gray-800 text-amber-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-amber-100"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="mb-4 p-2 rounded bg-gray-800 text-amber-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />

      </div>
        <button onClick={onsignUp} className="bg-amber-500 text-white px-4 py-2 rounded-md">Signup</button>
    </div>
  );
}

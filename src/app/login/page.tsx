"use client";
import Link from "next/link";
import { useState } from "react";
import { UserProp } from "../models/UserProp.model";

export default function Login() {
  const [data, setData] = useState<UserProp>({
    username: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      localStorage.setItem("token", result.token);
      window.location.href = "/";
    } else {
      const error = await response.json();
      setError(error.message || "An error occurred");
    }
  };
  return (
    <form
      className="flex flex-col items-center justify-center h-screen"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="text"
        placeholder="Username"
        className="border border-gray-300 p-2 mb-4"
        name="username"
        value={data.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 p-2 mb-4"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">
        Login
      </button>
      <p className="mt-4">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </p>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}

"use client";

import { useState } from "react";

export default function HomePage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const formData = new FormData(e.currentTarget);
    const endpoint = mode === "login" ? "/api/login" : "/api/register";

    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });

    let data: any = null;

    try {
      data = await res.json();
    } catch {
      // API returned no JSON body (this is OK)
    }

    if (!res.ok) {
      setError(data?.error || "Something went wrong");
      return;
    }

    if (mode === "login") {
      window.location.href = "/dashboard";
    } else {
      setSuccess("Account created successfully. Please login.");
      setMode("login");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-96 p-6 bg-white rounded shadow space-y-4">
        <h1 className="text-3xl font-bold text-center">
          {mode === "login" ? "Login" : "Create Account"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full border p-2 rounded"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full border p-2 rounded"
          />

          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          {success && (
            <p className="text-green-600 text-sm text-center">{success}</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            {mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          {mode === "login" ? (
            <>
              Don’t have an account?
              <button
                type="button"
                onClick={() => setMode("register")}
                className="ml-1 text-black font-medium"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?
              <button
                type="button"
                onClick={() => setMode("login")}
                className="ml-1 text-black font-medium"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </main>
  );
}



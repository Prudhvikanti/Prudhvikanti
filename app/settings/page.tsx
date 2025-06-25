"use client";

import { useClerk } from "@clerk/nextjs";

export default function Settings() {
  const { signOut } = useClerk();

  return (
    <section className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <p className="text-lg leading-relaxed mb-4">
        Manage your preferences and account settings here.
      </p>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Sign Out
      </button>
    </section>
  );
}

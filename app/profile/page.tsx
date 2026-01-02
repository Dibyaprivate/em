import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const userId = await getSession();
  if (!userId) redirect("/");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="bg-white p-6 rounded shadow max-w-xl">
        <div className="space-y-4">
          <div>
            <label className="text-gray-500 text-sm">Email</label>
            <input
              disabled
              value="user@email.com"
              className="w-full border p-2 rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">Name</label>
            <input
              placeholder="Your Name"
              className="w-full border p-2 rounded"
            />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}


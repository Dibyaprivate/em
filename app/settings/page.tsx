import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const userId = await getSession();
  if (!userId) redirect("/");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white p-6 rounded shadow max-w-xl space-y-4">
        <div className="flex items-center justify-between">
          <span>Email Notifications</span>
          <input type="checkbox" className="scale-125" />
        </div>

        <div className="flex items-center justify-between">
          <span>SMS Alerts</span>
          <input type="checkbox" className="scale-125" />
        </div>

        <div className="flex items-center justify-between">
          <span>Dark Mode</span>
          <input type="checkbox" className="scale-125" />
        </div>
      </div>
    </div>
  );
}


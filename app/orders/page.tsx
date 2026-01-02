import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function OrdersPage() {
  const userId = await getSession();
  if (!userId) redirect("/");

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
        <p className="text-gray-500 mt-1">
          View and track your recent orders
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-6 rounded shadow hover:shadow-md transition">
          <p className="font-semibold">Order #1234</p>
          <p className="text-gray-500">Status: Delivered</p>
          <p className="text-gray-500">Amount: ₹1,299</p>
        </div>

        <div className="bg-white p-6 rounded shadow hover:shadow-md transition">
          <p className="font-semibold">Order #1235</p>
          <p className="text-gray-500">Status: In Transit</p>
          <p className="text-gray-500">Amount: ₹899</p>
        </div>
      </div>
    </div>
  );
}


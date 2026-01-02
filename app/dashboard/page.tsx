import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const userId = await getSession();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <header className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold tracking-wide">
          ShopKart
        </h1>

        <form action="/api/logout" method="post">
          <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-blue-100 transition">
            Logout
          </button>
        </form>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg min-h-screen p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-6">
            My Account
          </h2>

          <nav className="space-y-2 text-gray-600">
            <Link
              href="/dashboard"
              className="block px-3 py-2 rounded bg-blue-50 text-blue-600 font-semibold"
            >
              Dashboard
            </Link>

            <Link
              href="/orders"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              My Orders
            </Link>

            <Link
              href="/profile"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Profile
            </Link>

            <Link
              href="/settings"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-8">
          {/* Welcome */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome back
            </h2>
            <p className="text-gray-500 mt-1">
              Manage your orders, wishlist, and account details.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <p className="text-gray-500 text-sm">Total Orders</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-2">
                12
              </h3>
            </div>

            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <p className="text-gray-500 text-sm">Cart Items</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-2">
                3
              </h3>
            </div>

            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <p className="text-gray-500 text-sm">Wishlist</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-2">
                5
              </h3>
            </div>

            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <p className="text-gray-500 text-sm">Wallet Balance</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-2">
                ₹1,250
              </h3>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Activity
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Order #1234 placed successfully</li>
              <li>Product added to cart</li>
              <li>Item added to wishlist</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}


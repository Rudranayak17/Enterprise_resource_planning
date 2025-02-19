// pages/404.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bm-gray">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-bm-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-bm-blue text-white font-medium rounded hover:bg-bm-dark transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

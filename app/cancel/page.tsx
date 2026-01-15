'use client';

import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="text-yellow-500 mb-4">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">Your payment was cancelled. No charges were made to your account.</p>
        <div className="space-y-4">
          <Link href="/" className="block px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
            Return to Store
          </Link>
          <p className="text-sm text-gray-500">
            Need help?{' '}
            <a href="mailto:support@example.com" className="text-blue-600 hover:text-blue-800">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!sessionId) {
      setMessage('No session ID found. Please check your purchase.');
      return;
    }

    // In a real app, verify the payment with your backend
    const verifyPayment = async () => {
      try {
        // Here you would typically verify the payment with your backend
        // For now, we'll just set a success message
        setMessage('Payment successful! Your PDF is ready to download.');

        // Auto-download the PDF after a short delay
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = '/downloads/modeling-guide.pdf';
          link.download = 'The-Complete-Modeling-Guide.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 1500);
      } catch (error) {
        console.error('Error verifying payment:', error);
        setMessage('There was an error processing your download. Please contact support.');
      }
    };

    verifyPayment();
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="text-green-500 mb-4">
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">{message || 'Thank you for your purchase.'}</p>

        {message && (
          <div className="mb-6">
            <a
              href="/sample.pdf" // Replace with actual PDF URL
              download
              className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              Download PDF
            </a>
          </div>
        )}

        <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <div className="animate-pulse">
              <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}

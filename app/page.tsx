'use client';

import { useState } from 'react';
import { FiShoppingCart, FiClock, FiCheckCircle, FiAward, FiUsers, FiCamera, FiSmile } from 'react-icons/fi';

const product = {
  id: 1,
  name: 'The Complete Modeling Guide',
  subtitle: 'Your Path to Becoming a Professional Model',
  description:
    "Unlock the secrets of the modeling industry with our comprehensive guide. Whether you're just starting or looking to take your career to the next level, this guide provides everything you need to succeed in the competitive world of modeling.",
  price: 9.99,
  features: [
    'Finding the right agency for you',
    'Building a winning portfolio',
    'Mastering runway walks',
    'Posing techniques for photoshoots',
    'Understanding contracts and negotiations',
    'Maintaining your look and health',
    'Social media and personal branding',
    'Working with photographers and clients',
  ],
  image: '/images/modeling-guide.jpg',
  file: '/the-complete-modeling-guide.pdf',
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = async () => {
    try {
      setIsLoading(true);

      // Call your API route to create a checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: 1 }), // Using 1 as a default product ID
      });

      const { url } = await response.json();

      if (!url) {
        throw new Error('Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (error) {
      console.error('Payment error:', error);
      // Show error message to user
      setShowSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="product-card">
          <div
            className="product-image"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6 text-center">
              <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
              <p className="text-xl">{product.subtitle}</p>
            </div>
          </div>

          <div className="product-details">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">{product.description}</p>
            <div className="whats-included">
              <h3>What's Included in This Guide:</h3>
              <div className="features-grid">
                {product.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <FiCheckCircle className="h-5 w-5" />
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="price-section">
              <p className="text-gray-600 font-medium">One-time purchase</p>
              <p className="price-tag">{product.price.toFixed(2)}€</p>
              <p className="price-note">Instant access to the complete guide in PDF format</p>

              <button id="get-access-button" onClick={handlePayment} disabled={isLoading} className="btn-primary">
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <FiShoppingCart className="mr-2" />
                    Get Instant Access
                  </span>
                )}
              </button>

              <div className="flex items-center justify-center space-x-2 text-gray-600 mt-4">
                <FiClock className="h-5 w-5" />
                <span className="text-sm">Instant digital download</span>
              </div>
            </div>
          </div>
        </div>

        {/* Success message */}
        {showSuccess && (
          <div className="success-message">
            <FiCheckCircle className="h-6 w-6 text-white" />
            <div className="success-content">
              <h3>Thank you for your purchase!</h3>
              <p>Your guide is being prepared for download. Check your email for access.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

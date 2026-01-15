export const metadata = {
  title: 'About - Sekker Model Group',
  description: 'Learn more about Sekker Model Group and our mission.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">About Us</h1>
        <div className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          <p className="mb-4">
            Welcome to Sekker Model Group, where we bring your modeling career to new heights. Our mission is to provide
            top-tier resources and guidance for aspiring and professional models.
          </p>
          <p className="mb-4">
            Founded with a passion for the industry, we've helped hundreds of models achieve their dreams through our
            comprehensive guides, expert advice, and professional network.
          </p>
          <p>
            Whether you're just starting out or looking to take your career to the next level, Sekker Model Group is
            here to support you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}

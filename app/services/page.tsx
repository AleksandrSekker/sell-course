const services = [
  {
    title: 'Modeling Guides',
    description:
      'Comprehensive guides covering all aspects of the modeling industry, from getting started to advanced techniques.',
    icon: '👩‍💼',
  },
  {
    title: 'Portfolio Development',
    description: 'Professional portfolio building services to showcase your best work and attract top agencies.',
    icon: '📸',
  },
  {
    title: 'Career Coaching',
    description: 'One-on-one coaching sessions with industry professionals to help you navigate your modeling career.',
    icon: '🎯',
  },
  {
    title: 'Agency Connections',
    description: 'Exclusive access to our network of trusted modeling agencies and industry contacts.',
    icon: '🤝',
  },
];

export const metadata = {
  title: 'Services - Sekker Model Group',
  description: 'Explore our range of professional modeling services and resources.',
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">Our Services</h1>
        <p className="mt-4 text-xl text-gray-600">Professional resources and support for your modeling career</p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Contact Us - Sekker Model Group',
  description: 'Get in touch with us for any inquiries or support.',
};

const ContactCard = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">{icon}</div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="mt-2 space-y-1 text-gray-600">{children}</div>
      </div>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600">We'd love to hear from you. Here's how you can reach us.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <ContactCard
          title="Email Us"
          icon={
            <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          }
        >
          <p>info@sekkermodelgroup.com</p>
          <p>support@sekkermodelgroup.com</p>
          <p className="text-sm text-gray-500 mt-2">We typically respond within 24 hours</p>
        </ContactCard>

        <ContactCard
          title="Call Us"
          icon={
            <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          }
        >
          <p>+1 (555) 123-4567</p>
          <p>+1 (555) 987-6543</p>
          <p className="text-sm text-gray-500 mt-2">Monday - Friday, 9am - 5pm EST</p>
        </ContactCard>

        <ContactCard
          title="Visit Us"
          icon={
            <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        >
          <p>123 Model Street</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
          <p className="text-sm text-gray-500 mt-2">By appointment only</p>
        </ContactCard>
      </div>

      <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect With Us</h2>
          <p className="text-gray-600 mb-8">
            Follow us on social media to stay updated with our latest news and offers.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://t.me/your_telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition-colors duration-200"
              aria-label="Telegram"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.57-1.38-.93-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.07 0-.1-.01-.03-.04-.04-.07-.03-.3.03-5.04 3.34-7.14 4.7-.67.43-1.28.64-1.82.63-.6-.01-1.75-.34-2.6-.62-1.06-.36-1.9-.55-1.83-1.16.03-.27.4-.55 1.1-.85 4.5-1.96 7.5-3.3 9-3.98 4.18-1.9 5.05-2.23 5.62-2.36.13-.03.25-.04.36-.04.26 0 .65.05.77.35.14.35.05.9-.09 1.38z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-500 transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.207 1.505.344 1.858.182.466.399.8.749 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.399 1.15-.749.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.976-.207-1.505-.344-1.858a3.1 3.1 0 00-.748-1.15 3.1 3.1 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

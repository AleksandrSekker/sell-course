import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg overflow-hidden">
                <img src="/logo.png" alt="Sekker Model Group" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                Sekker Model Group
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Premium modeling resources and guides to help you succeed in the industry.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Navigation</h3>
            <div className="mt-4 space-y-2">
              <Link href="/" className="text-gray-500 hover:text-indigo-600 text-sm block">
                Home
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-indigo-600 text-sm block">
                About Us
              </Link>
              <Link href="/services" className="text-gray-500 hover:text-indigo-600 text-sm block">
                Services
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-indigo-600 text-sm block">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://t.me/your_telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500"
              >
                <span className="sr-only">Telegram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.57-1.38-.93-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.07 0-.1-.01-.03-.04-.04-.07-.03-.3.03-5.04 3.34-7.14 4.7-.67.43-1.28.64-1.82.63-.6-.01-1.75-.34-2.6-.62-1.06-.36-1.9-.55-1.83-1.16.03-.27.4-.55 1.1-.85 4.5-1.96 7.5-3.3 9-3.98 4.18-1.9 5.05-2.23 5.62-2.36.13-.03.25-.04.36-.04.26 0 .65.05.77.35.14.35.05.9-.09 1.38z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.207 1.505.344 1.858.182.466.399.8.749 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.399 1.15-.749.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.976-.207-1.505-.344-1.858a3.1 3.1 0 00-.748-1.15 3.1 3.1 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-8">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Sekker Model Group. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// IMPORTS NEEDED:
// NO IMPORTS - Uses only HTML and Tailwind

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Carbon project handbook</a></li>
              <li><a href="#" className="hover:text-white">Indian carbon market paper</a></li>
              <li><a href="#" className="hover:text-white">Blue carbon report</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Carbon eligibility checker</a></li>
              <li><a href="#" className="hover:text-white">Carbon price tracker</a></li>
              <li><a href="#" className="hover:text-white">Risk assessment alpha</a></li>
              <li><a href="#" className="hover:text-white">Project portfolio</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Stay up to date with everything Neufin.</h3>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-400 text-center">
          © 2024 Neufo Technologies Private Limited
        </div>
      </div>
    </footer>
  );
}
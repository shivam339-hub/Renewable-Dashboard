// IMPORTS NEEDED:
// npm install lucide-react (if not already installed)
// NO OTHER IMPORTS - Uses only HTML and Tailwind
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Image src="/images/logo.png" alt="Neufin Logo" width={100} height={40} />
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Carbon</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Market access</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Publications</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Careers</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
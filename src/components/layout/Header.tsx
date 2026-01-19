import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-[24px] h-[64px] flex items-center justify-between">
        
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Neufin Logo"
          width={90}
          height={32}
          className="object-contain"
        />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-[24px] text-[14px] text-gray-600">
          {[
            'Home',
            'About',
            'Carbon',
            'Market access',
            'Publications',
            'Careers',
          ].map((item) => (
            <a
              key={item}
              href="#"
              className={
                item === 'Carbon'
                  ? 'text-[#0B5ED7] font-medium'
                  : 'hover:text-[#0B5ED7]'
              }
            >
              {item}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

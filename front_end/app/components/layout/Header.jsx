'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../../../constants/site-config';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'News', href: '/news' },
  { name: 'Articles', href: '/articles' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-sm border-b border-base-300">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* mobile menu button */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            {isMenuOpen && (
              <ul className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={clsx(
                        'nav-link',
                        pathname === item.href && 'active'
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Logo */}
          <Link href="/home" className="btn btn-ghost text-lg font-bold text-primary">
            {siteConfig.name}
          </Link>
        </div>

        {/* desktop navbar */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={clsx(
                    'nav-link px-4 py-2 rounded-lg',
                    pathname === item.href && 'active bg-primary/10'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end inline">
          <form onSubmit={handleSearch} className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search news..."
                className="input input-bordered input-sm w-full max-w-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-square btn-sm btn-primary">
                <Search size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

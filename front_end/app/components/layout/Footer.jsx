import Link from 'next/link';
import { siteConfig } from '../../../constants/site-config';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* company_Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{siteConfig.name}</h3>
            <p className="text-sm opacity-80">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              <Link href={siteConfig.social.twitter} className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href={siteConfig.social.facebook} className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href={siteConfig.social.instagram} className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href={siteConfig.social.linkedin} className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/home" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-primary transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/politics" className="hover:text-primary transition-colors">
                  Politics
                </Link>
              </li>
              <li>
                <Link href="/categories/technology" className="hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/categories/sports" className="hover:text-primary transition-colors">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/categories/business" className="hover:text-primary transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/categories/entertainment" className="hover:text-primary transition-colors">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-content/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Sales", href: "/sales" },
  { name: "Lettings", href: "/lettings" },
  { name: "Register", href: "/register" },
  { name: "Valuation", href: "/valuation" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 bottom-0 w-80 bg-bm-blue animate-slide-in-right">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={onClose}
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0L0 9H4V16H12V9H16L10 0Z"
                    fill="#1e7ce8"
                  />
                </svg>
              </div>
              <span className="text-white font-bold">BM ESTATES</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-white hover:bg-white/10 rounded transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 py-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block px-6 py-4 text-white text-lg font-medium hover:bg-white/10 transition-colors border-b border-white/10"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-white/20">
            <a
              href="tel:01162709060"
              className="block text-center text-white font-medium"
            >
              0116 270 9060
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

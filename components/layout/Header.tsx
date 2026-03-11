"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Phone, Mail, Twitter, Facebook, Instagram } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white shadow-lg" : "bg-white"
        )}
        style={{ height: "auto", minHeight: "80px" }}
      >
        <div className="container-fluid header-contain" style={{ padding: "15px 30px" }}>
          <Link href="/" title="Home page of BM Estates" className="flex items-center gap-3">
            <img 
              src="https://www.bmestates.com/content/images/logo.png" 
              alt="BM Estates" 
              title="BM Estates" 
              className="site-logo"
              style={{ height: "50px", width: "auto" }}
            />
          </Link>
          
          <button
            className="nav-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "5px"
            }}
          >
            <span style={{ width: "25px", height: "3px", backgroundColor: "#333", display: "block" }}></span>
            <span style={{ width: "25px", height: "3px", backgroundColor: "#333", display: "block" }}></span>
            <span style={{ width: "25px", height: "3px", backgroundColor: "#333", display: "block" }}></span>
            <span style={{ width: "25px", height: "3px", backgroundColor: "#333", display: "block" }}></span>
          </button>

          <Link href="#" className="search-link" style={{ color: "#1e7ce8", fontSize: "18px" }}>
            <Search size={18} />
          </Link>
          
          <Link href="tel:01162731414" className="account-link" style={{ color: "#1e7ce8", fontSize: "18px" }}>
            <Phone size={18} />
          </Link>
        </div>
        
        <nav className="site-nav hidden lg:block" style={{ backgroundColor: "#f5f5f5", borderTop: "1px solid #e0e0e0" }}>
          <ul className="nav-menu flex justify-center gap-8 py-3" style={{ listStyle: "none", margin: 0, padding: "0 20px" }}>
            <li className="menu-item">
              <Link href="/" className="nav-link text-sm font-medium text-gray-700 hover:text-[#1e7ce8]">Home</Link>
            </li>
            <li className="menu-item relative group">
              <span className="nav-link text-sm font-medium text-gray-700 hover:text-[#1e7ce8] cursor-pointer">Sales</span>
              <ul className="submenu absolute top-full left-0 bg-white shadow-lg py-2 min-w-[200px] hidden group-hover:block" style={{ listStyle: "none" }}>
                <li><Link href="/property-search" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Property Search</Link></li>
                <li><Link href="/property-for-sale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Property For Sale</Link></li>
                <li><Link href="/sold-properties" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sold Properties</Link></li>
                <li><Link href="/buying-process" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Buying Process</Link></li>
                <li><Link href="/selling-process" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Selling Process</Link></li>
              </ul>
            </li>
            <li className="menu-item relative group">
              <span className="nav-link text-sm font-medium text-gray-700 hover:text-[#1e7ce8] cursor-pointer">Lettings</span>
              <ul className="submenu absolute top-full left-0 bg-white shadow-lg py-2 min-w-[200px] hidden group-hover:block" style={{ listStyle: "none" }}>
                <li><Link href="/rental-property-search" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Property Search</Link></li>
                <li><Link href="/property-to-rent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Property To Rent</Link></li>
                <li><Link href="/let-property" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Let Property</Link></li>
                <li><Link href="/renting-process" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Renting Process</Link></li>
                <li><Link href="/landlord-process" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Landlord Process</Link></li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="/register" className="nav-link text-sm font-medium text-gray-700 hover:text-[#1e7ce8]">Register</Link>
            </li>
            <li className="menu-item">
              <Link href="/valuation" className="nav-link text-sm font-medium text-gray-700 hover:text-[#1e7ce8]">Valuation</Link>
            </li>
            <li className="menu-item relative group">
              <span className="nav-link text-sm font-medium text-gray-700 hover:text-[#1e7ce8] cursor-pointer">About Us</span>
              <ul className="submenu absolute top-full left-0 bg-white shadow-lg py-2 min-w-[200px] hidden group-hover:block" style={{ listStyle: "none" }}>
                <li><Link href="/aboutus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About BM Estates</Link></li>
                <li><Link href="/meet-the-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Meet The Team</Link></li>
                <li><Link href="/testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Testimonials</Link></li>
                <li><Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Services</Link></li>
                <li><Link href="/news" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">News</Link></li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="/contact" className="nav-link text-sm font-medium text-gray-700 hover:text-[#1e7ce8]">Contact Us</Link>
            </li>
          </ul>
          
          <div className="contact-information-contain flex justify-end gap-6 px-8 py-2" style={{ borderTop: "1px solid #e0e0e0" }}>
            <ul className="contact-information flex gap-6" style={{ listStyle: "none", margin: 0 }}>
              <li>
                <a href="tel:01162731414" className="flex items-center gap-2 text-gray-600 hover:text-[#1e7ce8]">
                  <Phone size={14} />
                  <span className="text-sm">0116 273 1414</span>
                </a>
              </li>
              <li>
                <a href="mailto:enquiries@bmestates.com" className="flex items-center gap-2 text-gray-600 hover:text-[#1e7ce8]">
                  <Mail size={14} />
                  <span className="text-sm">enquiries@bmestates.com</span>
                </a>
              </li>
            </ul>
            <ul className="social-list flex gap-4" style={{ listStyle: "none", margin: 0 }}>
              <li>
                <a href="https://twitter.com/bmestates" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1e7ce8]">
                  <Twitter size={16} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/bmestates" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1e7ce8]">
                  <Facebook size={16} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/bmestates/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1e7ce8]">
                  <Instagram size={16} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

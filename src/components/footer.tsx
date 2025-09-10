"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { ChevronUp, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-background text-foreground border-t border-border relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-110",
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info & Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-primary">
              About Alpha Healthcare
            </h3>
            <p className="text-sm text-muted-foreground">
              We're committed to providing natural, sustainable health and
              beauty products that support your wellbeing journey.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-primary">
              Quick Links
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "About Us",
                "Our Ingredients",
                "Sustainability",
                "Blog",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-primary">
              Customer Care
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "FAQs",
                "Shipping & Returns",
                "Privacy Policy",
                "Terms & Conditions",
                "Track Your Order",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & App Downloads */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-primary">
              Contact & Apps
            </h3>
            <ul className="space-y-3 text-muted-foreground mb-4">
              <li>123 Wellness Way, Natural City</li>
              <li>(123) 456-7890</li>
              <li>info@alphahealthcare.com</li>
              <li>Mon-Fri: 9am-5pm</li>
            </ul>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                className="flex-1 justify-center h-auto p-3 rounded-lg border-border hover:bg-accent hover:text-accent-foreground"
              >
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <span className="text-sm font-bold">App Store</span>
                </div>
              </Button>
              <Button
                variant="outline"
                className="flex-1 justify-center h-auto p-3 rounded-lg border-border hover:bg-accent hover:text-accent-foreground"
              >
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright & App Buttons */}
        <div className="pt-6 border-t border-border text-center text-muted-foreground text-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <p>© 2025 Alpha Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

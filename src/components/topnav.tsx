import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function TopNav() {
  const navItems = [
    {
      label: "Shop",
      subItems: ["All Products", "New Arrivals", "Bestsellers", "Supplements", "Essential Oils", "Skincare", "Wellness Bundles"],
    },
    {
      label: "Wellness Topics",
      subItems: ["Immune Support", "Stress & Sleep", "Energy & Vitality", "Digestive Health", "Beauty & Anti-Aging", "Fitness & Performance"],
    },
    {
      label: "Health Resources",
      subItems: ["Wellness Assessment", "Health Library", "Research & Science", "Meet Our Experts", "Virtual Consultations"],
    },
    {
      label: "Brands",
      subItems: ["Alpha Essentials", "Nature's Purest", "Vitality Plus", "Harmony Botanicals", "All Brands A-Z"],
    },
    { label: "Our Story" },
    { label: "Blog" },
    { label: "Offers" },
  ];

  return (
    <nav className="mt-4 hidden md:block">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-10">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link href="#" className="font-medium text-text-dark hover:text-primary-green transition-colors duration-300 flex items-center">
                {item.label}
                {item.subItems && <ChevronDown className="ml-1 h-3 w-3" />}
              </Link>
              {item.subItems && (
                <div className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl py-4 invisible group-hover:visible z-10 animate-fade-in">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href="#"
                      className="block px-6 py-3 hover:bg-light-green transition-colors duration-300"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
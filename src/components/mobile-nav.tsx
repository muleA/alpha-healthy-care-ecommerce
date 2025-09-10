"use client";

import { Home, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { JSX } from "react";

interface NavItem {
  icon: JSX.Element;
  label: string;
  active?: boolean;
  badge?: number;
  href?: string;
}

export default function MobileNav() {
  const navItems: NavItem[] = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Home",
      active: true,
      href: "/",
    },
    { icon: <Search className="h-5 w-5" />, label: "Search", href: "/search" },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      label: "Cart",
      badge: 3,
      href: "/cart",
    },
    { icon: <User className="h-5 w-5" />, label: "Account", href: "/account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-around py-3 z-50 md:hidden shadow-lg">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href || "#"}
          className={cn(
            "flex flex-col items-center justify-center relative text-xs transition-colors duration-200",
            item.active
              ? "text-primary hover:text-primary/90"
              : "text-muted-foreground hover:text-primary/80"
          )}
        >
          <div className="relative flex items-center justify-center">
            {item.icon}
            {item.badge && (
              <span className="absolute -top-1 -right-1 bg-accent-terracotta text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-md">
                {item.badge}
              </span>
            )}
          </div>
          <span className="mt-1">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

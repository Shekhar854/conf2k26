"use client"
import Link from "next/link";
import React,{ useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";



export default function PurpleNavigation({ items = [] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="bg-orange-600 text-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="hidden lg:flex items-center justify-center flex-wrap">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setOpenDropdown(index)}
              onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={buttonVariants({
                  variant: "ghost",
                  className: "text-white hover:bg-purple-600 text-sm no-default-hover-elevate no-default-active-elevate",
                })}
                data-testid={`link-nav-${index}`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3 h-3 ml-1" />}
              </Link>
              {item.hasDropdown && openDropdown === index && (
                <div className="absolute top-full left-0 bg-purple-700 rounded-md shadow-lg">
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-purple-600"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="lg:hidden flex items-center justify-between py-3">
          <span className="font-semibold">Menu</span>
          <Button
            variant="ghost"
            size="icon"
            className="text-white no-default-hover-elevate"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-nav"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={buttonVariants({
                  variant: "ghost",
                  className: "w-full justify-start text-white hover:bg-purple-600 no-default-hover-elevate",
                })}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-nav-${index}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
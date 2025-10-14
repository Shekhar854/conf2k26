
"use client"
import { Link } from "wouter";
import React,{ useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";



export default function PurpleNavigation({ items = [] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="hidden lg:flex items-center justify-center gap-1 py-2">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <Button
                variant="ghost"
                className="text-white hover:bg-purple-600 text-sm no-default-hover-elevate no-default-active-elevate"
                data-testid={`link-nav-${index}`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3 h-3 ml-1" />}
              </Button>
            </Link>
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
              <Link key={index} href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-purple-600 no-default-hover-elevate"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${index}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
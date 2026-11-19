"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/principles", label: "Principles" },
  { href: "/community", label: "Get involved" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link
          className="brand-link"
          href="/"
          aria-label="Polityra home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/Polityra-logo.png"
            alt="Polityra"
            width={300}
            height={75}
            priority
          />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              aria-current={
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "page"
                  : undefined
              }
              className={
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "is-current"
                  : undefined
              }
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={`nav-contact${pathname === "/contact" ? " is-current" : ""}`}
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact <span aria-hidden="true">
              <MessageCircle color="white" size={12} />
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="main-site-header">
        <Link href="/" aria-label="GYU home" onClick={closeMenu}>
          <Image
            src="/logo/GYU_logo_master.png"
            alt="GYU"
            width={90}
            height={45}
            priority
            className="main-site-logo"
          />
        </Link>

        <nav className="desktop-navigation">
          <Link href="/#collection">COLLECTION</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>

          <a
            href="https://www.instagram.com/gyu.studio_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </header>

      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav>
          <Link href="/#collection" onClick={closeMenu}>
            COLLECTION
          </Link>

          <Link href="/about" onClick={closeMenu}>
            ABOUT
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            CONTACT
          </Link>

          <a
            href="https://www.instagram.com/gyu.studio_/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            INSTAGRAM ↗
          </a>
        </nav>

        <p>Live your flow. Move lightly.</p>
      </div>
    </>
  );
}
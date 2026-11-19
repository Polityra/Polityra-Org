import Image from "next/image";
import Link from "next/link";
import { io } from "next/cache";
import { Suspense } from "react";

async function Copyright() {
  await io();
  return <span>© {new Date().getFullYear()} Polityra</span>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="Polityra home">
            <Image
              src="/images/Polityra-logo.png"
              alt="Polityra"
              width={260}
              height={65}
            />
          </Link>
          <p>Open technology. Built for everyone.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/about">About Polityra</Link>
          <Link href="/principles">Our principles</Link>
          <Link href="/community">Get involved</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <h2>Projects</h2>
          <Link href="/projects">All projects</Link>
          <Link href="/projects/open-polityra">Open Polityra</Link>
          <Link href="/projects/polityra-cms">Polityra CMS</Link>
          <a
            href="https://github.com/Polityra"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub organization
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <Suspense fallback={<span>© Polityra</span>}>
          <Copyright />
        </Suspense>
        <span>Open source, made together.</span>
      </div>
    </footer>
  );
}

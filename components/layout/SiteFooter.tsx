import Image from "next/image";
import Link from "next/link";
import { footer, site } from "@/lib/site";
import { Container } from "./Container";

/**
 * Site footer.
 *
 * Server component. The copyright year is read with `new Date()` during
 * render, which stays static because the page is statically prerendered. It
 * does not need client-side JavaScript, and no hydration boundary is added.
 * If the year ever needs to stay fresh at runtime, prefer revalidating the
 * page over shipping the whole footer to the client.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 bg-navy-950 text-navy-200">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label={`${site.name} home`}
              className="inline-flex items-center gap-2.5"
            >
              <Image
                src={site.icon}
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-lg"
              />
              <span className="text-base font-semibold tracking-tight text-white">
                {site.name}
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-base leading-relaxed text-pretty text-navy-300">
              {footer.description}
            </p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-pill bg-navy-900 px-3 py-1.5 text-xs font-medium text-navy-200 ring-1 ring-navy-800">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-navy-400"
              />
              {site.status}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="lg:col-span-4">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-navy-400 uppercase">
              Navigate
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-1">
              {footer.navigation.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal" className="lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-navy-400 uppercase">
              Legal
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-1">
              {footer.legal.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-navy-800 pt-8">
          <p className="text-sm text-navy-400">
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      /* Generous vertical padding keeps the tap target comfortable on
          mobile without a fixed height. */
      className="inline-flex py-1 text-base text-navy-300 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}
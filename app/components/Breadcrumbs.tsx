"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function formatSegment(segment: string) {
  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container breadcrumbs-inner">
        <Link href="/" className="crumb">
          Home
        </Link>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <span key={href} className="crumb-group">
              <span className="crumb-separator">/</span>
              {isLast ? (
                <span className="crumb current" aria-current="page">
                  {formatSegment(segment)}
                </span>
              ) : (
                <Link href={href} className="crumb">
                  {formatSegment(segment)}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

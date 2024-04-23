"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import styles from "./ActiveLink.module.css";

type Props = {
  children: ReactNode;
  href: string;
  target?: string;
  handleClick?: () => void;
};

export default function ActiveLink({
  children,
  href,
  target,
  handleClick,
}: Props) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      target={target}
      className={`${isActive ? styles.active : styles.notActive}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

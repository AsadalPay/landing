"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import menu from "/public/icons/menu.svg";
import x from "/public/icons/x.svg";
import Logo from "/public/logo.svg";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const pathname = usePathname();

  console.log(pathname);
  const handleHamburgerClick = () => {
    setNavIsVisible((prev) => !prev);
  };

  const handleLinkClick = () => {
    setNavIsVisible(false);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__mobile}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src={Logo} alt="Asadal logo" width={100} height={60} />
          </div>
        </Link>

        <span onClick={handleHamburgerClick} className="ghost-button">
          <Image
            src={navIsVisible ? x : menu}
            alt="menu icon"
            width={33}
            height={33}
          />
        </span>
      </div>

      <nav className={styles.nav} data-is-open={navIsVisible}>
        <ul className={styles.nav__list}>
          <li>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/docs" ? `${styles.active}` : ""
              }`}
              href="/docs"
              onClick={handleLinkClick}
            >
              Схема
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/docs/start" ? `${styles.active}` : ""
              }`}
              href="/docs/start"
              onClick={handleLinkClick}
            >
              Старт
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/docs/oct" ? `${styles.active}` : ""
              }`}
              href="/docs/oct"
              onClick={handleLinkClick}
            >
              OCT
            </Link>
          </li>

          <li>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/docs/google-pay" ? `${styles.active}` : ""
              }`}
              href="/docs/google-pay"
              onClick={handleLinkClick}
            >
              Google Pay
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

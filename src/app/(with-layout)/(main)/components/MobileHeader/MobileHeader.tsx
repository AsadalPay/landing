"use client";

import Image from "next/image";
import styles from "./MobileHeader.module.css";
import menu from "../../../../../../public/icons/menu.svg";
import x from "../../../../../../public/icons/x.svg";
import { useState } from "react";
import ActiveLink from "@/components/shared/ActiveLink";
import useAppContext from "@/context/useAppContext";

export default function MobileHeader() {
  const { setContactsModalIsOpen } = useAppContext();
  const [navIsVisible, setNavIsVisible] = useState(false);

  const handleHamburgerClick = () => {
    setNavIsVisible((prev) => !prev);
  };

  const handleButtonClick = () => {
    setContactsModalIsOpen(true);
  };

  const handleLinkClick = () => {
    setNavIsVisible(false);
  };

  return (
    <div className={styles.mobileWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <ActiveLink href="/">
            <div className={styles.logo}>
              <Image
                src="./logo.svg"
                alt="Asadal logo"
                width={100}
                height={60}
              />
            </div>
          </ActiveLink>
          <button onClick={handleHamburgerClick} className="ghost-button">
            <Image
              src={navIsVisible ? x : menu}
              alt="menu icon"
              width={33}
              height={33}
            />
          </button>
        </header>
      </div>

      <div className={styles.mobileHeader} data-is-open={navIsVisible}>
        <nav className={styles.nav}>
          <ul className={styles.navListWrapper}>
            <li>
              <ActiveLink href="/#facts" handleClick={handleLinkClick}>
                О компании
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/#features" handleClick={handleLinkClick}>
                Возможности
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/docs" handleClick={handleLinkClick}>
                Разработчикам
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/connect" handleClick={handleLinkClick}>
                Подключение
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/how" handleClick={handleLinkClick}>
                Как это работает?
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/faq" handleClick={handleLinkClick}>
                FAQ
              </ActiveLink>
            </li>
          </ul>
        </nav>
        <button
          className={`ghost-button ${styles.contactsButton}`}
          onClick={handleButtonClick}
        >
          Контакты
        </button>
      </div>
    </div>
  );
}

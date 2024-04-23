"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import ActiveLink from "@/components/shared/ActiveLink";
import useAppContext from "@/context/useAppContext";

function Header() {
  const { setContactsModalIsOpen } = useAppContext();

  const handleButtonClick = () => {
    setContactsModalIsOpen(true);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ActiveLink href="/">
          <div className={styles.logo}>
            <Image
              src="./logo.svg"
              alt="Asadal logo"
              width={100}
              height={70}
              style={{
                width: "100%",
              }}
              className={styles.logoImage}
            />
          </div>
        </ActiveLink>
        <nav className={styles.nav}>
          <ul className={styles.listWrapper}>
            <li>
              <ActiveLink href="/#facts">О компании</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/#features">Возможности</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/docs" target="_blank">
                Разработчикам
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/connect">Подключение</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/demo" target="_blank">
                Как это работает?
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/faq">FAQ</ActiveLink>
            </li>
            <li>
              <button
                className={styles.contactsButton}
                onClick={handleButtonClick}
              >
                Контакты
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;

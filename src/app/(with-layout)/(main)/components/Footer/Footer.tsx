import React from "react";
import Image from "next/image";
import logo from "../../../../../../public/logo.svg";
import pciLogo from "../../../../../../public/pci-logo.svg";
import styles from "./Footer.module.css";
import ActiveLink from "@/components/shared/ActiveLink";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <ActiveLink href="/privacy-policy" target="_blank">
              Политика конфиденциальности
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/public-offer" target="_blank">
              Публичная оферта
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/rules" target="_blank">
              Правила
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/contract-offer" target="_blank">
              Договор оферты плательщикам
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/accession-form" target="_blank">
              Анкета о присоединении
            </ActiveLink>
          </li>
        </ul>
      </nav>
      <div className={styles.logoArea}>
        <div className={styles.logo}>
          <Image src={logo} alt="Asadalpay logo" width={300} height={79} />
        </div>
        <div className={styles.logo}>
          <Image src={pciLogo} alt="PCI logo" width={300} height={79} />
        </div>
      </div>
      <address className={styles.address}>
        <p> <a href="tel:+77066069906">Тел: +7 706 606 99 06</a> | <a href="mailto:sales@asadalpay.com">E-mail: sales@asadalpay.com</a> </p>
      </address>
      <div className={styles.register}>
        <p>
          Учетная регистрация Национального банка Республики Казахстан
          No02-22-127 от 13 июля 2022 года
        </p>
      </div>
    </footer>
  );
}

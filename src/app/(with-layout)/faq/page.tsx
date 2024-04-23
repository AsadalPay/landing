"use client";

import styles from "./page.module.css";
import AccordionPanel from "./components/AccordionPanel/AccordionPanel";
import ContactUs from "./components/ContactUs/ContactUs";

export default function FAQ() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Часто задаваемые вопросы</h1>
      <AccordionPanel />
      <ContactUs />
    </main>
  );
}

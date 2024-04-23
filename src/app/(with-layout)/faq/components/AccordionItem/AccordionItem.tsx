import { useState, ReactNode } from "react";
import styles from "./AccordionItem.module.css";
import AccordionSign from "../AccordionSign/AccordionSign";

type Props = {
  title: string;
  content: (string | { title: string; list: string[] })[];
  isOpen: boolean;
  onClick: () => void;
};

export default function AccordionItem({
  title,
  content,
  isOpen,
  onClick,
}: Props) {
  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordionTitle} onClick={onClick}>
        <p className={styles.accordionTitleText}>{title}</p>
        <AccordionSign accordionIsOpen={isOpen} />
      </div>
      <div
        className={`${isOpen ? styles.visible : styles.hidden} ${
          styles.accordionContent
        }`}
      >
        <div className={styles.accordionContentDescription}>
          <ul className={styles.list}>
            {content.map((item, index) => (
              <AccordionItemContentListItem key={index} listItem={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function AccordionItemContentListItem({
  listItem,
}: {
  listItem: string | { title: string; list: string[] };
}) {
  if (typeof listItem === "string")
    return (
      <li>
        <p>{listItem}</p>
      </li>
    );

  return (
    <div className={styles.contentListItem}>
      <h4>{listItem.title}</h4>
      <ul className={styles.list}>
        {listItem.list.map((item) => (
          <li key={item}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

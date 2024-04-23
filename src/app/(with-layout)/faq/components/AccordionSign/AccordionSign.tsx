"use client";

import styles from "./AccordionSign.module.css";

export default function AccordionSign({
  accordionIsOpen,
}: {
  accordionIsOpen: boolean;
}) {
  return (
    <svg
      className={`${styles.svgContainer} ${accordionIsOpen && styles.rotate}`}
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`${styles.rectOne}`}
      />
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`${styles.rectTwo} `}
      />
    </svg>
  );
}

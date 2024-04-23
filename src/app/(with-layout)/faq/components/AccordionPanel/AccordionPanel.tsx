import { useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import faqData from "@/constant/faq";
import styles from "./AccordionPanel.module.css";

export default function AccordionPanel() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.q}
          content={item.a}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}

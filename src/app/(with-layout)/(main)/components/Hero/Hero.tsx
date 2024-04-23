"use client";

import styles from "./Hero.module.css";
import Button from "@/components/shared/Button";
import useAppContext from "@/context/useAppContext";
import Image from "next/image";
import heroImage from "/public/hero.webp";

function Hero() {
  const { setRequestModalIsOpen } = useAppContext();

  const handleButtonClick = () => {
    setRequestModalIsOpen(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image src={heroImage} alt="hero image" fill />
          </div>
        </div>
        <div className={styles.heroText}>
          <p className={styles.text}>
            Платежи без усилий - возможности без ограничений
          </p>
          <h2 className={styles.headerText}>ASADAL PAY</h2>
          <p className={styles.text}>
            Легкое и надежное решение приема оплат для Вашего бизнеса
          </p>
          <div className={styles.heroCTA}>
            <Button onClick={handleButtonClick}>Оставить заявку</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

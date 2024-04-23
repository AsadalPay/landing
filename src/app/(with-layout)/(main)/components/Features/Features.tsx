import React from "react";
import easy_connection from "/public/easy_connection.png";
import fast_withdrawal from "/public/fast_withdrawal.png";
import no_problem from "/public/no_problem.png";
import Image from "next/image";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.feature}>
          <div className={styles.iconContainer}>
            <div className={styles.imageContainer}>
              <Image src={easy_connection} fill alt="easy connection icon" />
            </div>
          </div>
          <div className={styles.featureText}>
            <h2>Легкое подключение</h2>
            <p>
              Предоставляете документы и наша команда подключит вас к приему
              платежей
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.iconContainer}>
            <div className={styles.imageContainer}>
              <Image src={fast_withdrawal} fill alt="fast withdrawal icon" />
            </div>
          </div>
          <div className={styles.featureText}>
            <h2>Быстрый вывод</h2>
            <p>Выводите деньги себе на счет уже на следующий день</p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.iconContainer}>
            <div className={styles.imageContainer}>
              <Image src={no_problem} fill alt="no problem icon" />
            </div>
          </div>
          <div className={styles.featureText}>
            <h2>Никаких заморочек</h2>
            <p>
              Ваш клиент не столкнется с проблемами оплаты благодаря нашей
              интеллектуальной маршрутизации
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

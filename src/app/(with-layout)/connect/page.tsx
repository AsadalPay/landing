"use client";

import styles from "./page.module.css";
import sign from "../../../../public/icons/sign.svg";
import growth from "../../../../public/icons/growth.svg";
import connect from "../../../../public/icons/connect.svg";
import lawyerCheck from "../../../../public/icons/lawyer_check.svg";
import postAdd from "../../../../public/icons/post_add.svg";
import arrowDown from "../../../../public/icons/south.svg";

import Image from "next/image";
import ContactUsConnect from "./components/ContactUs/ContactUs";

export default function Connect() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Шаги подключения</h1>
      <section>
        <div className={styles.step}>
          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>
              <Image src={postAdd} fill alt="add icon" />
            </div>
          </div>
          <div className={styles.descriptionWrapper}>
            <h2>Ваша заявка</h2>
            <p>Заполняете анкету на нашем сайте</p>
          </div>
        </div>

        <div className={styles.arrowContainer}>
          <div className={styles.arrowWrapper}>
            <Image src={arrowDown} fill alt="add icon" />
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>
              <Image src={lawyerCheck} fill alt="add icon" />
            </div>
          </div>
          <div className={styles.descriptionWrapper}>
            <h2>Проверка</h2>
            <p>Отправляете документы и наш юрист проверяет их</p>
          </div>
        </div>

        <div className={styles.arrowContainer}>
          <div className={styles.arrowWrapper}>
            <Image src={arrowDown} fill alt="add icon" />
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>
              <Image src={sign} fill alt="add icon" />
            </div>
          </div>
          <div className={styles.descriptionWrapper}>
            <h2>Подписание договора</h2>
            <p>Подписываете с нами договор</p>
          </div>
        </div>

        <div className={styles.arrowContainer}>
          <div className={styles.arrowWrapper}>
            <Image src={arrowDown} fill alt="add icon" />
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>
              <Image src={connect} fill alt="add icon" />
            </div>
          </div>
          <div className={styles.descriptionWrapper}>
            <h2>Техническое подключение</h2>
            <p>
              Получаете консультацию об интеграции системы оплаты на ваш сайт
            </p>
          </div>
        </div>

        <div className={styles.arrowContainer}>
          <div className={styles.arrowWrapper}>
            <Image src={arrowDown} fill alt="add icon" />
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>
              <Image src={growth} fill alt="add icon" />
            </div>
          </div>
          <div className={styles.descriptionWrapper}>
            <h2>Рост ваших продаж </h2>
            <p>Наслаждайтесь ростом продаж и развитием бизнеса</p>
          </div>
        </div>

        <ContactUsConnect />
      </section>
    </main>
  );
}
